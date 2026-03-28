'use client';

import SiteCard from '@/components/SiteCard';
import { SITES } from '@/lib/api';

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] pt-16 sm:pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div 
          className="text-center mb-12 sm:mb-16"
          data-aos="fade-up"
        >
          <span className="text-[#C8A96A] text-xs sm:text-sm font-medium tracking-widest uppercase">Discover</span>
          <h1 className="font-['Playfair_Display'] text-3xl sm:text-5xl text-[#2D2420] mt-3 sm:mt-4 mb-4 sm:mb-6">
            Sacred Destinations
          </h1>
          <p className="text-[#5C4F46] max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Two timeless treasures of Madhya Pradesh, each holding centuries of stories within their ancient walls.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-10 max-w-4xl sm:max-w-5xl mx-auto">
          {SITES.map((site, index) => (
            <SiteCard 
              key={site.slug} 
              site={site}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
