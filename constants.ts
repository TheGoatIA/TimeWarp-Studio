import type { Era } from './types';
import { Icons } from './components/Icons';

export const HISTORICAL_ERAS: Era[] = [
  {
    id: 'prehistory',
    name: { en: 'Prehistory', fr: 'Préhistoire' },
    period: { en: 'c. 40,000 - 4,000 BC', fr: 'env. 40 000 - 4 000 av. J.-C.' },
    description: {
      en: 'The age before written records, marked by the rise of Homo sapiens, cave art, and the first human societies.',
      fr: 'L\'âge avant les archives écrites, marqué par l\'essor de l\'Homo sapiens, l\'art rupestre et les premières sociétés humaines.',
    },
    icon: Icons.Prehistory,
    color: 'bg-orange-900/50 border-orange-600',
    styles: {
      en: ['Cro-Magnon Hunter', 'Lascaux Cave Artist', 'Neolithic Villager'],
      fr: ['Chasseur Cro-Magnon', 'Artiste de Lascaux', 'Villageois Néolithique'],
    },
    image: 'https://picsum.photos/seed/prehistory/800/600',
    keyEvents: {
      en: ['Development of stone tools', 'Creation of famous cave paintings (Lascaux, Chauvet)', 'The Agricultural Revolution'],
      fr: ['Développement des outils en pierre', 'Création de célèbres peintures rupestres (Lascaux, Chauvet)', 'La Révolution agricole'],
    },
    culturalFacts: {
      en: ['The first musical instruments, like bone flutes, were created', 'Early humans developed complex belief systems and burial rituals', 'Megalithic structures like Stonehenge were built'],
      fr: ['Les premiers instruments de musique, comme les flûtes en os, ont été créés', 'Les premiers humains ont développé des systèmes de croyances complexes et des rituels funéraires', 'Des structures mégalithiques comme Stonehenge ont été construites'],
    },
    clothingStyles: {
      en: ['Animal hides and furs', 'Simple leather loincloths and tunics', 'Jewelry made from shells, bones, and teeth'],
      fr: ['Peaux d\'animaux et fourrures', 'Simples pagnes et tuniques en cuir', 'Bijoux faits de coquillages, d\'os et de dents'],
    },
    ambianceSfx: 'https://cdn.pixabay.com/audio/2022/10/25/audio_553250b33b.mp3',
  },
  {
    id: 'pharaonic_egypt',
    name: { en: 'Pharaonic Egypt', fr: 'Égypte Pharaonique' },
    period: { en: 'c. 3100 - 30 BC', fr: 'env. 3100 - 30 av. J.-C.' },
    description: {
      en: 'A majestic civilization in Northeast Africa, known for its monumental pyramids, pharaohs, and complex mythology.',
      fr: 'Une civilisation majestueuse en Afrique du Nord-Est, connue pour ses pyramides monumentales, ses pharaons et sa mythologie complexe.',
    },
    icon: Icons.PharaonicEgypt,
    color: 'bg-yellow-900/50 border-yellow-500',
    styles: {
      en: ['Reigning Pharaoh', 'Scribe of Thoth', 'Priestess of Isis'],
      fr: ['Pharaon Régnant', 'Scribe de Thot', 'Prêtresse d\'Isis'],
    },
    image: 'https://picsum.photos/seed/egypt/800/600',
    keyEvents: {
      en: ['Unification of Upper and Lower Egypt', 'Building of the Great Pyramids of Giza', 'Reign of powerful pharaohs like Tutankhamun and Cleopatra'],
      fr: ['Unification de la Haute et de la Basse-Égypte', 'Construction des Grandes Pyramides de Gizeh', 'Règne de puissants pharaons comme Toutânkhamon et Cléopâtre'],
    },
    culturalFacts: {
      en: ['Development of hieroglyphic writing', 'Advanced knowledge of medicine and mathematics', 'Complex religious beliefs centered on an afterlife and mummification'],
      fr: ['Développement de l\'écriture hiéroglyphique', 'Connaissances avancées en médecine et en mathématiques', 'Croyances religieuses complexes centrées sur l\'au-delà et la momification'],
    },
    clothingStyles: {
      en: ['White linen kilts (schenti) for men', 'Simple sheath dresses (kalasiris) for women', 'Elaborate wigs, headdresses, and heavy kohl eyeliner'],
      fr: ['Kilts en lin blanc (schenti) pour les hommes', 'Robes fourreaux simples (kalasiris) pour les femmes', 'Perruques élaborées, coiffes et eye-liner khôl épais'],
    },
    ambianceSfx: 'https://cdn.pixabay.com/audio/2022/09/20/audio_03d2836217.mp3',
  },
  {
    id: 'antiquity',
    name: { en: 'Greco-Roman Antiquity', fr: 'Antiquité Gréco-Romaine' },
    period: { en: '800 BC - 500 AD', fr: '800 av. J.-C. - 500 ap. J.-C.' },
    description: {
      en: 'The era of the Greek and Roman empires, which laid the foundations of Western philosophy, democracy, and law.',
      fr: 'L\'ère des empires grec et romain, qui a jeté les bases de la philosophie, de la démocratie et du droit occidentaux.',
    },
    icon: Icons.Antiquity,
    color: 'bg-blue-900/50 border-blue-500',
    styles: {
      en: ['Greek Philosopher', 'Roman Senator', 'Athenian Citizen'],
      fr: ['Philosophe Grec', 'Sénateur Romain', 'Citoyen Athénien'],
    },
    image: 'https://picsum.photos/seed/antiquity/800/600',
    keyEvents: {
      en: ['Birth of Democracy in Athens', 'The Peloponnesian War', 'Rise and Fall of the Roman Empire'],
      fr: ['Naissance de la démocratie à Athènes', 'La guerre du Péloponnèse', 'Apogée et chute de l\'Empire romain'],
    },
    culturalFacts: {
      en: ['Olympic Games originated in ancient Greece', 'Roman law became the basis for many modern legal systems', 'Masterpieces of sculpture and architecture like the Parthenon'],
      fr: ['Les Jeux Olympiques sont nés en Grèce antique', 'Le droit romain est devenu la base de nombreux systèmes juridiques modernes', 'Chefs-d\'œuvre de la sculpture et de l\'architecture comme le Parthénon'],
    },
    clothingStyles: {
      en: ['Togas and stolas for Romans', 'Chitons and himations for Greeks', 'Leather sandals and intricate hairstyles'],
      fr: ['Toges et stolas pour les Romains', 'Chitons et himations pour les Grecs', 'Sandales en cuir et coiffures complexes'],
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
    id: 'ottoman_empire',
    name: { en: 'Ottoman Empire', fr: 'Empire Ottoman' },
    period: { en: '1299 - 1922', fr: '1299 - 1922' },
    description: {
      en: 'A powerful, multicultural empire centered in Anatolia that controlled much of Southeast Europe, Western Asia, and North Africa.',
      fr: 'Un empire multiculturel puissant centré en Anatolie qui contrôlait une grande partie de l\'Europe du Sud-Est, de l\'Asie occidentale et de l\'Afrique du Nord.',
    },
    icon: Icons.OttomanEmpire,
    color: 'bg-red-800/50 border-red-400',
    styles: {
      en: ['Sultan\'s Courtier', 'Janissary Soldier', 'Constantinople Merchant'],
      fr: ['Courtisan du Sultan', 'Soldat Janissaire', 'Marchand de Constantinople'],
    },
    image: 'https://picsum.photos/seed/ottoman/800/600',
    keyEvents: {
      en: ['Conquest of Constantinople in 1453', 'Reign of Suleiman the Magnificent', 'The Siege of Vienna'],
      fr: ['Conquête de Constantinople en 1453', 'Règne de Soliman le Magnifique', 'Le siège de Vienne'],
    },
    culturalFacts: {
      en: ['Flourishing of Islamic art, calligraphy, and architecture', 'Famous for its coffeehouses and intricate tilework (İznik pottery)', 'The Harem was a significant political and social institution'],
      fr: ['Épanouissement de l\'art islamique, de la calligraphie et de l\'architecture', 'Célèbre pour ses cafés et ses carreaux de faïence complexes (poterie d\'İznik)', 'Le Harem était une institution politique et sociale importante'],
    },
    clothingStyles: {
      en: ['Elaborate kaftans, turbans, and yashmaks', 'Use of rich fabrics like silk, brocade, and velvet', 'Layered clothing for both men and women'],
      fr: ['Kaftans élaborés, turbans et yashmaks', 'Utilisation de tissus riches comme la soie, le brocart et le velours', 'Vêtements superposés pour les hommes et les femmes'],
    },
    ambianceSfx: 'https://cdn.pixabay.com/audio/2022/01/27/audio_478025e103.mp3',
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
    id: 'belle_epoque',
    name: { en: 'Belle Époque', fr: 'Belle Époque' },
    period: { en: '1871 - 1914', fr: '1871 - 1914' },
    description: {
      en: 'A "Beautiful Era" of peace, prosperity, and optimism in France, marked by artistic and scientific innovation.',
      fr: 'Une "Belle Époque" de paix, de prospérité et d\'optimisme en France, marquée par l\'innovation artistique et scientifique.',
    },
    icon: Icons.BelleEpoque,
    color: 'bg-yellow-800/50 border-yellow-400',
    styles: {
      en: ['Parisian Artist', 'Moulin Rouge Dancer', 'Art Nouveau Socialite'],
      fr: ['Artiste Parisien', 'Danseuse du Moulin Rouge', 'Mondaine Art Nouveau'],
    },
    image: 'https://picsum.photos/seed/belleepoque/800/600',
    keyEvents: {
      en: ['The opening of the Eiffel Tower (1889)', 'The first modern Olympic Games (1896)', 'The invention of cinema by the Lumière brothers'],
      fr: ['L\'ouverture de la Tour Eiffel (1889)', 'Les premiers Jeux Olympiques modernes (1896)', 'L\'invention du cinéma par les frères Lumière'],
    },
    culturalFacts: {
      en: ['The height of Art Nouveau style', 'Cabarets like the Moulin Rouge and Folies Bergère flourished', 'Impressionist and Post-Impressionist art movements'],
      fr: ['L\'apogée du style Art Nouveau', 'Les cabarets comme le Moulin Rouge et les Folies Bergère prospéraient', 'Mouvements artistiques impressionnistes et post-impressionnistes'],
    },
    clothingStyles: {
      en: ['S-bend corsets creating a distinctive silhouette', 'Large, extravagant hats decorated with feathers and ribbons', 'Tailored suits for men with bowler or boater hats'],
      fr: ['Corsets en "S" créant une silhouette distinctive', 'Grands chapeaux extravagants décorés de plumes et de rubans', 'Costumes sur mesure pour hommes avec chapeaux melons ou canotiers'],
    },
    ambianceSfx: 'https://cdn.pixabay.com/audio/2022/05/29/audio_d149479b13.mp3',
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
  {
    id: 'nineties',
    name: { en: 'The Nineties', fr: 'Les Années 90' },
    period: { en: '1990s', fr: 'Années 1990' },
    description: {
      en: 'A decade of grunge, pop culture, and the dawn of the public internet, defining a generation with its eclectic style.',
      fr: 'Une décennie de grunge, de culture pop et de l\'aube de l\'internet public, définissant une génération par son style éclectique.',
    },
    icon: Icons.Nineties,
    color: 'bg-indigo-800/50 border-indigo-400',
    styles: {
      en: ['Grunge Rocker', 'Hip-Hop Fan', 'Bubblegum Pop Star'],
      fr: ['Rockeur Grunge', 'Fan de Hip-Hop', 'Star de la Pop Bubblegum'],
    },
    image: 'https://picsum.photos/seed/nineties/800/600',
    keyEvents: {
      en: ['The fall of the Soviet Union', 'The launch of the World Wide Web to the public', 'The release of iconic films like Jurassic Park and Pulp Fiction'],
      fr: ['La chute de l\'Union soviétique', 'Le lancement du World Wide Web au public', 'La sortie de films emblématiques comme Jurassic Park et Pulp Fiction'],
    },
    culturalFacts: {
      en: ['The rise of alternative rock and grunge music (Nirvana, Pearl Jam)', 'Hip-hop culture becomes mainstream', 'Popularity of sitcoms like "Friends" and "Seinfeld"'],
      fr: ['L\'essor du rock alternatif et de la musique grunge (Nirvana, Pearl Jam)', 'La culture hip-hop devient grand public', 'Popularité des sitcoms comme "Friends" et "Seinfeld"'],
    },
    clothingStyles: {
      en: ['Grunge: flannel shirts, ripped jeans, combat boots', 'Hip-hop: baggy jeans, oversized sports jerseys, gold chains', 'Preppy: slip dresses, plaid skirts, "The Rachel" haircut'],
      fr: ['Grunge : chemises en flanelle, jeans déchirés, bottes de combat', 'Hip-hop : jeans baggy, maillots de sport surdimensionnés, chaînes en or', 'Preppy : robes nuisettes, jupes à carreaux, coupe de cheveux "à la Rachel"'],
    },
    ambianceSfx: 'https://cdn.pixabay.com/audio/2022/11/17/audio_49e984951a.mp3',
  },
  {
    id: 'two_thousands',
    name: { en: 'The 2000s', fr: 'Les Années 2000' },
    period: { en: '2000s', fr: 'Années 2000' },
    description: {
      en: 'The Y2K era of pop princesses, bling culture, and the rise of reality TV and the early social internet.',
      fr: 'L\'ère Y2K des princesses de la pop, de la culture bling-bling, et de la montée de la télé-réalité et des débuts de l\'internet social.',
    },
    icon: Icons.TwoThousands,
    color: 'bg-rose-800/50 border-rose-400',
    styles: {
      en: ['Y2K Pop Icon', 'Bling-Bling Rapper', 'Early Tech Enthusiast'],
      fr: ['Icône Pop Y2K', 'Rappeur Bling-Bling', 'Passionné de Tech des débuts'],
    },
    image: 'https://picsum.photos/seed/2000s/800/600',
    keyEvents: {
      en: ['The Y2K bug scare', 'The launch of the iPod (2001) and iPhone (2007)', 'The rise of social media platforms like MySpace and Facebook'],
      fr: ['La peur du bug de l\'an 2000', 'Le lancement de l\'iPod (2001) et de l\'iPhone (2007)', 'L\'essor des plateformes de médias sociaux comme MySpace et Facebook'],
    },
    culturalFacts: {
      en: ['Reality TV shows like "Survivor" and "American Idol" dominate', 'Pop music icons like Britney Spears and Christina Aguilera', 'The peak of blockbuster fantasy film franchises like Harry Potter and Lord of the Rings'],
      fr: ['Les émissions de télé-réalité comme "Survivor" et "American Idol" dominent', 'Les icônes de la musique pop comme Britney Spears et Christina Aguilera', 'L\'apogée des franchises de films fantastiques à succès comme Harry Potter et Le Seigneur des Anneaux'],
    },
    clothingStyles: {
      en: ['Low-rise jeans, crop tops, and trucker hats', 'Velour tracksuits (Juicy Couture)', 'Von Dutch hats, oversized sunglasses, and flip phones as accessories'],
      fr: ['Jeans taille basse, crop tops et casquettes de camionneur', 'Survêtements en velours (Juicy Couture)', 'Casquettes Von Dutch, lunettes de soleil surdimensionnées et téléphones à clapet comme accessoires'],
    },
    ambianceSfx: 'https://cdn.pixabay.com/audio/2023/04/24/audio_959f63d08c.mp3',
  },
];
