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
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
  styles: TranslatedTextArray;
  image: string;
  keyEvents: TranslatedTextArray;
  culturalFacts: TranslatedTextArray;
  clothingStyles: TranslatedTextArray;
  ambianceSfx: string;
}

export interface TransformationOptions {
  level: 'Subtle' | 'Authentic' | 'Dramatic';
  style: string;
  environment: string;
  filter: 'Sepia' | 'Technicolor' | 'Daguerreotype' | 'Modern' | 'Era-appropriate photographic style';
}
