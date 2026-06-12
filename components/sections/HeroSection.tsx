'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLocale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import PhoneMockup from '@/components/ui/PhoneMockup';

export default function HeroSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const locale = useLocale();
  const t = translations.hero;

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-10 lg:px-16 pt-28 pb-20"
    >
      {/* Background ambient gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] glow-ambient-cyan"
        />
      </div>

      {/* Headline */}
      <div className="reveal relative z-10 text-center max-w-3xl mb-12 md:mb-16">
        <div className="hud-accent-line mx-auto" />
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight">
          {t.headline1[locale]}
          <br />
          <span className="text-gradient-cyan-white">{t.headline2[locale]}</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#D1D5DB] mt-8 max-w-2xl mx-auto leading-relaxed">
          {t.subtitle[locale]}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#recovery" className="hud-tag hover:border-cyan-500/30 hover:text-cyan-400 transition-colors duration-200">{t.quickLinkRecovery[locale]}</a>
          <a href="#recovery" className="hud-tag hover:border-cyan-500/30 hover:text-cyan-400 transition-colors duration-200">{t.quickLinkSleep[locale]}</a>
          <a href="#strain" className="hud-tag hover:border-amber-500/30 hover:text-amber-400 transition-colors duration-200">{t.quickLinkStrain[locale]}</a>
          <a href="#strain" className="hud-tag hover:border-amber-500/30 hover:text-amber-400 transition-colors duration-200">{t.quickLinkActivities[locale]}</a>
          <a href="#vitality-age" className="hud-tag hover:border-amber-500/30 hover:text-amber-400 transition-colors duration-200">{t.quickLinkVitalityAge[locale]}</a>
          <a href="#coach" className="hud-tag hover:border-cyan-500/30 hover:text-cyan-400 transition-colors duration-200">{t.quickLinkCoach[locale]}</a>
        </div>
      </div>

      {/* Phone screenshot */}
      <div className="reveal-scale reveal-delay-2 relative z-10 w-[260px] md:w-[300px]">
        <PhoneMockup
          src="/glowna.png"
          alt={t.phoneAlt[locale]}
          priority
          tilt="center"
          enableFloat
          enableParallax
          sizes="(max-width: 768px) 260px, 300px"
        />
      </div>

      {/* Coming soon badge */}
      <div className="reveal reveal-delay-3 relative z-10 mt-12 flex flex-col items-center gap-4">
        <div className="hud-card hud-glow-pulse px-8 py-4 flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span className="text-base font-semibold text-white/80">{t.comingSoon[locale]}</span>
          </div>
          <span className="text-xs text-white/40">{t.launchDate[locale]}</span>
        </div>
      </div>

      {/* Smartwatch note */}
      <div className="reveal reveal-delay-4 relative z-10 mt-6">
        <p className="text-xs text-white/30 text-center max-w-md leading-relaxed">
          {t.smartwatchNote[locale]}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <svg
          className="w-5 h-5 text-cyan-400/30 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
