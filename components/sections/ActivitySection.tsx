'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoBackground from '@/components/ui/VideoBackground';

gsap.registerPlugin(ScrollTrigger);

export default function ActivitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const videoContainer = videoContainerRef.current;
    const content = contentRef.current;

    if (!section || !videoContainer || !content) return;

    // Start with video hidden
    gsap.set(videoContainer, { opacity: 0 });

    // Video fade in/out based on section position
    ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => {
        gsap.to(videoContainer, { opacity: 1, duration: 0.8, ease: 'power2.inOut' });
      },
      onLeave: () => {
        gsap.to(videoContainer, { opacity: 0, duration: 0.8, ease: 'power2.inOut' });
      },
      onEnterBack: () => {
        gsap.to(videoContainer, { opacity: 1, duration: 0.8, ease: 'power2.inOut' });
      },
      onLeaveBack: () => {
        gsap.to(videoContainer, { opacity: 0, duration: 0.8, ease: 'power2.inOut' });
      },
    });

    // Content entrance animation
    gsap.from(content, {
      opacity: 0,
      y: 60,
      scrollTrigger: {
        trigger: section,
        start: 'top 60%',
        end: 'top 20%',
        scrub: 1,
      },
    });

    // Content exit animation
    gsap.to(content, {
      opacity: 0,
      y: -60,
      scrollTrigger: {
        trigger: section,
        start: '50% top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center"
    >
      {/* Fixed video background */}
      <div
        ref={videoContainerRef}
        className="fixed inset-0 w-full h-full"
        style={{ opacity: 0 }}
      >
        <VideoBackground
          src="/videos/activity_beach.mp4"
          ariaLabel="Person exercising at the beach showing outdoor fitness activity tracking without wearable devices"
        />
      </div>

      {/* Content */}
      <article ref={contentRef} className="relative z-10 text-center px-4 md:px-6 max-w-5xl">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tight mb-4 md:mb-6">
          Science.<br />Without the hardware.
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl font-light text-white/80 tracking-wide max-w-3xl mx-auto px-4">
          No bands. No rings. Just your phone and the intelligence you already wear.
        </p>
      </article>
    </section>
  );
}