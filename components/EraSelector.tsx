import React, { useState, useMemo } from 'react';
import { ERAS } from '../constants';
import type { Era, Language } from '../types';
import { translations } from '../translations';
import { Icons } from './Icons';

interface EraSelectorProps {
  onErasSelect: (eras: Era[], artisticStyle: string) => void;
  language: Language;
  remainingTransforms: number;
}

const STYLE_MODIFIERS = [
  'Default',
  'Oil Painting',
  'Charcoal Drawing',
  'Cinematic',
  'Grainy Photo',
  'Intense Sepia',
  'Watercolor',
];

const EraCard: React.FC<{ era: Era; onSelect: () => void; language: Language; disabled: boolean; isChallenge: boolean; isSelected: boolean }> = ({ era, onSelect, language, disabled, isChallenge, isSelected }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border-2 bg-gray-900 shadow-lg transition-all duration-300 ${
        disabled 
          ? 'cursor-not-allowed opacity-50' 
          : 'hover:shadow-amber-500/30 hover:scale-105 cursor-pointer'
      } ${isSelected ? 'border-amber-400 scale-105 shadow-amber-500/30' : era.color}`}
      onClick={!disabled ? onSelect : undefined}
      aria-disabled={disabled}
      aria-pressed={isSelected}
    >
      {isSelected && (
        <div className="absolute top-2 left-2 bg-amber-500 text-gray-900 rounded-full z-10 p-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        </div>
      )}
      {isChallenge && (
        <div className="absolute top-2 right-2 bg-amber-500 text-gray-900 text-xs font-bold px-2 py-1 rounded-full animate-pulse z-10">
          {translations[language].eraSelector.dailyChallenge}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      <div className="relative p-6 flex flex-col justify-end h-72">
        <era.icon className="w-12 h-12 text-amber-300 mb-4" />
        <h3 className="text-2xl font-bold font-cinzel text-white">{era.name[language]}</h3>
        <p className="text-sm font-semibold text-amber-400">{era.period[language]}</p>
        <p className="mt-2 text-gray-300 text-sm font-crimson opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto">{era.description[language]}</p>
      </div>
    </div>
  );
};

const StyleModifierModal: React.FC<{ eras: Era[]; language: Language; onClose: () => void; onConfirm: (artisticStyle: string) => void; }> = ({ eras, language, onClose, onConfirm }) => {
    const [selectedStyle, setSelectedStyle] = useState(STYLE_MODIFIERS[0]);
    const t = translations[language].eraSelector.styleModal;
    const tSelection = translations[language].eraSelector.selection;

    const title = eras.length > 1 
        ? tSelection.fusionTitle(eras[0].name[language], eras[1].name[language])
        : t.title;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in" onClick={onClose}>
            <div className="bg-gray-900 border-2 border-amber-500/30 rounded-lg shadow-2xl p-6 md:p-8 max-w-2xl w-full mx-4" onClick={e => e.stopPropagation()}>
                <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-cinzel text-amber-300">{title}</h3>
                    <p className="text-gray-400 mt-2 mb-6">{t.subtitle}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-center">
                    {STYLE_MODIFIERS.map(style => (
                        <button 
                            key={style} 
                            onClick={() => setSelectedStyle(style)}
                            className={`p-3 rounded-lg border-2 transition-all duration-200 font-semibold ${selectedStyle === style ? 'bg-amber-500 text-gray-900 border-amber-400 scale-105' : 'bg-gray-800 text-gray-300 border-gray-700 hover:border-amber-500/50'}`}
                        >
                            {t.styles[style as keyof typeof t.styles]?.name || style}
                        </button>
                    ))}
                </div>
                <div className="mt-6 p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-center min-h-[70px] flex items-center justify-center transition-all duration-300">
                    <p className="text-gray-300 italic font-crimson">
                        {t.styles[selectedStyle as keyof typeof t.styles]?.description}
                    </p>
                </div>
                <div className="mt-8 flex justify-center space-x-4">
                    <button onClick={onClose} className="bg-gray-700 text-white font-bold py-2 px-6 rounded-full hover:bg-gray-600 transition-colors">
                        {t.cancel}
                    </button>
                    <button onClick={() => onConfirm(selectedStyle)} className="bg-amber-500 text-gray-900 font-bold py-2 px-8 rounded-full hover:bg-amber-400 transition-colors">
                        {t.button}
                    </button>
                </div>
            </div>
        </div>
    );
};

export const EraSelector: React.FC<EraSelectorProps> = ({ onErasSelect, language, remainingTransforms }) => {
    const t = translations[language].eraSelector;
    const hasTransformsLeft = remainingTransforms > 0;
    const [selectedEras, setSelectedEras] = useState<Era[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const erasByCategory = useMemo(() => {
        return ERAS.reduce((acc, era) => {
            const category = era.category[language];
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(era);
            return acc;
        }, {} as Record<string, Era[]>);
    }, [language]);
    
    const dailyChallengeEraId = useMemo(() => {
        const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
        return ERAS[dayOfYear % ERAS.length].id;
    }, []);

    const toggleSelection = (era: Era) => {
        const isSelected = selectedEras.some(e => e.id === era.id);
        if (isSelected) {
            setSelectedEras(selectedEras.filter(e => e.id !== era.id));
        } else if (selectedEras.length < 2) {
            setSelectedEras([...selectedEras, era]);
        }
    };

    const handleConfirmStyle = (artisticStyle: string) => {
        if (selectedEras.length > 0) {
            onErasSelect(selectedEras, artisticStyle);
            setIsModalOpen(false);
        }
    };
    
    const handleSurpriseMe = () => {
        if (!hasTransformsLeft) return;
        const shouldFuse = Math.random() > 0.5;
        let surpriseEras: Era[] = [];
        const randomEra1 = ERAS[Math.floor(Math.random() * ERAS.length)];
        surpriseEras.push(randomEra1);
        if (shouldFuse) {
            let randomEra2 = ERAS[Math.floor(Math.random() * ERAS.length)];
            while(randomEra2.id === randomEra1.id) {
                randomEra2 = ERAS[Math.floor(Math.random() * ERAS.length)];
            }
            surpriseEras.push(randomEra2);
        }
        setSelectedEras(surpriseEras);
        setIsModalOpen(true);
    };

  return (
    <div className="w-full animate-fade-in pb-28"> {/* Padding bottom for selection bar */}
      <h2 className="text-4xl font-cinzel text-center mb-2">{t.title}</h2>
      <p className="text-lg text-gray-400 text-center mb-2">{t.subtitle}</p>
      <p className="text-md text-amber-300 text-center mb-6">{t.remaining(remainingTransforms)}</p>

      <div className="flex justify-center mb-10">
        <button
          onClick={handleSurpriseMe}
          disabled={!hasTransformsLeft}
          className="bg-gradient-to-r from-purple-600 to-amber-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-amber-400/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
        >
          <div className="flex items-center space-x-2">
            <Icons.Sparkles className="w-5 h-5" />
            <span>{t.surpriseMe}</span>
          </div>
        </button>
      </div>
      
      {Object.entries(erasByCategory).map(([category, eras]) => (
        <div key={category} className="mb-12">
            <h3 className="text-3xl font-cinzel text-amber-200/80 mb-6 border-b-2 border-amber-500/20 pb-2">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {eras.map((era) => {
                    const isSelected = selectedEras.some(e => e.id === era.id);
                    const isDisabled = !hasTransformsLeft || (selectedEras.length >= 2 && !isSelected);
                    return (
                        <EraCard 
                            key={era.id} 
                            era={era} 
                            onSelect={() => toggleSelection(era)} 
                            language={language}
                            disabled={isDisabled}
                            isChallenge={era.id === dailyChallengeEraId}
                            isSelected={isSelected}
                        />
                    );
                })}
            </div>
        </div>
      ))}
      {selectedEras.length > 0 && (
         <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm p-4 border-t-2 border-amber-500/50 z-40 animate-fade-in-up shadow-2xl">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex-grow text-center sm:text-left">
                    <h4 className="font-bold text-amber-300">{t.selection.selected}</h4>
                    <div className="flex flex-wrap gap-2 mt-1 justify-center sm:justify-start">
                        {selectedEras.map(era => (
                            <span key={era.id} className="bg-gray-700 text-white px-3 py-1 text-sm rounded-full">{era.name[language]}</span>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button onClick={() => setSelectedEras([])} className="bg-gray-700 text-white font-bold py-3 px-5 rounded-full hover:bg-gray-600 transition-colors">{t.selection.clear}</button>
                    <button onClick={() => setIsModalOpen(true)} className="bg-amber-500 text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-amber-400 transition-colors">{t.selection.next}</button>
                </div>
            </div>
         </div>
      )}
      {isModalOpen && selectedEras.length > 0 && (
        <StyleModifierModal 
            eras={selectedEras}
            language={language}
            onClose={() => setIsModalOpen(false)}
            onConfirm={handleConfirmStyle}
        />
      )}
    </div>
  );
};