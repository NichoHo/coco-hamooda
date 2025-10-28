'use client';

import { Sprout, Factory, FlaskConical, Package, Ship, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Sprout,
      number: '01',
      title: 'Sourcing',
      description: 'We carefully select and source premium hardwood and coconut shells from sustainable suppliers.',
    },
    {
      icon: Factory,
      number: '02',
      title: 'Carbonization',
      description: 'Raw materials are processed in controlled kilns to create high-quality natural charcoal.',
    },
    {
      icon: FlaskConical,
      number: '03',
      title: 'Quality Testing',
      description: 'Each batch undergoes rigorous testing for burn time, heat output, and ash content.',
    },
    {
      icon: Package,
      number: '04',
      title: 'Custom Packaging',
      description: 'Charcoal is packaged according to client specifications, from bulk to retail-ready formats.',
    },
    {
      icon: Ship,
      number: '05',
      title: 'Global Shipping',
      description: 'Products are shipped worldwide with efficient logistics and customs coordination.',
    },
    {
      icon: CheckCircle,
      number: '06',
      title: 'Delivery & Support',
      description: 'Timely delivery to your doorstep with ongoing customer support and service.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-neutral-light dark:bg-neutral-dark transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-text dark:text-neutral-text-dark mb-4">
            Our <span className="text-primary">Process</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="font-inter text-base md:text-lg text-neutral-subtext dark:text-neutral-subtext-dark max-w-2xl mx-auto">
            From source to delivery, every step is designed to ensure the highest quality natural charcoal.
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Horizontal Line */}
          <div className="absolute top-[5.75rem] left-0 right-0 h-3 bg-neutral-border dark:bg-neutral-border-dark"></div>
          <div className="absolute top-[5.75rem] left-0 h-3 bg-primary transition-all duration-1000" style={{ width: '100%' }}></div>

          {/* Steps */}
          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Circle on Line */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white dark:border-neutral-dark z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Content */}
                <div className="pt-36 text-center">
                  {/* Icon */}
                  <div className="group inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-neutral-surface-dark rounded-full shadow-lg mb-4 transition-all duration-500 hover:scale-110 hover:shadow-primary/40 hover:shadow-xl">
                    <step.icon className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Number */}
                  <div className="font-poppins text-4xl font-bold text-primary/20 dark:text-primary/30 mb-2">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="font-poppins text-lg font-semibold text-neutral-text dark:text-neutral-text-dark mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-inter text-sm text-neutral-subtext dark:text-neutral-subtext-dark leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- MODIFIED SECTION: Timeline - Mobile/Tablet --- */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            // The wrapper div with `pl-20` and the line/circle elements have been removed.
            // Now we just render the card directly.
            <div key={index} className="bg-white dark:bg-neutral-surface-dark p-6 rounded-xl shadow-md">
              {/* Icon & Number */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-poppins text-3xl font-bold text-primary/20 dark:text-primary/30">
                  {step.number}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-poppins text-xl font-semibold text-neutral-text dark:text-neutral-text-dark mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-base text-neutral-subtext dark:text-neutral-subtext-dark leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}