import { CulturalHighlight, DestinationContent } from '@/types';

export const DESTINATIONS: DestinationContent[] = [
  {
    slug: 'gwalior',
    name: 'Gwalior Fort',
    tagline: 'The Majestic Sentinel',
    heroImage: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=1400&q=80',
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
        src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
        alt: 'Panoramic walls of Gwalior Fort',
      },
      {
        src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
        alt: 'Historic architecture and arches in Gwalior',
      },
      {
        src: 'https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?auto=format&fit=crop&w=1200&q=80',
        alt: 'Temple spires and heritage carvings',
      },
    ],
  },
  {
    slug: 'orchha',
    name: 'Orchha',
    tagline: 'The Hidden Treasure by Betwa',
    heroImage: 'https://images.unsplash.com/photo-1589881133595-a3c085cb731d?auto=format&fit=crop&w=1400&q=80',
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
        src: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
        alt: 'Orchha palace skyline at sunset',
      },
      {
        src: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
        alt: 'Historic temple architecture in Orchha',
      },
      {
        src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
        alt: 'Chhatris reflected near Betwa river',
      },
    ],
  },
  {
    slug: 'iskcon-bangalore',
    name: 'ISKCON Temple Bangalore',
    tagline: 'A Divine Oasis of Peace',
    heroImage: 'https://images.unsplash.com/photo-1623629403077-8a7479b64efc?auto=format&fit=crop&w=1400&q=80',
    shortDescription: 'One of the largest ISKCON temples in the world, dedicated to Lord Narasimha.',
    storyHistory:
      'The ISKCON Temple in Bangalore is a magnificent spiritual complex that stands as a beacon of Vaishnavite devotion. Founded under the guidance of AC Bhaktivedanta Swami Prabhupada, this temple brings the timeless teachings of the Bhagavad Gita to modern devotees. The temple complex features stunning architecture that blends traditional Indian styles with modern engineering, creating a serene atmosphere for spiritual seekers from around the world.',
    keyAttractions: [
      'Main deity Lord Narasimha',
      'Hare Krishna movement headquarters',
      'Spiritual gift shop',
      'Vegetarian restaurant',
      'Daily arati ceremonies',
    ],
    bestTimeToVisit: 'Any time of year, early morning for peaceful darshan',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1623629403077-8a7479b64efc?auto=format&fit=crop&w=1200&q=80',
        alt: 'ISKCON Temple exterior',
      },
      {
        src: 'https://images.unsplash.com/photo-1623629403077-8a7479b64efc?auto=format&fit=crop&w=1200&q=80',
        alt: 'Temple architecture',
      },
    ],
    isTemple: true,
    deity: 'Lord Narasimha',
    timing: '8:00 AM - 8:30 PM',
    entryFee: 'Free Entry',
  },
  {
    slug: 'golden-temple',
    name: 'Golden Temple',
    tagline: 'The Abode of God',
    heroImage: 'https://images.unsplash.com/photo-1549484524-0a9e8d5f2e1d?auto=format&fit=crop&w=1400&q=80',
    shortDescription: 'The holiest Sikh shrine, covered in gold leaf, open to all.',
    storyHistory:
      'Harmandir Sahib, popularly known as the Golden Temple, is the most sacred shrine of Sikhism. Founded in 1577 by Guru Ram Das, the fourth Sikh Guru, the temple was completed in 1601. The temple stands in the middle of a sacred pool (Amrit Sarovar) and its golden appearance comes from 750 kg of gold leaf covering its domes. The temple practices Langar (community kitchen) serving free meals to all visitors regardless of background, embodying the Sikh principle of equality.',
    keyAttractions: [
      'Guru Granth Sahib',
      'Akal Takht',
      'Harmandir Sahib',
      'Langar Hall',
      'Jallianwala Bagh (nearby)',
    ],
    bestTimeToVisit: 'Throughout the year, especially during Gurpurab',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1549484524-0a9e8d5f2e1d?auto=format&fit=crop&w=1200&q=80',
        alt: 'Golden Temple at sunset',
      },
      {
        src: 'https://images.unsplash.com/photo-1549484524-0a9e8d5f2e1d?auto=format&fit=crop&w=1200&q=80',
        alt: 'Golden Temple reflection',
      },
    ],
    isTemple: true,
    deity: 'Guru Granth Sahib',
    timing: '24 Hours',
    entryFee: 'Free Entry',
  },
  {
    slug: 'tirumala',
    name: 'Tirumala Tirupati Temple',
    tagline: 'The Richest Temple in the World',
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=80',
    shortDescription: 'The most visited religious pilgrimage site in the world, dedicated to Lord Venkateswara.',
    storyHistory:
      'The Tirumala Tirupati Temple, located in the Chittoor district of Andhra Pradesh, is one of the richest and most visited temples in the world. The temple is dedicated to Lord Venkateswara, an incarnation of Vishnu, believed to have manifested on the Tirumala hills to save humanity from the trials of Kali Yuga. The temple complex consists of multiple shrines, with the main deity known as "Sri Venkateswara" who is worshipped as the savior of mankind.',
    keyAttractions: [
      'Lord Venkateswara Darshan',
      'Tirumala Hills',
      'Alipiri Mettu Path',
      'Srivari Mela',
      'Annadanam (free meals)',
    ],
    bestTimeToVisit: 'October to March, avoid weekends and festivals',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
        alt: 'Tirumala Temple gopuram',
      },
      {
        src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
        alt: 'Devotees at Tirumala',
      },
    ],
    isTemple: true,
    deity: 'Lord Venkateswara',
    timing: '2:30 AM - 11:30 PM',
    entryFee: '₹300 for Darshan',
  },
  {
    slug: 'jagannath-puri',
    name: 'Jagannath Temple Puri',
    tagline: 'The Lord of the World',
    heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=80',
    shortDescription: 'One of the Char Dham pilgrimage sites, home to Lord Jagannath.',
    storyHistory:
      'The Jagannath Temple in Puri, Odisha, is one of the most significant Hindu temples dedicated to Lord Jagannath (a form of Vishnu). Built in the 12th century by King Anantavarman Chodaganga Deva, the temple is part of the Char Dham pilgrimage sites that every Hindu is believed to visit in their lifetime. The temple is famous for its annual Rath Yatra (Chariot Festival), where the deities are pulled through the streets on massive wooden chariots.',
    keyAttractions: [
      'Lord Jagannath Darshan',
      'Rath Yatra Festival',
      'Sunset at Puri Beach',
      'Konark Sun Temple (nearby)',
      'Mahaprasad (famous temple food)',
    ],
    bestTimeToVisit: 'October to March, especially during Rath Yatra (June-July)',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
        alt: 'Jagannath Temple Puri',
      },
      {
        src: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
        alt: 'Rath Yatra',
      },
    ],
    isTemple: true,
    deity: 'Lord Jagannath',
    timing: '5:00 AM - 10:00 PM',
    entryFee: 'Free Entry',
  },
  {
    slug: 'kashi-vishwanath',
    name: 'Kashi Vishwanath Temple',
    tagline: 'The City of Light',
    heroImage: 'https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?auto=format&fit=crop&w=1400&q=80',
    shortDescription: 'One of the most sacred temples in Hinduism, dedicated to Lord Shiva.',
    storyHistory:
      'The Kashi Vishwanath Temple in Varanasi is one of the most sacred temples in Hinduism, dedicated to Lord Shiva. The temple stands on the banks of the holy Ganges and is believed to be one of the oldest continuously inhabited cities in the world. Kashi (Varanasi) is considered the spiritual capital of India, and visiting this temple is believed to liberate the soul from the cycle of birth and death.',
    keyAttractions: [
      'Lord Shiva Darshan',
      'Ganges Aarti at Dashashwamedh Ghat',
      'Manikarnika Ghat',
      'Temple architecture',
      'Ancient markets of Varanasi',
    ],
    bestTimeToVisit: 'October to March, during Mahashivratri',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?auto=format&fit=crop&w=1200&q=80',
        alt: 'Kashi Vishwanath Temple',
      },
      {
        src: 'https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?auto=format&fit=crop&w=1200&q=80',
        alt: 'Ganges Aarti',
      },
    ],
    isTemple: true,
    deity: 'Lord Shiva',
    timing: '24 Hours',
    entryFee: 'Free Entry',
  },
  {
    slug: 'somnath',
    name: 'Somnath Temple',
    tagline: 'The First Among the Twelve Jyotirlingas',
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=80',
    shortDescription: 'The legendary first Shiva temple, rebuilt multiple times through history.',
    storyHistory:
      'The Somnath Temple in Gujarat is one of the most sacred temples in India, believed to be the first of the twelve Jyotirlingas (lingams of light) of Lord Shiva. The temple has been destroyed and rebuilt several times throughout history - by Mahmud of Ghazni, Alauddin Khilji, and Aurangzeb. Each time, it was rebuilt by Indian kings, symbolizing the enduring faith of millions. The current structure was reconstructed in 1951.',
    keyAttractions: [
      'Lord Shiva Jyotirlinga',
      'Triveni Ghat',
      'Prabhas Patan Museum',
      'Somnath Beach',
      'Ahilya Baai Temple',
    ],
    bestTimeToVisit: 'October to March, during Mahashivratri',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
        alt: 'Somnath Temple',
      },
      {
        src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
        alt: 'Somnath Beach sunset',
      },
    ],
    isTemple: true,
    deity: 'Lord Shiva',
    timing: '6:00 AM - 10:00 PM',
    entryFee: 'Free Entry',
  },
];

export const CULTURAL_HIGHLIGHTS: CulturalHighlight[] = [
  {
    title: 'Architecture',
    description: 'Intricate carvings, ornate palaces, and ancient temples showcase masterful craftsmanship.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80',
    icon: '🏛️'
  },
  {
    title: 'Festivals',
    description: 'Navratri, Diwali, and local fairs bring the region to life with colors and devotion.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80',
    icon: '🎭'
  },
  {
    title: 'Cuisine',
    description: 'Rich flavors of Madhya Pradesh - from poha to kebabs, a culinary journey awaits.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',
    icon: '🍛'
  },
  {
    title: 'Handicrafts',
    description: 'Chanderi silk, bead work, and terracotta reflect the artistic heritage.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    icon: '🎨'
  },
  {
    title: 'Music & Dance',
    description: 'Classical traditions of Gwalior Gharana and Bundeli folk dances enchant visitors.',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&q=80',
    icon: '🎵'
  },
  {
    title: 'Spirituality',
    description: 'Ancient temples and Sufi shrines offer solace and divine connection.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80',
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

export const TEMPLE_DATA = [
  {
    name: 'ISKCON Temple Bangalore',
    slug: 'iskcon-bangalore',
    deity: 'Lord Narasimha',
    timing: '8:00 AM - 8:30 PM',
    entryFee: 'Free Entry',
    image: 'https://images.unsplash.com/photo-1623629403077-8a7479b64efc?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Golden Temple',
    slug: 'golden-temple',
    deity: 'Guru Granth Sahib',
    timing: '24 Hours',
    entryFee: 'Free Entry',
    image: 'https://images.unsplash.com/photo-1549484524-0a9e8d5f2e1d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Tirumala Tirupati Temple',
    slug: 'tirumala',
    deity: 'Lord Venkateswara',
    timing: '2:30 AM - 11:30 PM',
    entryFee: '₹300 for Darshan',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Jagannath Temple Puri',
    slug: 'jagannath-puri',
    deity: 'Lord Jagannath',
    timing: '5:00 AM - 10:00 PM',
    entryFee: 'Free Entry',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Kashi Vishwanath Temple',
    slug: 'kashi-vishwanath',
    deity: 'Lord Shiva',
    timing: '24 Hours',
    entryFee: 'Free Entry',
    image: 'https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Somnath Temple',
    slug: 'somnath',
    deity: 'Lord Shiva',
    timing: '6:00 AM - 10:00 PM',
    entryFee: 'Free Entry',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80',
  },
];
