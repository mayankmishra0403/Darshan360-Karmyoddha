'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, Utensils, Building2 } from 'lucide-react';
import PlaceCard from '@/components/PlaceCard';
import Accordion from '@/components/Accordion';
import Timeline from '@/components/Timeline';

const orchhaPlaces = [
  {
    name: 'Jahangir Mahal',
    image: '/images/jahangir-mahal.webp',
    description: 'Built to honor Emperor Jahangir visit, this palace showcases Bundela-Mughal architectural fusion.',
    timings: '8:00 AM - 5:00 PM',
    entryFee: '₹30 Indians, ₹100 Foreigners',
  },
  {
    name: 'Raja Mahal',
    image: '/images/raja-mahal.webp',
    description: 'The oldest palace in Orchha with stunning murals depicting royal life and mythological scenes.',
    timings: '8:00 AM - 5:00 PM',
    entryFee: '₹30 Indians, ₹100 Foreigners',
  },
  {
    name: 'Ram Raja Temple',
    image: '/images/ram-raja-temple.webp',
    description: 'Unique temple where Lord Rama is treated as a king. The only temple with a palace-like structure.',
    timings: '5:00 AM - 12:00 PM, 3:00 PM - 9:00 PM',
    entryFee: 'Free',
  },
  {
    name: 'Chaturbhuj Temple',
    image: '/images/chaturbuj-temple.webp',
    description: 'Massive temple built by the Bundelas, famous for its towering spire and intricate carvings.',
    timings: '6:00 AM - 6:00 PM',
    entryFee: 'Free',
  },
];

const orchhaHotels = [
  { name: 'Sheesh Mahal (MTDC)', type: 'Heritage', price: '₹1,500+' },
  { name: 'Orchha Resort', type: 'Luxury', price: '₹6,000+' },
  { name: 'Hotel Bundela Resort', type: 'Mid-range', price: '₹3,500+' },
  { name: 'Madhya Pradesh Tourism Hotel', type: 'Standard', price: '₹1,200+' },
];

const orchhaVendors = [
  { name: 'Jai Shree Kanhaiya', specialty: 'Poha & Jalebi', location: 'Main Market' },
  { name: 'Shyam Sweet House', specialty: 'Traditional Sweets', location: 'Bus Stand Road' },
  { name: 'Ramlila Bazar Food Stalls', specialty: 'Local Snacks', location: 'Near Ram Raja Temple' },
  { name: 'Bundeli Kitchen', specialty: 'Regional Cuisine', location: 'Orchha Village' },
];

const orchhaItinerary = [
  {
    time: 'Morning',
    title: 'Fort Complex Exploration',
    description: 'Start with Jahangir Mahal, followed by Raja Mahal. Explore the ancient courtyards and murals.',
    location: 'Orchha Fort Complex',
  },
  {
    time: 'Midday',
    title: 'Temples & River',
    description: 'Visit Ram Raja Temple and Chaturbhuj Temple. Enjoy lunch by the Betwa River.',
    location: 'Temple Area',
  },
  {
    time: 'Evening',
    title: 'Aarti & Light Show',
    description: 'Attend the evening Aarti at Ram Raja Temple. Witness the spectacular light show at the fort.',
    location: 'Betwa River & Fort',
  },
];

const routesInfo = [
  {
    id: 'getting-there',
    title: 'How to Reach',
    content: (
      <div className="space-y-4">
        <div>
          <h5 className="font-semibold text-[#2D2420]">From Jhansi</h5>
          <p className="text-sm text-[#5C4F46]">Orchha is 16 km from Jhansi Railway Station. Regular buses and taxis are available (30-40 min).</p>
        </div>
        <div>
          <h5 className="font-semibold text-[#2D2420]">From Gwalior</h5>
          <p className="text-sm text-[#5C4F46]">Approximately 120 km via Gwalior-Jhansi Highway. Can be covered as a day trip or with an overnight stay.</p>
        </div>
        <div>
          <h5 className="font-semibold text-[#2D2420]">Nearest Airport</h5>
          <p className="text-sm text-[#5C4F46]">Gwalior Airport (130 km) or Khajuraho Airport (175 km).</p>
        </div>
      </div>
    ),
  },
  {
    id: 'best-time',
    title: 'Best Time to Visit',
    content: (
      <div className="space-y-4">
        <div>
          <h5 className="font-semibold text-[#2D2420]">October - March</h5>
          <p className="text-sm text-[#5C4F46]">Ideal weather for exploration. Cool evenings perfect for the light show.</p>
        </div>
        <div>
          <h5 className="font-semibold text-[#2D2420]">April - June</h5>
          <p className="text-sm text-[#5C4F46]">Hot and dry. Early morning and evening visits recommended.</p>
        </div>
        <div>
          <h5 className="font-semibold text-[#2D2420]">Monsoon</h5>
          <p className="text-sm text-[#5C4F46]">Lush green surroundings. Some areas may be inaccessible due to flooding.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'culture',
    title: 'Unique Culture',
    content: (
      <div className="space-y-4">
        <p className="text-sm text-[#5C4F46]">
          Orchha is unique for its tradition of treating Lord Rama as a king. The Ram Raja Temple is the only place 
          where Rama is worshipped as a royal monarch, complete with guards and protocol.
        </p>
        <p className="text-sm text-[#5C4F46]">
          The Bundela dynasty&apos;s legacy lives on through the stunning palaces and cenotaphs (chhatris) that line 
          the Betwa River, creating one of India&apos;s most picturesque heritage sites.
        </p>
      </div>
    ),
  },
];

export default function OrchhaPage() {
  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/orchha.jpg"
          alt="Orchha"
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
              Orchha
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg text-white/80"
            >
              The Hidden Treasure by Betwa - A riverside town of palaces, chhatris, and sacred calm
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
              Orchha rises beside the Betwa like a quiet epic. Founded in the 16th century by the Bundela kings, 
              it grew into a royal seat where architecture reflected both Rajput confidence and Mughal-era diplomacy. 
              Jahangir Mahal was built to honor an imperial visit, while Ram Raja Temple transformed royal space into 
              devotional center. By sunset, as cenotaphs mirror in the river, Orchha reveals its soul—less crowded 
              than major circuits, yet deeply layered with memory, ritual, and artistry.
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
                  The Bundela dynasty established Orchha as their capital in the 16th century. The name &quot;Orchha&quot; 
                  means &quot;hidden&quot; - and the town remains relatively untouched compared to more famous heritage sites.
                </p>
                <p className="text-[#5C4F46]">
                  The highlight is the Orchha Fort Complex, built on an island in the Betwa River. The palaces 
                  showcase intricate murals and architectural brilliance that rivals the finest monuments in India.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-[#5C4F46]">
                  The unique Ram Raja Temple houses Lord Rama as a king - a rare tradition where the deity is treated 
                  with royal protocol. The Chaturbhuj Temple, built in the 16th century, features the tallest spire 
                  in central India.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Bundela Dynasty', 'River Island', 'Royal Palaces', 'Sacred Temples'].map((tag) => (
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
            <p className="mt-2 text-[#5C4F46]">Discover the architectural marvels of Bundela royalty</p>
          </motion.div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {orchhaPlaces.map((place, index) => (
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
            {orchhaHotels.map((hotel, index) => (
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
            <p className="mt-2 text-[#5C4F46]">Must-try food spots in Orchha</p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {orchhaVendors.map((vendor, index) => (
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
            <Timeline items={orchhaItinerary} />
          </div>
        </div>
      </section>
    </div>
  );
}
