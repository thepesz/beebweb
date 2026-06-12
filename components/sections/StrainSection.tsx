'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLocale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import PhoneMockup from '@/components/ui/PhoneMockup';

export default function StrainSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const locale = useLocale();
  const t = translations.strain;

  return (
    <section
      id="strain"
      ref={sectionRef}
      className="relative z-10 py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 section-lazy"
    >
      <div className="section-divider absolute top-0 left-0" />

      <div className="max-w-5xl mx-auto">
        {/* Centered headline */}
        <div className="reveal text-center mb-16 md:mb-24">
          <div className="hud-accent-line hud-accent-line-amber mx-auto" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            {t.headline1[locale]}
            <br />
            <span className="text-gradient-amber-white">{t.headline2[locale]}</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-[#D1D5DB] mt-8 max-w-2xl mx-auto leading-relaxed">
            {t.description[locale]}
          </p>
        </div>

        {/* Two phones side by side */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-14">
          <div className="reveal-left reveal-delay-1 w-[220px] md:w-[260px]">
            <PhoneMockup
              src="/strain_detail.png"
              alt={t.phoneAlt1[locale]}
              glowColor="amber"
              tilt="left"
              enableParallax
              sizes="(max-width: 768px) 220px, 260px"
            />
            <p className="text-center text-sm text-white/40 mt-5 font-light">
              {t.labelStrainDetail[locale]}
            </p>
          </div>
          <div className="reveal-right reveal-delay-2 w-[220px] md:w-[260px]">
            <PhoneMockup
              src="/activities.png"
              alt={t.phoneAlt2[locale]}
              tilt="right"
              enableParallax
              sizes="(max-width: 768px) 220px, 260px"
            />
            <p className="text-center text-sm text-white/40 mt-5 font-light">
              {t.labelActivityHistory[locale]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
