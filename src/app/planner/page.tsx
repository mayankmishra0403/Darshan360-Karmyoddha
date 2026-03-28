'use client';

import { FormEvent, useMemo, useState } from 'react';
import { PLANNER_INTERESTS } from '@/data/content';
import { Location } from '@/types';
import { sendChatQuery } from '@/lib/api';

export default function PlannerPage() {
  const [days, setDays] = useState(2);
  const [destination, setDestination] = useState<Location>('gwalior');
  const [interests, setInterests] = useState<string[]>(['history']);
  const [itinerary, setItinerary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const selectedInterestsText = useMemo(() => {
    return interests.length > 0 ? interests.join(', ') : 'general exploration';
  }, [interests]);

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((item) => item !== interest) : [...prev, interest]
    );
  };

  const generateItinerary = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const query = `Create a day-wise ${days}-day itinerary for ${destination === 'gwalior' ? 'Gwalior Fort' : 'Orchha'} focused on ${selectedInterestsText}. Include morning, afternoon and evening suggestions, local food tip, and a practical travel tip per day.`;

    try {
      const response = await sendChatQuery({
        query,
        context: {
          destination,
          intent: 'itinerary',
          days,
          interests,
        },
      });

      setItinerary(response.text);
    } catch {
      setItinerary('Unable to generate itinerary right now. Please try again in a minute.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5EFE6] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">Plan Your Visit</p>
          <h1 className="mt-3 font-['Playfair_Display'] text-5xl text-[#2D2420]">AI Itinerary Planner</h1>
          <p className="mx-auto mt-4 max-w-2xl text-[#5C4F46]">
            Tell us your trip length and interests, and get a personalized heritage itinerary in seconds.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={generateItinerary} className="rounded-2xl border border-[#E5DCD0] bg-[#FFFBF5] p-8">
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#5C4F46]">Destination</label>
                <select
                  value={destination}
                  onChange={(event) => setDestination(event.target.value as Location)}
                  className="input-field"
                >
                  <option value="gwalior">Gwalior Fort</option>
                  <option value="orchha">Orchha</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#5C4F46]">Number of days</label>
                <input
                  type="number"
                  min={1}
                  max={7}
                  value={days}
                  onChange={(event) => setDays(Number(event.target.value))}
                  className="input-field"
                />
              </div>

              <div>
                <p className="mb-3 block text-sm font-semibold text-[#5C4F46]">Interests</p>
                <div className="flex flex-wrap gap-2">
                  {PLANNER_INTERESTS.map((interest) => (
                    <button
                      key={interest.id}
                      type="button"
                      onClick={() => toggleInterest(interest.label.toLowerCase())}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        interests.includes(interest.label.toLowerCase())
                          ? 'bg-[#7A1C1C] text-white'
                          : 'bg-[#F5EFE6] text-[#5C4F46] hover:bg-[#EDE6D9]'
                      }`}
                    >
                      {interest.icon} {interest.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-[#7A1C1C] px-5 py-3 font-semibold text-white transition hover:bg-[#9A3535] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? 'Generating Itinerary...' : 'Generate AI Itinerary'}
              </button>
            </div>
          </form>

          <section className="rounded-2xl border border-[#E5DCD0] bg-[#FFFBF5] p-8">
            <h2 className="font-['Playfair_Display'] text-3xl text-[#2D2420]">Your Itinerary</h2>
            <div className="mt-4 rounded-xl bg-[#F5EFE6] p-5 text-[#2D2420]">
              {itinerary ? (
                <p className="whitespace-pre-wrap leading-relaxed">{itinerary}</p>
              ) : (
                <p className="text-[#8B7B70]">Your AI-generated plan will appear here.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
