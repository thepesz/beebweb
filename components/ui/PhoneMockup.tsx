'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface PhoneMockupProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  glowColor?: 'cyan' | 'amber';
  tilt?: 'left' | 'right' | 'center' | 'none';
  enableFloat?: boolean;
  enableParallax?: boolean;
  /** Responsive sizes hint for the browser (e.g. "(max-width: 768px) 240px, 280px") */
  sizes?: string;
}

export default function PhoneMockup({
  src,
  alt,
  priority = false,
  className = '',
  glowColor = 'cyan',
  tilt = 'none',
  enableFloat = false,
  enableParallax = false,
  sizes = '(max-width: 768px) 240px, 280px',
}: PhoneMockupProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  /* Simple scroll-based parallax: phone moves slower than content */
  useEffect(() => {
    if (!enableParallax) return;
    const el = containerRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewH = window.innerHeight;
        /* Normalised position: 0 when element enters bottom, 1 when it exits top */
        const progress = 1 - (rect.top + rect.height) / (viewH + rect.height);
        /* Shift range: -20px to +20px */
        const offset = (progress - 0.5) * 40;
        el.style.transform = `translateY(${offset}px)`;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial position
    return () => window.removeEventListener('scroll', onScroll);
  }, [enableParallax]);

  const tiltClass =
    tilt === 'left'
      ? 'phone-tilt-left'
      : tilt === 'right'
        ? 'phone-tilt-right'
        : tilt === 'center'
          ? 'phone-tilt-center'
          : '';

  const glowBaseClass =
    glowColor === 'amber' ? 'phone-glow-base phone-glow-base-amber' : 'phone-glow-base';

  return (
    <div
      ref={containerRef}
      className={`relative ${enableFloat ? 'phone-float' : ''} ${className}`}
    >
      {/* Ambient glow underneath */}
      <div className={glowBaseClass} />

      {/* 3D perspective container */}
      <div className={tilt !== 'none' ? 'phone-perspective' : ''}>
        <div className={tiltClass}>
          {/* Phone frame */}
          <div className="phone-mockup relative">
            {/* Dynamic Island */}
            <div className="phone-notch" />
            <Image
              src={src}
              alt={alt}
              width={320}
              height={693}
              priority={priority}
              quality={85}
              sizes={sizes}
              className="block w-full h-auto"
            />
            {/* HUD scanline overlay on phone screen */}
            <div className="phone-hud-overlay" />
          </div>
        </div>
      </div>
    </div>
  );
}
