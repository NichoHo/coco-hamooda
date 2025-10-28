'use client';

import { Flame, Package, Leaf, Globe, Clock, ShieldCheck, Gift } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Flame,
      title: 'Premium Natural Charcoal',
      description: 'High-quality hardwood and coconut shell charcoal for hookah and grilling, ensuring long burn times and optimal heat.',
    },
    {
      icon: Package,
      title: 'Custom Packaging Solutions',
      description: 'Flexible packaging options tailored to your brand requirements, from bulk shipments to retail-ready packages.',
    },
    {
      icon: Globe,
      title: 'Global Export Services',
      description: 'Reliable worldwide shipping to over 10 countries with streamlined logistics and customs handling.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Sourcing',
      description: '100% natural charcoal from sustainably harvested materials, supporting environmental responsibility.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Efficient production and shipping processes ensuring your orders arrive on schedule, every time.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control at every stage to guarantee consistent, premium-grade products.',
    },
  ];

  return (
    <section className="relative py-20 md:bg-gradient-to-br from-neutral-light via-white to-neutral-light dark:from-neutral-dark dark:via-neutral-surface-dark dark:to-neutral-dark overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <Gift className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              What We Offer
            </span>
          </div>
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-text dark:text-neutral-text-dark mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="font-inter text-lg md:text-xl text-neutral-subtext dark:text-neutral-subtext-dark max-w-3xl mx-auto leading-relaxed">
            From production to delivery, we provide comprehensive solutions for all your natural charcoal needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-neutral-surface-dark p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-border dark:border-neutral-border-dark overflow-hidden"
            >
              {/* Animated gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-500 rounded-2xl"></div>
              
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent-amber/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Icon with number badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg shadow-primary/20">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 bg-neutral-light dark:bg-neutral-dark rounded-full text-xs font-poppins font-semibold text-neutral-subtext dark:text-neutral-subtext-dark">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-poppins text-xl md:text-2xl font-semibold text-neutral-text dark:text-neutral-text-dark mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-base text-neutral-subtext dark:text-neutral-subtext-dark leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Container */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/5 to-accent-lime/5 dark:from-primary/10 dark:to-accent-lime/10 rounded-2xl p-8 border border-primary/20 dark:border-primary/30 backdrop-blur-sm">
            <p className="font-poppins text-xl md:text-2xl font-semibold text-neutral-text dark:text-neutral-text-dark mb-2">
              Partner with Us for Reliable Charcoal Supply
            </p>
            <p className="font-inter text-base text-neutral-subtext dark:text-neutral-subtext-dark">
              Whether you need bulk orders, private labeling, or long-term export partnerships, 
              we provide consistent quality and dependable delivery to meet your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}