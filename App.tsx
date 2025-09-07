import React, { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { EraSelector } from './components/EraSelector';
import { ResultViewer } from './components/ResultViewer';
import { LoadingIndicator } from './components/LoadingIndicator';
import { Footer } from './components/Footer';
import { LanguageSelector } from './components/LanguageSelector';
import type { Era, TransformationOptions, Language } from './types';
import { transformImage } from './services/geminiService';
import { translations } from './translations';
import { addWatermark } from './utils/imageUtils';

type AppStep = 'UPLOAD' | 'SELECT_ERA' | 'VIEW_RESULT';

const DAILY_TRANSFORMATION_LIMIT = 3;

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language | null>(null);
  const [step, setStep] = useState<AppStep>('UPLOAD');
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [originalImageMimeType, setOriginalImageMimeType] = useState<string | null>(null);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [selectedEra, setSelectedEra] = useState<Era | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [remainingTransforms, setRemainingTransforms] = useState(DAILY_TRANSFORMATION_LIMIT);

  const updateRemainingTransforms = useCallback(() => {
    const today = new Date().toISOString().split('T')[0];
    const usageDataString = localStorage.getItem('timeWarpUsage');
    if (usageDataString) {
      try {
        const usageData = JSON.parse(usageDataString);
        if (usageData.date === today) {
          setRemainingTransforms(Math.max(0, DAILY_TRANSFORMATION_LIMIT - usageData.count));
          return;
        }
      } catch (e) {
        console.error("Failed to parse usage data:", e);
        localStorage.removeItem('timeWarpUsage');
      }
    }
    setRemainingTransforms(DAILY_TRANSFORMATION_LIMIT);
  }, []);

  useEffect(() => {
    updateRemainingTransforms();
  }, [updateRemainingTransforms]);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
  };

  const handleImageUpload = (imageDataUrl: string, mimeType: string) => {
    setOriginalImage(imageDataUrl);
    setOriginalImageMimeType(mimeType);
    setStep('SELECT_ERA');
    updateRemainingTransforms();
  };

  const handleEraSelect = useCallback(async (era: Era) => {
    if (!originalImage || !originalImageMimeType || !language) return;
    
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    let usageData = { date: '', count: 0 };
    try {
        const usageDataString = localStorage.getItem('timeWarpUsage');
        if (usageDataString) {
            usageData = JSON.parse(usageDataString);
        }
    } catch(e) {
        console.error("Failed to parse usage data, resetting.", e);
        localStorage.removeItem('timeWarpUsage');
    }

    if (usageData.date === today && usageData.count >= DAILY_TRANSFORMATION_LIMIT) {
      setError(translations[language].error.limitReached);
      return;
    }
    
    setSelectedEra(era);
    setIsLoading(true);
    setError(null);
    setGeneratedImages([]);

    try {
        const newCount = usageData.date === today ? usageData.count + 1 : 1;
        localStorage.setItem('timeWarpUsage', JSON.stringify({ date: today, count: newCount }));
        setRemainingTransforms(Math.max(0, DAILY_TRANSFORMATION_LIMIT - newCount));
        
        const base64Data = originalImage.split(',')[1];
        
        const variationStyles = era.styles[language].slice(0, 3);
        if (variationStyles.length === 0) {
          variationStyles.push('Default Style');
        }

        const transformationPromises = variationStyles.map(style => {
            const options: TransformationOptions = {
                level: 'Authentic',
                style: style,
                environment: 'Era-appropriate setting',
                filter: 'Era-appropriate photographic style'
            };
            return transformImage(base64Data, originalImageMimeType, era, options, language);
        });

        const results = await Promise.all(transformationPromises);
        const successfulResults = results.filter((res): res is string => res !== null);
        
        if (successfulResults.length > 0) {
          const watermarkedImages = await Promise.all(
            successfulResults.map(image => addWatermark(image))
          );
          setGeneratedImages(watermarkedImages);
          setStep('VIEW_RESULT');
        } else {
          setError(translations[language].error.noImage);
        }
    } catch (e) {
      console.error(e);
      const errorMessage = e instanceof Error ? e.message : translations[language].error.unknown;
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [originalImage, originalImageMimeType, language]);

  const handleRestart = () => {
    setStep('UPLOAD');
    setOriginalImage(null);
    setOriginalImageMimeType(null);
    setGeneratedImages([]);
    setSelectedEra(null);
    setError(null);
  };
  
  const renderContent = () => {
    if (!language) {
      return <LanguageSelector onSelectLanguage={handleLanguageSelect} />;
    }

    if (isLoading) {
      return <LoadingIndicator era={selectedEra} language={language} />;
    }
    
    const t = translations[language];

    if (error) {
        return (
            <div className="bg-red-900/50 border border-red-500 text-red-300 p-4 rounded-lg text-center max-w-2xl mx-auto">
                <h3 className="font-bold text-lg mb-2">{t.error.title}</h3>
                <p>{error}</p>
                <button onClick={handleRestart} className="mt-4 bg-amber-500 text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-amber-400 transition-colors">{t.error.tryAgain}</button>
            </div>
        );
    }

    switch (step) {
      case 'UPLOAD':
        return (
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-white mb-4 animate-fade-in-down" dangerouslySetInnerHTML={{ __html: t.home.title }} />
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up">{t.home.subtitle}</p>
            <ImageUploader onImageUpload={handleImageUpload} language={language} />
          </div>
        );
      case 'SELECT_ERA':
        return <EraSelector onEraSelect={handleEraSelect} language={language} remainingTransforms={remainingTransforms} />;
      case 'VIEW_RESULT':
        if (originalImage && generatedImages.length > 0 && selectedEra) {
          return <ResultViewer originalImage={originalImage} generatedImages={generatedImages} era={selectedEra} onRestart={handleRestart} language={language} />;
        }
        handleRestart();
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] to-[#121212] flex flex-col">
      {language && <Header language={language} />}
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16 flex items-center justify-center">
        {renderContent()}
      </main>
      {language && <Footer language={language} />}
    </div>
  );
};

export default App;