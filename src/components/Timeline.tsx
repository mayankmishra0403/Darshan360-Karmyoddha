'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { ReactNode } from 'react';

interface TimelineItem {
  time: string;
  title: string;
  description: string;
  location?: string;
  icon?: ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  title?: string;
}

export default function Timeline({ items, title }: TimelineProps) {
  return (
    <div className="relative">
      {title && (
        <h3 className="mb-8 font-['Playfair_Display'] text-2xl text-[#2D2420]">{title}</h3>
      )}
      <div className="relative border-l-2 border-[#C8A96A]/30 ml-4 space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8"
          >
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-[#C8A96A] bg-[#FFFBF5]" />
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#7A1F1F]">
                  <Clock className="h-3.5 w-3.5" />
                  {item.time}
                </span>
                <h4 className="mt-1 font-['Playfair_Display'] text-lg text-[#2D2420]">{item.title}</h4>
                <p className="mt-1 text-sm text-[#5C4F46]">{item.description}</p>
                {item.location && (
                  <span className="mt-2 inline-flex items-center gap-1 text-xs text-[#8B7B70]">
                    <MapPin className="h-3 w-3" />
                    {item.location}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
