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
  title: "Total Scope Agency",
  description: "...building your web3 empire with precision",
  keywords: [
    "web3 agency",
    "blockchain solutions",
    "Total Scope Agency",
    "web3 development",
    "smart contracts",
    "decentralized applications",
    "crypto consulting",
    "web3 marketing",
  ].join(", "),
  openGraph: {
    title: "Total Scope Agency | Building Your Web3 Empire",
    description:
      "...building your web3 empire with precision. We specialize in blockchain solutions, community management, web3 marketing, raiding & chat moderation, website development, graphics design and UI/UX.",
    url: "https://totalscope.agency",
    type: "website",
    images: [
      {
        url: "https://totalscope.agency/public/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Total Scope Agency Logo",
      },
    ],
    siteName: "Total Scope Agency",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TotalScopeAgency",
    title: "Total Scope Agency | Building Your Web3 Empire",
    description:
      "...your One-Stop Solution for Web3 Excellence. We specialize in blockchain solutions, community management/moderation, web3 marketing, website development, raiding, Graphics design and UI/UX",
    images: [
      {
        url: "https://totalscope.agency/public/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Total Scope Agency Logo",
      },
    ],
  },
  icons: {
    icon: "/public/images/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://totalscope.agency",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1.0,
});

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
