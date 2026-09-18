import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "DRIPLABS® — Wellness, built the way medicine is built.",
    template: "%s | DRIPLABS®",
  },

  description:
    "Physician-led IV wellness and NAD⁺ experiences built around documented protocols, professional supervision and a pharmaceutical-grade approach.",

  applicationName: "DRIPLABS",

  keywords: [
    "DRIPLABS",
    "IV wellness India",
    "physician-led IV therapy",
    "NAD+ India",
    "NADx",
    "wellness protocols",
    "Glutathione IV India",
  ],

  authors: [
    {
      name: "Snnylo Wellness Sciences",
    },
  ],

  creator: "Snnylo Wellness Sciences",

  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://thedriplabs.com",
  ),

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    siteName: "DRIPLABS®",
    title: "DRIPLABS® — Wellness, built the way medicine is built.",
    description:
      "Physician-led IV wellness and NAD⁺ experiences built around documented protocols, professional supervision and a pharmaceutical-grade approach.",
    images: [
      {
        url: "/images/hero/driplabs-hero.jpg",
        width: 1600,
        height: 1000,
        alt: "DRIPLABS physician-led wellness experience",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DRIPLABS®",
    description: "Wellness, built the way medicine is built.",
    images: ["/images/hero/driplabs-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body>
        {/* DRIPLABS GLOBAL BRAND MARQUEE */}

        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "44px",
            zIndex: 999999,
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            background: "#08090B",
            borderBottom: "1px solid rgba(201,166,70,0.45)",
            boxShadow: "0 2px 25px rgba(201,166,70,0.2)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #C9A646, #FFF8DC, #C9A646, transparent)",
              animation: "driplabsTopLight 4s linear infinite",
            }}
          />

          <div
            style={{
              display: "flex",
              width: "max-content",
              whiteSpace: "nowrap",
              animation: "driplabsTopMarquee 24s linear infinite",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "28px",
                paddingRight: "28px",
                fontFamily: "var(--font-body), Arial, sans-serif",
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#F4F2EC",
              }}
            >
              <strong
                style={{
                  color: "#E3CE8E",
                  fontWeight: 600,
                }}
              >
                DRIPLABS®
              </strong>

              <span style={{ color: "#C9A646" }}>✦</span>

              <span>
                WELCOME TO A NEW STANDARD OF WELLNESS
              </span>

              <span style={{ color: "#C9A646" }}>✦</span>

              <span>
                PHYSICIAN-LED WELLNESS
              </span>

              <span style={{ color: "#C9A646" }}>✦</span>

              <span>
                MADE IN INDIA
              </span>

              <span style={{ color: "#C9A646" }}>✦</span>

              <span>
                PRECISION · CELLULAR HEALTH · LONGEVITY
              </span>

              <span style={{ color: "#C9A646" }}>✦</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "28px",
                paddingRight: "28px",
                fontFamily: "var(--font-body), Arial, sans-serif",
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#F4F2EC",
              }}
              aria-hidden="true"
            >
              <strong
                style={{
                  color: "#E3CE8E",
                  fontWeight: 600,
                }}
              >
                DRIPLABS®
              </strong>

              <span style={{ color: "#C9A646" }}>✦</span>

              <span>
                WELCOME TO A NEW STANDARD OF WELLNESS
              </span>

              <span style={{ color: "#C9A646" }}>✦</span>

              <span>
                PHYSICIAN-LED WELLNESS
              </span>

              <span style={{ color: "#C9A646" }}>✦</span>

              <span>
                MADE IN INDIA
              </span>

              <span style={{ color: "#C9A646" }}>✦</span>

              <span>
                PRECISION · CELLULAR HEALTH · LONGEVITY
              </span>

              <span style={{ color: "#C9A646" }}>✦</span>
            </div>
          </div>

          <style>{`
            @keyframes driplabsTopMarquee {
              from {
                transform: translateX(0);
              }

              to {
                transform: translateX(-50%);
              }
            }

            @keyframes driplabsTopLight {
              0% {
                transform: translateX(-100%);
                opacity: 0;
              }

              15% {
                opacity: 1;
              }

              50% {
                opacity: 1;
              }

              85% {
                opacity: 1;
              }

              100% {
                transform: translateX(100%);
                opacity: 0;
              }
            }

            @media (max-width: 640px) {
              .driplabs-mobile-hidden {
                display: none;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .driplabs-welcome-motion {
                animation: none;
              }
            }
          `}</style>
        </div>

        {children}
      </body>
    </html>
  );
}
