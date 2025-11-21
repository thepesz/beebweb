'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoBackground from '@/components/ui/VideoBackground';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const videoContainer = videoContainerRef.current;
    const content = contentRef.current;
    const scrollHint = scrollHintRef.current;

    if (!section || !videoContainer || !content || !scrollHint) return;

    // Initial content animation (runs once on load)
    const tl = gsap.timeline({ delay: 0.3 });
    tl.from(content, {
      opacity: 0,
      y: 40,
      duration: 1.5,
      ease: 'power3.out',
    });
    tl.from(scrollHint, {
      opacity: 0,
      duration: 0.8,
    }, "-=0.5");

    // Video fade in/out based on section position
    ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => {
        gsap.to(videoContainer, { opacity: 1, duration: 0.6, ease: 'power2.inOut' });
      },
      onLeave: () => {
        gsap.to(videoContainer, { opacity: 0, duration: 0.6, ease: 'power2.inOut' });
      },
      onEnterBack: () => {
        gsap.to(videoContainer, { opacity: 1, duration: 0.6, ease: 'power2.inOut' });
      },
      onLeaveBack: () => {
        gsap.to(videoContainer, { opacity: 0, duration: 0.6, ease: 'power2.inOut' });
      },
    });

    // Content scroll animation - fromTo ensures proper start state when scrolling back
    gsap.fromTo(content,
      {
        y: 0,
        opacity: 1
      },
      {
        y: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          start: 'center center',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );

    // Scroll hint fade
    gsap.to(scrollHint, {
      opacity: 0,
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '20% top',
        scrub: true,
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
        style={{ opacity: 1 }}
      >
        <VideoBackground
          src="/videos/recovery.mp4"
          ariaLabel="Person recovering from exercise showing health tracking visualization with HRV and recovery metrics"
        />
      </div>

      {/* Content */}
      <article ref={contentRef} className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tight">
          What if you woke up knowing exactly how ready your body is?
        </h1>
      </article>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-white/60 tracking-widest uppercase">Scroll</span>
        <svg
          className="w-6 h-6 text-white/40 animate-bounce"
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