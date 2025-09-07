import React from 'react';
import type { Language } from '../types';

interface LanguageSelectorProps {
  onSelectLanguage: (language: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelectLanguage }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center animate-fade-in">
      {/* Path is prefixed with /public/ to match server routing */}
      <img src="/public/logo_timewarp.png" alt="TimeWarp Studio Logo" className="h-16 w-16 md:h-24 md:w-24 mb-6" />
      <h1 className="text-3xl md:text-5xl font-cinzel font-bold text-white mb-4">
        Welcome to TimeWarp <span className="text-amber-400">Studio</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-10">
        Choose your language / Choisissez votre langue
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <button
          onClick={() => onSelectLanguage('en')}
          className="bg-gray-800 text-amber-300 border border-amber-500/50 font-bold py-4 px-8 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-gray-900 hover:border-amber-500 transition-all duration-300 transform hover:scale-105"
        >
          <span className="mr-3 text-2xl">🇬🇧</span>
          <span>English</span>
        </button>
        <button
          onClick={() => onSelectLanguage('fr')}
          className="bg-gray-800 text-amber-300 border border-amber-500/50 font-bold py-4 px-8 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-gray-900 hover:border-amber-500 transition-all duration-300 transform hover:scale-105"
        >
          <span className="mr-3 text-2xl">🇫🇷</span>
          <span>Français</span>
        </button>
      </div>
    </div>
  );
};