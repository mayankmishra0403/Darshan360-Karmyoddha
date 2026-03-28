import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getDestinationBySlug } from '@/lib/api';

interface SitePageProps {
  params: Promise<{ slug: string }>;
}

export default async function SitePage({ params }: SitePageProps) {
  const { slug } = await params;
  const site = getDestinationBySlug(slug);

  if (!site) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={site.heroImage}
          alt={site.name}
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover scale-110 animate-scale-in"
        />
        <div className="absolute inset-0 warm-overlay" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-[#C8A96A] text-sm font-medium tracking-widest uppercase animate-fade-down">
              {site.isTemple ? 'Sacred Temple' : 'Heritage Site'}
            </span>
            <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl text-white mt-3 mb-4 animate-fade-up">
              {site.name}
            </h1>
            <p className="text-[#E5DCD0] text-lg max-w-xl animate-fade-up delay-200">
              {site.tagline}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <section className="rounded-2xl border border-[#E5DCD0] bg-[#FFFBF5] p-8">
          <h2 className="font-['Playfair_Display'] text-3xl text-[#2D2420]">History in Story Form</h2>
          <p className="mt-4 text-[#5C4F46] text-lg leading-relaxed">{site.storyHistory}</p>
        </section>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl border border-[#E5DCD0] bg-[#FFFBF5] p-8">
            <h3 className="font-['Playfair_Display'] text-2xl text-[#2D2420]">Key Attractions</h3>
            <ul className="mt-4 space-y-3 text-[#5C4F46]">
              {site.keyAttractions.map((attraction) => (
                <li key={attraction} className="flex gap-3">
                  <span className="text-[#C8A96A]">✦</span>
                  <span>{attraction}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-[#E5DCD0] bg-[#FFFBF5] p-8">
            <h3 className="font-['Playfair_Display'] text-2xl text-[#2D2420]">Best Time to Visit</h3>
            <p className="mt-4 text-[#5C4F46] leading-relaxed">{site.bestTimeToVisit}</p>
            <Link
              href="/planner"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#7A1C1C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9A3535]"
            >
              Plan Your Visit
              <span aria-hidden>→</span>
            </Link>
          </section>
        </div>

        <section>
          <h3 className="font-['Playfair_Display'] text-3xl text-[#2D2420]">Image Gallery</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.gallery.map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#E5DCD0]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-[#7A1C1C] p-8 text-white">
          <h3 className="font-['Playfair_Display'] text-3xl">Need a Personal Story Guide?</h3>
          <p className="mt-3 text-[#F2E6D3]">Ask the AI assistant for local legends, route suggestions, and culture-first travel tips.</p>
          <Link href="/ai" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#C8A96A] px-6 py-3 text-sm font-semibold text-[#2D2420]">
            Open AI Assistant
            <span aria-hidden>→</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
