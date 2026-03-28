'use client';

import DestinationCard from '@/components/DestinationCard';
import { DESTINATIONS } from '@/data/content';

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <span className="text-[#C8A96A] text-sm font-medium tracking-widest uppercase">Discover</span>
          <h1 className="font-['Playfair_Display'] text-5xl text-[#2D2420] mt-4 mb-6">
            Explore Destinations
          </h1>
          <p className="text-[#5C4F46] max-w-xl mx-auto leading-relaxed">
            Discover Gwalior Fort and Orchha through curated heritage snapshots, history, and immersive storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {DESTINATIONS.map((destination, index) => (
            <DestinationCard
              key={destination.slug}
              destination={destination}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
