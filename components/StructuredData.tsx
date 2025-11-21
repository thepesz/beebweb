export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Beebsi",
    "url": "https://beebsi.com",
    "logo": "https://beebsi.com/opengraph-image",
    "description": "Free health tracking app for iOS using Apple Health and Strava. Track recovery, sleep, and strain with science-based insights.",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/beebsi"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "url": "https://beebsi.com"
    }
  };

  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Beebsi",
    "description": "Track your recovery, sleep, and strain with science-based insights. Free health tracking app for iOS using Apple Health and Strava. No wearable or subscription required. HRV, sleep analysis, and performance optimization powered by your iPhone.",
    "operatingSystem": "iOS",
    "applicationCategory": "HealthApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": "1"
    },
    "screenshot": "https://beebsi.com/opengraph-image",
    "releaseNotes": "Coming soon to iOS App Store",
    "softwareVersion": "1.0",
    "featureList": [
      "HRV (Heart Rate Variability) tracking",
      "Sleep analysis and sleep score",
      "Recovery score calculation",
      "Strain tracking",
      "Apple Health integration",
      "Strava integration",
      "No wearable required",
      "Free - no subscription",
      "Science-based insights"
    ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Beebsi",
    "url": "https://beebsi.com",
    "description": "Track your recovery, sleep, and strain with science-based insights. Free health tracking app for iOS.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://beebsi.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "inLanguage": ["en", "pl"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
