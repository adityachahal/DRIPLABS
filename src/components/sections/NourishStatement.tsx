"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const philosophy = [
  {
    word: "Nourish.",
    x: ["-4%", "2%"],
  },
  {
    word: "Recharge.",
    x: ["3%", "-3%"],
  },
  {
    word: "Restore.",
    x: ["-2%", "4%"],
  },
];

export default function NourishStatement() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F5F0E7] text-[#0B1D35]"
    >
      {/* =========================================================
          INTRO
      ========================================================= */}
      <div className="mx-auto max-w-[1680px] px-6 pb-14 pt-28 md:px-10 md:pb-20 md:pt-40 lg:px-14">
        <div className="flex items-start justify-between">
          <div>
            <p className="driplabs-label text-[#77736A]">
              The DRIPLABS philosophy
            </p>

            <div className="mt-6 h-px w-12 bg-[#C9A646]" />
          </div>

          <p className="hidden max-w-[150px] text-right text-[8px] uppercase leading-5 tracking-[0.2em] text-[#99958C] md:block">
            A considered approach
            <br />
            to modern wellness.
          </p>
        </div>
      </div>

      {/* =========================================================
          LARGE PHILOSOPHY TYPOGRAPHY
      ========================================================= */}
      <div className="relative overflow-hidden pb-8 md:pb-12">
        {philosophy.map((item, index) => {
          const x = useTransform(
            scrollYProgress,
            [0, 1],
            item.x,
          );

          return (
            <div
              key={item.word}
              className={`overflow-hidden ${
                index !== 0 ? "mt-1 md:mt-2" : ""
              }`}
            >
              <motion.div
                style={{ x }}
                className="whitespace-nowrap"
              >
                <h2
                  className={`inline-block font-light leading-[0.74] tracking-[-0.085em] ${
                    index === 1
                      ? "pl-[3vw]"
                      : index === 2
                        ? "pl-[8vw]"
                        : "pl-[1vw]"
                  } text-[clamp(5.5rem,14.3vw,17rem)]`}
                >
                  {item.word}
                </h2>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* =========================================================
          EDITORIAL IMAGE + COPY
      ========================================================= */}
      <div className="mx-auto max-w-[1680px] px-6 pb-28 pt-20 md:px-10 md:pb-40 md:pt-28 lg:px-14">
        <div className="grid items-end gap-12 md:grid-cols-12 md:gap-8">
          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 1.02,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.18,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative aspect-[4/3] overflow-hidden md:col-span-8 md:aspect-[16/9]"
          >
            <Image
              src="/images/hero/driplabs-hero.jpg"
              alt="DRIPLABS wellness experience"
              fill
              sizes="(max-width: 768px) 100vw, 70vw"
              className="object-cover object-[58%_center] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]"
            />

            {/* Soft image treatment */}
            <div className="absolute inset-0 bg-[#071525]/10" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/60 via-transparent to-transparent" />

            {/* Image caption */}
            <div className="absolute bottom-6 left-6 md:bottom-9 md:left-9">
              <p className="text-[8px] uppercase tracking-[0.25em] text-white/50">
                DRIPLABS
              </p>

              <p className="mt-2 text-xl font-light tracking-[-0.025em] text-[#F5F0E7] md:text-3xl">
                Wellness, considered.
              </p>
            </div>

            {/* Image index */}
            <div className="absolute right-6 top-6 md:right-9 md:top-9">
              <p className="text-[8px] uppercase tracking-[0.2em] text-white/45">
                03 / 06
              </p>
            </div>
          </motion.div>

          {/* COPY */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 0.8,
              delay: 0.1,
            }}
            className="md:col-span-4 md:pl-4 lg:pl-10"
          >
            <p className="driplabs-label text-[#77736A]">
              Our approach
            </p>

            <h3 className="mt-7 max-w-md text-[clamp(2.8rem,4vw,4.5rem)] font-light leading-[0.9] tracking-[-0.055em]">
              Make space for what helps you feel your best.
            </h3>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#59616B]">
              DRIPLABS brings together personalised IV wellness,
              professional care and a calm environment designed to
              make the experience feel considered from beginning to
              end.
            </p>

            <a
              href="#protocol-system"
              className="group mt-9 inline-flex items-center gap-5 border-b border-[#0B1D35]/20 pb-3 text-[9px] uppercase tracking-[0.22em]"
            >
              <span>Explore the system</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          CLOSING LINE
      ========================================================= */}
      <div className="mx-auto max-w-[1680px] px-6 pb-7 md:px-10 lg:px-14">
        <div className="flex items-center justify-between border-t border-[#0B1D35]/10 pt-5">
          <p className="text-[8px] uppercase tracking-[0.22em] text-[#99958C]">
            Nourish · Recharge · Restore
          </p>

          <p className="text-[8px] uppercase tracking-[0.22em] text-[#99958C]">
            DRIPLABS®
          </p>
        </div>
      </div>
    </section>
  );
}