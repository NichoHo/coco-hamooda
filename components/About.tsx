'use client';

import { Award, Globe, Leaf, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Globe, value: '50+', label: 'Countries Served' },
    { icon: Award, value: '29+', label: 'Years of Excellence' },
    { icon: Leaf, value: '100%', label: 'Natural & Sustainable' },
    { icon: TrendingUp, value: '10K+', label: 'Tons Exported Annually' },
  ];

  return (
    <section className="py-24 md:py-32 bg-neutral-light dark:bg-neutral-dark transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-text dark:text-neutral-text-dark mb-4">
            About <span className="text-primary">Hammouda Charcoal</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/charcoal-2.jpg"
                alt="Charcoal production"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10"></div>
          </div>

          {/* Text Content */}
          <div>
            <div className="space-y-4 font-inter text-base md:text-lg text-neutral-subtext dark:text-neutral-subtext-dark leading-relaxed">
              <p>
                Hammouda Charcoal Company was founded in Jerash, Jordan, in 1995, producing premium 
                natural charcoal for hookah and grilling. After two decades of excellence in Jordan, 
                we expanded to Egypt in 2015, then into East Asia with facilities in Vietnam and Thailand, 
                and eventually established the Rama Factory in Indonesia, specializing in high-quality 
                coconut shell charcoal production.
              </p>
              <p>
                Today, we export to over 10 countries worldwide, including Jordan, Iraq, Saudi Arabia, 
                Lebanon, the United Kingdom, Canada, Brazil, the United States, and Russia. Every product 
                undergoes rigorous quality control to ensure consistent performance, long burn times, 
                minimal ash production, and optimal heat output—making us the trusted choice for restaurants, 
                retailers, and distributors globally.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-surface-dark p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="font-poppins text-3xl md:text-4xl font-bold text-neutral-text dark:text-neutral-text-dark mb-2">
                {stat.value}
              </div>
              <div className="font-inter text-sm md:text-base text-neutral-subtext dark:text-neutral-subtext-dark">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}