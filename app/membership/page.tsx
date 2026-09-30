"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";

const membershipRoutes = [
  {
    number: "01",
    eyebrow: "Structured access",
    title: "Packages",
    description:
      "Designed programmes for those who want a more considered way to experience DRIPLABS.",
    href: "#packages",
  },
  {
    number: "02",
    eyebrow: "Ongoing access",
    title: "DRIPLABS Circle",
    description:
      "A recurring membership for those who want wellness to become a more intentional part of their routine.",
    href: "/circle",
  },
  {
    number: "03",
    eyebrow: "Greater continuity",
    title: "Unlimited",
    description:
      "Options designed around greater flexibility, continuity and access.",
    href: "#unlimited",
  },
];

const packages = [
  {
    number: "01",
    name: "Essential Start",
    price: "₹60,180",
    label: "Package total",
    description:
      "A considered introduction to the DRIPLABS experience.",
    detail: "Up to 5 sessions",
  },
  {
    number: "02",
    name: "Signature Glow",
    price: "₹88,500",
    label: "Package total",
    description:
      "A deeper programme for a more consistent wellness rhythm.",
    detail: "Up to 7 sessions",
  },
  {
    number: "03",
    name: "Unlimited Quarterly",
    price: "₹1,06,200",
    label: "Quarterly total",
    description:
      "Greater continuity with unlimited access throughout the quarter.",
    detail: "Unlimited access",
  },
];

const principles = [
  {
    number: "01",
    title: "Considered",
    description:
      "Membership is designed around continuity rather than simply adding more treatments.",
  },
  {
    number: "02",
    title: "Personalised",
    description:
      "Your experience remains shaped around your individual needs and physician guidance.",
  },
  {
    number: "03",
    title: "Consistent",
    description:
      "Build a more intentional relationship with wellness through ongoing access.",
  },
  {
    number: "04",
    title: "Connected",
    description:
      "Membership extends the relationship beyond a single visit or protocol.",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              y: 24,
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
        amount: 0.18,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function MembershipPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[#020812] text-[#F7FAFF]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[calc(100svh-76px)] overflow-hidden bg-[#020812]">
        {/* Atmosphere */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute
              left-[38%]
              top-[12%]
              h-[620px]
              w-[620px]
              -translate-x-1/2
              rounded-full
              bg-[#0066FF]/[0.055]
              blur-[180px]
            "
          />

          <div
            className="
              absolute
              right-[-12%]
              top-[30%]
              h-[520px]
              w-[520px]
              rounded-full
              bg-[#1683FF]/[0.035]
              blur-[170px]
            "
          />

          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
              [background-image:linear-gradient(rgba(140,203,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(140,203,255,.5)_1px,transparent_1px)]
              [background-size:90px_90px]
            "
          />

          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#020812] via-[#020812]/80 to-transparent" />

          <div className="absolute inset-y-0 left-0 w-[16%] bg-gradient-to-r from-[#020812] to-transparent" />

          <div className="absolute inset-y-0 right-0 w-[16%] bg-gradient-to-l from-[#020812] to-transparent" />
        </div>

        {/* Editorial rail */}
        <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 lg:left-16 lg:block">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-[5px] w-[5px] rounded-full bg-[#1683FF] shadow-[0_0_16px_rgba(22,131,255,.9)]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.34em] text-[#1683FF]">
                Membership
              </span>
            </div>

            <div className="mt-7 h-px w-14 bg-gradient-to-r from-[#1683FF]/70 to-transparent" />

            <p className="mt-7 max-w-[120px] text-[9px] font-medium uppercase leading-[2.1] tracking-[0.24em] text-white/30">
              Make wellness
              <br />
              a ritual.
            </p>

            <div className="mt-14 flex items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-white/20">
              <span>01</span>
              <span className="h-px w-8 bg-white/10" />
              <span>Membership</span>
            </div>
          </Reveal>
        </div>

        {/* Hero content */}
        <div className="relative mx-auto flex min-h-[calc(100svh-76px)] max-w-[1700px] px-6 sm:px-10 lg:px-16">
          <div className="mx-auto flex w-full max-w-[1160px] flex-col justify-center pb-20 pt-24 lg:pb-24">
            <div className="lg:ml-[18%]">
              <Reveal>
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#1683FF]/70" />

                  <span className="text-[9px] font-medium uppercase tracking-[0.34em] text-[#8CCBFF]">
                    A considered way to belong
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h1
                  className="
                    max-w-[1050px]
                    font-serif
                    text-[clamp(4.5rem,8.5vw,9.5rem)]
                    font-light
                    leading-[0.82]
                    tracking-[-0.075em]
                  "
                >
                  A deeper
                  <br />

                  <span className="text-white">commitment</span>

                  <br />

                  <span className="text-white/30">to wellness.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-10 flex max-w-[610px] items-start gap-6 lg:mt-12">
                  <span className="mt-1 h-12 w-px shrink-0 bg-gradient-to-b from-[#1683FF] to-transparent" />

                  <p className="max-w-[540px] text-[12px] font-light leading-[1.95] text-white/42 sm:text-[13px]">
                    A more considered relationship with DRIPLABS, through
                    structured packages, ongoing access and membership
                    designed around continuity.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-10 flex flex-wrap items-center gap-5 lg:mt-12">
                  <Link
                    href="#membership-options"
                    className="
                      group
                      relative
                      inline-flex
                      h-12
                      items-center
                      gap-4
                      overflow-hidden
                      rounded-[8px]
                      bg-[#0066FF]
                      px-7
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.22em]
                      text-white
                      shadow-[0_16px_50px_rgba(0,102,255,.18)]
                      transition-all
                      duration-500
                      hover:bg-[#1683FF]
                      hover:shadow-[0_20px_70px_rgba(0,102,255,.28)]
                    "
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.10] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                    <span className="relative">
                      Explore membership
                    </span>

                    <span className="relative transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                  <Link
                    href="/locations"
                    className="
                      inline-flex
                      h-12
                      items-center
                      border-b
                      border-white/15
                      px-1
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.22em]
                      text-white/50
                      transition-all
                      duration-300
                      hover:border-[#1683FF]/60
                      hover:text-white
                    "
                  >
                    Find a location
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Bottom metadata */}
            <Reveal className="mt-auto hidden lg:block">
              <div className="flex items-center justify-between border-t border-white/[0.07] pt-6">
                <div className="flex items-center gap-6 text-[8px] uppercase tracking-[0.25em] text-white/20">
                  <span>DRIPLABS</span>
                  <span className="h-px w-10 bg-white/10" />
                  <span>Membership</span>
                </div>

                <div className="flex items-center gap-4 text-[8px] uppercase tracking-[0.25em] text-white/20">
                  <span>Explore below</span>

                  <span className="flex h-8 w-5 items-start justify-center rounded-full border border-white/15 pt-1.5">
                    <span className="h-1.5 w-px bg-[#1683FF]" />
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right index */}
        <div className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 xl:block">
          <div className="flex flex-col items-center gap-5">
            <span className="h-20 w-px bg-gradient-to-b from-transparent via-[#1683FF]/50 to-transparent" />

            <span className="[writing-mode:vertical-rl] text-[8px] uppercase tracking-[0.3em] text-white/20">
              Membership / 01
            </span>

            <span className="h-20 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* =========================================================
          MEMBERSHIP OPTIONS
      ========================================================= */}

      <section
        id="membership-options"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#020812] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="pointer-events-none absolute right-[-12%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#0066FF]/[0.035] blur-[160px]" />

        <div className="relative mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            {/* Heading */}
            <Reveal className="lg:col-span-4">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#1683FF]">
                Membership architecture
              </p>

              <h2 className="mt-6 max-w-[450px] font-serif text-[clamp(3rem,5vw,5.5rem)] font-light leading-[0.9] tracking-[-0.06em]">
                Choose your
                <br />
                <span className="text-white/30">rhythm.</span>
              </h2>

              <p className="mt-7 max-w-[370px] text-[12px] leading-[1.9] text-white/35">
                Different ways to build a more intentional relationship with
                DRIPLABS.
              </p>
            </Reveal>

            {/* Routes */}
            <div className="lg:col-span-8">
              <div className="border-t border-white/[0.08]">
                {membershipRoutes.map((item, index) => {
                  const external = item.href.startsWith("/");

                  const content = (
                    <>
                      <span className="text-[9px] tracking-[0.2em] text-white/20">
                        {item.number}
                      </span>

                      <div>
                        <p className="mb-2 text-[8px] uppercase tracking-[0.3em] text-[#1683FF]">
                          {item.eyebrow}
                        </p>

                        <h3 className="text-xl font-light tracking-[-0.025em] sm:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-2 max-w-[520px] text-[11px] leading-6 text-white/35 sm:text-xs">
                          {item.description}
                        </p>
                      </div>

                      <span className="text-lg text-white/20 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#1683FF]">
                        →
                      </span>
                    </>
                  );

                  return external ? (
                    <Link
                      key={item.number}
                      href={item.href}
                      className="
                        group
                        grid
                        grid-cols-[auto_1fr_auto]
                        items-center
                        gap-5
                        border-b
                        border-white/[0.08]
                        py-8
                        transition-all
                        duration-500
                        hover:bg-white/[0.018]
                        sm:gap-7
                        sm:px-4
                        sm:py-10
                      "
                    >
                      {content}
                    </Link>
                  ) : (
                    <a
                      key={item.number}
                      href={item.href}
                      className="
                        group
                        grid
                        grid-cols-[auto_1fr_auto]
                        items-center
                        gap-5
                        border-b
                        border-white/[0.08]
                        py-8
                        transition-all
                        duration-500
                        hover:bg-white/[0.018]
                        sm:gap-7
                        sm:px-4
                        sm:py-10
                      "
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STRUCTURED PACKAGES
      ========================================================= */}

      <section
        id="packages"
        className="relative overflow-hidden bg-[#06152B] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-[20%] h-[400px] w-[400px] rounded-full bg-[#0066FF]/[0.035] blur-[150px]" />

          <div className="absolute right-[5%] bottom-[5%] h-[350px] w-[350px] rounded-full bg-[#1683FF]/[0.025] blur-[140px]" />

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1683FF]/30 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1500px]">
          <Reveal>
            <div className="grid gap-10 border-b border-white/[0.08] pb-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#8CCBFF]">
                  Structured packages
                </p>

                <h2 className="mt-6 max-w-[800px] font-serif text-[clamp(3.2rem,6vw,6.5rem)] font-light leading-[0.88] tracking-[-0.065em]">
                  Wellness,
                  <br />
                  <span className="text-white/30">with intention.</span>
                </h2>
              </div>

              <p className="max-w-[330px] text-[11px] leading-[1.9] text-white/35 lg:col-span-4 lg:justify-self-end">
                Structured access for those looking to build a more consistent
                DRIPLABS routine.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {packages.map((item, index) => (
              <motion.div
                key={item.number}
                initial={
                  reduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 0,
                        y: 24,
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
                  amount: 0.18,
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  border
                  border-white/[0.08]
                  bg-[#020812]/45
                  p-7
                  transition-all
                  duration-700
                  hover:-translate-y-1
                  hover:border-[#1683FF]/35
                  hover:bg-[#020812]/70
                  sm:p-8
                "
              >
                <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#1683FF] transition-transform duration-700 group-hover:scale-x-100" />

                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.25em] text-white/20">
                    {item.number}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-[#1683FF]/50 transition-all duration-500 group-hover:bg-[#1683FF] group-hover:shadow-[0_0_12px_rgba(22,131,255,.8)]" />
                </div>

                <p className="mt-14 text-[8px] uppercase tracking-[0.3em] text-[#1683FF]">
                  {item.label}
                </p>

                <h3 className="mt-4 font-serif text-[clamp(2.3rem,3vw,3.5rem)] font-light leading-none tracking-[-0.05em]">
                  {item.name}
                </h3>

                <p className="mt-6 min-h-[55px] max-w-[350px] text-[11px] leading-[1.8] text-white/35">
                  {item.description}
                </p>

                <div className="mt-9 border-t border-white/[0.08] pt-6">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                    {item.detail}
                  </p>

                  <p className="mt-2 text-2xl font-light tracking-[-0.03em]">
                    {item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-[9px] leading-5 text-white/20">
            Membership and package suitability, including final experience and
            pricing, is subject to physician confirmation and applicable
            terms.
          </p>
        </div>
      </section>

      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#020812] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="relative mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#1683FF]">
                The DRIPLABS approach
              </p>

              <h2 className="mt-6 max-w-[560px] font-serif text-[clamp(3rem,5vw,5.5rem)] font-light leading-[0.9] tracking-[-0.06em]">
                More than
                <br />
                <span className="text-white/30">a package.</span>
              </h2>

              <p className="mt-8 max-w-[460px] text-[12px] leading-[1.95] text-white/35">
                Membership is about creating a more intentional relationship
                with wellness, while keeping every experience considered and
                physician-led.
              </p>
            </Reveal>

            <div className="lg:col-span-7">
              <div className="grid border-t border-white/[0.08] sm:grid-cols-2">
                {principles.map((item, index) => (
                  <Reveal key={item.number} delay={index * 0.06}>
                    <div className="min-h-[190px] border-b border-white/[0.08] py-8 sm:border-r sm:px-7 sm:py-9 lg:px-8">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] tracking-[0.25em] text-[#1683FF]">
                          {item.number}
                        </span>

                        <span className="h-px w-8 bg-white/10" />
                      </div>

                      <h3 className="mt-10 text-lg font-light tracking-[-0.02em]">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-[280px] text-[10px] leading-[1.8] text-white/30">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CIRCLE PREVIEW
      ========================================================= */}

      <section
        id="circle-preview"
        className="relative overflow-hidden bg-[#06152B] px-6 py-24 sm:px-10 lg:px-16 lg:py-36"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[48%] top-[25%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#0066FF]/[0.055] blur-[170px]" />

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1683FF]/35 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1400px]">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-8">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#8CCBFF]">
                DRIPLABS Circle
              </p>

              <h2 className="mt-6 max-w-[850px] font-serif text-[clamp(4rem,8vw,9rem)] font-light leading-[0.82] tracking-[-0.075em]">
                A more
                <br />
                informed
                <br />
                <span className="text-white/30">approach.</span>
              </h2>

              <p className="mt-9 max-w-[520px] text-[12px] leading-[1.95] text-white/40">
                An ongoing membership for those who want wellness to become a
                more intentional part of their life.
              </p>

              <Link
                href="/circle"
                className="
                  group
                  mt-10
                  inline-flex
                  h-12
                  items-center
                  gap-4
                  border
                  border-white/[0.14]
                  bg-white/[0.02]
                  px-7
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white
                  transition-all
                  duration-500
                  hover:border-[#1683FF]/60
                  hover:bg-[#0066FF]
                  hover:shadow-[0_20px_65px_rgba(0,102,255,.18)]
                "
              >
                Explore Circle

                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>

            <Reveal className="lg:col-span-4" delay={0.1}>
              <div className="relative overflow-hidden border border-white/[0.09] bg-[#020812]/55 p-7 sm:p-9">
                <div className="absolute right-[-20%] top-[-20%] h-52 w-52 rounded-full bg-[#0066FF]/[0.08] blur-[70px]" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] uppercase tracking-[0.3em] text-[#1683FF]">
                      Circle
                    </span>

                    <span className="text-[8px] tracking-[0.25em] text-white/20">
                      02
                    </span>
                  </div>

                  <div className="mt-9 border-t border-white/[0.08]">
                    {[
                      "Priority Booking",
                      "Member Pricing",
                      "Quarterly Physician Check-In",
                      "Early Access",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center justify-between border-b border-white/[0.08] py-5"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-[8px] text-[#1683FF]">
                            0{index + 1}
                          </span>

                          <span className="text-[10px] text-white/55">
                            {item}
                          </span>
                        </div>

                        <span className="text-white/20">+</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-7 text-[9px] leading-5 text-white/20">
                    Explore the dedicated Circle experience for plans,
                    pricing and membership details.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#020812] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <div className="grid gap-10 border-b border-white/[0.08] pb-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#1683FF]">
                  The journey
                </p>

                <h2 className="mt-6 max-w-[800px] font-serif text-[clamp(3.2rem,6vw,6.5rem)] font-light leading-[0.88] tracking-[-0.065em]">
                  Begin with a
                  <br />
                  <span className="text-white/30">conversation.</span>
                </h2>
              </div>

              <p className="max-w-[330px] text-[11px] leading-[1.9] text-white/35 lg:col-span-4 lg:justify-self-end">
                Membership starts with understanding what makes sense for your
                journey.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid border-t border-white/[0.08] md:grid-cols-4 md:border-t-0">
            {[
              {
                number: "01",
                title: "Explore",
                text: "Understand the available membership structures.",
              },
              {
                number: "02",
                title: "Consult",
                text: "Begin with a physician-led conversation.",
              },
              {
                number: "03",
                title: "Personalise",
                text: "Determine the appropriate programme and access.",
              },
              {
                number: "04",
                title: "Continue",
                text: "Build a more consistent wellness rhythm.",
              },
            ].map((item, index) => (
              <Reveal key={item.number} delay={index * 0.06}>
                <div className="min-h-[230px] border-b border-white/[0.08] py-8 md:border-b-0 md:border-l md:px-7 md:py-4 lg:px-9">
                  <span className="text-[8px] tracking-[0.25em] text-[#1683FF]">
                    {item.number}
                  </span>

                  <h3 className="mt-16 text-xl font-light tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[230px] text-[10px] leading-[1.8] text-white/30">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#06152B] px-6 py-28 text-center sm:px-10 lg:px-16 lg:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/[0.05] blur-[170px]" />

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1683FF]/35 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1050px]">
          <Reveal>
            <p className="text-[9px] uppercase tracking-[0.34em] text-[#8CCBFF]">
              Membership / Begin
            </p>

            <h2 className="mt-7 font-serif text-[clamp(4rem,8vw,9rem)] font-light leading-[0.82] tracking-[-0.075em]">
              Wellness,
              <br />
              <span className="text-white/30">for what&apos;s next.</span>
            </h2>

            <p className="mx-auto mt-9 max-w-[500px] text-[12px] leading-[1.9] text-white/35">
              Begin with a considered conversation and discover the membership
              structure that makes sense for you.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/locations"
                className="
                  group
                  inline-flex
                  h-12
                  items-center
                  gap-4
                  rounded-[8px]
                  bg-[#0066FF]
                  px-8
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white
                  shadow-[0_18px_60px_rgba(0,102,255,.18)]
                  transition-all
                  duration-500
                  hover:bg-[#1683FF]
                  hover:shadow-[0_22px_75px_rgba(0,102,255,.28)]
                "
              >
                Begin your journey

                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/circle"
                className="
                  inline-flex
                  h-12
                  items-center
                  border
                  border-white/[0.14]
                  px-7
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white/60
                  transition-all
                  duration-500
                  hover:border-[#1683FF]/60
                  hover:bg-white/[0.025]
                  hover:text-white
                "
              >
                Explore Circle
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}