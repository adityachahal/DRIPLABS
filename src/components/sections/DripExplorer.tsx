"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const drips = [
  {
    id: "beauty",
    number: "01",
    title: "Beauty",
    description:
      "Explore a wellness-focused IV experience designed around hydration, freshness and your personal goals.",
    metaLeft: "01 / 06",
    metaRight: "Beauty",
    imagePosition: "58% center",
  },
  {
    id: "optimise-health",
    number: "02",
    title: "Optimise Health",
    description:
      "A considered starting point for guests looking to build IV therapy into their broader wellness routine.",
    metaLeft: "02 / 06",
    metaRight: "Optimise",
    imagePosition: "43% center",
  },
  {
    id: "recovery",
    number: "03",
    title: "Recovery",
    description:
      "Discover a treatment experience designed to complement the way you recover, recharge and reset.",
    metaLeft: "03 / 06",
    metaRight: "Recovery",
    imagePosition: "66% center",
  },
  {
    id: "nad",
    number: "04",
    title: "NAD+ Treatment",
    description:
      "Explore NAD+ IV treatment with appropriate professional consultation and personalised guidance.",
    metaLeft: "04 / 06",
    metaRight: "NAD+",
    imagePosition: "52% center",
  },
  {
    id: "stress",
    number: "05",
    title: "Stress",
    description:
      "A calm, considered treatment experience for guests looking to make time for their wellbeing.",
    metaLeft: "05 / 06",
    metaRight: "Stress",
    imagePosition: "72% center",
  },
  {
    id: "weightloss",
    number: "06",
    title: "Weightloss",
    description:
      "Explore available treatment options with professional guidance based on your individual goals.",
    metaLeft: "06 / 06",
    metaRight: "Weightloss",
    imagePosition: "34% center",
  },
];

export default function DripExplorer() {
  const [activeId, setActiveId] = useState("beauty");

  const activeDrip =
    drips.find((drip) => drip.id === activeId) ?? drips[0];

  return (
    <section
      id="drips"
      className="relative overflow-hidden bg-[#171714] text-[#f4f1eb]"
    >
      <div className="mx-auto grid min-h-screen max-w-[1600px] lg:grid-cols-12">
        {/* Left: editorial heading */}
        <div className="flex flex-col justify-between px-6 py-24 md:px-10 md:py-32 lg:col-span-5 lg:px-14 lg:py-36">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">
              Discover your drip
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 max-w-[620px] text-[clamp(4rem,7vw,7.5rem)] font-light leading-[0.8] tracking-[-0.07em]"
            >
              Find your
              <br />
              drip.
            </motion.h2>

            <p className="mt-10 max-w-md text-sm leading-7 text-white/55">
              Start with what you want from your wellness experience. Explore
              the categories below, then continue to treatment details and
              booking when you're ready.
            </p>
          </div>

          <div className="mt-16 hidden border-t border-white/15 pt-5 lg:flex lg:items-end lg:justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                DRIPLABS
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/35">
                Personalized wellness
              </p>
            </div>

            <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
              {activeDrip.metaLeft}
            </p>
          </div>
        </div>

        {/* Right: interactive experience */}
        <div className="relative border-t border-white/10 lg:col-span-7 lg:border-l lg:border-t-0">
          {/* Visual */}
          <div className="relative min-h-[62vh] overflow-hidden lg:h-[68vh] lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDrip.id}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/hero/driplabs-hero.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                  style={{
                    objectPosition: activeDrip.imagePosition,
                  }}
                />

                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
              </motion.div>
            </AnimatePresence>

            {/* Visual metadata */}
            <div className="absolute inset-x-0 top-0 z-10 flex justify-between px-6 py-6 md:px-10">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/65">
                {activeDrip.metaRight}
              </p>

              <p className="text-[9px] uppercase tracking-[0.2em] text-white/65">
                IV THERAPY
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-10">
              <div className="flex items-end justify-between gap-8">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-white/45">
                    Category
                  </p>

                  <h3 className="mt-3 text-5xl font-light tracking-[-0.05em] md:text-7xl">
                    {activeDrip.title}
                  </h3>
                </div>

                <span className="hidden text-[10px] uppercase tracking-[0.2em] text-white/40 md:block">
                  {activeDrip.number}
                </span>
              </div>

              <motion.p
                key={activeDrip.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="mt-6 max-w-lg text-sm leading-6 text-white/70"
              >
                {activeDrip.description}
              </motion.p>
            </div>
          </div>

          {/* Category selector */}
          <div className="grid border-t border-white/10 sm:grid-cols-2">
            {drips.map((drip) => {
              const active = activeId === drip.id;

              return (
                <button
                  key={drip.id}
                  type="button"
                  onClick={() => setActiveId(drip.id)}
                  className={`group flex items-center justify-between border-b border-white/10 px-6 py-5 text-left transition-colors duration-300 md:px-10 ${
                    active ? "bg-white text-[#171714]" : "hover:bg-white/[0.05]"
                  }`}
                >
                  <span className="flex items-center gap-5">
                    <span
                      className={`text-[9px] tracking-[0.2em] ${
                        active ? "text-black/40" : "text-white/30"
                      }`}
                    >
                      {drip.number}
                    </span>

                    <span className="text-sm uppercase tracking-[0.14em]">
                      {drip.title}
                    </span>
                  </span>

                  <span
                    className={`text-sm transition-transform duration-300 ${
                      active
                        ? "translate-x-0"
                        : "translate-x-1 text-white/35 group-hover:translate-x-0"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}