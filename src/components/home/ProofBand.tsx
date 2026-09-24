"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  {
    value: "19+",
    label: "PHYSICIAN-GUIDED IV PROTOCOLS",
  },
  {
    value: "100%",
    label: "PHYSICIAN ASSESSMENT REQUIRED",
  },
  {
    value: "36+",
    label: "PHARMACOPOEIAL-GRADE BRANDED INJECTABLES",
  },
  {
    value: "India",
    label: "MANUFACTURED, LYOPHILISED AND QUALITY-TESTED",
  },
  {
    value: "9",
    label: "WELLNESS FAMILIES",
    href: "/protocols",
  },
];

export default function ProofBand() {
  return (
    <section
      aria-label="DRIPLABS key statistics"
      className="relative overflow-hidden bg-[#06101F] text-[#F7F4EC]"
    >
      {/* Subtle luxury atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-px w-[92%] -translate-x-1/2 bg-[#C9A227]/30" />

        <div className="absolute left-[12%] top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full bg-[#C9A227]/[0.025] blur-[90px]" />

        <div className="absolute right-[8%] top-1/3 h-[220px] w-[220px] rounded-full bg-[#28B8C8]/[0.025] blur-[90px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-[3.5vw] py-[38px] md:py-[44px] lg:py-[50px]">
        {/* Top hairline */}
        <div className="mb-0 h-px w-full bg-white/[0.10]" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => {
            const content = (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={[
                  "group relative flex min-h-[155px] flex-col justify-center",
                  "border-b border-white/[0.10]",
                  "px-5 py-7",
                  "sm:px-7",
                  "md:min-h-[165px]",
                  "lg:min-h-[175px] lg:border-b-0 lg:border-r",
                  index === 0 ? "lg:pl-7" : "",
                  index === stats.length - 1
                    ? "lg:border-r-0 lg:pr-7"
                    : "",
                ].join(" ")}
              >
                {/* Hover accent */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-0 bg-[#C9A227] transition-all duration-700 ease-out group-hover:w-full lg:top-auto lg:bottom-0"
                />

                {/* Stat number */}
                <span
                  className={[
                    "block font-light leading-none tracking-[-0.055em]",
                    "text-[#D3A928]",
                    stat.value === "India"
                      ? "text-[clamp(2.6rem,4vw,4rem)]"
                      : "text-[clamp(3.2rem,4.6vw,4.7rem)]",
                  ].join(" ")}
                >
                  {stat.value}
                </span>

                {/* Label */}
                <span className="mt-3 max-w-[220px] text-[9px] font-medium uppercase leading-[1.5] tracking-[0.18em] text-white/55">
                  {stat.label}
                </span>

                {/* Small gold index */}
                <span className="absolute right-5 top-5 text-[8px] tracking-[0.20em] text-[#C9A227]/45 sm:right-7">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Subtle hover line */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-[#C9A227]/70 transition-all duration-700 group-hover:w-[42px]"
                />
              </motion.div>
            );

            if (stat.href) {
              return (
                <Link
                  key={stat.value}
                  href={stat.href}
                  className="block outline-none focus-visible:ring-1 focus-visible:ring-[#C9A227]"
                  aria-label="Explore the 8 wellness families"
                >
                  {content}
                </Link>
              );
            }

            return <div key={stat.value}>{content}</div>;
          })}
        </div>

        {/* Bottom hairline */}
        <div className="h-px w-full bg-white/[0.10]" />

        {/* Quiet navigation cue */}
        <div className="mt-4 flex items-center justify-end">
          <Link
            href="/protocols"
            className="group inline-flex items-center gap-3 text-[8px] font-medium uppercase tracking-[0.22em] text-white/40 transition-colors duration-300 hover:text-[#C9A227]"
          >
            <span>Explore the protocol system</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}