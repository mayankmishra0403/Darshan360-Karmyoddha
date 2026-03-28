'use client';

import DestinationCard from '@/components/DestinationCard';
import { DESTINATIONS } from '@/data/content';
import { motion } from 'framer-motion';

export default function FeaturedDestinations() {
  return (
    <section className="bg-[#FFFBF5] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">Featured Destinations</p>
          <h2 className="mt-3 font-['Playfair_Display'] text-4xl text-[#2D2420]">Explore Timeless Places</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#5C4F46]">
            Wander through the living heritage of Gwalior Fort and Orchha, where every corridor preserves a chapter of India&apos;s story.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {DESTINATIONS.map((destination, index) => (
            <DestinationCard key={destination.slug} destination={destination} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
