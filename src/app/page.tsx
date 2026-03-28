'use client';

import Hero from '@/components/Hero';
import Link from 'next/link';
import ExploreSection from '@/sections/ExploreSection';
import CultureSection from '@/sections/CultureSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      <Hero
        title="Walk Through Living History"
        subtitle="Where ancient stones whisper tales of emperors and artisans"
        ctaText="Begin Your Journey"
        ctaHref="#featured-destinations"
      />

      <div id="featured-destinations">
        <ExploreSection />
      </div>

      <section className="bg-[#7A1C1C] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E6C98B]">AI Assistant Preview</p>
          <h2 className="mt-3 font-['Playfair_Display'] text-4xl">Your Personal Heritage Guide</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#F2E6D3]">
            Ask questions in natural language, uncover stories behind monuments, and get quick travel planning help powered by AI.
          </p>
          <Link
            href="/ai"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C8A96A] px-7 py-3 font-semibold text-[#2D2420] transition hover:bg-[#E0C489]"
          >
            Open AI Assistant
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <CultureSection />
    </div>
  );
}
