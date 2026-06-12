'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLocale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import PhoneMockup from '@/components/ui/PhoneMockup';

export default function CoachSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const locale = useLocale();
  const t = translations.coach;

  const features = [
    t.feature1[locale],
    t.feature2[locale],
    t.feature3[locale],
  ];

  return (
    <section
      id="coach"
      ref={sectionRef}
      className="relative z-10 py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 section-lazy"
    >
      <div className="section-divider absolute top-0 left-0" />

      <div className="max-w-5xl mx-auto">
        <div className="hud-corners hud-corners-inner flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16 py-4 px-4 md:px-8">
          {/* Text - right (reversed) */}
          <div className="reveal-right flex-1 text-center md:text-left">
            <div className="hud-accent-line md:mx-0 mx-auto" />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              {t.headline1[locale]}
              <br />
              <span className="text-gradient-cyan-white">{t.headline2[locale]}</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-[#D1D5DB] mt-8 max-w-lg leading-relaxed">
              {t.description[locale]}
            </p>
            <p className="text-sm text-white/40 mt-4 max-w-lg leading-relaxed">
              {t.crossLinkPre[locale]}<a href="#recovery" className="text-cyan-400/60 hover:text-cyan-400 transition-colors duration-200 underline underline-offset-2 decoration-cyan-400/20 hover:decoration-cyan-400/60">{t.crossLinkRecovery[locale]}</a>{t.crossLinkAnd[locale]}<a href="#health-metrics" className="text-cyan-400/60 hover:text-cyan-400 transition-colors duration-200 underline underline-offset-2 decoration-cyan-400/20 hover:decoration-cyan-400/60">{t.crossLinkHealth[locale]}</a>{t.crossLinkPost[locale]}
            </p>
            <div className="mt-10 space-y-4 max-w-md mx-auto md:mx-0">
              {features.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 dot-pulse flex-shrink-0" />
                  <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phone - left (reversed) */}
          <div className="reveal-left reveal-delay-2 flex-shrink-0 w-[240px] md:w-[280px]">
            <PhoneMockup
              src="/coach.png"
              alt={t.phoneAlt[locale]}
              tilt="left"
              enableParallax
            />
          </div>
        </div>
      </div>
    </section>
  );
}
