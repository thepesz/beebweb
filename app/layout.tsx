import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://beebsi.com'),
  title: "Beebsi - Your Body. Decoded.",
  description: "Track your recovery, sleep, and strain with science-based insights. Free health tracking app for iOS using Apple Health and Strava. No wearable or subscription required. HRV, sleep analysis, and performance optimization powered by your iPhone.",
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
    "iOS app", "iPhone health app", "Apple Health integration", "HealthKit app", "Strava integration", "health data sync", "Apple Watch compatible", "no wearable required", "no hardware required", "smartphone health tracking",

    // Technology & Integration (Polish)
    "aplikacja iOS", "aplikacja zdrowotna iPhone", "integracja Apple Health", "aplikacja HealthKit", "integracja Strava", "synchronizacja danych zdrowotnych", "kompatybilna z Apple Watch", "bez opaski", "bez dodatkowego sprzętu", "monitoring zdrowia w smartfonie",

    // Target Audience (English)
    "athletes", "runners", "cyclists", "CrossFit", "endurance training", "marathon training", "triathlon", "athletic performance", "workout recovery", "training optimization", "fitness enthusiasts",

    // Target Audience (Polish)
    "sportowcy", "biegacze", "kolarze", "CrossFit", "trening wytrzymałościowy", "przygotowanie do maratonu", "triathlon", "wydolność sportowa", "regeneracja po treningu", "optymalizacja treningu", "entuzjaści fitness",

    // Benefits & Pain Points (English)
    "free health tracking", "no subscription", "science-based health", "biohacking", "optimize recovery", "prevent overtraining", "improve sleep quality", "track fitness progress", "personalized health insights", "data-driven training",

    // Benefits & Pain Points (Polish)
    "darmowe śledzenie zdrowia", "bez abonamentu", "zdrowotność oparta na nauce", "biohacking", "optymalizacja regeneracji", "zapobieganie przetrenowaniu", "poprawa jakości snu", "śledzenie postępów", "spersonalizowane analizy zdrowia", "trening oparty na danych",

    // Use Cases (English)
    "training load", "recovery time", "sleep debt", "workout intensity", "fitness recovery", "athletic recovery", "rest day planning", "performance optimization", "health monitoring", "wellness tracking",

    // Use Cases (Polish)
    "obciążenie treningowe", "czas regeneracji", "deficyt snu", "intensywność treningu", "regeneracja kondycji", "regeneracja sportowa", "planowanie odpoczynku", "optymalizacja wydolności", "monitoring zdrowia", "śledzenie samopoczucia"
  ],
  authors: [{ name: "Beebsi" }],
  creator: "Beebsi",
  publisher: "Beebsi",
  alternates: {
    canonical: "/",
    languages: {
      'en': 'https://beebsi.com',
      'pl': 'https://beebsi.pl',
    },
  },
  openGraph: {
    title: "Beebsi - Your Body. Decoded.",
    description: "Track your recovery, sleep, and strain with science-based insights. Free health tracking app for iOS. No wearable or subscription required.",
    type: "website",
    url: "https://beebsi.com",
    siteName: "Beebsi",
    locale: "en_US",
    alternateLocale: ["pl_PL"],
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Beebsi - Health Tracking App for iOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beebsi - Your Body. Decoded.",
    description: "Track your recovery, sleep, and strain with science-based insights. Free health tracking app for iOS. No wearable required.",
    images: ["/opengraph-image"],
    creator: "@beebsi",
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
