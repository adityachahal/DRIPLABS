"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

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
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-label="DRIPLABS key statistics"
     className="relative -mt-12 overflow-hidden bg-[#020812] text-[#F7FAFF]" 
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-px w-[92%] -translate-x-1/2 bg-[#1683FF]/35" />

        <div className="absolute left-[15%] top-1/2 h-[180px] w-[180px] -translate-y-1/2 rounded-full bg-[#0066FF]/[0.025] blur-[90px]" />

        <div className="absolute right-[10%] top-1/3 h-[160px] w-[160px] rounded-full bg-[#4D9BFF]/[0.02] blur-[80px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-[3.5vw] py-5 md:py-6 lg:py-7">
        {/* =======================================================
            TOP HAIRLINE
        ======================================================= */}

        <div className="h-px w-full bg-white/[0.09]" />

        {/* =======================================================
            STAT GRID
        ======================================================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => {
            const content = (
              <motion.div
                initial={
                  reducedMotion
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        y: 12,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.65,
                  delay: reducedMotion ? 0 : index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={[
                  "group relative flex min-h-[125px] flex-col justify-center",
                  "border-b border-white/[0.08]",
                  "px-5 py-5",
                  "sm:px-7",
                  "md:min-h-[135px]",
                  "lg:min-h-[140px] lg:border-b-0 lg:border-r",
                  index === 0 ? "lg:pl-7" : "",
                  index === stats.length - 1
                    ? "lg:border-r-0 lg:pr-7"
                    : "",
                ].join(" ")}
              >
                {/* =================================================
                    ACTIVE / HOVER RAIL
                ================================================= */}

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-[#1683FF] transition-all duration-700 ease-out group-hover:w-full lg:top-0 lg:bottom-auto"
                />

                {/* =================================================
                    NUMBER
                ================================================= */}

                <span
                  className={[
                    "block font-light leading-none tracking-[-0.055em]",
                    "text-[#F7FAFF]",
                    "transition-colors duration-500",
                    "group-hover:text-[#4D9BFF]",
                    stat.value === "India"
                      ? "text-[clamp(2.1rem,3.2vw,3.2rem)]"
                      : "text-[clamp(2.8rem,4vw,4.1rem)]",
                  ].join(" ")}
                >
                  {stat.value}
                </span>

                {/* =================================================
                    LABEL
                ================================================= */}

                <span className="mt-2.5 max-w-[220px] text-[8px] font-medium uppercase leading-[1.45] tracking-[0.17em] text-white/45 transition-colors duration-500 group-hover:text-white/60">
                  {stat.label}
                </span>

                {/* =================================================
                    INDEX
                ================================================= */}

                <span className="absolute right-5 top-4 font-mono text-[7px] tracking-[0.2em] text-[#1683FF]/45 sm:right-7">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.div>
            );

            if (stat.href) {
              return (
                <Link
                  key={stat.value}
                  href={stat.href}
                  className="block outline-none focus-visible:ring-1 focus-visible:ring-[#1683FF]"
                  aria-label="Explore the wellness families"
                >
                  {content}
                </Link>
              );
            }

            return <div key={stat.value}>{content}</div>;
          })}
        </div>

        {/* =======================================================
            BOTTOM HAIRLINE
        ======================================================= */}

        <div className="h-px w-full bg-white/[0.09]" />
      </div>
    </section>
  );
}