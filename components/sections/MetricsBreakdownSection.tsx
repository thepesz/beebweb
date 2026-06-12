'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLocale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

/* ──────────────────────────────────────────────
   Metric definitions.
   `anchorY`  = vertical % on the phone screenshot where the metric sits.
   `side`     = which side the annotation appears on desktop (alternating L/R).
   ────────────────────────────────────────────── */
const METRICS = [
  {
    id: 'beebsiScore',
    titleKey: 'beebsiScoreTitle' as const,
    descKey: 'beebsiScoreDesc' as const,
    color: '#FFB000',
    anchorY: 28,
    side: 'left' as const,
  },
  {
    id: 'sleep',
    titleKey: 'sleepTitle' as const,
    descKey: 'sleepDesc' as const,
    color: '#00D4FF',
    anchorY: 46,
    side: 'right' as const,
  },
  {
    id: 'recovery',
    titleKey: 'recoveryTitle' as const,
    descKey: 'recoveryDesc' as const,
    color: '#FFB000',
    anchorY: 58,
    side: 'left' as const,
  },
  {
    id: 'strain',
    titleKey: 'strainTitle' as const,
    descKey: 'strainDesc' as const,
    color: '#4ADE80',
    anchorY: 68,
    side: 'right' as const,
  },
] as const;

export default function MetricsBreakdownSection() {
  const locale = useLocale();
  const t = translations.metricsBreakdown;

  /* Layout refs */
  const sectionRef = useRef<HTMLElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  /* Per-metric refs: desktop annotations, mobile annotations, SVG paths, SVG dots */
  const deskAnnoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileAnnoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    let onResize: (() => void) | null = null;

    (async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const pinned = pinnedRef.current;
      const phoneWrap = phoneRef.current;
      const phoneMockup = phoneWrap?.querySelector('.phone-mockup') as HTMLElement | null;
      const titleEl = titleRef.current;
      if (!section || !pinned || !phoneMockup || !titleEl) return;

      const isMobile = window.innerWidth < 768;
      /* Choose the correct set of annotation refs based on viewport */
      const annoRefs = isMobile ? mobileAnnoRefs : deskAnnoRefs;

      /* ────────────────────────────────────
         layout() positions SVG connector paths
         and desktop annotations relative to the
         pinned container. Called on init + resize.
         ──────────────────────────────────── */
      const layout = () => {
        if (isMobile) return; /* Mobile annotations use CSS positioning */

        const pinnedRect = pinned.getBoundingClientRect();
        const phoneRect = phoneMockup.getBoundingClientRect();

        const pL = phoneRect.left - pinnedRect.left;
        const pR = phoneRect.right - pinnedRect.left;
        const pT = phoneRect.top - pinnedRect.top;
        const pH = phoneRect.height;
        const cW = pinnedRect.width;

        METRICS.forEach((m, i) => {
          const path = pathRefs.current[i];
          const dot = dotRefs.current[i];
          const anno = deskAnnoRefs.current[i];
          if (!path || !dot) return;

          const pointY = pT + (pH * m.anchorY) / 100;
          const lineLen = Math.min(120, (cW - phoneRect.width) / 2 - 40);

          if (m.side === 'left') {
            const sx = pL;
            const ex = sx - lineLen;
            path.setAttribute('d', `M ${sx} ${pointY} L ${ex} ${pointY}`);
            dot.setAttribute('cx', String(sx));
            dot.setAttribute('cy', String(pointY));
            if (anno) {
              anno.style.right = `${cW - ex + 14}px`;
              anno.style.left = 'auto';
              anno.style.top = `${pointY}px`;
              anno.style.transform = 'translateY(-50%)';
              anno.style.textAlign = 'right';
            }
          } else {
            const sx = pR;
            const ex = sx + lineLen;
            path.setAttribute('d', `M ${sx} ${pointY} L ${ex} ${pointY}`);
            dot.setAttribute('cx', String(sx));
            dot.setAttribute('cy', String(pointY));
            if (anno) {
              anno.style.left = `${ex + 14}px`;
              anno.style.right = 'auto';
              anno.style.top = `${pointY}px`;
              anno.style.transform = 'translateY(-50%)';
              anno.style.textAlign = 'left';
            }
          }

          const len = path.getTotalLength();
          path.style.strokeDasharray = String(len);
        });
      };

      /* Initial layout before creating the timeline */
      layout();

      ctx = gsap.context(() => {
        /* -- Set all elements to hidden initially -- */
        gsap.set(titleEl, { autoAlpha: 0, y: 40 });

        METRICS.forEach((_, i) => {
          const anno = annoRefs.current[i];
          const path = pathRefs.current[i];
          const dot = dotRefs.current[i];
          if (anno) gsap.set(anno, { autoAlpha: 0 });
          if (path) {
            const len = path.getTotalLength() || 100;
            gsap.set(path, { strokeDashoffset: len, autoAlpha: 0 });
          }
          if (dot) gsap.set(dot, { autoAlpha: 0, scale: 0, transformOrigin: 'center center' });
        });

        /* -- Master pinned ScrollTrigger timeline -- */
        const vh = window.innerHeight;
        const totalScroll = vh * (METRICS.length + 1);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: `+=${totalScroll}`,
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: layout,
          },
        });

        /*
         * Timeline structure (using UNIT = 1 per segment):
         *
         * Segment 0 [0 .. 1]: Title fades in, holds, fades out.
         * Segment 1 [1 .. 2]: Beebsi Score annotation + connector.
         * Segment 2 [2 .. 3]: Sleep annotation + connector.
         * Segment 3 [3 .. 4]: Recovery annotation + connector.
         * Segment 4 [4 .. 5]: Strain annotation + connector.
         *
         * Within each metric segment:
         *   0.00 - 0.30 : fade in (path draws, dot pops, text slides in)
         *   0.30 - 0.65 : hold (everything visible)
         *   0.65 - 0.95 : fade out (path undraws, dot shrinks, text slides out)
         */

        /* --- Segment 0: Title --- */
        tl.to(titleEl, {
          autoAlpha: 1, y: 0,
          duration: 0.35, ease: 'power2.out',
        }, 0);
        tl.to(titleEl, {
          autoAlpha: 0, y: -25,
          duration: 0.25, ease: 'power2.in',
        }, 0.65);

        /* --- Segments 1-4: Metrics --- */
        METRICS.forEach((m, i) => {
          const anno = annoRefs.current[i];
          const path = pathRefs.current[i];
          const dot = dotRefs.current[i];
          if (!anno) return;

          const seg = i + 1; /* segment offset */
          const pathLen = path ? (path.getTotalLength() || 100) : 100;

          /* --- Fade in --- */
          if (!isMobile && path && dot) {
            /* Draw connector line */
            tl.fromTo(path,
              { strokeDashoffset: pathLen, autoAlpha: 0 },
              { strokeDashoffset: 0, autoAlpha: 1, duration: 0.3, ease: 'power2.out' },
              seg,
            );
            /* Pop dot */
            tl.to(dot, {
              autoAlpha: 1, scale: 1,
              duration: 0.2, ease: 'back.out(3)',
            }, seg + 0.05);
          }

          /* Slide annotation in */
          const fromProps = isMobile
            ? { y: 24, autoAlpha: 0 }
            : m.side === 'left'
              ? { x: -30, autoAlpha: 0 }
              : { x: 30, autoAlpha: 0 };
          const toProps = isMobile
            ? { y: 0, autoAlpha: 1, duration: 0.3, ease: 'power2.out' }
            : { x: 0, autoAlpha: 1, duration: 0.3, ease: 'power2.out' };

          tl.fromTo(anno, fromProps, toProps, seg + 0.08);

          /* --- Fade out --- */
          const outAt = seg + 0.68;

          const outProps = isMobile
            ? { y: -12, autoAlpha: 0, duration: 0.22, ease: 'power2.in' }
            : m.side === 'left'
              ? { x: -20, autoAlpha: 0, duration: 0.22, ease: 'power2.in' }
              : { x: 20, autoAlpha: 0, duration: 0.22, ease: 'power2.in' };

          tl.to(anno, outProps, outAt);

          if (!isMobile && path && dot) {
            tl.to(path, {
              strokeDashoffset: m.side === 'left' ? -pathLen : pathLen,
              autoAlpha: 0,
              duration: 0.22, ease: 'power2.in',
            }, outAt);
            tl.to(dot, {
              autoAlpha: 0, scale: 0,
              duration: 0.15, ease: 'power2.in',
            }, outAt + 0.08);
          }
        });
      }, section);

      /* -- Resize -- */
      onResize = () => {
        layout();
        ScrollTrigger.refresh();
      };
      window.addEventListener('resize', onResize);
    })();

    return () => {
      ctx?.revert();
      if (onResize) window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section
      id="metrics-breakdown"
      ref={sectionRef}
      className="relative z-10 bg-black"
    >
      <div className="section-divider absolute top-0 left-0 w-full" />

      {/* Pinned viewport container */}
      <div
        ref={pinnedRef}
        className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center"
      >
        {/* Section title (fades in first, then out) */}
        <div
          ref={titleRef}
          className="absolute top-[6vh] md:top-[12vh] left-0 right-0 text-center z-20 pointer-events-none px-6"
          style={{ visibility: 'hidden' }}
        >
          <div className="hud-accent-line mx-auto" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            <span className="text-gradient-cyan-white">{t.sectionTitle[locale]}</span>
          </h2>
        </div>

        {/* Centered phone mockup -- on mobile pushed up to make room for annotations below */}
        <div
          ref={phoneRef}
          className="relative z-10 w-[180px] md:w-[240px] lg:w-[260px] flex-shrink-0 -mt-[12vh] md:mt-0"
        >
          <div className="phone-perspective">
            <div className="phone-tilt-center">
              <div className="phone-mockup relative">
                <div className="phone-notch" />
                <Image
                  src="/glowna.png"
                  alt={t.phoneAlt[locale]}
                  width={320}
                  height={693}
                  quality={85}
                  sizes="(max-width: 768px) 180px, 260px"
                  className="block w-full h-auto"
                />
                <div className="phone-hud-overlay" />
              </div>
            </div>
          </div>
          <div className="phone-glow-base" />
        </div>

        {/* SVG connector lines (desktop only) */}
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-20 hidden md:block"
          aria-hidden="true"
        >
          {METRICS.map((m, i) => (
            <g key={m.id}>
              <path
                ref={(el) => { pathRefs.current[i] = el; }}
                d="M 0 0"
                fill="none"
                stroke={m.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ visibility: 'hidden' }}
              />
              <circle
                ref={(el) => { dotRefs.current[i] = el; }}
                cx="0"
                cy="0"
                r="4"
                fill={m.color}
                style={{
                  visibility: 'hidden',
                  filter: `drop-shadow(0 0 6px ${m.color})`,
                }}
              />
            </g>
          ))}
        </svg>

        {/* Desktop annotations (positioned absolutely by layout()) */}
        {METRICS.map((m, i) => (
          <div
            key={m.id}
            ref={(el) => { deskAnnoRefs.current[i] = el; }}
            className="absolute z-30 hidden md:block pointer-events-none"
            style={{ visibility: 'hidden' }}
          >
            <div className="max-w-[240px] lg:max-w-[280px]">
              <h3
                className="text-lg lg:text-xl font-bold mb-2 leading-snug"
                style={{ color: m.color }}
              >
                {t[m.titleKey][locale]}
              </h3>
              <p className="text-[13px] lg:text-sm font-light text-[#B0B4BC] leading-relaxed">
                {t[m.descKey][locale]}
              </p>
            </div>
          </div>
        ))}

        {/* ═══════════════════════════════════════════
            Mobile annotations -- positioned BELOW the phone
            inside the flex flow (not absolute to pinned).
            Each annotation is stacked and GSAP toggles visibility.
            ═══════════════════════════════════════════ */}
        <div className="absolute bottom-[6vh] left-0 right-0 md:hidden z-30 px-5">
          <div className="relative" style={{ minHeight: '90px' }}>
            {METRICS.map((m, i) => (
              <div
                key={`m-${m.id}`}
                ref={(el) => { mobileAnnoRefs.current[i] = el; }}
                className="absolute inset-x-0 top-0 flex flex-col items-center text-center"
                style={{ visibility: 'hidden' }}
              >
                {/* Colored dot indicator */}
                <div className="flex items-center gap-2.5 mb-2">
                  <span
                    className="block w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: m.color,
                      boxShadow: `0 0 8px ${m.color}80, 0 0 20px ${m.color}40`,
                    }}
                  />
                  <h3
                    className="text-[17px] font-semibold tracking-tight leading-tight"
                    style={{ color: m.color }}
                  >
                    {t[m.titleKey][locale]}
                  </h3>
                </div>
                {/* Description */}
                <p className="text-[13px] font-light text-[#9CA3AF] leading-relaxed max-w-[300px]">
                  {t[m.descKey][locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
