import React from 'react';
import type { Language } from '../types';
import { translations } from '../translations';

interface HeaderProps {
  language: Language;
}

export const Header: React.FC<HeaderProps> = ({ language }) => {
  const t = translations[language].header;
  return (
    <header className="py-4 px-4 md:px-8 border-b border-amber-400/20 bg-black/30 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* Path is root-relative, served from the 'public' directory */}
          <img src="/logo_timewarp.png" alt="TimeWarp Studio Logo" className="h-8 w-8" />
          <h1 className="text-xl md:text-2xl font-bold font-cinzel text-white">
            TimeWarp <span className="text-amber-400">Studio</span>
          </h1>
        </div>
        <p className="hidden md:block text-sm text-gray-400 italic">{t.tagline}</p>
      </div>
    </header>
  );
};