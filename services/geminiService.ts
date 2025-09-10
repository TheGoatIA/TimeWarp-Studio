import { GoogleGenAI, Modality, GenerateContentResponse, Type } from '@google/genai';
import type { Era, TransformationOptions, Language } from '../types';
import { logger } from '../utils/logger';

// FIX: Initialize the Gemini AI client.
// Per guidelines, API key must be from process.env.API_KEY.
// This is assumed to be populated by the build process and is not exposed in frontend code.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

/**
 * Helper function to extract base64 data from a data URL.
 * @param dataUrl The data URL (e.g., "data:image/png;base64,iVBORw0KGgo...")
 * @returns The base64 encoded string.
 */
const getBase64 = (dataUrl: string): string => {
    const parts = dataUrl.split(',');
    if (parts.length !== 2 || !parts[1]) {
        logger.error('GET_BASE64_ERROR', 'Invalid data URL format.', { dataUrl: dataUrl.substring(0, 50) });
        throw new Error("Invalid data URL format");
    }
    return parts[1];
};

/**
 * Helper function to find and extract the first image from a Gemini response.
 * @param response The GenerateContentResponse from the Gemini API.
 * @returns A data URL string for the image, or null if not found.
 */
const extractImageFromResponse = (response: GenerateContentResponse): string | null => {
    // FIX: Correctly extract image data from the response.
    // The response can contain multiple parts, we need to find the one with inlineData.
    for (const candidate of response.candidates || []) {
        for (const part of candidate.content.parts || []) {
            if (part.inlineData?.data) {
                return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            }
        }
    }
    return null;
};

/**
 * Internal helper to perform a single image generation call to the Gemini API.
 */
const generateEraImage = async (
    base64Image: string,
    mimeType: string,
    prompt: string
): Promise<string | null> => {
    const imagePart = {
        inlineData: {
            data: base64Image,
            mimeType: mimeType,
        },
    };
    const textPart = { text: prompt };

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image-preview',
        contents: [{ parts: [imagePart, textPart] }],
        config: {
            responseModalities: [Modality.IMAGE, Modality.TEXT],
        },
    });

    return extractImageFromResponse(response);
};


/**
 * Transforms an image into a new style based on a historical/fantasy era.
 * Includes an intelligent retry mechanism to improve reliability.
 * @param originalImage The base64 data URL of the source image.
 * @param originalImageMimeType The MIME type of the source image.
 * @param era The selected era for transformation.
 * @param options Additional transformation options.
 * @param language The selected language for prompt generation.
 * @param sessionId A unique identifier for this transformation session.
 * @returns A promise that resolves to the base64 data URL of the new image, or null on failure.
 */
export const transformImage = async (
    originalImage: string,
    originalImageMimeType: string,
    era: Era,
    options: TransformationOptions,
    language: Language,
    sessionId: string
): Promise<string | null> => {
    try {
        const base64Data = getBase64(originalImage);
        const allStyles = era.styles[language];
        const primaryStyle = options.style;

        const buildPrompt = (style: string): string => {
            return `Transform the person in the provided image to fit the ${era.name[language]} era (${era.period[language]}). Style: ${style}. Artistic style: ${options.artisticStyle}. Environment: ${options.environment}. Photographic filter: ${options.filter}. Context: ${era.description[language]}. Ensure the person's face is clearly visible and recognizable. The output must be only the image, with no text or borders.`;
        };

        // --- First Attempt ---
        const primaryPrompt = buildPrompt(primaryStyle);
        let imageUrl = await generateEraImage(base64Data, originalImageMimeType, primaryPrompt);
        
        if (imageUrl) {
            logger.info('GEMINI_TRANSFORM_SUCCESS', 'Image transformed successfully on first attempt.', { era: era.id, style: primaryStyle, sessionId });
            return imageUrl;
        }

        // --- Retry Logic ---
        logger.warn('GEMINI_TRANSFORM_NO_IMAGE_RETRY', 'First attempt returned no image. Retrying with a fallback style.', { era: era.id, style: primaryStyle, sessionId });

        // Find a different style to use for the retry attempt.
        const fallbackStyle = allStyles.find(s => s !== primaryStyle) || 'a different artistic interpretation';
        
        const fallbackPrompt = buildPrompt(fallbackStyle);
        imageUrl = await generateEraImage(base64Data, originalImageMimeType, fallbackPrompt);

        if (imageUrl) {
            logger.info('GEMINI_TRANSFORM_SUCCESS_RETRY', 'Image transformed successfully on retry.', { era: era.id, style: fallbackStyle, sessionId });
            return imageUrl;
        }
        
        // If both attempts fail, log it and return null.
        logger.warn('GEMINI_TRANSFORM_NO_IMAGE_FINAL', 'All transformation attempts failed to return an image.', { era: era.id, sessionId });
        return null;

    } catch (error) {
        logger.error('GEMINI_TRANSFORM_ERROR', 'An unrecoverable error occurred during the image transformation process.', { error, sessionId });
        console.error('Gemini transformImage error:', error);
        return null;
    }
};

/**
 * Edits an image based on a text prompt.
 * @param baseImage The base64 data URL of the image to edit.
 * @param mimeType The MIME type of the image.
 * @param prompt The user's text prompt for the edit.
 * @returns A promise that resolves to the base64 data URL of the edited image, or null on failure.
 */
export const editImage = async (
    baseImage: string,
    mimeType: string,
    prompt: string
): Promise<string | null> => {
    try {
        logger.info('GEMINI_EDIT_START', 'Starting magic edit.', { prompt });

        const imagePart = {
            inlineData: {
                data: getBase64(baseImage),
                mimeType: mimeType,
            },
        };

        const textPart = { text: prompt };

        // FIX: Use gemini-2.5-flash-image-preview for image editing as per guidelines.
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image-preview',
            contents: [{ parts: [imagePart, textPart] }],
            config: {
                responseModalities: [Modality.IMAGE, Modality.TEXT],
            },
        });

        const imageUrl = extractImageFromResponse(response);
        if (imageUrl) {
            logger.info('GEMINI_EDIT_SUCCESS', 'Image edited successfully.');
            return imageUrl;
        } else {
            logger.warn('GEMINI_EDIT_NO_IMAGE', 'Gemini edit response did not contain an image.', { response });
            return null;
        }
    } catch (error) {
        logger.error('GEMINI_EDIT_ERROR', 'Error calling Gemini API for editImage.', { error });
        console.error('Gemini editImage error:', error);
        return null;
    }
};


/**
 * Generates a creative story based on a transformed image.
 * @param base64Image The base64 data URL of the transformed image.
 * @param mimeType The MIME type of the image.
 * @param era The era context for the story.
 * @param language The language for the story.
 * @returns A promise that resolves to the generated story string, or null on failure.
 */
export const generateStory = async (
    base64Image: string,
    mimeType: string,
    era: Era,
    language: Language
): Promise<string | null> => {
    try {
        logger.info('GEMINI_STORY_START', 'Starting story generation.', { era: era.id });

        const imagePart = {
            inlineData: {
                data: getBase64(base64Image),
                mimeType: mimeType,
            },
        };

        const prompt = language === 'fr'
            ? `Tu es un conteur créatif. Regarde cette image d'une personne transformée pour correspondre à l'époque "${era.name.fr}". Écris une courte biographie créative d'environ 100 mots pour ce personnage, à la première personne. L'histoire doit être immersive et correspondre au style et à l'ambiance de l'image et de l'époque. La réponse doit être uniquement le texte de l'histoire.`
            : `You are a creative storyteller. Look at this image of a person transformed to fit the "${era.name.en}" era. Write a short, creative, first-person biography of about 100 words for this character. The story should be immersive and match the style and mood of the image and the era. The response must be only the story text.`;
        
        const textPart = { text: prompt };

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [{ parts: [imagePart, textPart] }],
        });
        
        const storyText = response.text;

        if (storyText) {
            logger.info('GEMINI_STORY_SUCCESS', 'Story generated successfully.');
            return storyText;
        } else {
            logger.warn('GEMINI_STORY_NO_TEXT', 'Gemini story response did not contain text.', { response });
            return null;
        }

    } catch (error) {
        logger.error('GEMINI_STORY_ERROR', 'Error calling Gemini API for generateStory.', { error });
        console.error('Gemini generateStory error:', error);
        return null;
    }
};

/**
 * Generates creative "Magic Edit" suggestions for a given era.
 * @param era The era to generate suggestions for.
 * @param language The language for the suggestions.
 * @returns A promise that resolves to an array of suggestion strings, or null on failure.
 */
export const getMagicEditSuggestions = async (
    era: Era,
    language: Language
): Promise<string[] | null> => {
    try {
        logger.info('GEMINI_SUGGESTIONS_START', 'Starting magic edit suggestion generation.', { era: era.id });
        
        const prompt = language === 'fr'
            ? `Pour un personnage de l'époque "${era.name.fr}", propose exactement 3 modifications visuelles amusantes et concises à ajouter à son portrait. Exemples : 'ajoute une couronne de laurier', 'donne-lui un monocle'.`
            : `For a character from the "${era.name.en}" era, suggest exactly 3 fun, concise visual modifications to add to their portrait. Examples: 'add a laurel wreath', 'give him a monocle'.`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [{ parts: [{ text: prompt }] }],
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        suggestions: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.STRING,
                                description: 'A single, short suggestion for a visual edit.'
                            }
                        }
                    },
                    required: ["suggestions"]
                },
            },
        });
        
        const jsonText = response.text.trim();
        if (jsonText) {
            const parsed = JSON.parse(jsonText);
            if (parsed.suggestions && Array.isArray(parsed.suggestions) && parsed.suggestions.length > 0) {
                 logger.info('GEMINI_SUGGESTIONS_SUCCESS', 'Successfully generated and parsed magic edit suggestions.');
                 return parsed.suggestions.slice(0, 3).map((s: any) => String(s).substring(0, 50));
            }
        }
        
        logger.warn('GEMINI_SUGGESTIONS_NO_DATA', 'Gemini response did not contain valid suggestion data.', { response: jsonText });
        return null;

    } catch (error) {
        logger.error('GEMINI_SUGGESTIONS_ERROR', 'Error calling Gemini API for getMagicEditSuggestions.', { error });
        console.error('Gemini getMagicEditSuggestions error:', error);
        return null;
    }
};
