import Link from 'next/link';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function Hero({ title, subtitle, ctaText, ctaHref }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5EFE6] via-[#EDE6D9] to-[#F5EFE6]" />
      
      {/* Animated orbs - floating decorative elements */}
      <div 
        className="hero-orb hero-orb-1"
        data-aos="fade-down"
        data-aos-delay="0"
      />
      <div 
        className="hero-orb hero-orb-2"
        data-aos="fade-up"
        data-aos-delay="500"
      />
      <div 
        className="hero-orb hero-orb-3"
        data-aos="fade-left"
        data-aos-delay="1000"
      />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232D2420' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Decorative mangal kalash symbol with pulse */}
        <div 
          className="mb-10 flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="relative">
            <div className="w-16 h-16 border-2 border-[#C8A96A]/30 rounded-full flex items-center justify-center animate-breathe">
              <div className="w-4 h-4 bg-[#C8A96A] rounded-full" />
            </div>
            {/* Ring effect */}
            <div className="absolute inset-0 w-16 h-16 border border-[#C8A96A]/20 rounded-full animate-ping" />
          </div>
        </div>

        <h1 
          className="font-['Playfair_Display'] text-5xl sm:text-6xl lg:text-7xl text-[#2D2420] mb-8 leading-[1.15]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {title || "Walk Through Living History"}
        </h1>
        
        <p 
          className="text-lg sm:text-xl text-[#5C4F46] mb-12 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {subtitle || "Where ancient stones whisper tales of emperors and artisans. Let the walls speak to you."}
        </p>
        
        <Link
          href={ctaHref || "/explore"}
          className="inline-flex items-center gap-3 px-10 py-4 bg-[#7A1F1F] text-white font-medium rounded-full hover:bg-[#9A3535] transition-all duration-300 hover:shadow-xl hover:shadow-[#7A1F1F]/20 hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          {ctaText || "Begin Your Journey"}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Location hint with scroll indicator */}
        <div 
          className="mt-20"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <p className="text-sm text-[#8B7B70] mb-4">
            Starting from the heart of Madhya Pradesh
          </p>
          {/* Scroll down indicator */}
          <div className="flex justify-center">
            <div className="w-6 h-10 border-2 border-[#C8A96A]/40 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-[#C8A96A] rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5EFE6] to-transparent" />
    </section>
  );
}
