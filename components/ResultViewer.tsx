import React, { useState, useRef, useEffect } from 'react';
import type { Era, Language } from '../types';
import { Icons } from './Icons';
import { translations } from '../translations';
import { logger } from '../utils/logger';
import { editImage, generateStory, getMagicEditSuggestions } from '../services/geminiService';
import { addWatermark } from '../utils/imageUtils';
import { trackEvent } from '../services/analyticsService';

interface ResultViewerProps {
  originalImage: string;
  originalImageMimeType: string;
  generatedImages: string[];
  rawGeneratedImages: string[];
  era: Era;
  onRestart: () => void;
  language: Language;
}

const HistoricalContextCard: React.FC<{ title: string; items: string[]; icon: React.ReactNode }> = ({ title, items, icon }) => (
  <div className="bg-black/20 p-4 rounded-lg h-full">
    <h4 className="flex items-center text-lg font-bold text-amber-400 mb-2 font-cinzel">
      <span className="w-6 h-6 mr-2">{icon}</span> {title}
    </h4>
    <ul className="list-disc list-inside text-gray-300 font-crimson space-y-1 text-sm md:text-base">
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
);


export const ResultViewer: React.FC<ResultViewerProps> = ({ originalImage, originalImageMimeType, generatedImages, rawGeneratedImages, era, onRestart, language }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [editedImages, setEditedImages] = useState<Record<number, string>>({});
  const [rawEditedImages, setRawEditedImages] = useState<Record<number, string>>({});
  const [editPrompt, setEditPrompt] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editError, setEditError] = useState<string | null>(null);

  // State for the story feature
  const [storyCache, setStoryCache] = useState<Record<number, string>>({});
  const [isStoryLoading, setIsStoryLoading] = useState(false);
  const [storyError, setStoryError] = useState<string | null>(null);
  
  // State for Magic Edit suggestions
  const [magicSuggestions, setMagicSuggestions] = useState<string[]>([]);
  const [areSuggestionsLoading, setAreSuggestionsLoading] = useState(false);
  
  const activeGeneratedImage = editedImages[activeImageIndex] || generatedImages[activeImageIndex];
  const activeRawImage = rawEditedImages[activeImageIndex] || rawGeneratedImages[activeImageIndex];
  const activeStory = storyCache[activeImageIndex];
  const t = translations[language].results;

  // Clear story error when switching between variations
  useEffect(() => {
      setStoryError(null);
  }, [activeImageIndex]);
  
  // Fetch magic edit suggestions when the component loads
  useEffect(() => {
    const fetchSuggestions = async () => {
      setAreSuggestionsLoading(true);
      try {
        const suggestions = await getMagicEditSuggestions(era, language);
        if (suggestions) {
          setMagicSuggestions(suggestions);
        } else {
          setMagicSuggestions([]);
        }
      } catch (error) {
        logger.error('SUGGESTION_FETCH_FAIL', 'Failed to fetch magic edit suggestions for UI.', { error });
        setMagicSuggestions([]);
      } finally {
        setAreSuggestionsLoading(false);
      }
    };

    fetchSuggestions();
  }, [era, language]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const rect = e.touches[0].clientX - containerRef.current.getBoundingClientRect().left;
    const position = Math.max(0, Math.min(100, (rect / containerRef.current.offsetWidth) * 100));
    setSliderPosition(position);
  };
  
  const handleMouseUp = () => setIsDragging(false);
  
  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = activeGeneratedImage;
    const eraName = era.name[language].replace(/[^a-z0-9]/gi, '_').toLowerCase();
    link.download = `timewarp_studio_${eraName}_${activeImageIndex + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    logger.info('IMAGE_DOWNLOAD', 'User downloaded a generated image.', { eraId: era.id, imageIndex: activeImageIndex });
    trackEvent('download_image', { category: 'Engagement', label: era.id });
  };
  
  const handleMagicEdit = async () => {
      if (!editPrompt.trim()) return;
      setIsEditing(true);
      setEditError(null);
      trackEvent('magic_edit_start', { category: 'Feature', label: editPrompt.substring(0, 50) });
      try {
          const result = await editImage(activeRawImage, originalImageMimeType, editPrompt);
          if (result) {
            setRawEditedImages(prev => ({...prev, [activeImageIndex]: result}));
            const watermarkedResult = await addWatermark(result);
            setEditedImages(prev => ({...prev, [activeImageIndex]: watermarkedResult}));
            setEditPrompt('');
            trackEvent('magic_edit_success', { category: 'Feature', label: era.id });
          } else {
            setEditError(t.magicEdit.error);
            trackEvent('magic_edit_error', { category: 'Error', label: 'no_image_returned' });
          }
      } catch (e) {
          console.error(e);
          setEditError(t.magicEdit.error);
          logger.error('MAGIC_EDIT_FAILED', 'Magic Edit call failed.', { error: e });
          trackEvent('magic_edit_error', { category: 'Error', label: (e instanceof Error ? e.message : 'unknown') });
      } finally {
          setIsEditing(false);
      }
  };
  
  const handleGenerateStory = async () => {
    if (storyCache[activeImageIndex]) return; // Don't regenerate if already in cache
    
    setIsStoryLoading(true);
    setStoryError(null);
    trackEvent('generate_story_start', { category: 'Feature', label: era.id });

    try {
        const result = await generateStory(activeRawImage, originalImageMimeType, era, language);
        if (result) {
            setStoryCache(prev => ({...prev, [activeImageIndex]: result}));
            trackEvent('generate_story_success', { category: 'Feature', label: era.id });
        } else {
            setStoryError(t.story.error);
            trackEvent('generate_story_error', { category: 'Error', label: 'no_story_returned' });
        }
    } catch (e) {
        console.error(e);
        setStoryError(t.story.error);
        logger.error('STORY_GENERATION_FAILED', 'Story generation call failed.', { error: e });
        trackEvent('generate_story_error', { category: 'Error', label: (e instanceof Error ? e.message : 'unknown') });
    } finally {
        setIsStoryLoading(false);
    }
  };

  const getStoryContainerClass = () => {
    const category = era.category.en;
    switch (category) {
        case 'Futuristic & Sci-Fi':
            return 'bg-black/80 p-4 rounded-md border border-cyan-400/50 font-mono text-cyan-300 whitespace-pre-wrap shadow-inner shadow-cyan-500/20';
        case 'Fantasy':
        case 'Historical Eras':
        default:
            return 'bg-[#fdf6e3] p-6 rounded border-2 border-[#d2b48c]/50 text-gray-800 font-crimson text-lg shadow-inner';
    }
  };


  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center animate-fade-in" onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp}>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-cinzel mb-2">{t.title}</h2>
        <p className="text-xl text-gray-300" dangerouslySetInnerHTML={{ __html: t.subtitle(era.name[language]) }} />
      </div>

      <div 
        className="w-full aspect-[4/3] max-w-4xl relative select-none rounded-lg overflow-hidden border-4 border-amber-600/50 shadow-2xl shadow-black cursor-ew-resize" 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={(e) => { e.preventDefault(); setIsDragging(true); }}
        onTouchStart={(e) => { setIsDragging(true); }}
      >
        <img src={activeGeneratedImage} alt={t.altGenerated} className="absolute inset-0 w-full h-full object-contain" />
        <div className="absolute inset-0 w-full h-full" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <img src={originalImage} alt={t.altOriginal} className="w-full h-full object-contain" />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-amber-400 cursor-ew-resize"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-amber-400/80 flex items-center justify-center backdrop-blur-sm border-2 border-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
          </div>
        </div>
      </div>
       <div className="flex items-center justify-center space-x-2 mt-4 text-white font-semibold">
          <span>{t.modern}</span>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full"></div>
          <span>{era.name[language]}</span>
      </div>

      {generatedImages.length > 1 && (
        <div className="mt-8 w-full max-w-4xl">
            <h3 className="text-lg font-bold text-center mb-4 text-amber-200">{t.variations}</h3>
            <div className="flex justify-center space-x-2 md:space-x-4">
                {generatedImages.map((img, index) => (
                    <img
                        key={index}
                        src={editedImages[index] || img}
                        alt={`${t.variation} ${index + 1}`}
                        className={`w-20 h-20 md:w-24 md:h-24 object-cover rounded-md cursor-pointer border-2 transition-all ${activeImageIndex === index ? 'border-amber-400 scale-110' : 'border-transparent hover:border-amber-400/50'}`}
                        onClick={() => setActiveImageIndex(index)}
                    />
                ))}
            </div>
        </div>
      )}
      
      <div className="my-8 flex justify-center space-x-4">
        <button onClick={handleDownload} className="bg-gray-800 text-amber-300 border border-amber-500/50 font-bold py-2 px-6 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-gray-900 hover:border-amber-500 transition-all duration-300 transform hover:scale-105">
          <Icons.Download className="w-5 h-5 mr-2" />
          <span>{t.download}</span>
        </button>
      </div>

      {/* Magic Edit Feature */}
      <div className="w-full max-w-2xl mx-auto my-6">
        <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/30">
          <h3 className="text-xl font-cinzel text-purple-300 mb-4 flex items-center"><Icons.Sparkles className="w-5 h-5 mr-2" /> {t.magicEdit.title}</h3>
          
          <div className="mb-4 flex flex-wrap justify-center items-center gap-2 min-h-[40px]">
            {areSuggestionsLoading ? (
              <div className="flex justify-center space-x-2 animate-pulse">
                  <div className="h-8 w-28 bg-gray-700 rounded-full"></div>
                  <div className="h-8 w-32 bg-gray-700 rounded-full"></div>
                  <div className="h-8 w-24 bg-gray-700 rounded-full"></div>
              </div>
            ) : magicSuggestions.length > 0 && (
              <>
                  <span className="text-sm text-gray-400 self-center mr-2">{t.magicEdit.suggestionsLabel}</span>
                  {magicSuggestions.map((suggestion, index) => (
                      <button
                          key={index}
                          onClick={() => setEditPrompt(suggestion)}
                          className="bg-gray-700/50 text-purple-300 text-sm px-3 py-1 rounded-full border border-gray-600 hover:bg-purple-900/50 hover:border-purple-500 transition-colors"
                      >
                          {suggestion}
                      </button>
                  ))}
              </>
            )}
          </div>
          
          <div className="flex space-x-2">
            <input type="text" value={editPrompt} onChange={(e) => setEditPrompt(e.target.value)} placeholder={t.magicEdit.prompt} className="flex-grow bg-gray-800 border border-gray-700 rounded-full px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <button onClick={handleMagicEdit} disabled={isEditing} className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {isEditing ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <span>{t.magicEdit.button}</span>}
            </button>
          </div>
          {editError && <p className="text-red-400 text-sm mt-2">{editError}</p>}
        </div>
      </div>

      {/* Story Generation Feature */}
      <div className="w-full max-w-2xl mx-auto my-6">
        <div className="bg-gray-900/50 p-6 rounded-lg border border-amber-500/30">
          <h3 className="text-xl font-cinzel text-amber-300 mb-4 flex items-center">
            <Icons.BookOpen className="w-5 h-5 mr-2" /> {t.story.title}
          </h3>
          {isStoryLoading ? (
            <div className="flex items-center justify-center text-gray-400 py-4">
              <div className="w-5 h-5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin mr-3"></div>
              <span>{t.story.loading}</span>
            </div>
          ) : activeStory ? (
            <div className={getStoryContainerClass()}>
              <p>{activeStory}</p>
            </div>
          ) : storyError ? (
              <p className="text-red-400 text-sm mt-2 text-center">{storyError}</p>
          ) : (
            <div className="text-center">
              <button
                onClick={handleGenerateStory}
                className="bg-amber-600 text-white font-bold py-2 px-6 rounded-full hover:bg-amber-500 transition-colors flex items-center justify-center mx-auto transform hover:scale-105"
              >
                {t.story.button}
              </button>
            </div>
          )}
        </div>
      </div>


      <div className="w-full max-w-4xl bg-gray-900/50 p-6 rounded-lg border border-amber-500/30 mt-6">
        <div className="mb-6">
          <h3 className="text-2xl font-cinzel text-amber-300 text-center md:text-left">{t.contextTitle}</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
            <HistoricalContextCard title={t.keyEvents} items={era.keyEvents[language]} icon={<Icons.BookOpen />} />
            <HistoricalContextCard title={t.culturalFacts} items={era.culturalFacts[language]} icon={<Icons.Globe />} />
            <HistoricalContextCard title={t.clothingStyles} items={era.clothingStyles[language]} icon={<Icons.Clothing />} />
        </div>
      </div>


      <div className="mt-12 text-center">
        <button
          onClick={onRestart}
          className="bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-amber-400 transition-colors transform hover:scale-105"
        >
          {t.restart}
        </button>
      </div>
    </div>
  );
};