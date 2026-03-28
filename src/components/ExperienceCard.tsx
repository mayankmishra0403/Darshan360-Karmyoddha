'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';

interface ExperienceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
  index?: number;
}

export default function ExperienceCard({ title, description, icon, image, index = 0 }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-[#E5DCD0] bg-[#FFFBF5] shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2420]/60 to-transparent" />
        <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C8A96A] text-2xl shadow-lg">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-['Playfair_Display'] text-xl text-[#2D2420]">{title}</h3>
        <p className="mt-2 text-sm text-[#5C4F46]">{description}</p>
      </div>
    </motion.div>
  );
}
