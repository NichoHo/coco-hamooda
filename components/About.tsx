'use client';

import { useState } from 'react';
import { Award, Globe, Leaf, TrendingUp } from 'lucide-react';

export default function About() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  const translations = {
    en: {
      title: 'About',
      subtitle: 'Coco Hamooda',
      p1: 'Coco Hamooda was founded in Jerash, Jordan, in 1995, producing premium natural charcoal for hookah and grilling. After two decades of excellence in Jordan, we expanded to Egypt in 2015, then into East Asia with facilities in Vietnam and Thailand, and eventually established the Rama Factory in Indonesia, specializing in high-quality coconut shell charcoal production.',
      p2: 'Today, we export to over 10 countries worldwide, including Jordan, Iraq, Saudi Arabia, Lebanon, the United Kingdom, Canada, Brazil, the United States, and Russia. Every product undergoes rigorous quality control to ensure consistent performance, long burn times, minimal ash production, and optimal heat output—making us the trusted choice for restaurants, retailers, and distributors globally.',
      stats: [
        { icon: Globe, value: '50+', label: 'Countries Served' },
        { icon: Award, value: '29+', label: 'Years of Excellence' },
        { icon: Leaf, value: '100%', label: 'Natural & Sustainable' },
        { icon: TrendingUp, value: '10K+', label: 'Tons Exported Annually' },
      ],
      toggle: 'العربية', // This is not used by the new button style but left for reference
    },
    ar: {
      title: 'عن',
      subtitle: 'فحم حموده',
      p1: 'تاسست شركة فحم حموده في الاردن جرش عام 1995 حيث بداء العمل في صناعة الفحم النباتي بكافة الاصناف الارجيله والمشاوي واستمر العمل فحم النباتي من 1995ولغاية 2015في الاردN وبعد ذالك توجهة إلى مصر وبعد ذالك توجهة إلى شرق اسيأ إلى فيتنام وتايلند وذهبت إلى اندونيسيا وتم افتتاح مصنع راما لصناعة فحم جوز الهند.',
      p2: 'والان نصدر إلى اكثر من دوله إلى الأردن والعراق والسعوديه ولبنان وا بريطانيا وكندا وبرازيل واميركا وا روسيا.',
      stats: [
        { icon: Globe, value: '+50', label: 'الدول التي نخدمها' },
        { icon: Award, value: '+29', label: 'سنوات من التميز' },
        { icon: Leaf, value: '100%', label: 'طبيعي ومستدام' },
        { icon: TrendingUp, value: '+10K', label: 'طن يصدر سنويا' },
      ],
      toggle: 'English', // This is not used by the new button style but left for reference
    },
  };

  const t = translations[lang];

  return (
    <section
      className="py-24 md:py-32 bg-neutral-light dark:bg-neutral-dark transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* --- Language Toggle Button --- */}
        <div className="absolute top-8 right-0 m-6 md:m-12 z-10 md:top-0">
          <div className="relative inline-flex items-center bg-gradient-to-r from-white to-gray-50 dark:from-neutral-surface-dark dark:to-neutral-800 rounded-full p-1 shadow-xl border border-gray-200 dark:border-neutral-700">
            {/* Sliding background indicator */}
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-6px)] bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg transition-all duration-300 ease-out ${
                lang === 'en' ? 'left-1' : 'left-[calc(50%+2px)]'
              }`}
            />
            
            <button
              onClick={() => setLang('en')}
              className={`relative px-4 py-2 rounded-full font-inter font-semibold text-sm tracking-wide transition-all duration-300 min-w-[60px] text-center ${
                lang === 'en'
                  ? 'text-white scale-105'
                  : 'text-neutral-subtext dark:text-neutral-subtext-dark hover:text-neutral-text dark:hover:text-neutral-text-dark hover:scale-105'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLang('ar')}
              className={`relative px-4 py-2 rounded-full font-cairo font-semibold text-sm tracking-wide transition-all duration-300 min-w-[60px] text-center ${
                lang === 'ar'
                  ? 'text-white scale-105'
                  : 'text-neutral-subtext dark:text-neutral-subtext-dark hover:text-neutral-text dark:hover:text-neutral-text-dark hover:scale-105'
              }`}
              aria-label="Switch to Arabic"
            >
              AR
            </button>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl pt-4 md:text-4xl lg:text-5xl font-semibold text-neutral-text dark:text-neutral-text-dark mb-4 ${
              lang === 'ar' ? 'font-cairo' : 'font-poppins'
            }`}
          >
            {t.title} <span className="text-primary">{t.subtitle}</span>
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
            {/* Decorative Element - Removed ltr/rtl */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10"></div>
          </div>

          {/* Text Content */}
          <div>
            <div
              className={`space-y-4 text-base md:text-lg text-neutral-subtext dark:text-neutral-subtext-dark leading-relaxed ${
                lang === 'ar'
                  ? 'font-cairo text-right' // --- ADDED text-right for Arabic
                  : 'font-inter text-left'
              }`}
            >
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {t.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-surface-dark p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <div
                className={`text-3xl md:text-4xl font-bold text-neutral-text dark:text-neutral-text-dark mb-2 ${
                  lang === 'ar' ? 'font-cairo' : 'font-inter'
                }`}
              >
                {stat.value}
              </div>
              <div
                className={`text-sm md:text-base text-neutral-subtext dark:text-neutral-subtext-dark ${
                  lang === 'ar' ? 'font-cairo' : 'font-inter'
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

