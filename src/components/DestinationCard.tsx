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
      </div>
      <div className="p-6">
        <h3 className="font-['Playfair_Display'] text-2xl text-[#2D2420]">{destination.name}</h3>
        <p className="mt-3 text-[#5C4F46]">{destination.shortDescription}</p>
          <Link
          href={`/destination/${destination.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7A1C1C] hover:text-[#9A3535]"
        >
          Explore More
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
