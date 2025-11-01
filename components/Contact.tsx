'use client';

export default function Contact() {
  const phoneNumber = '+962 7955 56767';
  const whatsappLink = `https://wa.me/962795556767`;

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/charcoal-3.webp')`,
          }}
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center py-24 md:py-32">
        <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 animate-fadeInUp">
          Let's Connect
          <span className="block mt-2 text-primary">Ready to Start Your Order?</span>
        </h2>
        
        <p className="font-inter text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-12 animate-fadeInUp animation-delay-200">
          Get in touch with us today for premium natural charcoal delivered worldwide. 
          We're here to answer your questions and fulfill your needs.
        </p>

        {/* Phone Number Display */}
        <div className="mb-10 animate-fadeInUp animation-delay-300">
          <p className="font-inter text-sm text-gray-300 mb-2">Contact us directly</p>
          <a 
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center gap-3 font-inter text-3xl md:text-4xl font-semibold text-white hover:text-primary transition-colors duration-300"
          >
            <svg 
              className="w-8 h-8 md:w-10 md:h-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {phoneNumber}
          </a>
        </div>

        {/* WhatsApp CTA Button */}
        <div className="flex justify-center animate-fadeInUp animation-delay-400">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-primary text-white font-poppins font-bold text-lg rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-[0_20px_60px_rgba(30,144,255,0.5)] flex items-center gap-4 overflow-hidden border-2 border-white/20 hover:border-white/40"
            >
            {/* Animated background shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <svg
                className="w-8 h-8 relative z-10 group-hover:transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="relative z-10">Message us on WhatsApp</span>
          </a>
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

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
}