import React, { useState, useMemo } from 'react';
import { ERAS } from '../constants';
import type { Era, Language } from '../types';
import { translations } from '../translations';

interface EraSelectorProps {
  onEraSelect: (era: Era, artisticStyle: string) => void;
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

const EraCard: React.FC<{ era: Era; onSelect: () => void; language: Language; disabled: boolean, isChallenge: boolean }> = ({ era, onSelect, language, disabled, isChallenge }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border-2 bg-gray-900 shadow-lg transition-all duration-300 ${
        disabled 
          ? 'cursor-not-allowed opacity-50' 
          : 'hover:shadow-amber-500/30 hover:scale-105 cursor-pointer'
      } ${era.color}`}
      onClick={!disabled ? onSelect : undefined}
      aria-disabled={disabled}
    >
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

const StyleModifierModal: React.FC<{ era: Era; language: Language; onClose: () => void; onConfirm: (artisticStyle: string) => void; }> = ({ era, language, onClose, onConfirm }) => {
    const [selectedStyle, setSelectedStyle] = useState(STYLE_MODIFIERS[0]);
    const t = translations[language].eraSelector.styleModal;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in" onClick={onClose}>
            <div className="bg-gray-900 border-2 border-amber-500/30 rounded-lg shadow-2xl p-6 md:p-8 max-w-2xl w-full mx-4" onClick={e => e.stopPropagation()}>
                <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-cinzel text-amber-300">{t.title}</h3>
                    <p className="text-gray-400 mt-2 mb-6">{t.subtitle}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-center">
                    {STYLE_MODIFIERS.map(style => (
                        <button 
                            key={style} 
                            onClick={() => setSelectedStyle(style)}
                            className={`p-3 rounded-lg border-2 transition-all duration-200 font-semibold ${selectedStyle === style ? 'bg-amber-500 text-gray-900 border-amber-400 scale-105' : 'bg-gray-800 text-gray-300 border-gray-700 hover:border-amber-500/50'}`}
                        >
                            {t.styles[style as keyof typeof t.styles] || style}
                        </button>
                    ))}
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

export const EraSelector: React.FC<EraSelectorProps> = ({ onEraSelect, language, remainingTransforms }) => {
    const t = translations[language].eraSelector;
    const hasTransformsLeft = remainingTransforms > 0;
    const [modalEra, setModalEra] = useState<Era | null>(null);

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

    const handleEraCardClick = (era: Era) => {
        setModalEra(era);
    };

    const handleConfirmStyle = (artisticStyle: string) => {
        if (modalEra) {
            onEraSelect(modalEra, artisticStyle);
            setModalEra(null);
        }
    };

  return (
    <div className="w-full animate-fade-in">
      <h2 className="text-4xl font-cinzel text-center mb-2">{t.title}</h2>
      <p className="text-lg text-gray-400 text-center mb-2">{t.subtitle}</p>
      <p className="text-md text-amber-300 text-center mb-10">{t.remaining(remainingTransforms)}</p>
      
      {Object.entries(erasByCategory).map(([category, eras]) => (
        <div key={category} className="mb-12">
            <h3 className="text-3xl font-cinzel text-amber-200/80 mb-6 border-b-2 border-amber-500/20 pb-2">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {eras.map((era) => (
                    <EraCard 
                        key={era.id} 
                        era={era} 
                        onSelect={() => handleEraCardClick(era)} 
                        language={language}
                        disabled={!hasTransformsLeft}
                        isChallenge={era.id === dailyChallengeEraId}
                    />
                ))}
            </div>
        </div>
      ))}
      {modalEra && (
        <StyleModifierModal 
            era={modalEra}
            language={language}
            onClose={() => setModalEra(null)}
            onConfirm={handleConfirmStyle}
        />
      )}
    </div>
  );
};
