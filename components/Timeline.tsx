import React, { useState, useEffect } from 'react';
import { ERAS } from '../constants';
import type { Language, TimelineItem } from '../types';
import { translations } from '../translations';
import { Icons } from './Icons';
import { logger } from '../utils/logger';

interface TimelineProps {
  onBack: () => void;
  language: Language;
}

const TimelineCard: React.FC<{ item: TimelineItem; onDelete: (id: string) => void; language: Language; }> = ({ item, onDelete, language }) => {
    const era = ERAS.find(e => e.id === item.eraId);
    // Use the language the item was created in for era name, fallback to current language
    const displayLanguage = era ? item.language : language;
    const t = translations[language].timeline;
    
    const formattedDate = new Date(item.timestamp).toLocaleDateString(language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const handleDownload = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent any parent click handlers
        const link = document.createElement('a');
        link.href = item.generatedImage;
        const eraName = era?.name[displayLanguage].replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'image';
        link.download = `timewarp_studio_${eraName}_${item.id.substring(0,8)}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        logger.info('TIMELINE_DOWNLOAD', 'User downloaded an image from timeline.', { itemId: item.id });
    };

    const handleDeleteClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent any parent click handlers
        onDelete(item.id);
    };

    return (
        <div className="group relative aspect-square bg-gray-900 rounded-lg overflow-hidden border-2 border-gray-800 hover:border-amber-500/50 transition-all duration-300 shadow-lg">
            <img src={item.generatedImage} alt={era?.name[displayLanguage] || 'Timeline image'} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-lg font-bold font-cinzel text-white">{era?.name[displayLanguage]}</h3>
                <p className="text-sm text-gray-400">{`${t.savedOn} ${formattedDate}`}</p>
            </div>
            <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 focus-within:opacity-100">
                <button
                    onClick={handleDownload}
                    className="bg-blue-800/70 text-white p-2 rounded-full hover:bg-blue-700"
                    title={t.download}
                    aria-label={t.download}
                >
                    <Icons.Download className="w-5 h-5" />
                </button>
                <button
                    onClick={handleDeleteClick}
                    className="bg-red-800/70 text-white p-2 rounded-full hover:bg-red-700"
                    title={t.delete}
                    aria-label={t.delete}
                >
                    <Icons.Trash className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export const Timeline: React.FC<TimelineProps> = ({ onBack, language }) => {
  const [items, setItems] = useState<TimelineItem[]>([]);
  const t = translations[language].timeline;

  useEffect(() => {
    try {
      const storedItems = JSON.parse(localStorage.getItem('timeWarpTimeline') || '[]');
      setItems(storedItems);
    } catch (error) {
        logger.error('TIMELINE_LOAD_ERROR', 'Failed to parse timeline items from localStorage.', { error });
        setItems([]);
    }
  }, []);

  const handleDelete = (id: string) => {
    if (window.confirm(t.deleteConfirm)) {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
        localStorage.setItem('timeWarpTimeline', JSON.stringify(newItems));
        logger.info('TIMELINE_DELETE', 'User deleted an item from their timeline.', { itemId: id });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto animate-fade-in">
        <div className="text-center mb-10">
            <h2 className="text-4xl font-cinzel mb-2 flex items-center justify-center text-white"><Icons.History className="w-8 h-8 mr-3 text-amber-400"/> {t.title}</h2>
            <p className="text-lg text-gray-400">{t.subtitle}</p>
        </div>

        {items.length === 0 ? (
            <div className="text-center py-20 px-6 bg-gray-900/50 rounded-lg border border-amber-500/20">
                <p className="text-xl text-gray-400">{t.empty}</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map(item => (
                    <TimelineCard key={item.id} item={item} onDelete={handleDelete} language={language} />
                ))}
            </div>
        )}

        <div className="mt-12 text-center">
            <button
                onClick={onBack}
                className="bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-amber-400 transition-colors transform hover:scale-105"
            >
                {t.back}
            </button>
        </div>
    </div>
  );
};