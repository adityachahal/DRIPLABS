"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FinalCTA() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="book"
      className="relative min-h-[82svh] overflow-hidden bg-[#060F1F] text-[#F7F4EC]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[32%] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#C9A227]/[0.06] blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(6,15,31,0.22)_52%,rgba(6,15,31,0.7)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[82svh] max-w-[1680px] flex-col justify-between px-5 py-8 md:px-10 md:py-10 lg:px-14">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <span className="text-[8px] uppercase tracking-[0.26em] text-[#E3CE8E]">
            DRIPLABS®
          </span>

          <span className="text-[8px] uppercase tracking-[0.22em] text-white/30">
            Physician-led wellness
          </span>
        </div>

        <div className="py-24 md:py-32">
          <motion.p
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[8px] uppercase tracking-[0.3em] text-[#E3CE8E] md:text-[9px]"
          >
            Begin with a consultation
          </motion.p>

          <motion.h2
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: reducedMotion ? 0.01 : 1,
              delay: reducedMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-6xl font-[var(--font-heading)] text-[clamp(4rem,9vw,10rem)] font-light leading-[0.78] tracking-[-0.075em]"
          >
            Your wellness,
            <br />
            considered.
          </motion.h2>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-7 text-white/48 md:text-base">
              Start with a physician consultation and discover a more
              considered approach to IV wellness.
            </p>

            <a
              href="/book"
              className="group inline-flex w-full items-center justify-between border border-[#C9A227] bg-[#C9A227] px-6 py-4 text-[8px] uppercase tracking-[0.23em] text-[#060F1F] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-transparent hover:text-[#E3CE8E] sm:w-auto sm:min-w-[260px]"
            >
              <span>Book a Physician Consultation</span>

              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-white/10 pt-5">
          <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
            Nourish. Recharge. Restore.
          </p>

          <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
            India
          </p>
        </div>
      </div>
    </section>
  );
}
