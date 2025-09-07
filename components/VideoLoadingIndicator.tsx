import React, { useState, useEffect } from 'react';
import type { Language } from '../types';
import { Icons } from './Icons';

interface VideoLoadingIndicatorProps {
  language: Language;
}

const loadingMessages = {
  en: [
    "Waking the digital spirits in the machine...",
    "Choreographing pixel movements across time...",
    "This magical process can take a few minutes...",
    "Your living portrait is being rendered frame by frame...",
    "Patience, the temporal energies are converging...",
    "Almost there, adding the final spark of life!"
  ],
  fr: [
    "Réveil des esprits numériques dans la machine...",
    "Chorégraphie des mouvements de pixels à travers le temps...",
    "Ce processus magique peut prendre quelques minutes...",
    "Votre portrait vivant est en cours de rendu, image par image...",
    "Patience, les énergies temporelles convergent...",
    "Presque terminé, ajout de l'étincelle de vie finale !"
  ]
};

export const VideoLoadingIndicator: React.FC<VideoLoadingIndicatorProps> = ({ language }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = loadingMessages[language];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000); // Slower interval for longer waits
    return () => clearInterval(interval);
  }, [messages.length]);

  const titleText = language === 'fr' 
    ? `Création de votre Portrait Vivant...`
    : `Creating Your Living Portrait...`;

  return (
    <div className="text-center flex flex-col items-center justify-center animate-fade-in my-8 p-6 bg-gray-900/50 rounded-lg border border-cyan-500/30 w-full max-w-4xl">
      <Icons.Video className="w-16 h-16 text-cyan-400 animate-pulse mb-4" />
      <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-white mb-3">
        {titleText}
      </h2>
      <p className="text-md text-cyan-300/80 transition-opacity duration-500 h-12 flex items-center justify-center">
        {messages[messageIndex]}
      </p>
      <div className="w-full max-w-md bg-gray-700 rounded-full h-2.5 mt-4 overflow-hidden">
          <div className="bg-cyan-400 h-2.5 rounded-full animate-pulse-loader-slow"></div>
      </div>
      <style>{`
        @keyframes pulse-loader-slow {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-pulse-loader-slow {
          animation: pulse-loader-slow 180s linear forwards;
        }
      `}</style>
    </div>
  );
};
