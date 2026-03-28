'use client';

import ExperienceCard from '@/components/ExperienceCard';
import { CULTURAL_HIGHLIGHTS } from '@/data/content';

export default function CultureSection() {
  return (
    <section className="bg-[#F5EFE6] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">Explore by Experience</p>
          <h2 className="mt-3 font-['Playfair_Display'] text-4xl text-[#2D2420]">Beyond Monuments</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#5C4F46]">
            Experience architecture, traditions, flavors, and performing arts that keep these regions vibrantly alive.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CULTURAL_HIGHLIGHTS.map((item, index) => (
            <ExperienceCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={<span>{item.icon}</span>}
              image={item.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
