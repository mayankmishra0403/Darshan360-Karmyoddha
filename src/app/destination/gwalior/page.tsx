'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, Utensils, Building2 } from 'lucide-react';
import PlaceCard from '@/components/PlaceCard';
import Accordion from '@/components/Accordion';
import Timeline from '@/components/Timeline';

const gwaliorPlaces = [
  {
    name: 'Raja Nahar Singh Palace',
    image: '/images/raja-nahar-singh-palace.webp',
    description: 'Famous for its stunning blue tile facade, this palace showcases Mughal-Rajput architecture at its finest.',
    timings: '8:00 AM - 5:30 PM',
    entryFee: '₹75 Indians, ₹250 Foreigners',
  },
  {
    name: 'Sas-Bahu Temple',
    image: '/images/saas-bahu-temple.webp',
    description: 'A remarkable 11th-century temple complex with intricate stone carvings.',
    timings: '6:00 AM - 6:00 PM',
    entryFee: 'Free',
  },
  {
    name: 'Teli Ka Mandir',
    image: '/images/teli-ka-mandir.webp',
    description: 'The tallest temple in Gwalior Fort, known for its massive rectangular structure.',
    timings: '8:00 AM - 5:30 PM',
    entryFee: 'Included in fort entry',
  },
  {
    name: 'Jain Rock-cut Statues',
    image: '/images/jain-rock-cut.webp',
    description: 'Ancient Jain Tirthankara carvings dating back to the 7th-15th centuries.',
    timings: '6:00 AM - 6:00 PM',
    entryFee: 'Free',
  },
];

const gwaliorHotels = [
  { name: 'Taj Usha Kiran Palace', type: 'Luxury Heritage', price: '₹8,000+' },
  { name: 'Radisson Gwalior', type: 'Business', price: '₹5,000+' },
  { name: 'Hotel Gwalior Regency', type: 'Mid-range', price: '₹3,000+' },
  { name: 'Neemachand Haveli', type: 'Heritage', price: '₹2,500+' },
];

const gwaliorVendors = [
  { name: 'S.S. Kachoriwala', specialty: 'Famous Poha & Kachori', location: 'Lashkar' },
  { name: 'Bahadoora Ke Laddoo', specialty: 'Traditional Sweets', location: 'Phool Bagh' },
  { name: 'Sukhi Samosa', specialty: 'Crispy Samosas', location: 'Naya Bazaar' },
  { name: 'Ram Babu Mishthan Bhandar', specialty: 'MP Special Snacks', location: 'Dwarakesh' },
];

const gwaliorItinerary = [
  {
    time: 'Morning',
    title: 'Fort Exploration',
    description: 'Start early at Urvai Gate. Explore Man Singh Palace, Gujari Mahal, and the rock-cut Jain statues.',
    location: 'Gwalior Fort',
  },
  {
    time: 'Midday',
    title: 'Temple Visit',
    description: 'Visit Sas-Bahu temples and Teli Ka Mandir. Enjoy lunch at a local restaurant.',
    location: 'Fort Complex',
  },
  {
    time: 'Evening',
    title: 'Light Show & Sunset',
    description: 'Witness the spectacular sound and light show at the fort. Dinner at Phool Bagh area.',
    location: 'Gwalior Fort',
  },
];

const routesInfo = [
  {
    id: 'routes',
    title: 'Routes & Access',
    content: (
      <div className="space-y-4">
        <div>
          <h5 className="font-semibold text-[#2D2420]">Urvai Gate (Vehicle Access)</h5>
          <p className="text-sm text-[#5C4F46]">Main entrance with parking. Vehicles can climb up to the main fort area.</p>
        </div>
        <div>
          <h5 className="font-semibold text-[#2D2420]">Gwalior Gate (Heritage Walk)</h5>
          <p className="text-sm text-[#5C4F46]">Traditional walking route through the old city. Experience the historic bazaar atmosphere.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'timings',
    title: 'Timings & Entry',
    content: (
      <div className="space-y-4">
        <div>
          <h5 className="font-semibold text-[#2D2420]">Fort Timings</h5>
          <p className="text-sm text-[#5C4F46]">8:00 AM - 5:30 PM (October - March)<br />8:00 AM - 6:00 PM (April - September)</p>
        </div>
        <div>
          <h5 className="font-semibold text-[#2D2420]">Entry Fees</h5>
          <p className="text-sm text-[#5C4F46]">Indians: ₹75<br />Foreigners: ₹250<br />Students (with ID): ₹35</p>
        </div>
      </div>
    ),
  },
  {
    id: 'history',
    title: 'Historical Significance',
    content: (
      <div className="space-y-4">
        <p className="text-sm text-[#5C4F46]">
          Gwalior Fort has been ruled by multiple dynasties including the Kachchhapaghatas, Tomars, Mughals, Marathas, and British. 
          The Tomar dynasty, particularly King Man Singh, contributed significantly to its architectural grandeur in the 15th century.
        </p>
        <p className="text-sm text-[#5C4F46]">
          The fort has witnessed many pivotal historical events and is known for housing the famous musician Miyan Tansen, 
          who was a part of Emperor Akbar&apos;s court.
        </p>
      </div>
    ),
  },
];

export default function GwaliorPage() {
  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/gwalior-fort.jpg"
          alt="Gwalior Fort"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2420]/80 via-[#2D2420]/40 to-transparent" />
        
        <div className="absolute top-24 left-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-white/30"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="mx-auto max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]"
            >
              Featured Destination
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-2 font-['Playfair_Display'] text-5xl text-white lg:text-6xl"
            >
              Gwalior Fort
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg text-white/80"
            >
              The Majestic Sentinel - A mighty hill fort where Rajput valor meets timeless art
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl text-[#2D2420]">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#5C4F46]">
              As dawn paints the sandstone walls in gold, Gwalior Fort feels less like a monument and more like a living chronicle. 
              Legends trace its name to Sage Gwalipa and King Suraj Sen, while history records the Tomar rulers shaping its grand palaces 
              in the 15th century. Through Mughal campaigns, Maratha stewardship, and colonial transitions, the fort stood firm—guarding 
              stories of music, devotion, politics, and power.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-[#FFFBF5] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl text-[#2D2420]">History & Heritage</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-[#5C4F46]">
                  The fort&apos;s origins are shrouded in legend, linked to the sage Gwalipa who cured King Suraj Sen of a fatal disease. 
                  The king built the fort and named it after the sage, establishing a connection between royalty and spirituality that persists today.
                </p>
                <p className="text-[#5C4F46]">
                  The Tomar dynasty, particularly under King Man Singh, transformed the fort into a magnificent royal residence in the 15th century, 
                  introducing the exquisite blue tile work that remains a signature feature.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-[#5C4F46]">
                  The Mughal era brought significant architectural additions, while the Marathas and later the British contributed to the fort&apos;s 
                  evolving character. Today, it stands as one of India&apos;s finest hill forts, a testament to centuries of cultural synthesis.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Rajput Architecture', 'Mughal Influence', 'Maratha Legacy', 'British Era'].map((tag) => (
                    <span key={tag} className="rounded-full bg-[#C8A96A]/20 px-3 py-1 text-xs font-medium text-[#7A1F1F]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Places to Visit */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-['Playfair_Display'] text-3xl text-[#2D2420]">Places to Visit</h2>
            <p className="mt-2 text-[#5C4F46]">Explore the architectural marvels within the fort complex</p>
          </motion.div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {gwaliorPlaces.map((place, index) => (
              <PlaceCard key={place.name} {...place} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Routes & Travel Info */}
      <section className="bg-[#FFFBF5] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl text-[#2D2420]">Routes & Travel Info</h2>
            <p className="mt-2 text-[#5C4F46]">Essential information for planning your visit</p>
          </motion.div>

          <div className="mt-8">
            <Accordion items={routesInfo} />
          </div>
        </div>
      </section>

      {/* Hotels / Stay */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl text-[#2D2420]">Where to Stay</h2>
            <p className="mt-2 text-[#5C4F46]">Accommodation options for every budget</p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {gwaliorHotels.map((hotel, index) => (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-[#E5DCD0] bg-[#FFFBF5] p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7A1F1F]/10 text-[#7A1F1F]">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-['Playfair_Display'] text-lg text-[#2D2420]">{hotel.name}</h4>
                    <p className="text-sm text-[#5C4F46]">{hotel.type}</p>
                    <p className="mt-1 text-sm font-medium text-[#7A1F1F]">{hotel.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Vendors / Food */}
      <section className="bg-[#FFFBF5] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl text-[#2D2420]">Local Flavors</h2>
            <p className="mt-2 text-[#5C4F46]">Must-try food spots recommended by locals</p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {gwaliorVendors.map((vendor, index) => (
              <motion.div
                key={vendor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-[#E5DCD0] bg-[#F5EFE6] p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C8A96A]/20 text-[#C8A96A]">
                    <Utensils className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-['Playfair_Display'] text-lg text-[#2D2420]">{vendor.name}</h4>
                    <p className="text-sm text-[#5C4F46]">{vendor.specialty}</p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-[#8B7B70]">
                      <MapPin className="h-3 w-3" />
                      {vendor.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Itinerary */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl text-[#2D2420]">Suggested Itinerary</h2>
            <p className="mt-2 text-[#5C4F46]">Make the most of your visit with our curated plan</p>
          </motion.div>

          <div className="mt-8">
            <Timeline items={gwaliorItinerary} />
          </div>
        </div>
      </section>
    </div>
  );
}
