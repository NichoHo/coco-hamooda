'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/charcoal.jpg'`,
          }}
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h1 className="font-poppins text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 animate-fadeInUp">
          Premium Natural Charcoal
          <span className="block mt-2 text-primary">From Nature to Your Fire</span>
        </h1>

        <p className="font-inter text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
          Crafting and delivering the finest quality natural charcoal worldwide since 1995.
          Sustainably sourced, expertly produced, and trusted by clients across the globe.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-poppins font-semibold rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-[0_10px_40px_rgba(59,130,246,0.5)] overflow-hidden border border-blue-400/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10">Get in Touch</span>
          </Link>
          <Link
            href="/about"
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-poppins font-semibold rounded-xl border-2 border-white/40 hover:border-white/60 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10">Learn More</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
}