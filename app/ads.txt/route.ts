export function GET() {
  return new Response(
    '# beebsi.com / beebsi.pl does not participate in programmatic advertising\n',
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      },
    },
  );
}
