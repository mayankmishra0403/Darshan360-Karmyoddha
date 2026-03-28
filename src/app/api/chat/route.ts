import { NextRequest, NextResponse } from 'next/server';
import { ChatApiRequest } from '@/types';

const GUIDE_PROMPT = `You are an expert Indian heritage tour guide.

Explain in a storytelling way, like guiding a traveler in person.

Include:
- historical context
- cultural insights
- simple language
- engaging tone`;

function buildPrompt(payload: ChatApiRequest) {
  const { query, context } = payload;

  if (context?.intent === 'itinerary') {
    return `Create a practical day-wise heritage itinerary in clear sections.
Destination: ${context.destination ?? 'gwalior'}
Days: ${context.days ?? 2}
Interests: ${context.interests?.join(', ') || 'history, temples, photography'}

Output format:
Day 1:
- Morning
- Afternoon
- Evening
- Local food suggestion
- Travel tip

User request: ${query}`;
  }

  return query;
}

async function callOpenRouter(prompt: string) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error('OPENROUTER_API_KEY is missing');
  }

  const model = process.env.OPENROUTER_MODEL || 'meta-llama/llama-3.1-8b-instruct:free';

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: GUIDE_PROMPT },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenRouter failed: ${response.status}`);
  }

  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content;

  if (!text) {
    throw new Error('OpenRouter returned empty text');
  }

  return text as string;
}

async function callGemini(prompt: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is missing');
  }

  const model = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: `${GUIDE_PROMPT}\n\nTraveler question: ${prompt}` }],
        },
      ],
      generationConfig: {
        temperature: 0.7,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`Gemini failed: ${response.status}`);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error('Gemini returned empty text');
  }

  return text as string;
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as ChatApiRequest;
    if (!payload?.query) {
      return NextResponse.json({ error: 'query is required' }, { status: 400 });
    }

    const prompt = buildPrompt(payload);

    try {
      const text = await callOpenRouter(prompt);
      return NextResponse.json({ text, provider: 'openrouter' });
    } catch (openRouterError) {
      console.error('OpenRouter error:', openRouterError);
      try {
        const text = await callGemini(prompt);
        return NextResponse.json({ text, provider: 'gemini' });
      } catch (geminiError) {
        console.error('Gemini error:', geminiError);
        return NextResponse.json({
          text:
            'Namaste! I am ready to guide your journey. Please add your AI keys (`OPENROUTER_API_KEY` or `GEMINI_API_KEY`) in `.env.local` to enable live responses. Meanwhile, start with Gwalior Fort for grand fort walls and Orchha for serene riverside palaces.',
          provider: 'mock',
        });
      }
    }
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Unable to process your request right now.' },
      { status: 500 }
    );
  }
}
