"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function MembershipPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="membership"
      className="
        relative
        overflow-hidden
        bg-[#020812]
        text-[#F7FAFF]
      "
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Central blue atmosphere */}
        <div
          className="
            absolute
            left-[52%]
            top-[45%]
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#0066FF]/[0.045]
            blur-[140px]
          "
        />

        {/* Secondary glow */}
        <div
          className="
            absolute
            right-[-8%]
            top-[20%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#1683FF]/[0.025]
            blur-[120px]
          "
        />

        {/* Very subtle architectural grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(rgba(140,203,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(140,203,255,.6)_1px,transparent_1px)]
            [background-size:90px_90px]
          "
        />

        {/* Top fade */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-24
            bg-gradient-to-b
            from-[#020812]
            to-transparent
          "
        />

        {/* Bottom transition */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-28
            bg-gradient-to-t
            from-[#020812]
            to-transparent
          "
        />

      </div>


      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-[1540px]
          px-6
          py-16
          sm:px-10
          sm:py-20
          lg:px-12
          lg:py-8
        "
      >

        {/* Main layout */}
        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-12
            lg:gap-12
          "
        >

          {/* =====================================================
              EDITORIAL RAIL
          ===================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 0,
                    x: -15,
                  }
            }
            whileInView={
              reduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    x: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              hidden
              lg:col-span-2
              lg:block
            "
          >

            <div className="flex items-center gap-3">

              <span
                className="
                  h-[5px]
                  w-[5px]
                  rounded-full
                  bg-[#1683FF]
                  shadow-[0_0_14px_rgba(22,131,255,.85)]
                "
              />

              <span
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.32em]
                  text-[#1683FF]
                "
              >
                Membership
              </span>

            </div>


            <div
              className="
                mt-6
                h-px
                w-12
                bg-gradient-to-r
                from-[#1683FF]/70
                to-transparent
              "
            />


            <p
              className="
                mt-6
                max-w-[115px]
                text-[8px]
                font-medium
                uppercase
                leading-[2]
                tracking-[0.22em]
                text-white/25
              "
            >
              Make wellness
              <br />
              a ritual.
            </p>

          </motion.div>


          {/* =====================================================
              MAIN EDITORIAL CONTENT
          ===================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={
              reduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-7"
          >

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-4">

              <span className="h-px w-8 bg-[#1683FF]/70" />

              <span
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.32em]
                  text-[#8CCBFF]
                "
              >
                A considered way to belong
              </span>

            </div>


            {/* Heading */}
            <h2
              className="
                max-w-[850px]
                font-serif
                text-[clamp(3.8rem,6.7vw,7.5rem)]
                font-light
                leading-[0.84]
                tracking-[-0.07em]
              "
            >
              A deeper
              <br />

              <span className="text-white">
                commitment
              </span>

              <br />

              <span className="text-white/30">
                to wellness.
              </span>
            </h2>


            {/* Supporting copy */}
            <div
              className="
                mt-7
                flex
                max-w-[520px]
                items-start
                gap-4
              "
            >

              <span
                className="
                  mt-1
                  h-9
                  w-px
                  shrink-0
                  bg-gradient-to-b
                  from-[#1683FF]
                  to-transparent
                "
              />

              <p
                className="
                  max-w-[470px]
                  text-[11px]
                  font-light
                  leading-[1.85]
                  text-white/38
                  sm:text-[12px]
                "
              >
                Structured packages and considered access,
                designed to make wellness a more intentional
                part of your life.
              </p>

            </div>

          </motion.div>


          {/* =====================================================
              CTA
          ===================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 0,
                    x: 15,
                  }
            }
            whileInView={
              reduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    x: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              lg:col-span-3
              lg:flex
              lg:justify-end
            "
          >

            <div>

              <p
                className="
                  mb-4
                  text-[7px]
                  uppercase
                  tracking-[0.28em]
                  text-white/20
                "
              >
                Discover more
              </p>


              <Link
                href="/membership"
                className="
                  group
                  relative
                  inline-flex
                  h-11
                  items-center
                  gap-4
                  overflow-hidden
                  rounded-[8px]
                  border
                  border-[#1683FF]/45
                  bg-[#0066FF]
                  px-6
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.21em]
                  text-white
                  transition-all
                  duration-500
                  hover:bg-[#1683FF]
                  hover:shadow-[0_16px_50px_rgba(0,102,255,.22)]
                "
              >

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.12]
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

                <span className="relative">
                  Explore membership
                </span>

                <span
                  className="
                    relative
                    text-sm
                    text-white/70
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                    group-hover:text-white
                  "
                >
                  →
                </span>

              </Link>

            </div>

          </motion.div>

        </div>


        {/* =======================================================
            MINIMAL SECTION DIVIDER
        ======================================================= */}

        <div
          className="
            mt-12
            h-px
            w-full
            bg-gradient-to-r
            from-[#1683FF]/25
            via-white/[0.06]
            to-transparent
            sm:mt-14
          "
        />

      </div>

    </section>
  );
}