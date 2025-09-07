import React, { useState, useCallback, useRef } from 'react';
import { Icons } from './Icons';
import type { Language } from '../types';
import { translations } from '../translations';

interface ImageUploaderProps {
  onImageUpload: (imageDataUrl: string, mimeType: string) => void;
  language: Language;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, language }) => {
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = translations[language].uploader;

  const handleFileChange = useCallback((file: File | null) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError(t.error.notImage);
      return;
    }
    
    if (file.size > 4 * 1024 * 1024) {
      setError(t.error.tooLarge);
      return;
    }

    setError(null);
    const reader = new FileReader();
    reader.onload = () => {
      onImageUpload(reader.result as string, file.type);
    };
    reader.onerror = () => {
      setError(t.error.readError);
    };
    reader.readAsDataURL(file);
  }, [onImageUpload, t]);

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  }, [handleFileChange]);

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-xl mx-auto">
        <div 
          className={`relative border-2 border-dashed rounded-xl p-8 md:p-12 text-center transition-all duration-300 ${isDragging ? 'border-amber-400 bg-amber-900/20 scale-105' : 'border-gray-600 hover:border-amber-500 bg-gray-900/50'}`}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-gray-400">
            <Icons.Upload className="w-16 h-16 text-gray-500" />
            <p className="text-lg">{t.dragAndDrop}</p>
            <p className="text-sm">{t.or}</p>
            <button
                onClick={onButtonClick}
                className="bg-amber-500 text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-amber-400 transition-colors transform hover:scale-105"
            >
                🕰️ {t.button}
            </button>
            <input
                ref={fileInputRef}
                type="file"
                accept="image/png, image/jpeg, image/webp"
                className="hidden"
                onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)}
            />
          </div>
        </div>
      {error && <p className="mt-4 text-red-400">{error}</p>}
      <p 
        className="mt-6 text-sm text-gray-400 font-crimson text-center"
        dangerouslySetInnerHTML={{ __html: t.recommendation }}
      />
    </div>
  );
};