import { GoogleGenAI, Modality, GenerateContentResponse } from '@google/genai';
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
 * Transforms an image into a new style based on a historical/fantasy era.
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
        const prompt = `Transform the person in the provided image to fit the ${era.name[language]} era (${era.period[language]}). The style should be: ${options.style}. The overall artistic style is: ${options.artisticStyle}. The environment should be an ${options.environment}. The final image should look like an ${options.filter}. Description of the era for context: ${era.description[language]}. Ensure the person's face is clearly visible and recognizable. The output must be only the image, with no text or borders.`;

        const imagePart = {
            inlineData: {
                data: getBase64(originalImage),
                mimeType: originalImageMimeType,
            },
        };

        const textPart = { text: prompt };

        // FIX: Use gemini-2.5-flash-image-preview for image editing/transformation as per guidelines.
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image-preview',
            contents: { parts: [imagePart, textPart] },
            config: {
                // Per guidelines, must include both Modality.IMAGE and Modality.TEXT
                responseModalities: [Modality.IMAGE, Modality.TEXT],
            },
        });
        
        const imageUrl = extractImageFromResponse(response);
        if (imageUrl) {
            logger.info('GEMINI_TRANSFORM_SUCCESS', 'Image transformed successfully.', { era: era.id, sessionId });
            return imageUrl;
        } else {
            logger.warn('GEMINI_TRANSFORM_NO_IMAGE', 'Gemini response did not contain an image.', { era: era.id, response, sessionId });
            return null;
        }
    } catch (error) {
        logger.error('GEMINI_TRANSFORM_ERROR', 'Error calling Gemini API for transformImage.', { error, sessionId });
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
            contents: { parts: [imagePart, textPart] },
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
 * Creates a short, animated video from a static image.
 * @param baseImage The base64 data URL of the image to animate.
 * @param mimeType The MIME type of the image.
 * @returns A promise that resolves to a local blob URL for the generated video, or null on failure.
 */
export const animateImage = async (
    baseImage: string,
    mimeType: string
): Promise<string | null> => {
    try {
        logger.info('GEMINI_ANIMATE_START', 'Starting image animation.');
        const prompt = "Animate this portrait as a short, looping video. Introduce subtle motion: gentle blinks, a slight smile, and soft, ambient movement in the background. Keep the style and character consistent with the image.";

        // FIX: Use veo-2.0-generate-001 for video generation with an image and prompt.
        let operation = await ai.models.generateVideos({
            model: 'veo-2.0-generate-001',
            prompt: prompt,
            image: {
                imageBytes: getBase64(baseImage),
                mimeType: mimeType,
            },
            config: {
                numberOfVideos: 1
            }
        });

        logger.info('GEMINI_ANIMATE_POLLING', 'Polling for video generation status.', { operationId: operation.name });
        // FIX: Implement polling for the long-running video generation operation.
        while (!operation.done) {
            // Wait for 10 seconds before polling again
            await new Promise(resolve => setTimeout(resolve, 10000));
            operation = await ai.operations.getVideosOperation({ operation: operation });
        }

        const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;

        if (downloadLink) {
            logger.info('GEMINI_ANIMATE_FETCHING', 'Video generated, fetching video data.', { downloadLink });
            // FIX: Append API key to fetch the video from the download link, as per guidelines.
            const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);

            if (!response.ok) {
                const errorText = await response.text();
                logger.error('GEMINI_ANIMATE_FETCH_ERROR', `Failed to fetch video: ${response.statusText}`, { errorText });
                throw new Error(`Failed to fetch video: ${response.statusText}`);
            }

            const blob = await response.blob();
            // FIX: Create a local object URL for the video to be used in the <video> src attribute.
            const videoUrl = URL.createObjectURL(blob);
            logger.info('GEMINI_ANIMATE_SUCCESS', 'Video successfully fetched and URL created.');
            return videoUrl;
        } else {
            logger.warn('GEMINI_ANIMATE_NO_LINK', 'Video generation operation completed but no download link was found.', { operation });
            return null;
        }
    } catch (error) {
        logger.error('GEMINI_ANIMATE_ERROR', 'Error calling Gemini API for animateImage.', { error });
        console.error('Gemini animateImage error:', error);
        return null;
    }
};