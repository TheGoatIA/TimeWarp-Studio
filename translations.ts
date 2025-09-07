export const translations = {
  en: {
    header: {
      tagline: '"Travel through history, one photo at a time"',
    },
    footer: {
      hackathonProject: 'A project by <a href="https://borisgauty.com" target="_blank" rel="noopener noreferrer" class="underline hover:text-amber-300">Boris Gautier</a> for the Google Gemini Hackathon.',
      poweredBy: 'Powered by Gemini and Veo. All historical transformations are AI-generated.',
    },
    home: {
      title: 'Transform your photos into <span class="text-amber-400">timeless masterpieces</span>',
      subtitle: 'From fantasy realms to cyberpunk futures, explore your impossible selves. Upload a photo to begin your journey.',
    },
    uploader: {
      dragAndDrop: 'Drag & drop your photo here',
      or: 'or',
      button: 'Start the Time Travel',
      recommendation: '💡 **Pro Tip:** For best results, use a clear, well-lit photo where the face is prominent and looking towards the camera.',
      error: {
        notImage: 'Please select an image file (e.g., JPG, PNG, WEBP).',
        tooLarge: 'Image is too large. Please select a file smaller than 4MB.',
        readError: 'Failed to read the file.',
      },
    },
    eraSelector: {
      title: 'Select Your Destination',
      subtitle: 'Choose a universe to begin your transformation.',
      remaining: (count: number) => `You have ${count} transformation${count === 1 ? '' : 's'} left today.`,
      dailyChallenge: "Today's Challenge!",
      styleModal: {
        title: "Choose Your Style",
        subtitle: "Refine the artistic direction of your transformation.",
        button: "Transform",
        cancel: "Cancel",
        styles: {
          'Default': 'Default',
          'Oil Painting': 'Oil Painting',
          'Charcoal Drawing': 'Charcoal Drawing',
          'Cinematic': 'Cinematic',
          'Grainy Photo': 'Grainy Photo',
          'Intense Sepia': 'Intense Sepia',
          'Watercolor': 'Watercolor',
        }
      }
    },
    results: {
      title: 'Transformation Complete!',
      subtitle: (eraName: string) => `You have arrived in the world of <span class="font-bold text-amber-400">${eraName}</span>.`,
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
      contextTitle: 'Era Context',
      ambianceTitle: 'Era Ambiance',
      ambianceSubtitle: (eraName: string) => `Sounds of ${eraName}`,
      keyEvents: 'Key Events',
      culturalFacts: 'Cultural Facts',
      clothingStyles: 'Clothing Styles',
      restart: 'Travel to a New Era',
      magicEdit: {
        title: "Magic Edit",
        prompt: "e.g., 'add a pirate hat', 'change hair to blue'...",
        button: "Apply",
        error: "Magic Edit failed. Please try a different prompt.",
      },
      livingPortrait: {
        button: "Create Living Portrait",
        title: "Your Living Portrait is Ready!",
        error: "Failed to create animation. The digital spirits are resting.",
      }
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
      hackathonProject: 'Un projet par <a href="https://borisgauty.com" target="_blank" rel="noopener noreferrer" class="underline hover:text-amber-300">Boris Gautier</a> pour le Hackathon Google Gemini.',
      poweredBy: 'Propulsé par Gemini et Veo. Toutes les transformations historiques sont générées par IA.',
    },
    home: {
      title: 'Transformez vos photos en <span class="text-amber-400">chefs-d\'œuvre intemporels</span>',
      subtitle: 'Des royaumes fantastiques aux futurs cyberpunk, explorez vos alter ego impossibles. Téléchargez une photo pour commencer votre voyage.',
    },
    uploader: {
      dragAndDrop: 'Glissez-déposez votre photo ici',
      or: 'ou',
      button: 'Commencer le voyage temporel',
      recommendation: '💡 **Conseil :** Pour de meilleurs résultats, utilisez une photo nette et bien éclairée où le visage est bien visible et regarde vers l\'appareil photo.',
      error: {
        notImage: 'Veuillez sélectionner un fichier image (ex: JPG, PNG, WEBP).',
        tooLarge: 'L\'image est trop grande. Veuillez sélectionner un fichier de moins de 4 Mo.',
        readError: 'La lecture du fichier a échoué.',
      },
    },
    eraSelector: {
      title: 'Choisissez Votre Destination',
      subtitle: 'Choisissez un univers pour commencer votre transformation.',
      remaining: (count: number) => `Il vous reste ${count} transformation${count === 1 ? '' : 's'} aujourd'hui.`,
      dailyChallenge: "Défi du Jour !",
       styleModal: {
        title: "Choisissez Votre Style",
        subtitle: "Affinez la direction artistique de votre transformation.",
        button: "Transformer",
        cancel: "Annuler",
        styles: {
          'Default': 'Défaut',
          'Oil Painting': 'Peinture à l\'huile',
          'Charcoal Drawing': 'Dessin au fusain',
          'Cinematic': 'Cinématique',
          'Grainy Photo': 'Photo granuleuse',
          'Intense Sepia': 'Sépia intense',
          'Watercolor': 'Aquarelle',
        }
      }
    },
    results: {
      title: 'Transformation Terminée !',
      subtitle: (eraName: string) => `Vous êtes arrivé(e) dans le monde de : <span class="font-bold text-amber-400">${eraName}</span>.`,
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
      contextTitle: 'Contexte de l\'Époque',
      ambianceTitle: 'Ambiance d\'Époque',
      ambianceSubtitle: (eraName: string) => `Sons de l'époque ${eraName}`,
      keyEvents: 'Événements Clés',
      culturalFacts: 'Faits Culturels',
      clothingStyles: 'Styles Vestimentaires',
      restart: 'Voyager vers une Nouvelle Époque',
      magicEdit: {
        title: "Modification Magique",
        prompt: "ex: 'ajoute un chapeau de pirate', 'cheveux bleus'...",
        button: "Appliquer",
        error: "La modification magique a échoué. Veuillez essayer une autre instruction.",
      },
      livingPortrait: {
        button: "Créer un Portrait Vivant",
        title: "Votre Portrait Vivant est Prêt !",
        error: "La création de l'animation a échoué. Les esprits numériques se reposent.",
      }
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
