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
      "...building your web3 empire with precision. We specialize in blockchain solutions, smart contracts, and decentralized applications.",
    url: "https://totalscopeagency.com",
    type: "website",
    images: [
      {
        url: "https://totalscopeagency.com/public/images/logo.png",
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
      "...building your web3 empire with precision. We specialize in blockchain solutions, smart contracts, and decentralized applications.",
    images: [
      {
        url: "https://totalscopeagency.com/public/images/logo.png",
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
    canonical: "https://totalscopeagency.com",
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
