'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLocale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

export default function PrivacySection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const locale = useLocale();
  const t = translations.privacy;

  const trustItems = [
    { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', label: t.trustOnDevice[locale] },
    { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: t.trustNoCloud[locale] },
    { icon: 'M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21', label: t.trustNoTracking[locale] },
  ];

  return (
    <section
      id="privacy"
      ref={sectionRef}
      className="relative z-10 py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 section-lazy"
    >
      <div className="section-divider absolute top-0 left-0" />

      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* Shield icon */}
          <div className="reveal mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.03] shield-pulse hud-glow-pulse">
              <svg
                className="w-10 h-10 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>
          </div>

          {/* Headline */}
          <div className="reveal reveal-delay-1">
            <div className="hud-accent-line mx-auto" />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              {t.headline1[locale]}
              <br />
              <span className="text-gradient-cyan-white">{t.headline2[locale]}</span>
            </h2>
          </div>

          {/* Description */}
          <p className="reveal reveal-delay-2 text-lg md:text-xl font-light text-[#D1D5DB] mt-8 max-w-xl mx-auto leading-relaxed">
            {t.description[locale]}
          </p>

          {/* Trust indicators */}
          <div className="reveal reveal-delay-3 mt-14 flex flex-wrap items-center justify-center gap-10">
            {trustItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hud-glow-pulse">
                  <svg
                    className="w-6 h-6 text-cyan-400/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <span className="text-xs text-white/50 tracking-wide uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
