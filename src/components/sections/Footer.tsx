"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const exploreLinks = [
  { label: "Protocols", href: "/protocols" },
  { label: "Wellness Paths", href: "/wellness-goals" },
  { label: "NADx", href: "/nadx" },
  { label: "Signature Protocols", href: "/protocols" },
];

const experienceLinks = [
  { label: "In-Centre", href: "/experience" },
  { label: "DRIPLABS Home", href: "/experience" },
  { label: "DRIPLABS Private", href: "/experience" },
  { label: "Women's Wellness", href: "/protocols/femme" },
  { label: "Your Journey", href: "/experience" },
];

const scienceLinks = [
  { label: "The Standard", href: "/science#standard" },
  { label: "NADx Science", href: "/science#nadx" },
  { label: "Evidence & Research", href: "/science#evidence" },
  { label: "Ingredients", href: "/science#ingredients" },
  { label: "Quality & Traceability", href: "/science#traceability" },
  { label: "COA Library", href: "/science#coa" },
  { label: "Decode a Vial", href: "/science#decode" },
];

const circleLinks = [
  { label: "Membership", href: "/circle" },
  { label: "Benefits", href: "/circle" },
  { label: "Home Services", href: "/experience" },
  { label: "Concierge", href: "/circle" },
];

const locationLinks = [
  { label: "Centres", href: "/locations" },
  { label: "Find Nearest", href: "/locations" },
  { label: "Home", href: "/experience" },
];

const partnerLinks = [
  { label: "Physicians", href: "/partners" },
  { label: "Clinics & Hospitals", href: "/partners" },
  { label: "Distributors", href: "/partners" },
  { label: "Franchise / MSO", href: "/partners" },
  { label: "Corporate", href: "/partners" },
  { label: "Strategic", href: "/partners" },
];

function FooterLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="
          group
          inline-flex
          items-center
          gap-2
          text-[13px]
          font-medium
          tracking-[-0.01em]
          text-white/48
          transition-all
          duration-300
          hover:text-white
        "
      >
        <span>{label}</span>

        <ArrowUpRight
          size={11}
          strokeWidth={1.4}
          className="
            -translate-x-1
            translate-y-1
            opacity-0
            transition-all
            duration-300
            group-hover:translate-x-0
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        />
      </Link>
    </li>
  );
}

function FooterColumn({
  eyebrow,
  links,
}: {
  eyebrow: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}) {
  return (
    <div>
      <div className="mb-5 flex items-center gap-2">
        <span className="h-px w-4 bg-[#1683FF]" />

        <span
          className="
            text-[8px]
            font-medium
            uppercase
            tracking-[0.24em]
            text-[#8CCBFF]/55
          "
        >
          {eyebrow}
        </span>
      </div>

      <ul className="space-y-3">
        {links.map((link) => (
          <FooterLink
            key={`${eyebrow}-${link.label}`}
            label={link.label}
            href={link.href}
          />
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const reducedMotion = useReducedMotion();

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#020812]
        text-[#F7FAFF]
      "
    >
      {/* ============================================================
          AMBIENT BACKGROUND
      ============================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Large blue atmospheric field */}

        <div
          className="
            absolute
            -right-[18%]
            top-[4%]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#0066FF]/[0.045]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -left-[12%]
            bottom-[8%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#1683FF]/[0.025]
            blur-[120px]
          "
        />

        {/* Fine technical grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.055]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(140,203,255,0.20) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(140,203,255,0.20) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 12%, black 75%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 12%, black 75%, transparent)",
          }}
        />

        {/* Top cinematic fade */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-40
            bg-gradient-to-b
            from-[#1683FF]/[0.035]
            to-transparent
          "
        />
      </div>

      {/* ============================================================
          TOP TECHNICAL LINE
      ============================================================ */}

      <div className="relative border-t border-white/[0.08]">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1683FF]/70 to-transparent" />
      </div>

      <div className="relative driplabs-container">
        {/* ==========================================================
            BRAND / PRIMARY CTA
        ========================================================== */}

        <section
          className="
            relative
            border-b
            border-white/[0.08]
            py-16
            sm:py-20
            lg:py-28
          "
        >
          {/* Technical coordinates */}

          <div
            className="
              mb-10
              flex
              items-center
              justify-between
              text-[8px]
              font-medium
              uppercase
              tracking-[0.24em]
              text-white/25
            "
          >
            <span>DRIPLABS / 06 — CONTACT</span>

            <span className="hidden sm:block">
              Physician-led wellness / India
            </span>
          </div>

          <div
            className="
              grid
              gap-12
              lg:grid-cols-[1.35fr_0.65fr]
              lg:items-end
            "
          >
            {/* Main statement */}

            <div>
              <div className="mb-7 flex items-center gap-3">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#1683FF]
                    shadow-[0_0_14px_rgba(22,131,255,0.9)]
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.28em]
                    text-[#8CCBFF]/65
                  "
                >
                  Precision wellness
                </span>
              </div>

              <h2
                className="
                  max-w-[980px]
                  font-[var(--font-heading)]
                  text-[clamp(3.5rem,8vw,8.5rem)]
                  font-light
                  leading-[0.82]
                  tracking-[-0.075em]
                  text-[#F7FAFF]
                "
              >
                Your health.
                <br />

                <span className="text-white/42">
                  Considered precisely.
                </span>
              </h2>

              <p
                className="
                  mt-8
                  max-w-[570px]
                  text-[14px]
                  leading-7
                  text-white/45
                  sm:text-[15px]
                "
              >
                Physician-led advanced IV wellness and NAD+ personalised
                experiences, delivered in a considered clinical environment
                or at home.
              </p>
            </div>

            {/* CTA */}

            <div className="lg:justify-self-end">
              <Link
                href="/book"
                className="
                  group
                  relative
                  flex
                  min-h-[190px]
                  w-full
                  max-w-[320px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[4px]
                  border
                  border-[#1683FF]/25
                  bg-[#06152B]/65
                  p-6
                  transition-all
                  duration-500
                  hover:border-[#1683FF]/65
                  hover:bg-[#06152B]
                  sm:min-h-[210px]
                "
              >
                {/* CTA glow */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#0066FF]/10
                    blur-[60px]
                    transition-all
                    duration-700
                    group-hover:bg-[#0066FF]/20
                  "
                />

                <div className="relative flex items-center justify-between">
                  <span
                    className="
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.24em]
                      text-[#8CCBFF]/55
                    "
                  >
                    Start here
                  </span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.2}
                    className="
                      text-[#1683FF]
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>

                <div className="relative">
                  <span
                    className="
                      block
                      text-[25px]
                      font-medium
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    Book a consultation
                  </span>

                  <span
                    className="
                      mt-2
                      block
                      text-[11px]
                      leading-5
                      text-white/35
                    "
                  >
                    Begin with physician assessment.
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* ========================================================
              BRAND SIGNATURE
          ======================================================== */}

          <div
            className="
              mt-16
              overflow-hidden
              border-t
              border-white/[0.07]
              pt-8
              sm:mt-20
            "
          >
            <div
              className="
                whitespace-nowrap
                text-[clamp(4rem,11vw,12rem)]
                font-medium
                leading-[0.7]
                tracking-[-0.085em]
                text-white/[0.045]
                select-none
              "
              aria-hidden="true"
            >
              DRIPLABS®
            </div>
          </div>
        </section>

        {/* ==========================================================
            NAVIGATION SYSTEM
        ========================================================== */}

        <section
          className="
            relative
            border-b
            border-white/[0.08]
            py-14
            sm:py-16
            lg:py-20
          "
        >
          <div
            className="
              mb-12
              flex
              items-end
              justify-between
              gap-8
            "
          >
            <div>
              <span
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.26em]
                  text-[#1683FF]
                "
              >
                Explore DRIPLABS
              </span>

              <h3
                className="
                  mt-3
                  font-[var(--font-heading)]
                  text-[clamp(2rem,3.5vw,3.4rem)]
                  font-light
                  leading-none
                  tracking-[-0.055em]
                  text-white
                "
              >
                Everything,
                <br />
                precisely organised.
              </h3>
            </div>

            <span
              className="
                hidden
                text-right
                text-[8px]
                uppercase
                tracking-[0.22em]
                text-white/25
                md:block
              "
            >
              01 — Navigation
              <br />
              06 — Categories
            </span>
          </div>

          <div
            className="
              grid
              grid-cols-2
              gap-x-8
              gap-y-12
              sm:grid-cols-3
              lg:grid-cols-6
              lg:gap-x-8
            "
          >
            <FooterColumn
              eyebrow="Explore"
              links={exploreLinks}
            />

            <FooterColumn
              eyebrow="Experience"
              links={experienceLinks}
            />

            <FooterColumn
              eyebrow="Science"
              links={scienceLinks}
            />

            <FooterColumn
              eyebrow="Circle"
              links={circleLinks}
            />

            <FooterColumn
              eyebrow="Locations"
              links={locationLinks}
            />

            <FooterColumn
              eyebrow="Partners"
              links={partnerLinks}
            />
          </div>
        </section>

        {/* ==========================================================
            CONTACT / LOCATION
        ========================================================== */}

        <section
          className="
            grid
            border-b
            border-white/[0.08]
            py-12
            sm:py-14
            lg:grid-cols-[1fr_1fr_1fr]
            lg:gap-12
            lg:py-16
          "
        >
          {/* Phone */}

          <a
            href="tel:+919319119009"
            className="
              group
              border-b
              border-white/[0.08]
              pb-8
              lg:border-b-0
              lg:border-r
              lg:pb-0
            "
          >
            <div className="flex items-center gap-3">
              <Phone
                size={14}
                strokeWidth={1.2}
                className="text-[#1683FF]"
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.24em]
                  text-white/30
                "
              >
                Call
              </span>
            </div>

            <p
              className="
                mt-5
                text-[clamp(1.5rem,2.5vw,2.3rem)]
                font-light
                tracking-[-0.045em]
                text-white
                transition-colors
                duration-300
                group-hover:text-[#8CCBFF]
              "
            >
              +91 (931) 911-9009
            </p>
          </a>

          {/* Email */}

          <a
            href="mailto:hello@thedriplabs.com"
            className="
              group
              border-b
              border-white/[0.08]
              py-8
              lg:border-b-0
              lg:border-r
              lg:px-8
              lg:py-0
            "
          >
            <div className="flex items-center gap-3">
              <Mail
                size={14}
                strokeWidth={1.2}
                className="text-[#1683FF]"
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.24em]
                  text-white/30
                "
              >
                Email
              </span>
            </div>

            <p
              className="
                mt-5
                break-all
                text-[clamp(1.5rem,2.5vw,2.3rem)]
                font-light
                tracking-[-0.045em]
                text-white
                transition-colors
                duration-300
                group-hover:text-[#8CCBFF]
              "
            >
              hello@thedriplabs.com
            </p>
          </a>

          {/* Locations */}

          <Link
            href="/locations"
            className="
              group
              pt-8
              lg:pl-8
              lg:pt-0
            "
          >
            <div className="flex items-center gap-3">
              <MapPin
                size={14}
                strokeWidth={1.2}
                className="text-[#1683FF]"
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.24em]
                  text-white/30
                "
              >
                Locations
              </span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <p
                className="
                  text-[clamp(1.5rem,2.5vw,2.3rem)]
                  font-light
                  tracking-[-0.045em]
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-[#8CCBFF]
                "
              >
                Six centres across India
              </p>

              <ChevronRight
                size={18}
                strokeWidth={1.1}
                className="
                  shrink-0
                  text-[#1683FF]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </div>
          </Link>
        </section>

        {/* ==========================================================
            QUALITY / TRUST STRIP
        ========================================================== */}

        <section
          className="
            border-b
            border-white/[0.08]
            py-8
            sm:py-9
          "
        >
          <div
            className="
              grid
              grid-cols-2
              gap-y-7
              sm:grid-cols-4
              lg:grid-cols-6
            "
          >
            {[
              ["01", "Physician-led"],
              ["02", "Pharma-grade"],
              ["03", "Batch traceable"],
              ["04", "Third-party tested"],
              ["05", "Research backed"],
              ["06", "India"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="
                  flex
                  items-center
                  gap-3
                  sm:border-r
                  sm:border-white/[0.06]
                  sm:px-5
                  first:sm:pl-0
                  last:sm:border-r-0
                "
              >
                <span
                  className="
                    font-mono
                    text-[7px]
                    tracking-[0.16em]
                    text-[#1683FF]/70
                  "
                >
                  {number}
                </span>

                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.13em]
                    text-white/35
                  "
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================================
            DISCLAIMER
        ========================================================== */}

        <section className="py-9 sm:py-11">
          <div
            className="
              grid
              gap-7
              lg:grid-cols-[1fr_auto]
              lg:items-start
              lg:gap-12
            "
          >
            <div className="max-w-[1050px]">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-5 bg-[#1683FF]/70" />

                <span
                  className="
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    text-white/25
                  "
                >
                  Medical disclaimer
                </span>
              </div>

              <p
                className="
                  text-[10px]
                  leading-[1.8]
                  text-white/25
                "
              >
                Protocol names and taglines are wellness-positioning terms
                only — never claims of diagnosis, treatment, cure or
                prevention. Final protocol selection, dosage and duration
                remain the sole responsibility of the treating physician.
                Administration only in licensed settings. Not intended to
                diagnose, treat, cure or prevent any disease.
              </p>
            </div>

            <div
              className="
                flex
                flex-wrap
                gap-x-7
                gap-y-3
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-white/30
              "
            >
              <Link
                href="/privacy"
                className="transition-colors hover:text-white"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="transition-colors hover:text-white"
              >
                Terms
              </Link>
            </div>
          </div>
        </section>

        {/* ==========================================================
            FINAL BRAND RAIL
        ========================================================== */}

        <section
          className="
            border-t
            border-white/[0.08]
            py-5
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#1683FF]
                  shadow-[0_0_10px_rgba(22,131,255,0.8)]
                "
              />

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-white/35
                "
              >
                DRIPLABS®
              </span>
            </div>

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-white/20
              "
            >
              © 2026 Snnylo Wellness Sciences
            </span>

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-white/20
              "
            >
              India
            </span>
          </div>
        </section>
      </div>

      {/* ============================================================
          SUBTLE BOTTOM BLUE LINE
      ============================================================ */}

      <motion.div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#1683FF]/60
          to-transparent
        "
        initial={reducedMotion ? false : { scaleX: 0.35, opacity: 0.45 }}
        whileInView={
          reducedMotion
            ? undefined
            : {
                scaleX: 1,
                opacity: 0.8,
              }
        }
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </footer>
  );
}