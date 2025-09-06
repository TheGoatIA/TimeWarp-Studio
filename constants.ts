import type { Era } from './types';
import { Icons } from './components/Icons';

export const HISTORICAL_ERAS: Era[] = [
  {
    id: 'antiquity',
    name: { en: 'Antiquity', fr: 'Antiquité' },
    period: { en: '3000 BC - 500 AD', fr: '3000 av. J.-C. - 500 ap. J.-C.' },
    description: {
      en: 'The era of empires like Egypt, Greece, and Rome, marked by monumental architecture and philosophy.',
      fr: 'L\'ère des empires comme l\'Égypte, la Grèce et Rome, marquée par une architecture monumentale et la philosophie.',
    },
    icon: Icons.Antiquity,
    color: 'bg-blue-900/50 border-blue-500',
    styles: {
      en: ['Egyptian Pharaoh', 'Greek Philosopher', 'Roman Senator'],
      fr: ['Pharaon Égyptien', 'Philosophe Grec', 'Sénateur Romain'],
    },
    image: 'https://picsum.photos/seed/antiquity/800/600',
    keyEvents: {
      en: ['Building of the Great Pyramids', 'Birth of Democracy in Athens', 'Rise and Fall of the Roman Empire'],
      fr: ['Construction des Grandes Pyramides', 'Naissance de la démocratie à Athènes', 'Apogée et chute de l\'Empire romain'],
    },
    culturalFacts: {
      en: ['Invention of writing (cuneiform and hieroglyphs)', 'Olympic Games originated in ancient Greece', 'Roman law became the basis for many modern legal systems'],
      fr: ['Invention de l\'écriture (cunéiforme et hiéroglyphes)', 'Les Jeux Olympiques sont nés en Grèce antique', 'Le droit romain est devenu la base de nombreux systèmes juridiques modernes'],
    },
    clothingStyles: {
      en: ['Linen kilts and shendyts for Egyptians', 'Togas and stolas for Romans', 'Chitons and himations for Greeks'],
      fr: ['Kilts en lin et chendjits pour les Égyptiens', 'Toges et stolas pour les Romains', 'Chitons et himations pour les Grecs'],
    },
    ambianceSfx: 'https://cdn.pixabay.com/audio/2022/02/07/audio_75b8795154.mp3',
  },
  {
    id: 'middle_ages',
    name: { en: 'Middle Ages', fr: 'Moyen Âge' },
    period: { en: '500 - 1500', fr: '500 - 1500' },
    description: {
      en: 'A time of knights, castles, and feudalism, with Byzantine and Gothic influences.',
      fr: 'Une époque de chevaliers, de châteaux et de féodalité, avec des influences byzantines et gothiques.',
    },
    icon: Icons.MiddleAges,
    color: 'bg-red-900/50 border-red-500',
    styles: {
      en: ['Medieval Knight', 'Byzantine Noble', 'Gothic Scholar'],
      fr: ['Chevalier Médiéval', 'Noble Byzantin', 'Érudit Gothique'],
    },
    image: 'https://picsum.photos/seed/middleages/800/600',
    keyEvents: {
      en: ['The Black Death plague', 'The Crusades', 'Signing of the Magna Carta'],
      fr: ['La peste noire', 'Les Croisades', 'Signature de la Magna Carta'],
    },
    culturalFacts: {
      en: ['Rise of universities', 'Development of Gothic architecture', 'Code of chivalry among knights'],
      fr: ['Essor des universités', 'Développement de l\'architecture gothique', 'Code de la chevalerie chez les chevaliers'],
    },
    clothingStyles: {
      en: ['Chainmail and plate armor for knights', 'Tunics, cloaks, and wimples', 'Elaborate silk robes in the Byzantine court'],
      fr: ['Cotte de mailles et armure de plates pour les chevaliers', 'Tuniques, capes et guimpes', 'Robes de soie élaborées à la cour byzantine'],
    },
    ambianceSfx: 'https://cdn.pixabay.com/audio/2022/08/03/audio_a84b292a7e.mp3',
  },
  {
    id: 'renaissance',
    name: { en: 'Renaissance', fr: 'Renaissance' },
    period: { en: '1400 - 1600', fr: '1400 - 1600' },
    description: {
      en: 'A fervent period of European cultural, artistic, political and economic “rebirth” following the Middle Ages.',
      fr: 'Une période fervente de "renaissance" culturelle, artistique, politique et économique en Europe après le Moyen Âge.',
    },
    icon: Icons.Renaissance,
    color: 'bg-emerald-900/50 border-emerald-500',
    styles: {
      en: ['Florentine Noble', 'Bohemian Artist', 'Venetian Merchant'],
      fr: ['Noble Florentin', 'Artiste Bohème', 'Marchand Vénitien'],
    },
    image: 'https://picsum.photos/seed/renaissance/800/600',
    keyEvents: {
      en: ['Invention of the printing press', 'Voyages of Christopher Columbus', 'The Protestant Reformation'],
      fr: ['Invention de l\'imprimerie', 'Voyages de Christophe Colomb', 'La Réforme protestante'],
    },
    culturalFacts: {
      en: ['Masterpieces by Leonardo da Vinci and Michelangelo', 'Humanism philosophy emphasized individual potential', 'Medici family patronage of the arts in Florence'],
      fr: ['Chefs-d\'œuvre de Léonard de Vinci et Michel-Ange', 'La philosophie humaniste met l\'accent sur le potentiel individuel', 'Mécénat des arts par la famille Médicis à Florence'],
    },
    clothingStyles: {
      en: ['Slashing and puffing on sleeves', 'Use of luxurious fabrics like velvet and silk', 'Ruffs, corsets, and farthingales'],
      fr: ['Crevés et bouffants sur les manches', 'Utilisation de tissus luxueux comme le velours et la soie', 'Fraises, corsets et vertugadins'],
    },
    ambianceSfx: 'https://cdn.pixabay.com/audio/2023/10/24/audio_3234d64239.mp3',
  },
  {
    id: 'victorian_era',
    name: { en: 'Victorian Era', fr: 'Ère Victorienne' },
    period: { en: '1837 - 1901', fr: '1837 - 1901' },
    description: {
      en: 'A period of industrial, cultural, political, scientific, and military change under the reign of Queen Victoria.',
      fr: 'Une période de changements industriels, culturels, politiques, scientifiques et militaires sous le règne de la reine Victoria.',
    },
    icon: Icons.Victorian,
    color: 'bg-orange-900/50 border-orange-500',
    styles: {
      en: ['British Aristocrat', 'Steampunk Inventor', 'World Explorer'],
      fr: ['Aristocrate Britannique', 'Inventeur Steampunk', 'Explorateur du Monde'],
    },
    image: 'https://picsum.photos/seed/victorian/800/600',
    keyEvents: {
      en: ['The Industrial Revolution', 'Publication of Darwin\'s "On the Origin of Species"', 'The Great Exhibition of 1851'],
      fr: ['La Révolution industrielle', 'Publication de "L\'Origine des espèces" de Darwin', 'La Grande Exposition de 1851'],
    },
    culturalFacts: {
      en: ['Strict social etiquette and moral codes', 'Popularity of novels by authors like Charles Dickens', 'Invention of photography and the telephone'],
      fr: ['Étiquette sociale et codes moraux stricts', 'Popularité des romans d\'auteurs comme Charles Dickens', 'Invention de la photographie et du téléphone'],
    },
    clothingStyles: {
      en: ['Crinolines, bustles, and corsets for women', 'Top hats, frock coats, and waistcoats for men', 'Mourning clothes were elaborate and strictly observed'],
      fr: ['Crinolines, tournures et corsets pour les femmes', 'Hauts-de-forme, redingotes et gilets pour les hommes', 'Les vêtements de deuil étaient élaborés et strictement observés'],
    },
    ambianceSfx: 'https://cdn.pixabay.com/audio/2023/04/28/audio_72559598af.mp3',
  },
  {
    id: 'roaring_twenties',
    name: { en: 'Roaring Twenties', fr: 'Années Folles' },
    period: { en: '1920s', fr: 'Années 1920' },
    description: {
      en: 'A decade of economic growth and widespread prosperity, driven by recovery from wartime devastation and deferred spending.',
      fr: 'Une décennie de croissance économique et de prospérité généralisée, portée par la reprise après la dévastation de la guerre.',
    },
    icon: Icons.Twenties,
    color: 'bg-cyan-800/50 border-cyan-400',
    styles: {
      en: ['Art Deco Flapper', 'Jazz Musician', 'Silent Film Star'],
      fr: ['Garçonne Art Déco', 'Musicien de Jazz', 'Star du Cinéma Muet'],
    },
    image: 'https://picsum.photos/seed/twenties/800/600',
    keyEvents: {
      en: ['US Women\'s Suffrage (19th Amendment)', 'Prohibition Era in the US', 'The Wall Street Crash of 1929'],
      fr: ['Droit de vote des femmes aux États-Unis (19e amendement)', 'La Prohibition aux États-Unis', 'Le Krach de Wall Street de 1929'],
    },
    culturalFacts: {
      en: ['The Jazz Age flourished in cities', 'Art Deco style in architecture and design', 'Rise of cinema and movie stars like Charlie Chaplin'],
      fr: ['L\'Âge du Jazz fleurit dans les villes', 'Le style Art Déco en architecture et design', 'Essor du cinéma et des stars comme Charlie Chaplin'],
    },
    clothingStyles: {
      en: ['Dropped-waist dresses and bobbed hairstyles for flappers', 'Cloche hats and long beaded necklaces', 'Zoot suits and fedoras for men'],
      fr: ['Robes à taille basse et coiffures "à la garçonne"', 'Chapeaux cloche et longs colliers de perles', 'Costumes "zoot" et fédoras pour les hommes'],
    },
    ambianceSfx: 'https://cdn.pixabay.com/audio/2022/05/27/audio_a518f80a71.mp3',
  },
  {
    id: 'swinging_sixties',
    name: { en: 'Swinging Sixties', fr: 'Swinging Sixties' },
    period: { en: '1960s', fr: 'Années 1960' },
    description: {
      en: 'A youth-driven cultural revolution that emphasized modernity and fun-loving hedonism.',
      fr: 'Une révolution culturelle menée par la jeunesse qui mettait l\'accent sur la modernité et l\'hédonisme.',
    },
    icon: Icons.Sixties,
    color: 'bg-pink-800/50 border-pink-400',
    styles: {
      en: ['Mod Fashion Icon', 'Hippie Flower Child', 'Pop Artist'],
      fr: ['Icône de la mode Mod', 'Hippie "Flower Child"', 'Artiste Pop Art'],
    },
    image: 'https://picsum.photos/seed/sixties/800/600',
    keyEvents: {
      en: ['The Moon Landing in 1969', 'The Civil Rights Movement', 'The Woodstock Music Festival'],
      fr: ['L\'alunissage en 1969', 'Le Mouvement des droits civiques', 'Le festival de musique de Woodstock'],
    },
    culturalFacts: {
      en: ['The "British Invasion" led by The Beatles', 'Rise of Pop Art by artists like Andy Warhol', 'Counter-culture and the anti-war movement'],
      fr: ['L\'"invasion britannique" menée par les Beatles', 'Montée du Pop Art avec des artistes comme Andy Warhol', 'Contre-culture et mouvement anti-guerre'],
    },
    clothingStyles: {
      en: ['Miniskirts and go-go boots', 'Psychedelic prints, bell-bottoms, and tie-dye', 'Mod suits and mop-top haircuts'],
      fr: ['Minijupes et bottes go-go', 'Imprimés psychédéliques, pantalons à pattes d\'éléphant et tie-dye', 'Costumes Mod et coiffures "mop-top"'],
    },
    ambianceSfx: 'https://cdn.pixabay.com/audio/2021/11/22/audio_1e3703c73e.mp3',
  },
  {
    id: 'disco_fever',
    name: { en: 'Disco Fever', fr: 'Fièvre du Disco' },
    period: { en: '1970s', fr: 'Années 1970' },
    description: {
      en: 'An era of glitter, glam, and dance floors, defined by its pulsating beats and extravagant fashion.',
      fr: 'Une ère de paillettes, de glamour et de pistes de danse, définie par ses rythmes endiablés et sa mode extravagante.',
    },
    icon: Icons.Disco,
    color: 'bg-purple-800/50 border-purple-400',
    styles: {
      en: ['Studio 54 Regular', 'Funk Musician', 'Glam Rocker'],
      fr: ['Habitué du Studio 54', 'Musicien Funk', 'Rockeur Glam'],
    },
    image: 'https://picsum.photos/seed/disco/800/600',
    keyEvents: {
      en: ['End of the Vietnam War', 'The Watergate scandal', 'First Earth Day, marking the rise of environmentalism'],
      fr: ['Fin de la guerre du Viêt Nam', 'Le scandale du Watergate', 'Premier Jour de la Terre, marquant la montée de l\'écologisme'],
    },
    culturalFacts: {
      en: ['Disco music dominated the charts', 'Studio 54 in NYC was the epicenter of nightlife', 'Blockbuster films like "Star Wars" and "Jaws"'],
      fr: ['La musique disco dominait les classements', 'Le Studio 54 à New York était l\'épicentre de la vie nocturne', 'Films à succès comme "Star Wars" et "Les Dents de la mer"'],
    },
    clothingStyles: {
      en: ['Bell-bottom pants and platform shoes', 'Sequin-covered tops and polyester suits', 'Big hair, including afros and feathered styles'],
      fr: ['Pantalons à pattes d\'éléphant et chaussures à plateforme', 'Hauts à paillettes et costumes en polyester', 'Coiffures volumineuses, y compris les afros'],
    },
    ambianceSfx: 'https://cdn.pixabay.com/audio/2024/02/26/audio_f59c25605d.mp3',
  },
  {
    id: 'new_wave',
    name: { en: 'New Wave', fr: 'New Wave' },
    period: { en: '1980s', fr: 'Années 1980' },
    description: {
      en: 'Characterized by synthesizers, bold colors, and a rebellious spirit in music and fashion.',
      fr: 'Caractérisée par les synthétiseurs, les couleurs vives et un esprit rebelle dans la musique et la mode.',
    },
    icon: Icons.Eighties,
    color: 'bg-teal-800/50 border-teal-400',
    styles: {
      en: ['Punk Rocker', 'New Wave Synth-Pop Star', 'Yuppie'],
      fr: ['Rockeur Punk', 'Star de la Synth-Pop New Wave', 'Yuppie'],
    },
    image: 'https://picsum.photos/seed/eighties/800/600',
    keyEvents: {
      en: ['Fall of the Berlin Wall', 'The rise of personal computing (Apple Macintosh, IBM PC)', 'The Live Aid charity concert'],
      fr: ['Chute du mur de Berlin', 'L\'essor de l\'informatique personnelle (Apple Macintosh, IBM PC)', 'Le concert caritatif Live Aid'],
    },
    culturalFacts: {
      en: ['MTV launched, revolutionizing the music industry', 'Arcade games like Pac-Man and Donkey Kong were hugely popular', 'Iconic films by directors like Steven Spielberg and John Hughes'],
      fr: ['Lancement de MTV, révolutionnant l\'industrie musicale', 'Les jeux d\'arcade comme Pac-Man et Donkey Kong étaient extrêmement populaires', 'Films emblématiques de réalisateurs comme Steven Spielberg et John Hughes'],
    },
    clothingStyles: {
      en: ['Power suits with large shoulder pads', 'Neon colors, leg warmers, and acid-wash jeans', 'Punk styles with leather jackets and mohawks'],
      fr: ['Costumes "power suit" avec de larges épaulettes', 'Couleurs néon, jambières et jeans délavés à l\'acide', 'Styles punk avec vestes en cuir et crêtes iroquoises'],
    },
    ambianceSfx: 'https://cdn.pixabay.com/audio/2023/06/15/audio_1721a719c8.mp3',
  },
];