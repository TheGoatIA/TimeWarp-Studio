import React from 'react';
import type { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
    language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
    const t = translations[language].footer;
  return (
    <footer className="py-6 px-4 md:px-8 border-t border-amber-400/20 mt-16">
      <div className="container mx-auto text-center text-gray-500 text-sm">
        <p>
            &copy; {new Date().getFullYear()} TimeWarp Studio. <span dangerouslySetInnerHTML={{ __html: t.hackathonProject }} />
        </p>
        <p className="mt-2" dangerouslySetInnerHTML={{ __html: t.poweredBy }} />
      </div>
    </footer>
  );
};