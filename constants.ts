import type { Era } from './types';
import { Icons } from './components/Icons';

export const ERAS: Era[] = [
  // Historical
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
    image: '',
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
    category: { en: 'Historical Eras', fr: 'Époques Historiques' },
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
    image: '',
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
    category: { en: 'Historical Eras', fr: 'Époques Historiques' },
  },
  {
    id: 'antiquity',
    name: { en: 'Greco-Roman Antiquity', fr: 'Antiquité Gréco-Romaine' },
    period: { en: 'c. 800 BC - 500 AD', fr: 'env. 800 av. J.-C. - 500 ap. J.-C.' },
    description: {
      en: 'The cradle of Western civilization, featuring epic philosophy, democracy, monumental architecture, and powerful empires.',
      fr: 'Le berceau de la civilisation occidentale, avec sa philosophie épique, sa démocratie, son architecture monumentale et ses empires puissants.',
    },
    icon: Icons.Antiquity,
    color: 'bg-stone-700/50 border-stone-400',
    styles: {
      en: ['Roman Senator in a Toga', 'Greek Philosopher in Athens', 'Spartan Warrior'],
      fr: ['Sénateur Romain en Toge', 'Philosophe Grec à Athènes', 'Guerrier Spartiate'],
    },
    image: '',
    keyEvents: {
      en: ['The founding of Rome', 'The Golden Age of Athens under Pericles', 'The rise and fall of the Roman Empire'],
      fr: ['La fondation de Rome', 'L\'Âge d\'or d\'Athènes sous Périclès', 'L\'ascension et la chute de l\'Empire romain'],
    },
    culturalFacts: {
      en: ['Birthplace of democracy, philosophy, and theater', 'Roman engineering marvels like aqueducts and the Colosseum', 'The Olympic Games were founded in ancient Greece'],
      fr: ['Lieu de naissance de la démocratie, de la philosophie et du théâtre', 'Merveilles de l\'ingénierie romaine comme les aqueducs et le Colisée', 'Les Jeux Olympiques ont été fondés en Grèce antique'],
    },
    clothingStyles: {
      en: ['Simple tunics (chiton) and draped cloaks (himation) for Greeks', 'The iconic toga for Roman citizens', 'Leather sandals (caligae) for soldiers'],
      fr: ['Tuniques simples (chiton) et manteaux drapés (himation) pour les Grecs', 'L\'emblématique toge pour les citoyens romains', 'Sandales en cuir (caligae) pour les soldats'],
    },
    category: { en: 'Historical Eras', fr: 'Époques Historiques' },
  },
  {
    id: 'middle_ages',
    name: { en: 'Middle Ages', fr: 'Moyen Âge' },
    period: { en: 'c. 500 - 1500 AD', fr: 'env. 500 - 1500' },
    description: {
      en: 'An era of knights, castles, and cathedrals, stretching from the fall of Rome to the dawn of the Renaissance.',
      fr: 'Une ère de chevaliers, de châteaux et de cathédrales, s\'étendant de la chute de Rome à l\'aube de la Renaissance.',
    },
    icon: Icons.MiddleAges,
    color: 'bg-slate-700/50 border-slate-400',
    styles: {
      en: ['Knight in Shining Armor', 'Gothic Cathedral Artisan', 'Medieval Court Jester'],
      fr: ['Chevalier en Armure Étincelante', 'Artisan de Cathédrale Gothique', 'Bouffon de Cour Médiéval'],
    },
    image: '',
    keyEvents: {
      en: ['The Viking Age', 'The signing of the Magna Carta', 'The Black Death pandemic'],
      fr: ['L\'Âge des Vikings', 'La signature de la Magna Carta', 'La pandémie de la Peste Noire'],
    },
    culturalFacts: {
      en: ['The feudal system structured society', 'Monks in monasteries preserved ancient knowledge', 'The first universities were established in Europe'],
      fr: ['Le système féodal structurait la société', 'Les moines dans les monastères préservaient les connaissances anciennes', 'Les premières universités ont été établies en Europe'],
    },
    clothingStyles: {
      en: ['Chainmail and plate armor for knights', 'Linen tunics and woolen cloaks for commoners', 'Pointed shoes (poulaines) and elaborate headdresses (hennins) for nobility'],
      fr: ['Cotte de mailles et armure de plaques pour les chevaliers', 'Tuniques en lin et manteaux en laine pour les roturiers', 'Chaussures pointues (poulaines) et coiffes élaborées (hennins) pour la noblesse'],
    },
    category: { en: 'Historical Eras', fr: 'Époques Historiques' },
  },
  {
    id: 'renaissance',
    name: { en: 'Renaissance', fr: 'Renaissance' },
    period: { en: 'c. 1400 - 1600 AD', fr: 'env. 1400 - 1600' },
    description: {
      en: 'A fervent period of European cultural, artistic, political, and economic "rebirth" following the Middle Ages.',
      fr: 'Une période fervente de "renaissance" culturelle, artistique, politique et économique en Europe après le Moyen Âge.',
    },
    icon: Icons.Renaissance,
    color: 'bg-rose-900/50 border-rose-500',
    styles: {
      en: ['Da Vinci-esque Inventor', 'Florentine Noble', 'Shakespearean Actor'],
      fr: ['Inventeur à la De Vinci', 'Noble Florentin', 'Acteur Shakespearien'],
    },
    image: '',
    keyEvents: {
      en: ['The invention of the printing press by Gutenberg', 'The works of Leonardo da Vinci and Michelangelo', 'The Age of Exploration begins'],
      fr: ['L\'invention de l\'imprimerie par Gutenberg', 'Les œuvres de Léonard de Vinci et Michel-Ange', 'Le début de l\'Âge des Grandes Découvertes'],
    },
    culturalFacts: {
      en: ['A renewed interest in classical Greek and Roman culture', 'Humanism, a philosophy focusing on human potential, gained prominence', 'The powerful Medici family were major patrons of the arts'],
      fr: ['Un intérêt renouvelé pour la culture classique grecque et romaine', 'L\'humanisme, une philosophie axée sur le potentiel humain, a gagné en importance', 'La puissante famille Médicis était un mécène majeur des arts'],
    },
    clothingStyles: {
      en: ['Luxurious fabrics like velvet and silk', 'Voluminous sleeves, ruffs, and doublets for men', 'Corsets, farthingales, and elaborate gowns for women'],
      fr: ['Tissus luxueux comme le velours et la soie', 'Manches volumineuses, fraises et pourpoints pour les hommes', 'Corsets, vertugadins et robes élaborées pour les femmes'],
    },
    category: { en: 'Historical Eras', fr: 'Époques Historiques' },
  },
  {
    id: 'feudal_japan',
    name: { en: 'Feudal Japan', fr: 'Japon Féodal' },
    period: { en: 'c. 1603 - 1868 AD (Edo Period)', fr: 'env. 1603 - 1868 (Période Edo)' },
    description: { en: 'Step into the world of samurai warriors, elegant geishas, and the vibrant arts of the Edo period under the rule of the shoguns.', fr: 'Entrez dans le monde des samouraïs, des geishas élégantes et des arts vibrants de la période Edo sous le règne des shoguns.' },
    icon: Icons.FeudalJapan,
    color: 'bg-indigo-900/50 border-indigo-500',
    styles: { en: ['Honorable Samurai Warrior', 'Graceful Geisha in Kyoto', 'Ukiyo-e Woodblock Artist'], fr: ['Honorable Samouraï', 'Gracieuse Geisha à Kyoto', 'Artiste d\'estampes Ukiyo-e'] },
    image: '',
    keyEvents: { en: ['Establishment of the Tokugawa Shogunate', 'Period of national isolation (sakoku)', 'Flourishing of Kabuki theater and Sumo wrestling'], fr: ['Établissement du shogunat Tokugawa', 'Période d\'isolement national (sakoku)', 'Floraison du théâtre Kabuki et de la lutte Sumo'] },
    culturalFacts: { en: ['The samurai followed a strict code of conduct called Bushido', 'Ukiyo-e, or "pictures of the floating world," became a major art form', 'Haiku poetry was perfected by masters like Bashō'], fr: ['Les samouraïs suivaient un code de conduite strict appelé Bushido', 'L\'Ukiyo-e, ou "images du monde flottant", est devenu une forme d\'art majeure', 'La poésie Haïku a été perfectionnée par des maîtres comme Bashō'] },
    clothingStyles: { en: ['Layered kimonos with intricate patterns', 'Samurai armor (yoroi) and helmets (kabuto)', 'Traditional geta sandals and tabi socks'], fr: ['Kimonos superposés aux motifs complexes', 'Armures de samouraï (yoroi) et casques (kabuto)', 'Sandales traditionnelles geta et chaussettes tabi'] },
    category: { en: 'Historical Eras', fr: 'Époques Historiques' },
  },
  {
    id: 'victorian',
    name: { en: 'Victorian Era', fr: 'Époque Victorienne' },
    period: { en: '1837 - 1901', fr: '1837 - 1901' },
    description: {
      en: 'A time of industrial revolution, scientific discovery, and strict social mores under the long reign of Queen Victoria.',
      fr: 'Une époque de révolution industrielle, de découvertes scientifiques et de mœurs sociales strictes sous le long règne de la reine Victoria.',
    },
    icon: Icons.Victorian,
    color: 'bg-gray-800/50 border-gray-500',
    styles: {
      en: ['Industrial Revolution Inventor', 'High Society Lady at a Ball', 'Sherlock Holmes-style Detective'],
      fr: ['Inventeur de la Révolution Industrielle', 'Dame de la Haute Société à un Bal', 'Détective style Sherlock Holmes'],
    },
    image: '',
    keyEvents: {
      en: ['The Great Exhibition of 1851', 'Publication of Darwin\'s "On the Origin of Species"', 'The construction of the London Underground'],
      fr: ['La Grande Exposition de 1851', 'Publication de "De l\'origine des espèces" de Darwin', 'La construction du métro de Londres'],
    },
    culturalFacts: {
      en: ['The rise of the novel as a major literary form (Dickens, Brontë sisters)', 'A fascination with spiritualism and the supernatural', 'Strict etiquette governed all aspects of public and private life'],
      fr: ['L\'essor du roman comme forme littéraire majeure (Dickens, les sœurs Brontë)', 'Une fascination pour le spiritisme et le surnaturel', 'Une étiquette stricte régissait tous les aspects de la vie publique et privée'],
    },
    clothingStyles: {
      en: ['Corsets, bustles, and large crinoline skirts for women', 'Top hats, frock coats, and waistcoats for men', 'Mourning clothes were worn for extended periods'],
      fr: ['Corsets, tournures et grandes jupes à crinoline pour les femmes', 'Chapeaux haut-de-forme, redingotes et gilets pour les hommes', 'Les vêtements de deuil étaient portés pendant de longues périodes'],
    },
    category: { en: 'Historical Eras', fr: 'Époques Historiques' },
  },
  {
    id: 'twenties',
    name: { en: 'Roaring Twenties', fr: 'Années Folles' },
    period: { en: '1920 - 1929', fr: '1920 - 1929' },
    description: {
      en: 'A decade of economic growth and widespread social change, known for its jazz music, flapper fashion, and Art Deco style.',
      fr: 'Une décennie de croissance économique et de profonds changements sociaux, connue pour sa musique jazz, sa mode garçonne et son style Art Déco.',
    },
    icon: Icons.Twenties,
    color: 'bg-yellow-800/50 border-yellow-400',
    styles: {
      en: ['Jazz Age Flapper', 'Silent Film Star', 'Art Deco Speakeasy Patron'],
      fr: ['Garçonne de l\'Âge du Jazz', 'Star du Cinéma Muet', 'Client d\'un Speakeasy Art Déco'],
    },
    image: '',
    keyEvents: {
      en: ['The beginning of mass radio broadcasting', 'The discovery of Tutankhamun\'s tomb', 'The Wall Street Crash of 1929'],
      fr: ['Le début de la radiodiffusion de masse', 'La découverte du tombeau de Toutânkhamon', 'Le Krach de Wall Street de 1929'],
    },
    culturalFacts: {
      en: ['The "flapper" became a symbol of a new, liberated woman', 'Jazz music flourished in cities like New Orleans, Chicago, and New York', 'Prohibition in the US led to the rise of illegal bars called speakeasies'],
      fr: ['La "garçonne" est devenue le symbole d\'une nouvelle femme libérée', 'Le jazz a prospéré dans des villes comme La Nouvelle-Orléans, Chicago et New York', 'La Prohibition aux États-Unis a entraîné l\'essor de bars clandestins appelés speakeasies'],
    },
    clothingStyles: {
      en: ['Drop-waist dresses with beading and fringe', 'Cloche hats and long pearl necklaces', 'Sharp suits and fedoras for men'],
      fr: ['Robes à taille basse avec perles et franges', 'Chapeaux cloches et longs colliers de perles', 'Costumes élégants et fedoras pour les hommes'],
    },
    category: { en: 'Historical Eras', fr: 'Époques Historiques' },
  },
  {
    id: 'pop_art',
    name: { en: 'Pop Art', fr: 'Pop Art' },
    period: { en: '1950s - 1960s', fr: 'Années 1950 - 1960' },
    description: { en: 'An art movement that challenged fine art by including imagery from popular and mass culture, such as advertising and comic books.', fr: 'Un mouvement artistique qui a défié les beaux-arts en incluant des images de la culture populaire et de masse, comme la publicité et les bandes dessinées.' },
    icon: Icons.PopArt,
    color: 'bg-pink-700/50 border-pink-400',
    styles: { en: ['Andy Warhol-style screen print', 'Roy Lichtenstein comic book look', 'Colorful pop art collage'], fr: ['Sérigraphie style Andy Warhol', 'Look bande dessinée de Roy Lichtenstein', 'Collage pop art coloré'] },
    image: '',
    keyEvents: { en: ['Andy Warhol exhibits his Campbell\'s Soup Cans', 'The Independent Group forms in London, a precursor to Pop Art', 'Roy Lichtenstein creates his first comic strip-inspired paintings'], fr: ['Andy Warhol expose ses Campbell\'s Soup Cans', 'L\'Independent Group se forme à Londres, précurseur du Pop Art', 'Roy Lichtenstein crée ses premières peintures inspirées des bandes dessinées'] },
    culturalFacts: { en: ['Pop Art is widely interpreted as a reaction to the then-dominant ideas of abstract expressionism', 'It used techniques of mass production like screenprinting', 'Artists sought to blur the lines between "high" art and "low" culture'], fr: ['Le Pop Art est largement interprété comme une réaction aux idées alors dominantes de l\'expressionnisme abstrait', 'Il utilisait des techniques de production de masse comme la sérigraphie', 'Les artistes cherchaient à brouiller les frontières entre l\'art "noble" et la culture "populaire"'] },
    clothingStyles: { en: ['Bold patterns, bright colors, and geometric shapes', 'Mini skirts and vinyl dresses', 'Graphic t-shirts and casual wear reflecting consumer culture'], fr: ['Motifs audacieux, couleurs vives et formes géométriques', 'Minijupes et robes en vinyle', 'T-shirts graphiques et vêtements décontractés reflétant la culture de consommation'] },
    category: { en: 'Historical Eras', fr: 'Époques Historiques' },
  },

  // Fantasy
  {
    id: 'enchanted_forest',
    name: { en: 'Enchanted Forest', fr: 'Forêt Enchantée' },
    period: { en: 'Age of Myth', fr: 'Âge des Mythes' },
    description: { en: 'Become a mythical creature of the woods, an elegant elf, a sturdy dwarf, or a whimsical fairy.', fr: 'Devenez une créature mythique des bois, un elfe élégant, un nain robuste ou une fée fantasque.' },
    icon: Icons.Fantasy,
    color: 'bg-green-900/50 border-green-500',
    styles: { en: ['Elegant Forest Elf', 'Sturdy Mountain Dwarf', 'Glimmering Fairy'], fr: ['Elfe Élégant des Forêts', 'Nain Robuste des Montagnes', 'Fée Scintillante'] },
    image: '',
    keyEvents: { en: ['The Great Convergence of Magical Races', 'The Forging of the Sunstone', 'The Whispering Woods Pact'], fr: ['La Grande Convergence des Races Magiques', 'La Forge de la Pierre de Soleil', 'Le Pacte des Bois Murmurants'] },
    culturalFacts: { en: ['Elves are known for their archery and connection to nature', 'Dwarves are master blacksmiths and jewelers', 'Fairies communicate through light and song'], fr: ['Les elfes sont connus pour leur tir à l\'arc et leur lien avec la nature', 'Les nains sont des maîtres forgerons et joailliers', 'Les fées communiquent par la lumière et le chant'] },
    clothingStyles: { en: ['Flowing robes with leaf motifs for elves', 'Heavy-duty leather and mail for dwarves', 'Dresses made of petals and moonlight for fairies'], fr: ['Robes fluides avec des motifs de feuilles pour les elfes', 'Cuir et cotte de mailles robustes pour les nains', 'Robes faites de pétales et de clair de lune pour les fées'] },
    category: { en: 'Fantasy', fr: 'Fantasy' },
  },

  // Futuristic & Sci-Fi
  {
    id: 'cyberpunk',
    name: { en: 'Cyberpunk 2077', fr: 'Cyberpunk 2077' },
    period: { en: 'The Future', fr: 'Le Futur' },
    description: { en: 'Navigate the neon-drenched streets of a high-tech, low-life metropolis as a cyborg or netrunner.', fr: 'Parcourez les rues inondées de néons d\'une métropole high-tech et misérable en tant que cyborg ou netrunner.' },
    icon: Icons.Cyberpunk,
    color: 'bg-purple-900/50 border-purple-500',
    styles: { en: ['Street Samurai Cyborg', 'Corporate Netrunner', 'Neon-lit Mercenary'], fr: ['Cyborg Samouraï des Rues', 'Netrunner Corporatiste', 'Mercenaire aux Néons'] },
    image: '',
    keyEvents: { en: ['The Fourth Corporate War', 'The rise of Arasaka and Militech', 'The invention of the cyberdeck'], fr: ['La Quatrième Guerre des Corporations', 'L\'ascension d\'Arasaka et Militech', 'L\'invention du cyberdeck'] },
    culturalFacts: { en: ['Body modification with cybernetics is commonplace', 'Mega-corporations control society', 'The Net is a vast, dangerous digital frontier'], fr: ['La modification corporelle avec la cybernétique est monnaie courante', 'Les méga-corporations contrôlent la société', 'Le Net est une frontière numérique vaste et dangereuse'] },
    clothingStyles: { en: ['High-tech gear with integrated LEDs', 'Asymmetrical leather jackets and trench coats', 'Functional, tactical clothing with lots of pockets'], fr: ['Équipement high-tech avec LED intégrées', 'Vestes en cuir et trench-coats asymétriques', 'Vêtements fonctionnels et tactiques avec de nombreuses poches'] },
    category: { en: 'Futuristic & Sci-Fi', fr: 'Futuriste & Science-Fiction' },
  },
  {
    id: 'space_explorer',
    name: { en: 'Cosmic Explorer', fr: 'Explorateur Cosmique' },
    period: { en: '24th Century', fr: '24ème Siècle' },
    description: { en: 'Chart unknown galaxies as a starship captain, an alien diplomat, or a rugged asteroid miner.', fr: 'Cartographiez des galaxies inconnues en tant que capitaine de vaisseau, diplomate extraterrestre ou mineur d\'astéroïdes robuste.' },
    icon: Icons.SpaceExplorer,
    color: 'bg-blue-900/50 border-blue-400',
    styles: { en: ['Starfleet Captain', 'Xenobotanist on an Alien World', 'Asteroid Field Prospector'], fr: ['Capitaine de Starfleet', 'Xénobotaniste sur un Monde Alien', 'Prospecteur de Champ d\'Astéroïdes'] },
    image: '',
    keyEvents: { en: ['First contact with the Centaurian civilization', 'The terraforming of Mars is completed', 'Discovery of faster-than-light travel'], fr: ['Premier contact avec la civilisation centaurienne', 'La terraformation de Mars est achevée', 'Découverte du voyage supraluminique'] },
    culturalFacts: { en: ['The United Federation of Planets promotes peace and exploration', 'Zero-gravity sports are the most popular form of entertainment', 'Genetic engineering has eradicated most diseases'], fr: ['La Fédération des Planètes Unies promeut la paix et l\'exploration', 'Les sports en apesanteur sont la forme de divertissement la plus populaire', 'L\'ingénierie génétique a éradiqué la plupart des maladies'] },
    clothingStyles: { en: ['Sleek, form-fitting jumpsuits with insignia', 'Environmentally-sealed exosuits for hazardous planets', 'Practical, utility-focused clothing with advanced materials'], fr: ['Combinaisons élégantes et moulantes avec insignes', 'Exo-combinaisons scellées pour les planètes dangereuses', 'Vêtements pratiques et utilitaires avec des matériaux avancés'] },
    category: { en: 'Futuristic & Sci-Fi', fr: 'Futuriste & Science-Fiction' },
  },
];