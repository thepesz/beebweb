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
  keywords: ["health tracking", "fitness", "recovery", "sleep", "strain", "iOS app", "health metrics"],
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
