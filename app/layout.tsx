import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies, headers } from "next/headers";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import FAQStructuredData from "@/components/FAQStructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { LocaleProvider } from "@/lib/i18n";
import type { Locale } from "@/lib/translations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const seoContent: Record<Locale, {
  title: string;
  description: string;
  domain: string;
  ogLocale: string;
  altLocale: string;
  ogImageAlt: string;
}> = {
  en: {
    title: "Beebsi — Recovery, Sleep & Strain | iOS Health App",
    description: "Track recovery, sleep & strain from your smartwatch via Apple Health. Science-based vitality insights. Coming 2026.",
    domain: "https://beebsi.com",
    ogLocale: "en_US",
    altLocale: "pl_PL",
    ogImageAlt: "Beebsi - iOS Health App for Recovery, Sleep & Strain Tracking",
  },
  pl: {
    title: "Beebsi — Regeneracja, Sen i Obciążenie | Aplikacja iOS",
    description: "Śledź regenerację, sen i obciążenie ze smartwatcha przez Apple Health. Polska aplikacja fitness. Premiera 2026.",
    domain: "https://beebsi.pl",
    ogLocale: "pl_PL",
    altLocale: "en_US",
    ogImageAlt: "Beebsi - Polska aplikacja fitness do śledzenia zdrowia na iOS",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const headerStore = await headers();
  // Prefer cookie, fall back to x-locale header set by middleware (covers first request)
  const rawLocale = cookieStore.get('locale')?.value ?? headerStore.get('x-locale');
  const locale: Locale = rawLocale === 'pl' ? 'pl' : 'en';
  const seo = seoContent[locale];

  return {
    metadataBase: new URL(seo.domain),
    title: seo.title,
    description: seo.description,
    keywords: [
      // Core Features (English)
      "health tracking", "fitness tracking", "recovery tracking", "sleep tracking", "strain tracking", "HRV tracking", "heart rate variability", "resting heart rate", "sleep score", "recovery score", "readiness score", "performance tracking",

      // Core Features (Polish)
      "śledzenie zdrowia", "śledzenie kondycji", "śledzenie regeneracji", "śledzenie snu", "monitoring zmęczenia", "pomiar HRV", "zmienność rytmu serca", "spoczynkowe tętno", "ocena snu", "wynik regeneracji", "gotowość do treningu", "monitoring wydolności",

      // Health Metrics (English)
      "HRV app", "heart rate monitoring", "sleep analysis", "sleep quality", "sleep efficiency", "respiratory rate", "oxygen saturation", "SpO2 tracking", "body temperature", "health metrics", "vital signs tracking", "daily readiness",

      // Health Metrics (Polish)
      "aplikacja HRV", "pomiar tętna", "analiza snu", "jakość snu", "efektywność snu", "częstotliwość oddechów", "saturacja krwi", "pomiar SpO2", "temperatura ciała", "parametry zdrowia", "monitoring parametrów życiowych", "codzienna gotowość",

      // Technology & Integration (English)
      "iOS app", "iPhone health app", "Apple Health integration", "HealthKit app", "health data sync", "Apple Watch compatible", "smartwatch health tracking", "fitness health app",

      // Technology & Integration (Polish)
      "aplikacja iOS", "aplikacja zdrowotna iPhone", "integracja Apple Health", "aplikacja HealthKit", "synchronizacja danych zdrowotnych", "kompatybilna z Apple Watch", "monitoring zdrowia ze smartwatcha", "polska aplikacja fitness",

      // Target Audience (English)
      "athletes", "runners", "cyclists", "CrossFit", "endurance training", "marathon training", "triathlon", "athletic performance", "workout recovery", "training optimization", "fitness enthusiasts",

      // Target Audience (Polish)
      "sportowcy", "biegacze", "kolarze", "CrossFit", "trening wytrzymałościowy", "przygotowanie do maratonu", "triathlon", "wydolność sportowa", "regeneracja po treningu", "optymalizacja treningu", "entuzjaści fitness",

      // Benefits (English)
      "science-based health", "biohacking", "optimize recovery", "prevent overtraining", "improve sleep quality", "track fitness progress", "personalized health insights", "data-driven training", "longevity", "vitality age",

      // Benefits (Polish)
      "zdrowie oparte na nauce", "biohacking", "optymalizacja regeneracji", "zapobieganie przetrenowaniu", "poprawa jakości snu", "śledzenie postępów", "spersonalizowane analizy zdrowia", "trening oparty na danych", "długowieczność", "wiek witalności",
    ],
    authors: [{ name: "Beebsi" }],
    creator: "Beebsi",
    publisher: "Beebsi",
    alternates: {
      // Canonical URL without trailing slash, matching served domain
      canonical: seo.domain,
      languages: {
        'en': 'https://beebsi.com',
        'pl': 'https://beebsi.pl',
        'x-default': 'https://beebsi.com',
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      url: seo.domain,
      siteName: "Beebsi",
      locale: seo.ogLocale,
      alternateLocale: [seo.altLocale],
      images: [
        {
          url: `${seo.domain}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: seo.ogImageAlt,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@beebsiapp",
      creator: "@beebsiapp",
      title: seo.title,
      description: seo.description,
      images: [{
        url: `${seo.domain}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: seo.ogImageAlt,
      }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'health',
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const rawLocale = cookieStore.get('locale')?.value ?? headerStore.get('x-locale');
  const locale: Locale = rawLocale === 'pl' ? 'pl' : 'en';

  return (
    <html lang={locale}>
      <head>
        <StructuredData locale={locale} />
        <FAQStructuredData locale={locale} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <LocaleProvider locale={locale}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
