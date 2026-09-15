import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thedriplabs.com"),

  title: {
    default: "DRIPLABS® — Nourish. Recharge. Restore.",
    template: "%s — DRIPLABS®",
  },

  description:
    "DRIPLABS® is a physician-led IV wellness and NAD+ platform built around documented protocols, professional supervision and pharmaceutical-grade standards.",

  applicationName: "DRIPLABS",

  keywords: [
    "DRIPLABS",
    "IV wellness",
    "IV therapy",
    "NAD+",
    "NADx",
    "physician-led wellness",
    "wellness protocols",
    "cellular wellness",
    "longevity",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    siteName: "DRIPLABS",
    title: "DRIPLABS® — Nourish. Recharge. Restore.",
    description:
      "Physician-led IV wellness and NAD+ experiences, built around documented protocols and professional supervision.",
    url: "https://thedriplabs.com",
  },

  twitter: {
    card: "summary_large_image",
    title: "DRIPLABS® — Nourish. Recharge. Restore.",
    description:
      "Physician-led IV wellness and NAD+ experiences.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1D35",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}