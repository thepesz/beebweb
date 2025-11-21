import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beebsi - Your Body. Decoded.",
  description: "Science. Without the hardware. Everything you need. Nothing you don't. Coming soon to iOS.",
  keywords: [
    // Core Features
    "health tracking", "fitness tracking", "recovery tracking", "sleep tracking", "strain tracking", "HRV tracking", "heart rate variability", "resting heart rate", "sleep score", "recovery score", "readiness score", "performance tracking",

    // Health Metrics
    "HRV app", "heart rate monitoring", "sleep analysis", "sleep quality", "sleep efficiency", "respiratory rate", "oxygen saturation", "SpO2 tracking", "body temperature", "health metrics", "vital signs tracking", "daily readiness",

    // Technology & Integration
    "iOS app", "iPhone health app", "Apple Health integration", "HealthKit app", "Strava integration", "health data sync", "Apple Watch compatible", "no wearable required", "no hardware required", "smartphone health tracking",

    // Target Audience
    "athletes", "runners", "cyclists", "CrossFit", "endurance training", "marathon training", "triathlon", "athletic performance", "workout recovery", "training optimization", "fitness enthusiasts",

    // Benefits & Pain Points
    "free health tracking", "no subscription", "science-based health", "biohacking", "optimize recovery", "prevent overtraining", "improve sleep quality", "track fitness progress", "personalized health insights", "data-driven training",

    // Use Cases
    "training load", "recovery time", "sleep debt", "workout intensity", "fitness recovery", "athletic recovery", "rest day planning", "performance optimization", "health monitoring", "wellness tracking"
  ],
  authors: [{ name: "Beebsi" }],
  openGraph: {
    title: "Beebsi - Your Body. Decoded.",
    description: "Science. Without the hardware. Everything you need. Nothing you don't.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beebsi - Your Body. Decoded.",
    description: "Science. Without the hardware. Everything you need. Nothing you don't.",
  },
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
