"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section
      id="book"
      className="relative min-h-[90vh] overflow-hidden bg-[#171714] text-[#f4f1eb]"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(220,211,194,0.18),transparent_35%)]" />

      <div className="relative z-10 flex min-h-[90vh] flex-col justify-between px-6 py-10 md:px-10 md:py-12 lg:px-14">
        {/* Top */}
        <div className="mx-auto flex w-full max-w-[1600px] justify-between">
          <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
            DRIPLABS
          </p>

          <p className="text-right text-[9px] uppercase tracking-[0.22em] text-white/40">
            Ready when you are
          </p>
        </div>

        {/* Main */}
        <div className="mx-auto w-full max-w-[1600px] py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-[10px] uppercase tracking-[0.28em] text-white/45"
          >
            Your next wellness experience
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[1200px] text-[clamp(5rem,13vw,14rem)] font-light leading-[0.73] tracking-[-0.08em]"
          >
            Get
            <br />
            dripp&apos;d.
          </motion.h2>

          <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-sm leading-7 text-white/50 md:text-base">
              Discover a more considered approach to IV therapy and make time
              for your wellness.
            </p>

            <a
              href="#booking"
              className="group inline-flex items-center gap-5 text-[10px] uppercase tracking-[0.22em]"
            >
              Book your drip

              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:bg-white group-hover:text-[#171714]">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mx-auto flex w-full max-w-[1600px] items-end justify-between border-t border-white/15 pt-5">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
            Nourish. Recharge. Restore.
          </p>

          <p className="hidden text-[9px] uppercase tracking-[0.2em] text-white/35 md:block">
            India
          </p>
        </div>
      </div>
    </section>
  );
}