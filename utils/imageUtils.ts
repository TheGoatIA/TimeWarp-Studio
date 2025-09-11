import { logger } from "./logger";

export const addWatermark = (base64Image: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        const error = new Error('Could not get canvas context');
        logger.error('WATERMARK_ERROR', 'Failed to get 2D context from canvas for watermarking.', { error });
        return reject(error);
      }

      // 1. Draw the original image
      ctx.drawImage(img, 0, 0);

      // 2. Set watermark properties
      const watermarkText = 'Gauty Studio';
      const margin = img.width * 0.02; // 2% margin from edge
      const fontSize = Math.max(16, Math.round(img.width / 60)); // Proportional font size

      ctx.font = `italic ${fontSize}px 'Crimson Text', serif`;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'; // White with 70% opacity
      ctx.textAlign = 'right';
      ctx.textBaseline = 'bottom';

      // 3. Draw the watermark text
      ctx.fillText(watermarkText, canvas.width - margin, canvas.height - margin);

      // 4. Export canvas to a new base64 string
      resolve(canvas.toDataURL('image/png'));
    };

    img.onerror = (error) => {
      logger.error("WATERMARK_LOAD_ERROR", "Failed to load image for watermarking.", { error });
      reject(new Error('Image could not be loaded for watermarking.'));
    };

    img.src = base64Image;
  });
};
