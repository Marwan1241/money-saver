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
  title: "Envelope Savings Calculator | Save Money Day by Day",
  description:
    "Calculate how many envelopes you need to save a specific amount using the envelope savings challenge method. A simple way to build savings habits.",
  keywords: [
    "envelope challenge",
    "money saving",
    "personal finance",
    "savings calculator",
    "financial planning",
  ],
  authors: [{ name: "Money Saver App" }],
  creator: "Money Saver App",
  publisher: "Money Saver App",
  applicationName: "Envelope Savings Calculator",
  colorScheme: "dark light",
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0f9ff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
  openGraph: {
    type: "website",
    title: "Envelope Savings Calculator",
    description: "Save money day by day with the envelope challenge method",
    siteName: "Money Saver App",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Envelope Savings Calculator",
      },
    ],
  },
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
