import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Detects locale from hostname and sets it as a cookie + custom header.
 * beebsi.pl / www.beebsi.pl -> 'pl'
 * Everything else -> 'en'
 */
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')?.toLowerCase() ?? '';
  const locale = (hostname === 'beebsi.pl' || hostname === 'www.beebsi.pl')
    ? 'pl'
    : 'en';

  const response = NextResponse.next();
  response.cookies.set('locale', locale, { path: '/' });
  response.headers.set('x-locale', locale);
  response.headers.set('Content-Language', locale);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
