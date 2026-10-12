"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Crown,
  Diamond,
  Gift,
  HeartPulse,
  UserRound,
} from "lucide-react";

const benefits = [
  {
    icon: Diamond,
    title: "Exclusive Access",
    description: "Priority booking & member-only experiences",
  },
  {
    icon: UserRound,
    title: "Personalised Care",
    description: "Tailored wellness protocols",
  },
  {
    icon: Gift,
    title: "Special Offers",
    description: "Members-only pricing & rewards",
  },
  {
    icon: HeartPulse,
    title: "Holistic Wellness",
    description: "Body, mind and performance support",
  },
  {
    icon: Crown,
    title: "Premium Experience",
    description: "A higher standard of care",
  },
];

export default function MembershipSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="membership"
      aria-label="DRIPLABS Membership"
      className="
        relative
        overflow-hidden
        bg-[#020812]
        py-4
        sm:py-5
        lg:py-6
      "
    >
      <div className="mx-auto w-full max-w-[1800px] px-3 sm:px-5 lg:px-7">
        <div
          className="
            relative
            min-h-[440px]
            overflow-hidden
            border
            border-white/[0.08]
            bg-[#020812]
            sm:min-h-[470px]
            lg:min-h-[500px]
            xl:min-h-[520px]
          "
        >
          {/* =====================================================
              BACKGROUND IMAGE
          ===================================================== */}

          <Image
            src="/images/membership/membership-benefits.png"
            alt="DRIPLABS premium membership experience"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* =====================================================
              IMAGE OVERLAYS
          ===================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[linear-gradient(90deg,rgba(2,8,18,0.98)_0%,rgba(2,8,18,0.94)_16%,rgba(2,8,18,0.70)_31%,rgba(2,8,18,0.20)_51%,rgba(2,8,18,0.12)_100%)]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[linear-gradient(270deg,rgba(2,8,18,0.72)_0%,rgba(2,8,18,0.28)_22%,transparent_45%)]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-[25%]
              bg-gradient-to-t
              from-[#020812]/50
              to-transparent
            "
          />

          {/* =====================================================
              CONTENT
          ===================================================== */}

          <div
            className="
              relative
              z-10
              flex
              min-h-[440px]
              flex-col
              justify-between
              p-6
              sm:min-h-[470px]
              sm:p-8
              lg:min-h-[500px]
              lg:p-10
              xl:min-h-[520px]
              xl:p-12
            "
          >
            {/* ===================================================
                TOP EYEBROW
            =================================================== */}

            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-white/55" />

              <span
                className="
                  text-[7px]
                  font-medium
                  uppercase
                  tracking-[0.34em]
                  text-white/75
                  sm:text-[8px]
                "
              >
                Membership
              </span>
            </div>

            {/* ===================================================
                MAIN CONTENT
            =================================================== */}

            <div
              className="
                grid
                grid-cols-1
                gap-8
                lg:grid-cols-[1fr_350px]
                lg:items-end
                xl:grid-cols-[1fr_370px]
              "
            >
              {/* =================================================
                  LEFT CONTENT
              ================================================= */}

              <motion.div
                initial={
                  reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 18,
                      }
                }
                whileInView={
                  reducedMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-[590px]"
              >
                <h2
                  className="
                    font-[var(--font-heading)]
                    text-[clamp(2.8rem,4.8vw,5.5rem)]
                    font-light
                    leading-[0.82]
                    tracking-[-0.06em]
                    text-white
                  "
                >
                  Unlock benefits
                  <br />
                  with our
                  <br />
                  <span className="text-[#79BFFF]">
                    membership.
                  </span>
                </h2>

                <p
                  className="
                    mt-5
                    max-w-[450px]
                    text-[10px]
                    font-light
                    leading-[1.6]
                    text-white/70
                    sm:text-[11px]
                    lg:text-[12px]
                  "
                >
                  Tailored wellness. Priority access. A more intentional you.
                </p>

                {/* CTA */}

                <Link
                  href="/membership"
                  className="
                    group/cta
                    relative
                    mt-5
                    inline-flex
                    h-[42px]
                    min-w-[190px]
                    items-center
                    justify-center
                    gap-3
                    overflow-hidden
                    rounded-[7px]
                    border
                    border-[#1683FF]
                    bg-[#0066FF]
                    px-6
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-white
                    shadow-[0_10px_30px_rgba(0,102,255,0.25)]
                    transition-all
                    duration-500
                    hover:bg-[#1683FF]
                    hover:shadow-[0_14px_45px_rgba(0,102,255,0.38)]
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-3
                    focus-visible:outline-[#8CCBFF]
                    sm:h-[44px]
                    sm:min-w-[200px]
                  "
                >
                  <span className="relative z-10">
                    Explore Membership
                  </span>

                  <ArrowRight
                    size={14}
                    strokeWidth={1.35}
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
                      via-white/20
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover/cta:translate-x-[200%]
                    "
                  />
                </Link>
              </motion.div>

              {/* =================================================
                  RIGHT — SEQUENTIAL BENEFITS
              ================================================= */}

              <div className="flex flex-col gap-2">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;

                  return (
                    <motion.div
                      key={benefit.title}
                      initial={
                        reducedMotion
                          ? false
                          : {
                              opacity: 0,
                              x: 28,
                            }
                      }
                      whileInView={
                        reducedMotion
                          ? undefined
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
                        duration: 0.55,
                        delay: reducedMotion ? 0 : index * 0.11,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href="/membership"
                        className="
                          group/benefit
                          flex
                          min-h-[53px]
                          items-center
                          gap-3
                          rounded-[8px]
                          border
                          border-white/[0.18]
                          bg-[#06152B]/70
                          px-3.5
                          py-2.5
                          backdrop-blur-md
                          transition-all
                          duration-300
                          hover:-translate-x-1
                          hover:border-[#1683FF]/60
                          hover:bg-[#06152B]/90
                          hover:shadow-[0_8px_30px_rgba(0,102,255,0.12)]
                          focus-visible:outline
                          focus-visible:outline-2
                          focus-visible:outline-[#8CCBFF]
                        "
                      >
                        {/* Icon */}

                        <div
                          className="
                            flex
                            h-7
                            w-7
                            shrink-0
                            items-center
                            justify-center
                            text-white/85
                          "
                        >
                          <Icon
                            size={19}
                            strokeWidth={1.15}
                            className="
                              transition-colors
                              duration-300
                              group-hover/benefit:text-[#8CCBFF]
                            "
                          />
                        </div>

                        {/* Copy */}

                        <div className="min-w-0">
                          <p
                            className="
                              text-[10px]
                              font-medium
                              leading-tight
                              text-white
                              sm:text-[11px]
                            "
                          >
                            {benefit.title}
                          </p>

                          <p
                            className="
                              mt-0.5
                              text-[7px]
                              font-light
                              leading-tight
                              text-white/45
                              sm:text-[8px]
                            "
                          >
                            {benefit.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* ===================================================
                BOTTOM RAIL
            =================================================== */}

            <div
              className="
                mt-5
                flex
                items-center
                justify-between
                border-t
                border-white/[0.10]
                pt-3
              "
            >
              <span
                className="
                  text-[6px]
                  uppercase
                  tracking-[0.28em]
                  text-white/30
                "
              >
                DRIPLABS®
              </span>

              <span
                className="
                  hidden
                  text-[6px]
                  uppercase
                  tracking-[0.28em]
                  text-white/25
                  sm:block
                "
              >
                A considered way to belong
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}