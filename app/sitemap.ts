import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrls = ['https://beebsi.com', 'https://beebsi.pl']

  const sitemapEntries: MetadataRoute.Sitemap = []

  baseUrls.forEach(baseUrl => {
    sitemapEntries.push({
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: 'https://beebsi.com',
          pl: 'https://beebsi.pl',
        },
      },
    })
  })

  return sitemapEntries
}
