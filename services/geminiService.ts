import { GoogleGenAI, Modality, GenerateContentResponse } from "@google/genai";
import type { Era, TransformationOptions, Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const promptTranslations = {
  en: {
    title: "**TIMEWARP TRANSFORMATION REQUEST**",
    objective: "Transform the provided modern photograph into an authentic, photorealistic historical representation from the",
    coreObjective: "Maintain the subject's core facial features, bone structure, and essence while seamlessly integrating them into the target era. The result must look like a genuine photograph or high-quality portrait from that time.",
    historicalContext: "Historical Context",
    era: "Era",
    period: "Period",
    style: "Style",
    description: "Description",
    transformationParameters: "Transformation Parameters",
    clothing: "Accurately represent the attire of a",
    hairstyles: "Apply hairstyles, makeup (if any), and grooming standards appropriate for the era and social standing.",
    accessories: "Include era-specific accessories like jewelry, hats, or tools that fit the chosen style.",
    environment: "Place the subject in a contextually appropriate setting. This could be an interior, a landscape, or against a studio backdrop typical for portraits of the time. Environment should be:",
    photographicStyle: "Replicate the visual signature of the era's imaging technology. Apply a filter that mimics:",
    pose: "Subtly adjust the subject's pose and expression to align with the portrait conventions of the",
    strictInstructions: "Strict Instructions",
    instruction1: "DO NOT create a caricature. This is a photorealistic transformation, not a costume party photo.",
    instruction2: "PRESERVE IDENTITY. The transformed person must be clearly recognizable as the person in the original photo.",
    instruction3: "SEAMLESS INTEGRATION. The final image must be a cohesive whole, with no visual disconnects between the subject and their new historical context.",
    instruction4: "OUTPUT HIGH-DEFINITION. The resulting image should be of high quality and detail.",
  },
  fr: {
    title: "**DEMANDE DE TRANSFORMATION TEMPORELLE**",
    objective: "Transformer la photographie moderne fournie en une représentation historique authentique et photoréaliste de l'",
    coreObjective: "Maintenir les traits du visage, la structure osseuse et l'essence du sujet tout en l'intégrant de manière transparente à l'époque cible. Le résultat doit ressembler à une véritable photographie ou à un portrait de haute qualité de cette période.",
    historicalContext: "Contexte Historique",
    era: "Époque",
    period: "Période",
    style: "Style",
    description: "Description",
    transformationParameters: "Paramètres de Transformation",
    clothing: "Représenter avec précision la tenue d'un(e)",
    hairstyles: "Appliquer des coiffures, du maquillage (le cas échéant) et des normes de toilettage appropriées à l'époque et au statut social.",
    accessories: "Inclure des accessoires spécifiques à l'époque comme des bijoux, des chapeaux ou des outils qui correspondent au style choisi.",
    environment: "Placer le sujet dans un cadre contextuellement approprié. Cela pourrait être un intérieur, un paysage ou un fond de studio typique des portraits de l'époque. L'environnement doit être :",
    photographicStyle: "Répliquer la signature visuelle de la technologie d'imagerie de l'époque. Appliquer un filtre qui imite :",
    pose: "Ajuster subtilement la pose et l'expression du sujet pour s'aligner sur les conventions du portrait de l'",
    strictInstructions: "Instructions Strictes",
    instruction1: "NE PAS créer de caricature. Il s'agit d'une transformation photoréaliste, pas d'une photo de soirée déguisée.",
    instruction2: "PRÉSERVER L'IDENTITÉ. La personne transformée doit être clairement reconnaissable comme la personne sur la photo originale.",
    instruction3: "INTÉGRATION TRANSPARENTE. L'image finale doit être un tout cohérent, sans déconnexions visuelles entre le sujet et son nouveau contexte historique.",
    instruction4: "SORTIE HAUTE DÉFINITION. L'image résultante doit être de haute qualité et détaillée.",
  }
};


function generateTransformationPrompt(era: Era, options: TransformationOptions, language: Language): string {
  const t = promptTranslations[language];
  
  return `
    ${t.title}
    
    ${t.objective} ${era.name[language]} (${era.period[language]}).

    **${t.coreObjective.split(' ')[0]}** ${t.coreObjective.substring(t.coreObjective.indexOf(' ') + 1)}

    **${t.historicalContext}:**
    - **${t.era}:** ${era.name[language]}
    - **${t.period}:** ${era.period[language]}
    - **${t.description}:** ${era.description[language]}

    **${t.transformationParameters}:**
    - **${t.style}:** ${options.style}
    - **${t.clothing}:** ${t.clothing} ${options.style}.
    - **${t.hairstyles}:** ${t.hairstyles}
    - **${t.accessories}:** ${t.accessories}
    - **${t.environment}:** ${t.environment} ${options.environment}.
    - **${t.photographicStyle}:** ${t.photographicStyle} ${options.filter}.
    - **${t.pose}:** ${t.pose} ${era.name[language]} era.

    **${t.strictInstructions}:**
    1. ${t.instruction1}
    2. ${t.instruction2}
    3. ${t.instruction3}
    4. ${t.instruction4}
  `;
}

export async function transformImage(
  base64ImageData: string,
  mimeType: string,
  era: Era,
  options: TransformationOptions,
  language: Language
): Promise<string | null> {
  try {
    const prompt = generateTransformationPrompt(era, options, language);
    
    const imagePart = {
      inlineData: {
        data: base64ImageData,
        mimeType: mimeType,
      },
    };

    const textPart = {
      text: prompt,
    };

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image-preview',
      contents: [{ parts: [imagePart, textPart] }],
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });
    
    if (response.candidates && response.candidates.length > 0) {
      const parts = response.candidates[0].content.parts;
      for (const part of parts) {
        if (part.inlineData) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    console.warn("Gemini API response did not contain an image.", response);
    return null;

  } catch (error) {
    console.error("Error transforming image with Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Gemini API Error: ${error.message}`);
    }
    throw new Error(`Gemini API Error: ${JSON.stringify(error)}`);
  }
}