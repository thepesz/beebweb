import { cookies } from 'next/headers';

export type Locale = 'en' | 'pl';

/**
 * Server-side locale reader.
 * Reads the locale cookie set by middleware.
 * Falls back to 'en' if no cookie is present.
 */
export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  return cookieStore.get('locale')?.value === 'pl' ? 'pl' : 'en';
}
