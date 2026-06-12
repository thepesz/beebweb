'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { Locale } from './translations';

const LocaleContext = createContext<Locale>('en');

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

/**
 * Provides locale context to all child components.
 * Locale is determined server-side by middleware and passed down as a prop.
 */
export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <LocaleContext.Provider value={locale}>
      {children}
    </LocaleContext.Provider>
  );
}
