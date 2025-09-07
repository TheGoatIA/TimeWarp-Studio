export const translations = {
  en: {
    header: {
      tagline: '"Travel through history, one photo at a time"',
    },
    footer: {
      hackathonProject: 'A Google Gemini Hackathon Project.',
      poweredBy: 'Powered by Gemini 2.5 Flash Image Preview. All historical transformations are AI-generated.',
    },
    home: {
      title: 'Transform your photos into <span class="text-amber-400">timeless masterpieces</span>',
      subtitle: 'From 2025 to Ancient Egypt, explore your impossible past. Upload a photo to begin your journey.',
    },
    uploader: {
      dragAndDrop: 'Drag & drop your photo here',
      or: 'or',
      button: 'Start the Time Travel',
      error: {
        notImage: 'Please select an image file (e.g., JPG, PNG, WEBP).',
        tooLarge: 'Image is too large. Please select a file smaller than 4MB.',
        readError: 'Failed to read the file.',
      },
    },
    eraSelector: {
      title: 'Select Your Destination',
      subtitle: 'Choose an epoch to begin your transformation.',
      remaining: (count: number) => `You have ${count} transformation${count === 1 ? '' : 's'} left today.`,
    },
    results: {
      title: 'Transformation Complete!',
      subtitle: (eraName: string) => `You have arrived in the <span class="font-bold text-amber-400">${eraName}</span>.`,
      modern: 'Modern',
      altGenerated: 'Generated Image',
      altOriginal: 'Original Image',
      variations: 'Variations',
      variation: 'Variation',
      download: 'Download',
      share: 'Share',
      shareTitle: 'My TimeWarp Transformation!',
      shareText: (eraName: string) => `Check out my photo from the ${eraName} era, created with TimeWarp Studio!`,
      shareErrorBrowser: 'Your browser cannot share files.',
      shareErrorGeneral: 'An error occurred while trying to share the image.',
      contextTitle: 'Historical Context',
      ambianceTitle: 'Era Ambiance',
      ambianceSubtitle: (eraName: string) => `Sounds of the ${eraName}`,
      keyEvents: 'Key Events',
      culturalFacts: 'Cultural Facts',
      clothingStyles: 'Clothing Styles',
      restart: 'Travel to a New Era',
    },
    error: {
      title: 'Transformation Failed',
      tryAgain: 'Try Again',
      noImage: 'The transformation returned no valid images. This could be due to safety filters or an issue with the prompt. Please try a different image or era.',
      unknown: 'An unknown error occurred during transformation.',
      limitReached: 'You have reached the daily limit of 3 transformations. Please come back tomorrow!',
    }
  },
  fr: {
    header: {
      tagline: '"Voyagez à travers l\'histoire, une photo à la fois"',
    },
    footer: {
      hackathonProject: 'Un projet pour le Hackathon Google Gemini.',
      poweredBy: 'Propulsé par Gemini 2.5 Flash Image Preview. Toutes les transformations historiques sont générées par IA.',
    },
    home: {
      title: 'Transformez vos photos en <span class="text-amber-400">chefs-d\'œuvre intemporels</span>',
      subtitle: 'De 2025 à l\'Égypte ancienne, explorez votre passé impossible. Téléchargez une photo pour commencer votre voyage.',
    },
    uploader: {
      dragAndDrop: 'Glissez-déposez votre photo ici',
      or: 'ou',
      button: 'Commencer le voyage temporel',
      error: {
        notImage: 'Veuillez sélectionner un fichier image (ex: JPG, PNG, WEBP).',
        tooLarge: 'L\'image est trop grande. Veuillez sélectionner un fichier de moins de 4 Mo.',
        readError: 'La lecture du fichier a échoué.',
      },
    },
    eraSelector: {
      title: 'Choisissez Votre Destination',
      subtitle: 'Choisissez une époque pour commencer votre transformation.',
      remaining: (count: number) => `Il vous reste ${count} transformation${count === 1 ? '' : 's'} aujourd'hui.`,
    },
    results: {
      title: 'Transformation Terminée !',
      subtitle: (eraName: string) => `Vous êtes arrivé(e) à l'époque : <span class="font-bold text-amber-400">${eraName}</span>.`,
      modern: 'Moderne',
      altGenerated: 'Image Générée',
      altOriginal: 'Image Originale',
      variations: 'Variations',
      variation: 'Variation',
      download: 'Télécharger',
      share: 'Partager',
      shareTitle: 'Ma Transformation TimeWarp !',
      shareText: (eraName: string) => `Découvrez ma photo de l'époque ${eraName}, créée avec TimeWarp Studio !`,
      shareErrorBrowser: 'Votre navigateur ne peut pas partager de fichiers.',
      shareErrorGeneral: 'Une erreur est survenue lors du partage de l\'image.',
      contextTitle: 'Contexte Historique',
      ambianceTitle: 'Ambiance d\'Époque',
      ambianceSubtitle: (eraName: string) => `Sons de l'époque ${eraName}`,
      keyEvents: 'Événements Clés',
      culturalFacts: 'Faits Culturels',
      clothingStyles: 'Styles Vestimentaires',
      restart: 'Voyager vers une Nouvelle Époque',
    },
    error: {
      title: 'La Transformation a Échoué',
      tryAgain: 'Réessayer',
      noImage: 'La transformation n\'a retourné aucune image valide. Cela pourrait être dû à des filtres de sécurité ou à un problème avec le prompt. Veuillez essayer une autre image ou une autre époque.',
      unknown: 'Une erreur inconnue est survenue lors de la transformation.',
      limitReached: 'Vous avez atteint la limite quotidienne de 3 transformations. Veuillez revenir demain !',
    }
  }
};
