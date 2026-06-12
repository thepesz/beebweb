'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLocale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import PhoneMockup from '@/components/ui/PhoneMockup';

export default function HealthMonitorSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const locale = useLocale();
  const t = translations.healthMonitor;

  const metrics = [
    { label: 'HRV', color: 'bg-cyan-400' },
    { label: 'RHR', color: 'bg-cyan-400' },
    { label: 'SpO2', color: 'bg-cyan-400' },
    { label: t.metricBreath[locale], color: 'bg-cyan-400' },
    { label: t.metricTemp[locale], color: 'bg-amber-400' },
    { label: t.metricSleep[locale], color: 'bg-amber-400' },
    { label: t.metricCalories[locale], color: 'bg-amber-400' },
    { label: t.metricSteps[locale], color: 'bg-amber-400' },
  ];

  return (
    <section
      id="health-metrics"
      ref={sectionRef}
      className="relative z-10 py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 section-lazy"
    >
      <div className="section-divider absolute top-0 left-0" />

      <div className="max-w-5xl mx-auto">
        <div className="hud-corners hud-corners-inner flex flex-col md:flex-row items-center gap-12 md:gap-16 py-4 px-4 md:px-8">
          {/* Text - left */}
          <div className="reveal-left flex-1 text-center md:text-left">
            <div className="hud-accent-line md:mx-0 mx-auto" />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              {t.headline1[locale]}
              <br />
              <span className="text-gradient-cyan-white">{t.headline2[locale]}</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-[#D1D5DB] mt-8 max-w-lg leading-relaxed">
              {t.description[locale]}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-3 max-w-sm mx-auto md:mx-0">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-center gap-2 text-sm text-white/60"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${metric.color} dot-pulse`} />
                  {metric.label}
                </div>
              ))}
            </div>
          </div>

          {/* Phone - right */}
          <div className="reveal-right reveal-delay-2 flex-shrink-0 w-[240px] md:w-[280px]">
            <PhoneMockup
              src="/health_metrics.png"
              alt={t.phoneAlt[locale]}
              tilt="right"
              enableParallax
            />
          </div>
        </div>
      </div>
    </section>
  );
}
