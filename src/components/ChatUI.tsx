'use client';

import { FormEvent, useMemo, useRef, useState } from 'react';
import { Message } from '@/types';
import TypingIndicator from '@/components/TypingIndicator';
import { sendChatQuery } from '@/lib/api';

const SUGGESTED_PROMPTS = [
  'Tell me the story of Gwalior Fort in simple language.',
  'Plan a 2-day cultural trip to Orchha.',
  'What is the best time to visit Gwalior and why?',
  'Which places are best for photography in Orchha?',
];

const WELCOME_MESSAGE =
  'Namaste! I am your Darshan 360 heritage guide. Ask me history, culture, or trip planning questions and I will guide you in a storytelling style.';

export default function ChatUI() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'welcome', role: 'assistant', content: WELCOME_MESSAGE },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  const canSend = useMemo(() => query.trim().length > 0 && !isLoading, [query, isLoading]);

  const send = async (text: string) => {
    const userText = text.trim();
    if (!userText) return;

    const userMessage: Message = {
      id: `${Date.now()}-u`,
      role: 'user',
      content: userText,
    };

    const loadingMessage: Message = {
      id: `${Date.now()}-a`,
      role: 'assistant',
      content: '',
      isLoading: true,
    };

    setMessages((prev) => [...prev, userMessage, loadingMessage]);
    setQuery('');
    setIsLoading(true);

    try {
      const response = await sendChatQuery({
        query: userText,
        context: { intent: 'chat' },
      });

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingMessage.id
            ? { ...msg, content: response.text, isLoading: false }
            : msg
        )
      );
    } catch {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingMessage.id
            ? {
                ...msg,
                content: 'I could not reach the guide service right now. Please try again in a moment.',
                isLoading: false,
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
      window.requestAnimationFrame(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSend) return;
    void send(query);
  };

  return (
    <section className="mx-auto w-full max-w-5xl rounded-2xl border border-[#E5DCD0] bg-[#FFFBF5] shadow-sm">
      <div className="border-b border-[#E5DCD0] p-5">
        <h2 className="font-['Playfair_Display'] text-2xl text-[#2D2420]">AI Heritage Assistant</h2>
        <p className="mt-2 text-sm text-[#5C4F46]">Ask about history, cultural context, or personalized travel planning.</p>
      </div>

      <div className="max-h-[55vh] space-y-4 overflow-y-auto p-5">
        {messages.map((message) => (
          <div key={message.id} className={message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                message.role === 'user'
                  ? 'bg-[#7A1C1C] text-white'
                  : 'bg-[#F5EFE6] text-[#2D2420]'
              }`}
            >
              {message.isLoading ? <TypingIndicator /> : message.content}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="border-t border-[#E5DCD0] p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {SUGGESTED_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              onClick={() => void send(prompt)}
              disabled={isLoading}
              className="rounded-full border border-[#E5DCD0] bg-[#F5EFE6] px-3 py-1.5 text-xs text-[#5C4F46] transition hover:border-[#C8A96A] hover:text-[#2D2420] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {prompt}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-end gap-3">
          <textarea
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ask about Gwalior Fort, Orchha, or your itinerary..."
            rows={2}
            className="min-h-[52px] flex-1 rounded-xl border border-[#E5DCD0] bg-white px-4 py-3 text-sm text-[#2D2420] outline-none focus:border-[#C8A96A]"
          />
          <button
            type="submit"
            disabled={!canSend}
            className="rounded-xl bg-[#7A1C1C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#9A3535] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? 'Thinking...' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  );
}
