'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLocale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

export default function EmailSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const locale = useLocale();
  const t = translations.email;
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot check
    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get('website');
    if (honeypot) {
      console.log('Bot detected, submission blocked');
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error('Failed to submit email');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  return (
    <section
      id="notify"
      ref={sectionRef}
      className="relative z-10 py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 section-lazy"
    >
      <div className="section-divider absolute top-0 left-0" />

      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none glow-ambient-cyan-subtle"
      />

      <div className="max-w-5xl mx-auto">
        <div className="reveal relative z-10 max-w-md mx-auto text-center">
          <div className="hud-accent-line mx-auto" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {t.headline1[locale]}
            <br />
            <span className="text-gradient-cyan-white">{t.headline2[locale]}</span>
          </h2>

          <p className="text-lg md:text-xl text-[#D1D5DB] mt-8 mb-12 font-light leading-relaxed">
            {t.subtitle[locale]}
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
            aria-label={t.formAriaLabel[locale]}
          >
            <div>
              <label htmlFor="email-input" className="sr-only">
                {t.emailLabel[locale]}
              </label>
              <input
                id="email-input"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.placeholder[locale]}
                autoComplete="email"
                required
                aria-required="true"
                aria-label={t.emailAriaLabel[locale]}
                className="w-full px-5 py-3 text-base bg-white/[0.04] border border-cyan-500/15 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:bg-white/[0.06] focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-300"
              />
            </div>

            {/* Honeypot */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute opacity-0 pointer-events-none"
            />

            <button
              type="submit"
              aria-label={t.submitAriaLabel[locale]}
              className="w-full px-8 py-3 text-base font-semibold bg-white text-black rounded-xl hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10 active:translate-y-0 transition-all duration-200"
            >
              {t.submitButton[locale]}
            </button>
          </form>

          {submitted && (
            <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 text-center text-sm">
              {t.successMessage[locale]}
            </div>
          )}

          <p className="mt-10 text-sm text-white/30 font-light">
            {t.footerNote[locale]}
          </p>
        </div>
      </div>
    </section>
  );
}
