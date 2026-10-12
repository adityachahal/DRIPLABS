"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const partnerTypes = [
  {
    number: "01",
    label: "Physicians",
    href: "/physicians",
  },
  {
    number: "02",
    label: "Clinics & Centres",
    href: "/partners",
  },
  {
    number: "03",
    label: "Distributors",
    href: "/distributors",
  },
  {
    number: "04",
    label: "Franchise",
    href: "/partners",
  },
];

export default function BuildingPartnership() {
  return (
    <section
      id="partnerships"
      className="relative overflow-hidden bg-[#020812] px-4 py-6 sm:px-6 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1700px]">
        <div
          className="
            group
            relative
            overflow-hidden
            border
            border-white/[0.10]
            bg-[#020812]
          "
        >
          {/* =========================================================
              MAIN THREE-COLUMN LAYOUT
          ========================================================= */}

          <div
            className="
              relative
              grid
              min-h-[460px]
              grid-cols-1
              lg:min-h-[500px]
              lg:grid-cols-[0.9fr_1.45fr_0.8fr]
              xl:min-h-[540px]
              xl:grid-cols-[0.92fr_1.48fr_0.82fr]
            "
          >
            {/* =======================================================
                LEFT — PARTNERSHIP CONTENT
            ======================================================= */}

            <div
              className="
                relative
                z-20
                flex
                flex-col
                justify-between
                bg-[#020812]
                p-7
                sm:p-9
                lg:border-r
                lg:border-white/[0.10]
                lg:p-10
                xl:p-12
              "
            >
              {/* TOP LABEL */}

              <div className="flex items-center gap-3">
                <span
                  className="
                    font-mono
                    text-[8px]
                    tracking-[0.28em]
                    text-[#8CCBFF]
                  "
                >
                  15
                </span>

                <span className="h-px w-8 bg-[#8CCBFF]/45" />

                <span
                  className="
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.28em]
                    text-white/55
                  "
                >
                  Partnership
                </span>
              </div>

              {/* MAIN CONTENT */}

              <div className="mt-16 lg:mt-0">
                <h2
                  className="
                    max-w-[500px]
                    font-[var(--font-heading)]
                    text-[clamp(3rem,4.4vw,5.5rem)]
                    font-light
                    leading-[0.86]
                    tracking-[-0.055em]
                    text-[#F7FAFF]
                  "
                >
                  Build the next
                  <br />
                  <span className="text-[#8CCBFF]">DRIPLABS.</span>
                </h2>

                <p
                  className="
                    mt-6
                    max-w-[310px]
                    text-[12px]
                    font-light
                    leading-[1.65]
                    tracking-[0.005em]
                    text-white/55
                    sm:text-[13px]
                  "
                >
                  A physician-led wellness platform for your city.
                </p>

                {/* CTA */}

                <Link
                  href="/partners"
                   className="mt-5 inline-flex h-[38px] items-center gap-3 rounded-full bg-[#F7FAFF] px-5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#06152B] transition-all duration-300 hover:bg-[#1683FF] hover:text-white"
                >
                  <span className="relative z-10">
                    Explore Partnership
                  </span>

                  <ArrowRight
                    size={14}
                    strokeWidth={1.25}
                    className="
                      relative
                      z-10
                      transition-transform
                      duration-500
                      group-hover/cta:translate-x-1
                    "
                  />

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      inset-y-0
                      -left-full
                      w-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/15
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover/cta:translate-x-[200%]
                    "
                  />
                </Link>
              </div>

              {/* BOTTOM MICRO LABEL */}

              <div className="mt-12 hidden lg:block">
                <div className="mb-3 h-px w-full bg-white/[0.08]" />

                <span
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.25em]
                    text-white/25
                  "
                >
                  Clinical · Operational · Experience
                </span>
              </div>
            </div>

            {/* =======================================================
                CENTER — REALISTIC DRIPLABS IMAGE
            ======================================================= */}

            <div
              className="
                relative
                min-h-[330px]
                overflow-hidden
                border-b
                border-white/[0.10]
                lg:min-h-0
                lg:border-b-0
                lg:border-r
              "
            >
              <Image
                src="/images/partnership/driplabs-partnership.png"
                alt="DRIPLABS partnership environment"
                fill
                priority={false}
                sizes="
                  (max-width: 1023px) 100vw,
                  (max-width: 1279px) 46vw,
                  50vw
                "
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-[1600ms]
                  ease-out
                  group-hover:scale-[1.018]
                "
              />

              {/* Cinematic image overlay */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-[#020812]/10
                  via-transparent
                  to-[#020812]/25
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#020812]/40
                  via-transparent
                  to-transparent
                "
              />

              {/* Subtle blue light */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-0
                  h-[1px]
                  w-full
                  bg-gradient-to-r
                  from-transparent
                  via-[#1683FF]/60
                  to-transparent
                "
              />

              {/* Image label */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  flex
                  items-center
                  gap-2
                  sm:bottom-6
                  sm:left-6
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#1683FF]
                    shadow-[0_0_12px_rgba(22,131,255,0.85)]
                  "
                />

                <span
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.25em]
                    text-white/55
                  "
                >
                  DRIPLABS
                </span>
              </div>
            </div>

            {/* =======================================================
                RIGHT — PARTNER PATHWAYS
            ======================================================= */}

            <div
              className="
                relative
                flex
                flex-col
                justify-between
                bg-[#020812]
                p-7
                sm:p-9
                lg:p-9
                xl:p-10
              "
            >
              {/* HEADER */}

              <div>
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.28em]
                      text-[#8CCBFF]
                    "
                  >
                    Partner pathways
                  </span>

                  <span
                    className="
                      font-mono
                      text-[8px]
                      tracking-[0.18em]
                      text-white/30
                    "
                  >
                    04
                  </span>
                </div>

                <div className="mt-4 h-px w-full bg-white/[0.12]" />
              </div>

              {/* PARTNER LINKS */}

              <div className="mt-8 lg:mt-0">
                {partnerTypes.map((partner) => (
                  <Link
                    key={partner.number}
                    href={partner.href}
                    className="
                      group/item
                      flex
                      min-h-[62px]
                      items-center
                      justify-between
                      border-b
                      border-white/[0.10]
                      transition-all
                      duration-300
                      hover:border-[#1683FF]/35
                    "
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="
                          font-mono
                          text-[7px]
                          tracking-[0.14em]
                          text-white/25
                          transition-colors
                          duration-300
                          group-hover/item:text-[#8CCBFF]
                        "
                      >
                        {partner.number}
                      </span>

                      <span
                        className="
                          text-[12px]
                          font-light
                          tracking-[-0.01em]
                          text-white/75
                          transition-colors
                          duration-300
                          group-hover/item:text-white
                          xl:text-[13px]
                        "
                      >
                        {partner.label}
                      </span>
                    </div>

                    <ArrowRight
                      size={14}
                      strokeWidth={1.15}
                      className="
                        text-white/25
                        transition-all
                        duration-300
                        group-hover/item:translate-x-1
                        group-hover/item:text-[#8CCBFF]
                      "
                    />
                  </Link>
                ))}
              </div>

              {/* BOTTOM */}

              <div className="mt-10">
                <div className="mb-4 h-px w-full bg-white/[0.08]" />

                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.24em]
                      text-white/25
                    "
                  >
                    DRIPLABS®
                  </span>

                  <span
                    className="
                      font-mono
                      text-[7px]
                      tracking-[0.18em]
                      text-white/20
                    "
                  >
                    2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              MOBILE FOOTER
          ========================================================= */}

          <div
            className="
              border-t
              border-white/[0.08]
              px-7
              py-4
              sm:px-9
              lg:hidden
            "
          >
            <div className="flex items-center justify-between">
              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.25em]
                  text-white/25
                "
              >
                Clinical · Operational · Experience
              </span>

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#1683FF]
                  shadow-[0_0_10px_rgba(0,102,255,0.8)]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}