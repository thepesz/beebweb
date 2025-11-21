'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EmailSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formContainerRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const formContainer = formContainerRef.current;

    if (!section || !formContainer) return;

    // Form container animation - simple fade in when section is visible
    gsap.from(formContainer, {
      opacity: 0,
      y: 40,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send to Google Sheets via API route
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        console.error('Failed to submit email');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-black"
    >
      <article
        ref={formContainerRef}
        className="relative z-10 w-full max-w-md px-4 md:px-6 py-20"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 md:mb-6 text-center tracking-tight">
          Be the first to know.
        </h2>

        <p className="text-lg md:text-xl text-white/70 mb-8 md:mb-12 text-center font-light max-w-xl mx-auto px-4">
          A revolutionary health application is coming. Get notified when we launch.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="w-full px-4 md:px-5 py-2.5 md:py-3 text-sm md:text-base bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:bg-white/10 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300"
          />

          <button
            type="submit"
            className="w-full px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40 active:translate-y-0 transition-all duration-300"
          >
            Notify Me
          </button>
        </form>

        {submitted && (
          <div className="mt-6 p-6 bg-green-500/15 border-2 border-green-500/40 rounded-2xl text-green-400 text-center text-lg">
            ✓ You're on the list! We'll notify you when Beebsi launches.
          </div>
        )}

        <p className="mt-8 text-center text-white/50 text-lg font-light">
          Coming soon to iOS.
        </p>
      </article>
    </section>
  );
}