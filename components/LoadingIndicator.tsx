import React, { useState, useEffect } from 'react';
import type { Era, Language } from '../types';
import { Icons } from './Icons';

interface LoadingIndicatorProps {
  era: Era | null;
  language: Language;
}

const loadingMessages = {
  en: [
    "Calibrating the temporal circuits...",
    "Consulting historical archives...",
    "Weaving photons from a bygone era...",
    "Applying era-appropriate color grading...",
    "Rendering your journey through time...",
    "This might take a moment, great art needs time!",
    "Finalizing the photorealistic details..."
  ],
  fr: [
    "Calibrage des circuits temporels...",
    "Consultation des archives historiques...",
    "Tissage de photons d'une époque révolue...",
    "Application du dégradé de couleurs d'époque...",
    "Rendu de votre voyage à travers le temps...",
    "Cela peut prendre un moment, le grand art demande du temps !",
    "Finalisation des détails photoréalistes..."
  ]
};

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ era, language }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = loadingMessages[language];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [messages.length]);

  const titleText = language === 'fr' 
    ? `Voyage vers ${era?.name.fr || 'le passé'}...`
    : `Traveling to the ${era?.name.en || 'past'}...`;

  return (
    <div className="text-center flex flex-col items-center justify-center animate-fade-in">
      <Icons.TimeWarp className="w-24 h-24 text-amber-400 animate-spin-slow mb-6" />
      <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-white mb-4">
        {titleText}
      </h2>
      <p className="text-lg text-amber-300/80 transition-opacity duration-500">
        {messages[messageIndex]}
      </p>
      <div className="w-full max-w-md bg-gray-700 rounded-full h-2.5 mt-8 overflow-hidden">
          <div className="bg-amber-400 h-2.5 rounded-full animate-pulse-loader"></div>
      </div>
      <style>{`
        @keyframes pulse-loader {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; transform: translateX(100%); }
        }
        .animate-pulse-loader {
          animation: pulse-loader 3s infinite ease-in-out;
        }
        @keyframes spin-slow {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};
