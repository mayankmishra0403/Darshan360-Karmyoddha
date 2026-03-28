'use client';

import { motion } from 'framer-motion';
import { Bot, MapPin, Heart, Compass } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Guides',
    description: 'Get instant answers to your questions about history, culture, and travel tips from our intelligent assistant.',
  },
  {
    icon: MapPin,
    title: 'Curated Itineraries',
    description: 'Personalized travel plans that help you make the most of your visit to heritage sites.',
  },
  {
    icon: Heart,
    title: 'Local Insights',
    description: 'Discover hidden gems, authentic food spots, and cultural experiences beyond the usual tourist trail.',
  },
  {
    icon: Compass,
    title: 'Easy Navigation',
    description: 'Clear routes, timings, and travel information to help you explore with confidence.',
  },
];

export default function WhyDarshan360() {
  return (
    <section className="bg-[#F5EFE6] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">Why Darshan 360</p>
          <h2 className="mt-3 font-['Playfair_Display'] text-4xl text-[#2D2420]">Your Heritage Journey, Reimagined</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#5C4F46]">
            We combine ancient wisdom with modern technology to create unforgettable travel experiences.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-[#E5DCD0] bg-[#FFFBF5] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#7A1F1F]/10 text-[#7A1F1F] transition-colors group-hover:bg-[#7A1F1F] group-hover:text-white">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-4 font-['Playfair_Display'] text-xl text-[#2D2420]">{feature.title}</h3>
              <p className="mt-2 text-sm text-[#5C4F46]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
