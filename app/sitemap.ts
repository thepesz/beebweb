import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default function sitemap(): MetadataRoute.Sitemap {
  const headersList = headers()
  const host = headersList.get('host') || 'beebsi.com'

  // Determine the base URL based on the current host
  const baseUrl = host.includes('beebsi.pl')
    ? 'https://beebsi.pl'
    : 'https://beebsi.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}
