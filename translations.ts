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
          'Default': { name: 'Default', description: 'A balanced and photorealistic transformation true to the era.' },
          'Oil Painting': { name: 'Oil Painting', description: 'Reimagines your photo as a classic, textured oil painting.' },
          'Charcoal Drawing': { name: 'Charcoal Drawing', description: 'A dramatic, high-contrast sketch in black and white.' },
          'Cinematic': { name: 'Cinematic', description: 'Adds dramatic lighting and a wide-screen feel, like a still from a movie.' },
          'Grainy Photo': { name: 'Grainy Photo', description: 'Simulates the look of an old, vintage photograph with film grain.' },
          'Intense Sepia': { name: 'Intense Sepia', description: 'A deep, warm brown monochrome tone for a strong nostalgic effect.' },
          'Watercolor': { name: 'Watercolor', description: 'A soft, blended, and artistic look with light, transparent colors.' },
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
    },
    error: {
      title: 'Transformation Failed',
      tryAgain: 'Try Again',
      noImage: 'The transformation returned no valid images. This could be due to safety filters or an issue with the prompt. Please try a different image or era.',
      unknown: 'An unknown error occurred during transformation.',
      limitReached: 'You have reached the daily limit of 2 transformations. Please come back tomorrow!',
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
          'Default': { name: 'Défaut', description: 'Une transformation équilibrée et photoréaliste fidèle à l\'époque.' },
          'Oil Painting': { name: 'Peinture à l\'huile', description: 'Réinvente votre photo en une peinture à l\'huile classique et texturée.' },
          'Charcoal Drawing': { name: 'Dessin au fusain', description: 'Une esquisse dramatique à fort contraste en noir et blanc.' },
          'Cinematic': { name: 'Cinématique', description: 'Ajoute un éclairage dramatique et un aspect grand écran, comme une image de film.' },
          'Grainy Photo': { name: 'Photo granuleuse', description: 'Simule l\'aspect d\'une vieille photographie vintage avec du grain de film.' },
          'Intense Sepia': { name: 'Sépia intense', description: 'Un ton monochrome brun chaud et profond pour un fort effet nostalgique.' },
          'Watercolor': { name: 'Aquarelle', description: 'Un aspect doux, fondu et artistique avec des couleurs légères et transparentes.' },
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
    },
    error: {
      title: 'La Transformation a Échoué',
      tryAgain: 'Réessayer',
      noImage: 'La transformation n\'a retourné aucune image valide. Cela pourrait être dû à des filtres de sécurité ou à un problème avec le prompt. Veuillez essayer une autre image ou une autre époque.',
      unknown: 'Une erreur inconnue est survenue lors de la transformation.',
      limitReached: 'Vous avez atteint la limite quotidienne de 2 transformations. Veuillez revenir demain !',
    }
  }
};