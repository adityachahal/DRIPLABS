"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const proofPoints = [
  {
    number: "01",
    title: "Physician-led",
    description:
      "Every journey begins with professional assessment and physician oversight.",
  },
  {
    number: "02",
    title: "Pharma-grade",
    description:
      "Documented protocols and pharmaceutical manufacturing standards support the DRIPLABS system.",
  },
  {
    number: "03",
    title: "Traceable",
    description:
      "Batch information, expiry and Certificate of Analysis documentation support product traceability.",
  },
  {
    number: "04",
    title: "Made in India",
    description:
      "The platform is built around Indian manufacturing and quality systems.",
  },
];

export default function TailoredTherapy() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#F5F0E7] text-[#0B1D35]"
    >
      {/* =========================================================
          INTRO
      ========================================================= */}
      <div className="mx-auto max-w-[1680px] px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-40 lg:px-14">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Left metadata */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
            >
              <p className="driplabs-label text-[#77736A]">
                About DRIPLABS
              </p>

              <div className="mt-6 h-px w-12 bg-[#C9A646]" />

              <p className="mt-6 max-w-[190px] text-[9px] uppercase leading-5 tracking-[0.18em] text-[#99958C]">
                Physician-led
                <br />
                Pharma-grade
                <br />
                Made in India
              </p>
            </motion.div>
          </div>

          {/* Main statement */}
          <div className="md:col-span-8 md:col-start-5">
            <motion.h2
              initial={{ opacity: 0, y: 65 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[1120px] text-[clamp(4.2rem,7.8vw,9rem)] font-light leading-[0.78] tracking-[-0.075em]"
            >
              Wellness,
              <br />
              built the way
              <br />
              medicine is built.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: 0.12,
              }}
              className="mt-10 max-w-[650px] text-sm leading-7 text-[#59616B] md:text-base"
            >
              DRIPLABS brings together physician-led IV wellness, documented
              protocols, professional supervision and a pharmaceutical-grade
              approach to the wellness experience.
            </motion.p>
          </div>
        </div>
      </div>

      {/* =========================================================
          HERO IMAGE
      ========================================================= */}
      <div className="mx-auto max-w-[1680px] px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, scale: 1.025 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative aspect-[4/3] overflow-hidden bg-[#D8D1C6] md:aspect-[2.15/1]"
        >
          <Image
            src="/images/hero/driplabs-hero.jpg"
            alt="DRIPLABS wellness experience"
            fill
            sizes="100vw"
            className="object-cover object-[58%_center] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.018]"
          />

          <div className="absolute inset-0 bg-[#071525]/10" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/65 via-transparent to-transparent" />

          {/* Image top label */}
          <div className="absolute left-6 top-6 md:left-10 md:top-10">
            <p className="text-[8px] uppercase tracking-[0.28em] text-white/65">
              DRIPLABS
            </p>
          </div>

          {/* Image caption */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
            <div className="flex items-end justify-between gap-8">
              <div>
                <p className="text-[8px] uppercase tracking-[0.25em] text-white/45">
                  The experience
                </p>

                <p className="mt-3 max-w-lg text-2xl font-light leading-none tracking-[-0.035em] text-[#F5F0E7] md:text-4xl">
                  Personal care, considered.
                </p>
              </div>

              <span className="hidden text-[8px] uppercase tracking-[0.22em] text-white/45 md:block">
                01 / DRIPLABS
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          BRAND PROOF
      ========================================================= */}
      <div className="mx-auto max-w-[1680px] px-6 md:px-10 lg:px-14">
        <div className="grid border-b border-[#0B1D35]/10 md:grid-cols-12">
          {/* Intro */}
          <div className="py-14 md:col-span-4 md:py-20 lg:pr-14">
            <p className="driplabs-label text-[#77736A]">
              The standard
            </p>

            <h3 className="mt-6 max-w-md text-4xl font-light leading-[0.9] tracking-[-0.05em] md:text-5xl">
              The details matter.
            </h3>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#666B73]">
              The DRIPLABS experience is designed around the details behind
              every protocol, not simply the appearance of a treatment menu.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid border-t border-[#0B1D35]/10 md:col-span-8 md:col-start-5 md:grid-cols-2 md:border-t-0 md:border-l">
            <ProofMetric
              value="19"
              label="Commercial protocols"
              detail="Across the DRIPLABS wellness system."
            />

            <ProofMetric
              value="8"
              label="Wellness families"
              detail="Structured around distinct wellness focuses."
            />

            <ProofMetric
              value="19"
              label="Technical IV kits"
              detail="Detailed technical architecture documented separately."
            />

            <ProofMetric
              value="IN"
              label="Made in India"
              detail="Manufacturing and quality systems built around India."
            />
          </div>
        </div>
      </div>

      {/* =========================================================
          FOUR PROOF POINTS
      ========================================================= */}
      <div className="mx-auto max-w-[1680px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid gap-14 md:grid-cols-12 md:gap-8">
          {/* Label */}
          <div className="md:col-span-3">
            <p className="driplabs-label text-[#77736A]">
              What defines us
            </p>
          </div>

          {/* Points */}
          <div className="md:col-span-8 md:col-start-5">
            <div className="border-t border-[#0B1D35]/10">
              {proofPoints.map((point, index) => (
                <motion.div
                  key={point.number}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.06,
                  }}
                  className="grid gap-6 border-b border-[#0B1D35]/10 py-8 md:grid-cols-12 md:items-start md:py-10"
                >
                  <div className="md:col-span-1">
                    <span className="text-[8px] tracking-[0.22em] text-[#C9A646]">
                      {point.number}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <h4 className="text-2xl font-light tracking-[-0.035em] md:text-3xl">
                      {point.title}
                    </h4>
                  </div>

                  <div className="md:col-span-6 md:col-start-7">
                    <p className="max-w-lg text-sm leading-7 text-[#59616B]">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          GOLD CTA STRIP
      ========================================================= */}
      <div className="bg-[#0B1D35] text-[#F5F0E7]">
        <div className="mx-auto flex max-w-[1680px] flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
          <div>
            <p className="driplabs-label text-white/35">
              Explore the system
            </p>

            <p className="mt-3 max-w-2xl text-2xl font-light tracking-[-0.035em] md:text-3xl">
              Discover the protocols designed around you.
            </p>
          </div>

          <a
            href="#drips"
            className="group inline-flex shrink-0 items-center gap-5 border border-[#C9A646] bg-[#C9A646] px-6 py-4 text-[9px] uppercase tracking-[0.22em] text-[#0B1D35] transition-all duration-300 hover:bg-transparent hover:text-[#C9A646]"
          >
            Explore protocols

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   PROOF METRIC
============================================================= */

function ProofMetric({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
      }}
      className="border-b border-[#0B1D35]/10 px-0 py-10 md:px-10 md:py-12 md:[&:nth-child(odd)]:border-r lg:px-14"
    >
      <p className="text-[clamp(4rem,6vw,6.5rem)] font-light leading-none tracking-[-0.07em] text-[#0B1D35]">
        {value}
      </p>

      <p className="mt-5 text-[9px] uppercase tracking-[0.2em] text-[#77736A]">
        {label}
      </p>

      <p className="mt-3 max-w-xs text-sm leading-6 text-[#77736A]">
        {detail}
      </p>
    </motion.div>
  );
}