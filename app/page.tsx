import { cookies } from 'next/headers';
import { translations } from '@/lib/translations';
import type { Locale } from '@/lib/translations';
import HeroSection from '@/components/sections/HeroSection';
import MetricsBreakdownSection from '@/components/sections/MetricsBreakdownSection';
import RecoverySection from '@/components/sections/RecoverySection';
import VitalityAgeSection from '@/components/sections/VitalityAgeSection';
import HealthMonitorSection from '@/components/sections/HealthMonitorSection';
import CoachSection from '@/components/sections/CoachSection';
import StrainSection from '@/components/sections/StrainSection';
import FamilySection from '@/components/sections/FamilySection';
import PrivacySection from '@/components/sections/PrivacySection';
import FAQSection from '@/components/sections/FAQSection';
import EmailSection from '@/components/sections/EmailSection';

export default async function Home() {
  const cookieStore = await cookies();
  const locale: Locale = cookieStore.get('locale')?.value === 'pl' ? 'pl' : 'en';
  const t = translations;

  return (
    <main className="bg-black relative">
      {/* HUD background layers */}
      <div className="hud-grid" aria-hidden="true" />
      <div className="hud-scanline" aria-hidden="true" />
      <div className="hud-vignette" aria-hidden="true" />
      <div className="hud-noise" aria-hidden="true" />

      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 md:py-5 bg-black/60 backdrop-blur-md border-b border-cyan-500/[0.08]">
        <nav className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between" aria-label={locale === 'pl' ? 'Nawigacja' : 'Navigation'}>
          <a href="#hero" className="text-lg md:text-xl font-semibold text-white tracking-tight hover:text-cyan-400/80 transition-colors duration-200">
            Beebsi
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#recovery" className="text-sm text-white/50 hover:text-cyan-400/80 transition-colors duration-200">{t.header.navRecovery[locale]}</a>
            <a href="#vitality-age" className="text-sm text-white/50 hover:text-cyan-400/80 transition-colors duration-200">{t.header.navVitalityAge[locale]}</a>
            <a href="#health-metrics" className="text-sm text-white/50 hover:text-cyan-400/80 transition-colors duration-200">{t.header.navHealth[locale]}</a>
            <a href="#coach" className="text-sm text-white/50 hover:text-cyan-400/80 transition-colors duration-200">{t.header.navCoach[locale]}</a>
            <a href="#strain" className="text-sm text-white/50 hover:text-cyan-400/80 transition-colors duration-200">{t.header.navStrain[locale]}</a>
            <a href="#faq" className="text-sm text-white/50 hover:text-cyan-400/80 transition-colors duration-200">{t.header.navFAQ[locale]}</a>
            <a href="#notify" className="text-sm text-cyan-400/80 hover:text-cyan-400 transition-colors duration-200 font-medium">{t.header.notifyMe[locale]}</a>
          </div>
          <a
            href="#notify"
            className="md:hidden text-sm text-white/50 hover:text-cyan-400/80 transition-colors duration-200 min-h-[44px] flex items-center px-2"
          >
            {t.header.notifyMe[locale]}
          </a>
        </nav>
      </header>

      <HeroSection />
      <MetricsBreakdownSection />
      <RecoverySection />
      <VitalityAgeSection />
      <HealthMonitorSection />
      <CoachSection />
      <StrainSection />
      <FamilySection />
      <PrivacySection />
      <FAQSection />
      <EmailSection />

      {/* Footer */}
      <footer className="relative z-10 py-16 md:py-20 px-6 md:px-10 lg:px-16 border-t border-cyan-500/[0.08]">
        <div className="max-w-5xl mx-auto">
          {/* Footer grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-14">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <a href="#hero" className="text-lg font-semibold text-white tracking-tight hover:text-cyan-400/80 transition-colors duration-200">Beebsi</a>
              <p className="text-sm text-white/30 font-light mt-3 leading-relaxed">
                {t.footer.tagline[locale]}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">{t.footer.sectionFeatures[locale]}</h3>
              <ul className="space-y-2.5">
                <li><a href="#recovery" className="text-sm text-white/35 hover:text-cyan-400/80 transition-colors duration-200">{t.footer.linkRecovery[locale]}</a></li>
                <li><a href="#vitality-age" className="text-sm text-white/35 hover:text-cyan-400/80 transition-colors duration-200">{t.footer.linkVitalityAge[locale]}</a></li>
                <li><a href="#health-metrics" className="text-sm text-white/35 hover:text-cyan-400/80 transition-colors duration-200">{t.footer.linkHealth[locale]}</a></li>
                <li><a href="#coach" className="text-sm text-white/35 hover:text-cyan-400/80 transition-colors duration-200">{t.footer.linkCoach[locale]}</a></li>
                <li><a href="#strain" className="text-sm text-white/35 hover:text-cyan-400/80 transition-colors duration-200">{t.footer.linkStrain[locale]}</a></li>
                <li><a href="#family" className="text-sm text-white/35 hover:text-cyan-400/80 transition-colors duration-200">{t.footer.linkFamily[locale]}</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">{t.footer.sectionResources[locale]}</h3>
              <ul className="space-y-2.5">
                <li><a href="#faq" className="text-sm text-white/35 hover:text-cyan-400/80 transition-colors duration-200">{t.footer.linkFAQ[locale]}</a></li>
                <li><a href="https://www.apple.com/health/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/35 hover:text-cyan-400/80 transition-colors duration-200">{t.footer.linkAppleHealth[locale]}</a></li>
                <li><a href="https://x.com/beebsiapp" target="_blank" rel="noopener noreferrer" className="text-sm text-white/35 hover:text-cyan-400/80 transition-colors duration-200">@beebsiapp</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">{t.footer.sectionLegal[locale]}</h3>
              <ul className="space-y-2.5">
                <li><a href="#privacy" className="text-sm text-white/35 hover:text-cyan-400/80 transition-colors duration-200">{t.footer.linkPrivacyPolicy[locale]}</a></li>
                <li><a href="#privacy" className="text-sm text-white/35 hover:text-cyan-400/80 transition-colors duration-200">{t.footer.linkTerms[locale]}</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">{t.footer.sectionSocial[locale]}</h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="https://x.com/beebsiapp" target="_blank" rel="noopener noreferrer" className="text-sm text-white/35 hover:text-cyan-400/80 transition-colors duration-200 inline-flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    {t.footer.linkTwitter[locale]}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-cyan-500/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/20">
              &copy; {new Date().getFullYear()} {t.footer.copyright[locale]}
            </p>
            <p className="text-xs text-white/20">
              {t.footer.trademark[locale]}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
