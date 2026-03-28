'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Clock } from 'lucide-react';

interface PlaceCardProps {
  name: string;
  image: string;
  description?: string;
  timings?: string;
  entryFee?: string;
  index?: number;
}

export default function PlaceCard({ name, image, description, timings, entryFee, index = 0 }: PlaceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group overflow-hidden rounded-xl border border-[#E5DCD0] bg-[#FFFBF5] shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h4 className="font-['Playfair_Display'] text-lg text-[#2D2420]">{name}</h4>
        {description && (
          <p className="mt-2 text-sm text-[#5C4F46] line-clamp-2">{description}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-[#8B7B70]">
          {timings && (
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {timings}
            </span>
          )}
          {entryFee && (
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {entryFee}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
