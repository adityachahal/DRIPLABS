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
        {/* =====================================================
            DRIPLABS GLOBAL WELCOME BAR
        ====================================================== */}

        <div className="driplabs-welcome-bar">
          <div className="driplabs-welcome-sweep" />

          <div className="driplabs-welcome-marquee">
            <div className="driplabs-welcome-content">
              <span className="driplabs-welcome-brand">
                DRIPLABS®
              </span>

              <span className="driplabs-welcome-separator">
                ✦
              </span>

              <span>
                WELCOME TO A NEW STANDARD OF WELLNESS
              </span>

              <span className="driplabs-welcome-separator">
                ✦
              </span>

              <span>
                PHYSICIAN-LED WELLNESS
              </span>

              <span className="driplabs-welcome-separator">
                ✦
              </span>

              <span>
                MADE IN INDIA
              </span>

              <span className="driplabs-welcome-separator">
                ✦
              </span>

              <span>
                PRECISION · CELLULAR HEALTH · LONGEVITY
              </span>

              <span className="driplabs-welcome-separator">
                ✦
              </span>
            </div>

            <div
              className="driplabs-welcome-content"
              aria-hidden="true"
            >
              <span className="driplabs-welcome-brand">
                DRIPLABS®
              </span>

              <span className="driplabs-welcome-separator">
                ✦
              </span>

              <span>
                WELCOME TO A NEW STANDARD OF WELLNESS
              </span>

              <span className="driplabs-welcome-separator">
                ✦
              </span>

              <span>
                PHYSICIAN-LED WELLNESS
              </span>

              <span className="driplabs-welcome-separator">
                ✦
              </span>

              <span>
                MADE IN INDIA
              </span>

              <span className="driplabs-welcome-separator">
                ✦
              </span>

              <span>
                PRECISION · CELLULAR HEALTH · LONGEVITY
              </span>

              <span className="driplabs-welcome-separator">
                ✦
              </span>
            </div>
          </div>
        </div>

        {children}

        <style>{`
          /* =====================================================
             GLOBAL WELCOME BAR
          ====================================================== */

          .driplabs-welcome-bar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 40px;

            z-index: 99999;

            display: flex;
            align-items: center;

            overflow: hidden;

            pointer-events: none;

            background:
              linear-gradient(
                180deg,
                #08090b 0%,
                #101216 50%,
                #08090b 100%
              );

            border-bottom:
              1px solid
              rgba(201, 166, 70, 0.4);

            box-shadow:
              0 2px 20px
              rgba(201, 166, 70, 0.18);
          }

          /* =====================================================
             TOP GOLD LIGHT
          ====================================================== */

          .driplabs-welcome-bar::before {
            content: "";

            position: absolute;

            top: 0;
            left: 0;

            width: 100%;
            height: 2px;

            background:
              linear-gradient(
                90deg,
                transparent,
                rgba(201, 166, 70, 0.5),
                #fff8dc,
                rgba(201, 166, 70, 0.5),
                transparent
              );
          }

          /* =====================================================
             MOVING LIGHT
          ====================================================== */

          .driplabs-welcome-sweep {
            position: absolute;

            top: -12px;
            left: -25%;

            width: 25%;
            height: 64px;

            background:
              radial-gradient(
                ellipse at center,
                rgba(201, 166, 70, 0.5) 0%,
                rgba(201, 166, 70, 0.18) 35%,
                transparent 72%
              );

            filter: blur(8px);

            animation:
              driplabsWelcomeLight
              5s
              cubic-bezier(0.22, 1, 0.36, 1)
              infinite;
          }

          /* =====================================================
             MARQUEE
          ====================================================== */

          .driplabs-welcome-marquee {
            position: relative;

            z-index: 5;

            display: flex;

            width: max-content;

            animation:
              driplabsWelcomeMarquee
              28s
              linear
              infinite;
          }

          .driplabs-welcome-content {
            display: flex;

            align-items: center;

            gap: 24px;

            padding-right: 24px;

            white-space: nowrap;

            font-family:
              var(--font-body),
              Arial,
              sans-serif;

            font-size: 8px;

            font-weight: 500;

            letter-spacing: 0.3em;

            text-transform: uppercase;

            color:
              rgba(244, 242, 236, 0.82);

            text-shadow:
              0 0 12px
              rgba(201, 166, 70, 0.15);
          }

          .driplabs-welcome-brand {
            color: #e3ce8e;

            font-weight: 600;

            letter-spacing: 0.34em;

            text-shadow:
              0 0 14px
              rgba(201, 166, 70, 0.5);
          }

          .driplabs-welcome-separator {
            color: #c9a646;

            font-size: 9px;

            text-shadow:
              0 0 9px
              rgba(201, 166, 70, 0.9);
          }

          /* =====================================================
             ANIMATIONS
          ====================================================== */

          @keyframes driplabsWelcomeMarquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          @keyframes driplabsWelcomeLight {
            0% {
              transform: translateX(0);
              opacity: 0;
            }

            10% {
              opacity: 1;
            }

            50% {
              opacity: 1;
            }

            90% {
              opacity: 1;
            }

            100% {
              transform: translateX(600vw);
              opacity: 0;
            }
          }

          /* =====================================================
             MOBILE
          ====================================================== */

          @media (max-width: 640px) {
            .driplabs-welcome-bar {
              height: 32px;
            }

            .driplabs-welcome-content {
              gap: 14px;
              padding-right: 14px;
              font-size: 6px;
              letter-spacing: 0.18em;
            }

            .driplabs-welcome-separator {
              font-size: 7px;
            }
          }

          /* =====================================================
             REDUCED MOTION
          ====================================================== */

          @media (prefers-reduced-motion: reduce) {
            .driplabs-welcome-marquee {
              animation: none;
            }

            .driplabs-welcome-sweep {
              animation: none;
              left: 40%;
              opacity: 0.6;
            }
          }
        `}</style>
      </body>
    </html>
  );
}