import { cookies } from 'next/headers';
import type { Locale } from '@/lib/translations';

const content: Record<Locale, {
  title: string;
  subtitle: string;
  description: string;
  backLabel: string;
}> = {
  en: {
    title: '404',
    subtitle: 'Page not found',
    description: 'The page you are looking for does not exist or has been moved.',
    backLabel: 'Back to Beebsi',
  },
  pl: {
    title: '404',
    subtitle: 'Strona nie istnieje',
    description: 'Strona, kt\u00f3rej szukasz, nie istnieje lub zosta\u0142a przeniesiona.',
    backLabel: 'Powr\u00f3t do Beebsi',
  },
};

export default async function NotFound() {
  const cookieStore = await cookies();
  const locale: Locale = cookieStore.get('locale')?.value === 'pl' ? 'pl' : 'en';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* HUD background layers */}
      <div className="hud-grid" aria-hidden="true" />
      <div className="hud-vignette" aria-hidden="true" />
      <div className="hud-noise" aria-hidden="true" />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 md:py-5 bg-black/60 backdrop-blur-md border-b border-cyan-500/[0.08]">
        <nav className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
          <a
            href="/"
            className="text-lg md:text-xl font-semibold text-white tracking-tight hover:text-cyan-400/80 transition-colors duration-200"
          >
            Beebsi
          </a>
        </nav>
      </header>

      {/* Content */}
      <div className="relative z-10 text-center max-w-lg">
        {/* HUD accent line */}
        <div className="hud-accent-line mx-auto" />

        {/* 404 number */}
        <h1 className="text-8xl md:text-9xl font-bold text-gradient-cyan-white leading-none tracking-tight">
          {t.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-light text-white/70 mt-6">
          {t.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm md:text-base text-white/40 mt-4 leading-relaxed max-w-sm mx-auto">
          {t.description}
        </p>

        {/* Back link */}
        <a
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-cyan-400/80 hover:text-cyan-400 transition-colors duration-200 group"
        >
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          <span className="text-sm font-medium">{t.backLabel}</span>
        </a>
      </div>
    </div>
  );
}
