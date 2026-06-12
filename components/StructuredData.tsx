import type { Locale } from '@/lib/translations';

interface StructuredDataProps {
  locale: Locale;
}

/**
 * Safely serialize a value as JSON for use inside a <script> tag.
 * JSON.stringify alone does not escape characters that are dangerous
 * inside inline <script> blocks (e.g. </script>, <!--, U+2028/U+2029).
 * This helper escapes those sequences so the browser's HTML parser
 * never sees a premature closing tag or stray HTML comment opener.
 */
function safeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

export default function StructuredData({ locale }: StructuredDataProps) {
  const isPl = locale === 'pl';
  const domain = isPl ? 'https://beebsi.pl' : 'https://beebsi.com';

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Beebsi",
    "url": domain,
    "logo": `${domain}/opengraph-image`,
    "description": isPl
      ? "Pierwsza polska aplikacja fitness na iOS. Śledź regenerację, sen, obciążenie i metryki zdrowia z danych Apple Health ze smartwatcha."
      : "iOS fitness health app. Track recovery, sleep, strain, activities and health metrics with science-based longevity insights using Apple Health data from your smartwatch.",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/beebsi"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "url": domain
    }
  };

  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Beebsi",
    "description": isPl
      ? "Pierwsza polska aplikacja fitness na iOS. Śledź regenerację, sen, obciążenie, aktywności i metryki zdrowia z Apple Health. Wiek witalności, AI coach długowieczności i dane zdrowotne na Twoim iPhonie."
      : "Track your vitality, recovery, sleep, strain, activities and health metrics with science-based longevity insights. iOS fitness health app using Apple Health data from your smartwatch. Vitality Age, AI longevity coach and advanced health analytics.",
    "operatingSystem": "iOS",
    "applicationCategory": "HealthApplication",
    "inLanguage": isPl ? "pl" : "en",
    "datePublished": "2026",
    "offers": {
      "@type": "Offer",
      "description": isPl
        ? "Subskrypcja premium z 14-dniowym okresem próbnym"
        : "Premium subscription with 14-day free trial",
      "availability": "https://schema.org/PreOrder",
      "availabilityStarts": "2026-09-01"
    },
    "screenshot": `${domain}/opengraph-image`,
    "releaseNotes": isPl
      ? "Premiera: 2026. Aplikacja fitness do śledzenia zdrowia na iOS z integracją Apple Health. Wymaga smartwatcha zsynchronizowanego z Apple Health."
      : "Expected launch: 2026. iOS fitness health app with Apple Health integration. Requires a smartwatch or fitness band synced with Apple Health.",
    "softwareVersion": "1.0",
    "featureList": isPl
      ? [
          "Śledzenie regeneracji i wynik gotowości",
          "Analiza snu i wynik snu",
          "Śledzenie obciążenia i aktywności",
          "Wiek witalności (szacowanie wieku biologicznego)",
          "AI Coach długowieczności",
          "Zaawansowane metryki zdrowia w jednym miejscu",
          "Integracja z Apple Health i danymi ze smartwatcha",
          "Family Circle — wspólne wyniki zdrowia",
          "Subskrypcja premium z 14-dniowym okresem próbnym",
          "Dane zdrowotne przetwarzane lokalnie na urządzeniu"
        ]
      : [
          "Recovery tracking and daily readiness score",
          "Sleep analysis and sleep score",
          "Strain tracking and activities",
          "Vitality Age (biological age estimate for longevity)",
          "AI Longevity Coach with personalized guidance",
          "Advanced health metrics dashboard",
          "Apple Health integration with smartwatch data",
          "Family Circle — shared wellness scores",
          "Premium subscription with 14-day free trial",
          "Health data processed locally on device"
        ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Beebsi",
    "url": domain,
    "description": isPl
      ? "Pierwsza polska aplikacja fitness na iOS. Śledź regenerację, sen, obciążenie i metryki zdrowia z Apple Health."
      : "iOS fitness health app. Track recovery, sleep, strain, activities and health metrics with science-based longevity insights.",
    "inLanguage": isPl ? "pl" : "en"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(mobileAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(webSiteSchema) }}
      />
    </>
  );
}
