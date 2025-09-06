import React, { useState, useRef, useEffect } from 'react';
import type { Era, Language } from '../types';
import { Icons } from './Icons';
import { translations } from '../translations';

interface ResultViewerProps {
  originalImage: string;
  generatedImages: string[];
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


export const ResultViewer: React.FC<ResultViewerProps> = ({ originalImage, generatedImages, era, onRestart, language }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [canShare, setCanShare] = useState(false);

  const activeGeneratedImage = generatedImages[activeImageIndex];
  const t = translations[language].results;

  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.share) {
      setCanShare(true);
    }
    
    if (era.ambianceSfx) {
        audioRef.current = new Audio(era.ambianceSfx);
        audioRef.current.loop = true;
    }
    
    return () => {
        audioRef.current?.pause();
        audioRef.current = null;
    };
  }, [era.ambianceSfx]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
        audioRef.current.pause();
    } else {
        audioRef.current.play().catch(e => console.error("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

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
  };

  const handleShare = async () => {
    const eraName = era.name[language].replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const fileName = `timewarp_studio_${eraName}_${activeImageIndex + 1}.png`;

    try {
      const response = await fetch(activeGeneratedImage);
      const blob = await response.blob();
      const file = new File([blob], fileName, { type: blob.type });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: t.shareTitle,
          text: t.shareText(era.name[language]),
        });
      } else {
        alert(t.shareErrorBrowser);
      }
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        console.error('Error sharing:', error);
        alert(t.shareErrorGeneral);
      }
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
                        src={img}
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
        {canShare && (
          <button onClick={handleShare} className="bg-gray-800 text-amber-300 border border-amber-500/50 font-bold py-2 px-6 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-gray-900 hover:border-amber-500 transition-all duration-300 transform hover:scale-105">
            <Icons.Share className="w-5 h-5 mr-2" />
            <span>{t.share}</span>
          </button>
        )}
      </div>

      <div className="w-full max-w-4xl bg-gray-900/50 p-6 rounded-lg border border-amber-500/30">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h3 className="text-2xl font-cinzel text-amber-300 mb-4 md:mb-0">{t.contextTitle}</h3>
            {era.ambianceSfx && (
                <div className="flex items-center space-x-3 bg-black/30 p-2 rounded-full">
                    <button onClick={togglePlay} className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-400 text-gray-900 flex items-center justify-center transition-colors">
                        {isPlaying ? <Icons.Pause className="w-5 h-5"/> : <Icons.Play className="w-5 h-5"/>}
                    </button>
                    <div>
                        <p className="font-bold text-white text-sm">{t.ambianceTitle}</p>
                        <p className="text-xs text-gray-400">{t.ambianceSubtitle(era.name[language])}</p>
                    </div>
                </div>
            )}
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
