import { CulturalHighlight, DestinationContent } from '@/types';

export const DESTINATIONS: DestinationContent[] = [
  {
    slug: 'gwalior',
    name: 'Gwalior Fort',
    tagline: 'The Majestic Sentinel',
    heroImage: '/images/gwalior-fort.jpg',
    shortDescription: 'A mighty hill fort where Rajput valor, Mughal strategy, and timeless art meet.',
    storyHistory:
      'As dawn paints the sandstone walls in gold, Gwalior Fort feels less like a monument and more like a living chronicle. Legends trace its name to Sage Gwalipa and King Suraj Sen, while history records the Tomar rulers shaping its grand palaces in the 15th century. Through Mughal campaigns, Maratha stewardship, and colonial transitions, the fort stood firm—guarding stories of music, devotion, politics, and power. Walking through Man Singh Palace and Gujari Mahal, you can sense artisans, warriors, and poets still breathing through carved stone and glazed tiles.',
    keyAttractions: [
      'Man Singh Palace (famed for blue tile façade)',
      'Gujari Mahal Archaeological Museum',
      'Sas Bahu Temples',
      'Teli Ka Mandir',
      'Jain rock-cut sculptures on fort walls',
    ],
    bestTimeToVisit: 'October to March (pleasant weather and clear views)',
    gallery: [
      {
        src: '/images/gwalior-fort.jpg',
        alt: 'Panoramic walls of Gwalior Fort',
      },
      {
        src: '/images/gwalior-fort.jpg',
        alt: 'Historic architecture and arches in Gwalior',
      },
      {
        src: '/images/gwalior-fort.jpg',
        alt: 'Temple spires and heritage carvings',
      },
    ],
  },
  {
    slug: 'orchha',
    name: 'Orchha',
    tagline: 'The Hidden Treasure by Betwa',
    heroImage: '/images/orchha.jpg',
    shortDescription: 'A riverside town of palaces, chhatris, murals, and sacred calm.',
    storyHistory:
      'Orchha rises beside the Betwa like a quiet epic. Founded in the 16th century by the Bundela kings, it grew into a royal seat where architecture reflected both Rajput confidence and Mughal-era diplomacy. Jahangir Mahal was built to honor an imperial visit, while Ram Raja Temple transformed royal space into devotional center. By sunset, as cenotaphs mirror in the river, Orchha reveals its soul—less crowded than major circuits, yet deeply layered with memory, ritual, and artistry.',
    keyAttractions: [
      'Jahangir Mahal',
      'Raja Mahal murals',
      'Ram Raja Temple',
      'Chaturbhuj Temple',
      'Betwa-side royal chhatris (cenotaphs)',
    ],
    bestTimeToVisit: 'October to April (ideal for fort walks and riverside evenings)',
    gallery: [
      {
        src: '/images/orchha.jpg',
        alt: 'Orchha palace skyline at sunset',
      },
      {
        src: '/images/orchha.jpg',
        alt: 'Historic temple architecture in Orchha',
      },
      {
        src: '/images/orchha.jpg',
        alt: 'Chhatris reflected near Betwa river',
      },
    ],
  },
];

export const CULTURAL_HIGHLIGHTS: CulturalHighlight[] = [
  {
    title: 'Architecture',
    description: 'Intricate carvings, ornate palaces, and ancient temples showcase masterful craftsmanship.',
    image: '/images/architectural.jpeg',
    icon: '🏛️'
  },
  {
    title: 'Festivals',
    description: 'Navratri, Diwali, and local fairs bring the region to life with colors and devotion.',
    image: '/images/festivals.jpeg',
    icon: '🎭'
  },
  {
    title: 'Cuisine',
    description: 'Rich flavors of Madhya Pradesh - from poha to kebabs, a culinary journey awaits.',
    image: '/images/cuisine.jpeg',
    icon: '🍛'
  },
  {
    title: 'Handicrafts',
    description: 'Chanderi silk, bead work, and terracotta reflect the artistic heritage.',
    image: '/images/handicrafts.jpeg',
    icon: '🎨'
  },
  {
    title: 'Music & Dance',
    description: 'Classical traditions of Gwalior Gharana and Bundeli folk dances enchant visitors.',
    image: '/images/dance.jpeg',
    icon: '🎵'
  },
  {
    title: 'Spirituality',
    description: 'Ancient temples and Sufi shrines offer solace and divine connection.',
    image: '/images/spiritual.jpeg',
    icon: '🕉️'
  }
];

export const PLANNER_INTERESTS = [
  { id: 'history', label: 'History', icon: '📜' },
  { id: 'temples', label: 'Temples', icon: '🛕' },
  { id: 'photography', label: 'Photography', icon: '📸' },
  { id: 'food', label: 'Food & Cuisine', icon: '🍜' },
  { id: 'architecture', label: 'Architecture', icon: '🏛️' },
  { id: 'nature', label: 'Nature', icon: '🌿' }
];
