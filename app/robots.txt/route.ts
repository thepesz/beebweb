import { NextRequest } from 'next/server';

/**
 * Dynamic robots.txt — serves domain-specific sitemap URL
 * and explicitly allows AI crawler bots.
 */
export function GET(request: NextRequest) {
  const hostname = request.headers.get('host')?.toLowerCase() ?? 'beebsi.com';
  const isPl = hostname === 'beebsi.pl' || hostname === 'www.beebsi.pl';
  const domain = isPl ? 'https://beebsi.pl' : 'https://beebsi.com';

  const body = `# Beebsi - Health Tracking App
# https://beebsi.com (EN) / https://beebsi.pl (PL)

User-agent: *
Allow: /
Disallow: /api/

# AI Crawlers — explicitly allowed
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

# Sitemap
Sitemap: ${domain}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
