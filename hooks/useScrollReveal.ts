'use client';

import { useEffect, useRef } from 'react';

/**
 * Intersection Observer hook that adds 'visible' class to elements
 * with 'reveal', 'reveal-left', 'reveal-right', or 'reveal-scale' classes
 * when they enter the viewport.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    // Observe the container and all reveal children
    const revealElements = el.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    revealElements.forEach((child) => observer.observe(child));

    // Also observe the container itself if it has a reveal class
    if (
      el.classList.contains('reveal') ||
      el.classList.contains('reveal-left') ||
      el.classList.contains('reveal-right') ||
      el.classList.contains('reveal-scale')
    ) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
