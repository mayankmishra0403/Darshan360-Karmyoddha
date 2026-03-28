'use client';

import Image from 'next/image';
import Link from 'next/link';
import { DestinationContent } from '@/types';

interface DestinationCardProps {
  destination: DestinationContent;
  delay?: number;
}

export default function DestinationCard({ destination, delay = 0 }: DestinationCardProps) {
  return (
    <article
      className="group overflow-hidden rounded-2xl border border-[#E5DCD0] bg-[#FFFBF5] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {destination.isTemple && (
          <div className="absolute top-3 right-3 rounded-full bg-[#7A1C1C] px-3 py-1 text-xs font-semibold text-white">
            🛕 Temple
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-['Playfair_Display'] text-2xl text-[#2D2420]">{destination.name}</h3>
        {destination.isTemple && destination.deity && (
          <p className="mt-1 text-sm font-medium text-[#C8A96A]">🪷 {destination.deity}</p>
        )}
        <p className="mt-3 text-[#5C4F46]">{destination.shortDescription}</p>
        {destination.isTemple && destination.timing && (
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-[#5C4F46]">
            <span className="flex items-center gap-1">⏰ {destination.timing}</span>
            <span className="flex items-center gap-1">🎟️ {destination.entryFee}</span>
          </div>
        )}
        <Link
          href={`/site/${destination.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7A1C1C] hover:text-[#9A3535]"
        >
          {destination.isTemple ? 'Virtual Darshan' : 'Explore More'}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
