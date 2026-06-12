import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: 'https://beebsi.com',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: 'https://beebsi.com',
          pl: 'https://beebsi.pl',
        },
      },
    },
    {
      url: 'https://beebsi.pl',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: 'https://beebsi.com',
          pl: 'https://beebsi.pl',
        },
      },
    },
  ]
}
