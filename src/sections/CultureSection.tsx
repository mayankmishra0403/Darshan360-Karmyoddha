import Image from 'next/image';
import { CULTURAL_HIGHLIGHTS } from '@/data/content';

export default function CultureSection() {
  return (
    <section className="bg-[#F5EFE6] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">Cultural Highlights</p>
          <h2 className="mt-3 font-['Playfair_Display'] text-4xl text-[#2D2420]">Beyond Monuments</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#5C4F46]">
            Experience architecture, traditions, flavors, and performing arts that keep these regions vibrantly alive.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CULTURAL_HIGHLIGHTS.map((item, index) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-[#E5DCD0] bg-[#FFFBF5]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-44 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-['Playfair_Display'] text-2xl text-[#2D2420]">
                  <span className="mr-2">{item.icon}</span>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#5C4F46]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
