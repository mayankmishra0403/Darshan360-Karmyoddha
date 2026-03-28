export type Location = 'gwalior' | 'orchha';

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface DestinationContent {
  slug: Location;
  name: string;
  tagline: string;
  heroImage: string;
  shortDescription: string;
  storyHistory: string;
  keyAttractions: string[];
  bestTimeToVisit: string;
  gallery: GalleryImage[];
}

export interface CulturalHighlight {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface AIQueryResponse {
  text: string;
  audioUrl?: string;
}

export interface ChatApiRequest {
  query: string;
  context?: {
    destination?: Location;
    intent?: 'chat' | 'itinerary';
    days?: number;
    interests?: string[];
  };
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isLoading?: boolean;
}
