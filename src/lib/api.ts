import { DESTINATIONS } from '@/data/content';
import { AIQueryResponse, ChatApiRequest, Location } from '@/types';

export const getDestinationBySlug = (slug: string) => {
  return DESTINATIONS.find((destination) => destination.slug === slug);
};

export const getLocationFromSlug = (slug: string): Location | null => {
  const destination = getDestinationBySlug(slug);
  return destination ? destination.slug : null;
};

export async function sendChatQuery(request: ChatApiRequest): Promise<AIQueryResponse> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error('Failed to get AI response');
  }

  return response.json();
}
