import type * as React from 'react';

export type Language = 'en' | 'fr';

export interface TranslatedText {
  en: string;
  fr: string;
}

export interface TranslatedTextArray {
  en: string[];
  fr: string[];
}

export interface Era {
  id: string; // Add a unique ID for keys
  name: TranslatedText;
  period: TranslatedText;
  description: TranslatedText;
  // FIX: Changed icon type from React.FC to a function signature to match implementation and resolve type errors.
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  color: string;
  styles: TranslatedTextArray;
  image: string;
  keyEvents: TranslatedTextArray;
  culturalFacts: TranslatedTextArray;
  clothingStyles: TranslatedTextArray;
  category: TranslatedText;
}

export interface TransformationOptions {
  level: 'Subtle' | 'Authentic' | 'Dramatic';
  style: string;
  environment: string;
  filter: 'Sepia' | 'Technicolor' | 'Daguerreotype' | 'Modern' | 'Era-appropriate photographic style';
  artisticStyle?: string;
}

// FIX: Add TimelineItem interface to resolve import error in components/Timeline.tsx.
export interface TimelineItem {
  id: string;
  eraId: string;
  generatedImage: string;
  timestamp: number;
  language: Language;
}