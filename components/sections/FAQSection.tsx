'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLocale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

export default function FAQSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const locale = useLocale();
  const t = translations.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = t.items[locale];

  return (
    <>
      <section
        id="faq"
        ref={sectionRef}
        className="relative z-10 py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 section-lazy"
      >
        <div className="section-divider absolute top-0 left-0" />

        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="reveal text-3xl md:text-5xl font-bold text-white mb-14 text-center tracking-tight">
              <span className="text-gradient-cyan-white">{t.title[locale]}</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`reveal hud-card overflow-hidden transition-all duration-300 hover:border-cyan-500/15 stagger-${Math.min(index, 9)}`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cyan-500/[0.02] transition-colors duration-200 min-h-[48px]"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-base md:text-lg font-semibold text-white/90 pr-8">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-5 h-5 text-cyan-400/40 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-5">
                        <p className="text-white/60 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hidden SEO content */}
        <div className="sr-only" aria-hidden="true">
          <h2>{t.seoTitle[locale]}</h2>
          <p>{t.seoText[locale]}</p>
        </div>
      </section>
    </>
  );
}
