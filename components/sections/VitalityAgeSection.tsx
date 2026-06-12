'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLocale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import PhoneMockup from '@/components/ui/PhoneMockup';

export default function VitalityAgeSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const locale = useLocale();
  const t = translations.vitalityAge;

  return (
    <section
      id="vitality-age"
      ref={sectionRef}
      className="relative z-10 py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 section-lazy"
    >
      <div className="section-divider absolute top-0 left-0" />

      <div className="max-w-5xl mx-auto">
        <div className="hud-corners hud-corners-inner flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16 py-4 px-4 md:px-8">
          {/* Text - right (reversed) */}
          <div className="reveal-right flex-1 text-center md:text-left">
            <div className="hud-accent-line hud-accent-line-amber md:mx-0 mx-auto" />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              {t.headline1[locale]}
              <br />
              <span className="text-gradient-amber-white">{t.headline2[locale]}</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-[#D1D5DB] mt-8 max-w-lg leading-relaxed">
              {t.description[locale]}
            </p>
            <p className="text-base text-white/50 mt-5 max-w-lg leading-relaxed">
              {t.subdescription[locale]}
            </p>
          </div>

          {/* Phone - left (reversed) */}
          <div className="reveal-left reveal-delay-2 flex-shrink-0 w-[240px] md:w-[280px]">
            <PhoneMockup
              src="/health_age.png"
              alt={t.phoneAlt[locale]}
              glowColor="amber"
              tilt="left"
              enableParallax
            />
          </div>
        </div>
      </div>
    </section>
  );
}
