import React from 'react';
import { HISTORICAL_ERAS } from '../constants';
import type { Era, Language } from '../types';
import { translations } from '../translations';

interface EraSelectorProps {
  onEraSelect: (era: Era) => void;
  language: Language;
}

const EraCard: React.FC<{ era: Era; onSelect: () => void; language: Language }> = ({ era, onSelect, language }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border-2 bg-gray-900 shadow-lg transition-all duration-300 hover:shadow-amber-500/30 hover:scale-105 cursor-pointer ${era.color}`}
      onClick={onSelect}
    >
      <img src={era.image} alt={era.name[language]} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
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

export const EraSelector: React.FC<EraSelectorProps> = ({ onEraSelect, language }) => {
    const t = translations[language].eraSelector;
  return (
    <div className="w-full animate-fade-in">
      <h2 className="text-4xl font-cinzel text-center mb-2">{t.title}</h2>
      <p className="text-lg text-gray-400 text-center mb-10">{t.subtitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {HISTORICAL_ERAS.map((era) => (
          <EraCard key={era.id} era={era} onSelect={() => onEraSelect(era)} language={language} />
        ))}
      </div>
    </div>
  );
};
