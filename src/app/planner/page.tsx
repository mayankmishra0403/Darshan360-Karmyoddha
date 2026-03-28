'use client';

import { useState, useEffect } from 'react';
import { ItineraryDay, PlannerFormData } from '@/types';
import AOS from 'aos';

const ITINERARY_MOCK: ItineraryDay[] = [
  {
    day: 1,
    title: 'Arrival & The First Glimpse',
    activities: [
      'Arrive in Gwalior and settle into your chosen accommodation',
      'Begin your journey at the mighty Gwalior Fort—let the ancient walls welcome you',
      'Explore Gujari Mahal, where royal tales still echo',
      'Evening: Wander through the old city, tasting local flavors'
    ]
  },
  {
    day: 2,
    title: 'Palaces & Sacred Spaces',
    activities: [
      'Morning: Discover Man Singh Palace—the Blue Palace that whispers of royal grandeur',
      'Visit the Sas Bahu temples, where devotion meets artistry',
      'Afternoon: Seek blessings at Teli Ka Mandir',
      'Evening: Witness the sunset painting the fort in golden hues'
    ]
  },
  {
    day: 3,
    title: 'A Final Farewell',
    activities: [
      'Morning: A heritage walk through ancient Gwalior',
      'Explore Jai Vilas Palace and its treasures',
      'Partake in a final meal at a traditional eatery',
      'Depart with memories etched in your heart forever'
    ]
  }
];

export default function PlannerPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState<PlannerFormData>({
    location: 'gwalior',
    days: 3,
    budget: 'medium',
    interests: [],
  });
  const [itinerary, setItinerary] = useState<ItineraryDay[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setItinerary(ITINERARY_MOCK.slice(0, formData.days));
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F5EFE6] pt-16 sm:pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16" data-aos="fade-up">
          <span className="text-[#C8A96A] text-xs sm:text-sm font-medium tracking-widest uppercase">Craft Your Journey</span>
          <h1 className="font-['Playfair_Display'] text-3xl sm:text-5xl text-[#2D2420] mt-3 sm:mt-4 mb-4 sm:mb-6">
            Your Travel Journal
          </h1>
          <p className="text-[#5C4F46] max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Every pilgrimage is unique. Let us help you design a journey that resonates with your soul.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-[#FFFBF5] rounded-xl sm:rounded-2xl border border-[#E5DCD0] p-5 sm:p-8 shadow-sm" data-aos="fade-right" data-aos-delay="200">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#7A1F1F]/10 flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#7A1F1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h2 className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#2D2420]">
                Your Preferences
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div>
                <label className="block text-sm font-medium text-[#5C4F46] mb-2 sm:mb-3">
                  Where does your heart lead you?
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="input-field text-sm sm:text-base"
                >
                  <option value="gwalior">Gwalior Fort</option>
                  <option value="orchha">Orchha</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5C4F46] mb-2 sm:mb-3">
                  How many days?
                </label>
                <select
                  value={formData.days}
                  onChange={(e) => setFormData({ ...formData, days: Number(e.target.value) })}
                  className="input-field text-sm sm:text-base"
                >
                  <option value={1}>1 Day</option>
                  <option value={2}>2 Days</option>
                  <option value={3}>3 Days</option>
                  <option value={4}>4 Days</option>
                  <option value={5}>5 Days</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5C4F46] mb-2 sm:mb-3">
                  Your budget
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {(['low', 'medium', 'high'] as const).map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget })}
                      className={`px-3 sm:px-4 py-3 sm:py-4 rounded-xl border text-xs sm:text-sm font-medium capitalize transition-all ${
                        formData.budget === budget
                          ? 'border-[#7A1F1F] bg-[#7A1F1F]/5 text-[#7A1F1F]'
                          : 'border-[#E5DCD0] text-[#5C4F46] hover:border-[#C8A96A]'
                      }`}
                    >
                      {budget === 'low' ? 'Simple' : budget === 'medium' ? 'Comfortable' : 'Luxurious'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5C4F46] mb-2 sm:mb-3">
                  What interests you?
                </label>
                <div className="flex flex-wrap gap-2">
                  {['History', 'Architecture', 'Photography', 'Food', 'Nature', 'Culture'].map(
                    (interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                          formData.interests.includes(interest)
                            ? 'bg-[#7A1F1F] text-white'
                            : 'bg-[#EDE6D9] text-[#5C4F46] hover:bg-[#E5DCD0]'
                        }`}
                      >
                        {interest}
                      </button>
                    )
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 sm:py-5 bg-[#7A1F1F] text-white font-medium rounded-xl hover:bg-[#9A3535] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
              >
                {isLoading ? 'Weaving Your Journey...' : 'Create My Itinerary'}
              </button>
            </form>
          </div>

          <div className="mt-8 lg:mt-0" data-aos="fade-left" data-aos-delay="400">
            {itinerary ? (
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#C8A96A]/20 flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8A96A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#2D2420]">
                    Your Sacred Path
                  </h2>
                </div>
                
                {itinerary.map((day, index) => (
                  <div
                    key={day.day}
                    className="bg-[#FFFBF5] rounded-xl sm:rounded-2xl border border-[#E5DCD0] p-5 sm:p-8 shadow-sm relative"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Decorative element */}
                    <div className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C8A96A] flex items-center justify-center">
                      <span className="text-xs font-bold text-[#2D2420]">{day.day}</span>
                    </div>
                    
                    <div className="pl-4 sm:pl-4">
                      <h3 className="font-['Playfair_Display'] text-lg sm:text-xl text-[#2D2420] mb-3 sm:mb-4">
                        {day.title}
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {day.activities.map((activity, idx) => (
                          <li key={idx} className="flex gap-2 sm:gap-3 text-[#5C4F46] text-sm">
                            <span className="text-[#C8A96A]">✦</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-[#FFFBF5] rounded-xl sm:rounded-2xl border-2 border-dashed border-[#E5DCD0] p-10 sm:p-16 text-center">
                <svg
                  className="w-14 h-14 sm:w-20 sm:h-20 mx-auto text-[#C8A96A]/40 mb-4 sm:mb-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-[#8B7B70] text-base sm:text-lg">
                  Your journey awaits...
                </p>
                <p className="text-[#8B7B70] text-xs sm:text-sm mt-2">
                  Fill in your preferences to begin
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
