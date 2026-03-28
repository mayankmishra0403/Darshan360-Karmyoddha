import DestinationCard from '@/components/DestinationCard';
import { DESTINATIONS, TEMPLE_DATA } from '@/data/content';

export default function ExploreSection() {
  const temples = DESTINATIONS.filter(d => d.isTemple);
  const heritageSites = DESTINATIONS.filter(d => !d.isTemple);

  return (
    <section className="bg-[#FFFBF5] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">Featured Destinations</p>
          <h2 className="mt-3 font-['Playfair_Display'] text-4xl text-[#2D2420]">Explore Timeless Places</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#5C4F46]">
            Wander through the living heritage of Gwalior Fort and Orchha, where every corridor preserves a chapter of India's story.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {heritageSites.map((destination, index) => (
            <DestinationCard key={destination.slug} destination={destination} delay={index * 150} />
          ))}
        </div>

        <div className="mt-20 text-center" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">Sacred Pilgrimage</p>
          <h2 className="mt-3 font-['Playfair_Display'] text-4xl text-[#2D2420]">Virtual Darshan Temples</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#5C4F46]">
            Experience divine darshan from anywhere. Browse our collection of holiest temples in India.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {temples.map((destination, index) => (
            <DestinationCard key={destination.slug} destination={destination} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
