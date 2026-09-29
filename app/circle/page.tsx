"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import {
  membershipPlans,
  type MembershipPlan,
} from "@/data/memberships";

type PlanFilter = "all" | "packages" | "unlimited";

const circlePlans = [
  {
    name: "DripLabs Circle — Essential",
    monthlyPrice: 6000,
    term: "3-month minimum, then cancel anytime",
    summary:
      "1 core wellness session per month, 15% off additional sessions, and one rollover session allowed.",
  },
  {
    name: "DripLabs Circle — Longevity",
    monthlyPrice: 15000,
    term: "3-month minimum, then cancel anytime",
    summary:
      "1 NADx or APEX session per month, 20% off additional sessions, priority scheduling and quarterly check-in.",
  },
];

const knowledgeItems = [
  {
    number: "01",
    label: "Protocols",
    title: "Understand the system.",
    description:
      "Explore the DRIPLABS protocol system, wellness families and the thinking behind each experience.",
    href: "/protocols",
  },
  {
    number: "02",
    label: "NADx",
    title: "Explore cellular longevity.",
    description:
      "Go deeper into NAD⁺, the NADx programme and the science surrounding the pathway.",
    href: "/nadx",
  },
  {
    number: "03",
    label: "The Standard",
    title: "See how DRIPLABS is built.",
    description:
      "Understand the standards, quality systems and principles behind the DRIPLABS experience.",
    href: "/standard",
  },
  {
    number: "04",
    label: "Experience",
    title: "Know what happens next.",
    description:
      "Understand consultation, personalisation, administration and follow-up before you arrive.",
    href: "/experience",
  },
];

const circleBenefits = [
  {
    number: "01",
    title: "Priority Booking",
    description:
      "First access to physician appointments and popular session slots at partner clinics.",
  },
  {
    number: "02",
    title: "Member Pricing",
    description:
      "Preferential rates on individual top-up sessions and future package upgrades.",
  },
  {
    number: "03",
    title: "Quarterly Physician Check-In",
    description:
      "A standing check-in to review progress and adjust your protocol mix as your goals change.",
  },
  {
    number: "04",
    title: "Early Access",
    description:
      "First access to new protocols as the DRIPLABS system expands, plus seasonal complimentary sessions.",
  },
];

const journey = [
  {
    number: "01",
    title: "Consult",
    description:
      "Begin with a physician conversation and establish the context for your wellness journey.",
  },
  {
    number: "02",
    title: "Personalise",
    description:
      "Your physician determines the appropriate protocol mix, dosage and cadence.",
  },
  {
    number: "03",
    title: "Experience",
    description:
      "Receive your physician-directed DRIPLABS protocol in a licensed setting.",
  },
  {
    number: "04",
    title: "Continue",
    description:
      "Build continuity through follow-up, knowledge and an ongoing relationship with DRIPLABS.",
  },
];

const faqItems = [
  {
    question: "What is DRIPLABS Circle?",
    answer:
      "Circle is DRIPLABS' ongoing membership layer, designed to keep your wellness relationship active through priority access, member pricing, physician check-ins and early access.",
  },
  {
    question: "Is Circle a replacement for a membership package?",
    answer:
      "No. The DRIPLABS member guide describes Circle as an ongoing membership offered after a package is completed rather than as a replacement for the package itself.",
  },
  {
    question: "What does an unlimited plan mean?",
    answer:
      "Unlimited subscriptions provide unlimited access to book sessions across their covered protocol families for the subscription term. Sessions remain physician-scheduled and subject to clinical judgment regarding appropriate frequency.",
  },
  {
    question: "Are prices inclusive of GST?",
    answer:
      "The displayed base prices are exclusive of GST. The GST-inclusive total is shown alongside each plan so the payable amount is clear.",
  },
  {
    question: "Do I choose my protocol myself?",
    answer:
      "Your membership gives you access to the DRIPLABS system, but protocol selection, dosage and duration remain subject to physician assessment and clinical judgment.",
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 28,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function PlanCard({
  plan,
  index,
  selected,
  onSelect,
}: {
  plan: MembershipPlan;
  index: number;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileHover={{ y: -5 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={[
        "group relative w-full overflow-hidden rounded-[18px] border text-left transition-all duration-500",
        selected
          ? "border-[#1683FF]/70 bg-[#06152B] shadow-[0_30px_90px_rgba(0,102,255,.14)]"
          : "border-white/[0.09] bg-white/[0.025] hover:border-[#1683FF]/35 hover:bg-white/[0.045]",
      ].join(" ")}
    >
      {/* active light */}
      <span
        className={[
          "absolute left-0 top-0 h-full w-[2px] transition-all duration-500",
          selected
            ? "bg-[#1683FF] shadow-[0_0_22px_rgba(22,131,255,.9)]"
            : "bg-transparent group-hover:bg-[#1683FF]/50",
        ].join(" ")}
      />

      <div className="p-6 md:p-7">

        <div className="flex items-start justify-between gap-5">

          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#4D9BFF]">
              Plan {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="mt-4 font-[var(--font-heading)] text-2xl font-light tracking-[-0.035em] text-white md:text-[2rem]">
              {plan.name}
            </h3>
          </div>

          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
            {plan.type === "unlimited"
              ? "Subscription"
              : "Package"}
          </span>

        </div>

        <div className="mt-10">

          <p className="font-[var(--font-heading)] text-4xl font-light tracking-[-0.045em] text-white">
            {formatCurrency(plan.price)}
          </p>

          <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-white/25">
            Base price · excl. GST
          </p>

        </div>

        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/[0.07] bg-white/[0.05]">

          <div className="bg-[#020812] p-4">
            <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/20">
              Access
            </p>

            <p className="mt-2 text-xs text-white/65">
              {plan.sessions}
            </p>
          </div>

          <div className="bg-[#020812] p-4">
            <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/20">
              {plan.discount
                ? "Member discount"
                : "Term"}
            </p>

            <p className="mt-2 text-xs text-[#8CCBFF]">
              {plan.discount
                ? `${plan.discount}%`
                : plan.type === "unlimited"
                  ? plan.name.replace("Unlimited ", "")
                  : "Included"}
            </p>
          </div>

        </div>

        <p className="mt-7 min-h-[54px] text-xs leading-6 text-white/38">
          {plan.summary}
        </p>

        {plan.gift && (
          <div className="mt-6 rounded-lg border border-[#1683FF]/20 bg-[#0066FF]/[0.055] px-4 py-3">
            <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#4D9BFF]">
              Complimentary
            </p>

            <p className="mt-2 text-xs text-white/65">
              {plan.gift}
            </p>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-5">

          <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-white/25">
            Total with GST
          </span>

          <span className="text-sm text-white/75">
            {formatCurrency(plan.total)}
          </span>

        </div>

        <div
          className={[
            "mt-6 flex items-center justify-between text-[9px] uppercase tracking-[0.18em] transition-all duration-500",
            selected
              ? "text-[#4D9BFF]"
              : "text-white/20 group-hover:text-white/55",
          ].join(" ")}
        >
          <span>
            {selected ? "Selected" : "Explore plan"}
          </span>

          <span
            className={[
              "transition-transform duration-500",
              selected
                ? "translate-x-1"
                : "group-hover:translate-x-1",
            ].join(" ")}
          >
            →
          </span>
        </div>

      </div>
    </motion.button>
  );
}

export default function CirclePage() {
  const [filter, setFilter] = useState<PlanFilter>("all");
  const [selectedPlan, setSelectedPlan] = useState(
    membershipPlans[0]?.slug ?? ""
  );
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const visiblePlans = useMemo(() => {
    if (filter === "packages") {
      return membershipPlans.filter(
        (plan) => plan.type === "package"
      );
    }

    if (filter === "unlimited") {
      return membershipPlans.filter(
        (plan) => plan.type === "unlimited"
      );
    }

    return membershipPlans;
  }, [filter]);

  const activePlan =
    membershipPlans.find(
      (plan) => plan.slug === selectedPlan
    ) ?? membershipPlans[0];

  return (
    <main className="min-h-screen overflow-hidden bg-[#020812] text-[#F7FAFF]">

      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[100svh] overflow-hidden bg-[#020812]">

        {/* atmosphere */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/2 top-[22%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#0066FF]/[0.08] blur-[150px]" />

          <div className="absolute right-[-12%] top-[8%] h-[460px] w-[460px] rounded-full bg-[#1683FF]/[0.035] blur-[140px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(140,203,255,.65) 1px, transparent 1px), linear-gradient(90deg, rgba(140,203,255,.65) 1px, transparent 1px)",
              backgroundSize: "100px 100px",
            }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#020812_90%)]" />
        </div>

        {/* orbital geometry */}

        <div className="pointer-events-none absolute left-1/2 top-[48%] h-[65vw] w-[65vw] max-h-[850px] max-w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1683FF]/[0.08]" />

        <div className="pointer-events-none absolute left-1/2 top-[48%] h-[48vw] w-[48vw] max-h-[650px] max-w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1680px] flex-col justify-center px-6 pb-20 pt-32 md:px-10 lg:px-16">

          <div className="grid gap-16 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-9">

              <Reveal>

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-[#1683FF]" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#4D9BFF]">
                    DRIPLABS / Circle
                  </span>

                </div>

              </Reveal>

              <Reveal delay={0.08}>

                <h1 className="mt-8 max-w-[1100px] font-[var(--font-heading)] text-[clamp(4.5rem,9.5vw,10.5rem)] font-light leading-[0.78] tracking-[-0.075em] text-white">
                  A more
                  <br />
                  informed
                  <br />
                  approach.
                </h1>

              </Reveal>

              <Reveal delay={0.16}>

                <p className="mt-10 max-w-xl text-sm leading-7 text-white/42 md:text-base">
                  Circle is the ongoing DRIPLABS relationship:
                  physician-led care, deeper knowledge, priority
                  access and continuity around your wellness journey.
                </p>

              </Reveal>

              <Reveal delay={0.24}>

                <div className="mt-10 flex flex-wrap gap-3">

                  <a
                    href="#knowledge"
                    className="group inline-flex min-h-[50px] items-center gap-8 rounded-[10px] bg-[#0066FF] px-7 text-[9px] uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#1683FF] hover:shadow-[0_15px_50px_rgba(0,102,255,.25)]"
                  >
                    Explore the knowledge
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </a>

                  <a
                    href="#plans"
                    className="inline-flex min-h-[50px] items-center rounded-[10px] border border-white/15 bg-white/[0.035] px-7 text-[9px] uppercase tracking-[0.2em] text-white/60 backdrop-blur-md transition-all duration-500 hover:border-white/30 hover:bg-white/[0.07] hover:text-white"
                  >
                    View plans
                  </a>

                </div>

              </Reveal>

            </div>

            <Reveal
              delay={0.3}
              className="hidden lg:col-span-3 lg:block"
            >

              <div className="border-l border-white/[0.08] pl-7">

                <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#4D9BFF]">
                  The Circle
                </p>

                <p className="mt-5 text-xs leading-6 text-white/32">
                  A closer relationship with DRIPLABS through
                  member access, education and physician-led
                  continuity.
                </p>

                <div className="mt-8 h-px w-full bg-gradient-to-r from-[#1683FF]/60 to-transparent" />

                <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                  Knowledge / Access / Continuity
                </p>

              </div>

            </Reveal>

          </div>

          <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between border-t border-white/[0.07] pt-4 md:left-10 md:right-10 lg:left-16 lg:right-16">

            <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
              01 / 11
            </span>

            <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/15">
              Scroll to explore
            </span>

          </div>

        </div>

      </section>

      {/* =========================================================
          WHY CIRCLE
      ========================================================= */}

      <section className="relative border-t border-white/[0.06] bg-[#01050B]">

        <div className="mx-auto max-w-[1680px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">

          <div className="grid gap-16 lg:grid-cols-12">

            <Reveal className="lg:col-span-3">

              <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#4D9BFF]">
                02 / Why Circle
              </p>

            </Reveal>

            <div className="lg:col-span-8 lg:col-start-5">

              <Reveal>

                <h2 className="max-w-[1000px] font-[var(--font-heading)] text-[clamp(3.2rem,6.5vw,7rem)] font-light leading-[0.86] tracking-[-0.065em]">
                  Wellness shouldn't
                  <br />
                  end when the
                  <br />
                  infusion does.
                </h2>

              </Reveal>

              <Reveal delay={0.1}>

                <p className="mt-10 max-w-2xl text-sm leading-7 text-white/40 md:text-base">
                  Circle creates continuity around the DRIPLABS
                  experience — giving members a way to keep
                  learning, returning, asking questions and staying
                  connected with their physician-led wellness plan.
                </p>

              </Reveal>

            </div>

          </div>

          <div className="mt-20 grid border-y border-white/[0.07] md:grid-cols-2 lg:grid-cols-4">

            {[
              ["01", "Understand", "Know more about the system."],
              ["02", "Personalise", "Build around your goals."],
              ["03", "Continue", "Create continuity."],
              ["04", "Access", "Stay within the DRIPLABS world."],
            ].map(([number, title, description]) => (

              <Reveal key={number}>

                <div className="group border-b border-white/[0.07] p-7 transition-colors duration-500 hover:bg-[#0066FF]/[0.035] md:border-r md:last:border-r-0 lg:border-b-0">

                  <span className="font-mono text-[8px] text-[#1683FF]/60">
                    {number}
                  </span>

                  <h3 className="mt-14 font-[var(--font-heading)] text-3xl font-light tracking-[-0.04em] text-white">
                    {title}
                  </h3>

                  <p className="mt-4 text-xs leading-6 text-white/30">
                    {description}
                  </p>

                  <div className="mt-10 h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-full group-hover:bg-[#1683FF]/60" />

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          KNOWLEDGE VAULT
      ========================================================= */}

      <section
        id="knowledge"
        className="relative overflow-hidden bg-[#020812]"
      >

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(0,102,255,.055),transparent_35%)]" />

        <div className="relative mx-auto max-w-[1680px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">

          <div className="grid gap-16 lg:grid-cols-12">

            <div className="lg:col-span-4">

              <Reveal>

                <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#4D9BFF]">
                  03 / Knowledge Vault
                </p>

                <h2 className="mt-8 max-w-lg font-[var(--font-heading)] text-[clamp(3rem,5.5vw,6rem)] font-light leading-[0.86] tracking-[-0.06em]">
                  Know what
                  <br />
                  you're
                  <br />
                  choosing.
                </h2>

                <p className="mt-8 max-w-sm text-sm leading-7 text-white/35">
                  Explore DRIPLABS through the things that
                  matter most: protocols, science, quality and
                  the experience itself.
                </p>

              </Reveal>

            </div>

            <div className="lg:col-span-7 lg:col-start-6">

              <div className="border-t border-white/[0.08]">

                {knowledgeItems.map((item, index) => (

                  <Reveal
                    key={item.number}
                    delay={index * 0.05}
                  >

                    <Link
                      href={item.href}
                      className="group relative flex items-center gap-5 border-b border-white/[0.08] py-7 transition-all duration-500 md:py-9"
                    >

                      <span className="w-8 shrink-0 font-mono text-[8px] text-white/15">
                        {item.number}
                      </span>

                      <div className="min-w-0 flex-1">

                        <p className="font-mono text-[7px] uppercase tracking-[0.22em] text-[#4D9BFF]/70">
                          {item.label}
                        </p>

                        <h3 className="mt-2 font-[var(--font-heading)] text-2xl font-light tracking-[-0.035em] text-white md:text-3xl">
                          {item.title}
                        </h3>

                        <p className="mt-3 max-w-xl text-xs leading-6 text-white/30">
                          {item.description}
                        </p>

                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm text-white/25 transition-all duration-500 group-hover:border-[#1683FF]/50 group-hover:bg-[#0066FF] group-hover:text-white">
                        →
                      </span>

                    </Link>

                  </Reveal>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          JOURNEY
      ========================================================= */}

      <section className="relative bg-[#01050B]">

        <div className="mx-auto max-w-[1680px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">

          <Reveal>

            <div className="flex items-center gap-4">

              <span className="h-px w-10 bg-[#1683FF]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#4D9BFF]">
                04 / Your Journey
              </span>

            </div>

          </Reveal>

          <Reveal delay={0.08}>

            <h2 className="mt-8 max-w-[1000px] font-[var(--font-heading)] text-[clamp(3rem,6vw,6.5rem)] font-light leading-[0.86] tracking-[-0.065em]">
              From knowledge
              <br />
              to experience.
            </h2>

          </Reveal>

          <div className="mt-20 grid border-t border-white/[0.07] lg:grid-cols-4">

            {journey.map((item, index) => (

              <Reveal
                key={item.number}
                delay={index * 0.06}
              >

                <div className="group relative border-b border-white/[0.07] p-7 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:min-h-[310px]">

                  <span className="font-mono text-[8px] text-[#1683FF]/65">
                    {item.number}
                  </span>

                  <h3 className="mt-16 font-[var(--font-heading)] text-3xl font-light tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-xs leading-6 text-white/30">
                    {item.description}
                  </p>

                  <div className="absolute bottom-7 left-7 right-7 h-px bg-white/[0.06]">
                    <div className="h-px w-0 bg-[#1683FF] transition-all duration-700 group-hover:w-full" />
                  </div>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          PLANS
      ========================================================= */}

      <section
        id="plans"
        className="relative bg-[#020812]"
      >

        <div className="mx-auto max-w-[1680px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">

          <div className="grid gap-14 lg:grid-cols-12">

            <div className="lg:col-span-4">

              <Reveal>

                <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#4D9BFF]">
                  05 / Membership
                </p>

                <h2 className="mt-8 max-w-lg font-[var(--font-heading)] text-[clamp(3.2rem,5.8vw,6.2rem)] font-light leading-[0.84] tracking-[-0.065em]">
                  Choose your
                  <br />
                  way into
                  <br />
                  DRIPLABS.
                </h2>

                <p className="mt-8 max-w-sm text-sm leading-7 text-white/35">
                  Nine membership and subscription plans, from
                  a focused first programme to 12 months of
                  physician-scheduled access.
                </p>

              </Reveal>

              {/* filter */}

              <Reveal delay={0.12}>

                <div className="mt-10 flex flex-wrap gap-2">

                  {[
                    ["all", "All plans"],
                    ["packages", "Packages"],
                    ["unlimited", "Unlimited"],
                  ].map(([value, label]) => (

                    <button
                      key={value}
                      type="button"
                      onClick={() =>
                        setFilter(value as PlanFilter)
                      }
                      className={[
                        "rounded-full border px-4 py-2 text-[8px] uppercase tracking-[0.18em] transition-all duration-300",
                        filter === value
                          ? "border-[#1683FF]/60 bg-[#0066FF] text-white"
                          : "border-white/10 bg-white/[0.025] text-white/35 hover:border-white/25 hover:text-white/70",
                      ].join(" ")}
                    >
                      {label}
                    </button>

                  ))}

                </div>

              </Reveal>

            </div>

            <div className="lg:col-span-7 lg:col-start-6">

              <div className="grid gap-4 md:grid-cols-2">

                {visiblePlans.map((plan, index) => (

                  <PlanCard
                    key={plan.slug}
                    plan={plan}
                    index={index}
                    selected={selectedPlan === plan.slug}
                    onSelect={() =>
                      setSelectedPlan(plan.slug)
                    }
                  />

                ))}

              </div>

            </div>

          </div>

          {/* selected plan detail */}

          {activePlan && (

            <Reveal>

              <div className="mt-14 overflow-hidden rounded-[18px] border border-[#1683FF]/20 bg-[#06152B]">

                <div className="grid lg:grid-cols-12">

                  <div className="border-b border-white/[0.07] p-7 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-10">

                    <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#4D9BFF]">
                      Selected plan
                    </p>

                    <h3 className="mt-5 font-[var(--font-heading)] text-4xl font-light tracking-[-0.045em] md:text-5xl">
                      {activePlan.name}
                    </h3>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
                      {activePlan.summary}
                    </p>

                  </div>

                  <div className="grid grid-cols-2 lg:col-span-5">

                    <div className="border-b border-r border-white/[0.07] p-7 lg:border-b-0 lg:p-10">

                      <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/20">
                        Base
                      </p>

                      <p className="mt-3 text-xl text-white">
                        {formatCurrency(activePlan.price)}
                      </p>

                    </div>

                    <div className="border-b border-white/[0.07] p-7 lg:border-b-0 lg:p-10">

                      <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/20">
                        Payable
                      </p>

                      <p className="mt-3 text-xl text-[#8CCBFF]">
                        {formatCurrency(activePlan.total)}
                      </p>

                    </div>

                    <div className="col-span-2 p-7 lg:p-10">

                      <Link
                        href="/book"
                        className="group flex items-center justify-between border border-[#1683FF]/40 bg-[#0066FF] px-5 py-4 text-[8px] uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#1683FF]"
                      >
                        Discuss this plan
                        <span className="transition-transform duration-500 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </Reveal>

          )}

          <Reveal>

            <p className="mt-8 max-w-4xl text-[9px] leading-5 text-white/20">
              Base prices are exclusive of GST. GST-inclusive totals
              shown above include 18% GST. Unlimited access remains
              physician-scheduled and subject to appropriate clinical
              frequency.
            </p>

          </Reveal>

        </div>

      </section>

      {/* =========================================================
          CIRCLE
      ========================================================= */}

      <section
        id="circle"
        className="relative overflow-hidden bg-[#01050B]"
      >

        <div className="absolute right-[-15%] top-[5%] h-[600px] w-[600px] rounded-full bg-[#0066FF]/[0.045] blur-[160px]" />

        <div className="relative mx-auto max-w-[1680px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">

          <div className="grid gap-16 lg:grid-cols-12">

            <div className="lg:col-span-5">

              <Reveal>

                <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#4D9BFF]">
                  06 / The Circle
                </p>

                <h2 className="mt-8 font-[var(--font-heading)] text-[clamp(3.5rem,6vw,7rem)] font-light leading-[0.83] tracking-[-0.07em]">
                  Stay within
                  <br />
                  the world.
                </h2>

                <p className="mt-9 max-w-lg text-sm leading-7 text-white/38">
                  Once your package is complete, DRIPLABS Circle
                  keeps your wellness plan active year-round through
                  priority access, member pricing and an ongoing
                  physician relationship.
                </p>

              </Reveal>

            </div>

            <div className="lg:col-span-6 lg:col-start-7">

              <div className="space-y-0 border-t border-white/[0.08]">

                {circleBenefits.map((benefit, index) => (

                  <Reveal
                    key={benefit.number}
                    delay={index * 0.05}
                  >

                    <div className="group grid grid-cols-[40px_1fr] gap-5 border-b border-white/[0.08] py-7 md:grid-cols-[55px_1fr] md:py-9">

                      <span className="font-mono text-[8px] text-[#1683FF]/60">
                        {benefit.number}
                      </span>

                      <div>

                        <h3 className="font-[var(--font-heading)] text-2xl font-light tracking-[-0.035em] text-white md:text-3xl">
                          {benefit.title}
                        </h3>

                        <p className="mt-3 max-w-xl text-xs leading-6 text-white/30">
                          {benefit.description}
                        </p>

                      </div>

                    </div>

                  </Reveal>

                ))}

              </div>

            </div>

          </div>

          {/* Circle plans */}

          <div className="mt-20 grid gap-4 lg:grid-cols-2">

            {circlePlans.map((plan, index) => (

              <Reveal
                key={plan.name}
                delay={index * 0.08}
              >

                <div className="group relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-500 hover:border-[#1683FF]/40 hover:bg-[#0066FF]/[0.035] md:p-9">

                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#0066FF]/[0.07] blur-[70px]" />

                  <div className="relative">

                    <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#4D9BFF]">
                      Circle / {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-5 font-[var(--font-heading)] text-3xl font-light tracking-[-0.04em] md:text-4xl">
                      {plan.name}
                    </h3>

                    <div className="mt-9 flex items-end gap-2">

                      <span className="font-[var(--font-heading)] text-5xl font-light tracking-[-0.05em]">
                        ₹{plan.monthlyPrice.toLocaleString("en-IN")}
                      </span>

                      <span className="mb-2 text-xs text-white/25">
                        / month
                      </span>

                    </div>

                    <p className="mt-3 font-mono text-[7px] uppercase tracking-[0.18em] text-white/20">
                      {plan.term}
                    </p>

                    <p className="mt-7 max-w-xl text-sm leading-7 text-white/35">
                      {plan.summary}
                    </p>

                    <Link
                      href="/book"
                      className="group/cta mt-9 inline-flex items-center gap-8 border border-white/15 px-5 py-3 text-[8px] uppercase tracking-[0.2em] text-white/55 transition-all duration-500 hover:border-[#1683FF]/50 hover:bg-[#0066FF] hover:text-white"
                    >
                      Discuss Circle
                      <span className="transition-transform duration-500 group-hover/cta:translate-x-1">
                        →
                      </span>
                    </Link>

                  </div>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}

      <section className="relative bg-[#020812]">

        <div className="mx-auto max-w-[1680px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">

          <Reveal>

            <div className="mx-auto max-w-4xl text-center">

              <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#4D9BFF]">
                07 / How membership works
              </p>

              <h2 className="mt-8 font-[var(--font-heading)] text-[clamp(3.2rem,6vw,6.5rem)] font-light leading-[0.86] tracking-[-0.065em]">
                Know more.
                <br />
                Then decide.
              </h2>

              <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/35">
                DRIPLABS membership is designed to make the
                system easier to understand before you commit
                to it.
              </p>

            </div>

          </Reveal>

          <div className="mt-20 grid gap-4 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Explore",
                text: "Understand protocols, ingredients, NADx and the DRIPLABS Standard.",
              },
              {
                number: "02",
                title: "Consult",
                text: "Discuss your context with a physician before your first session.",
              },
              {
                number: "03",
                title: "Continue",
                text: "Use your membership to build continuity around your wellness journey.",
              },
            ].map((item, index) => (

              <Reveal
                key={item.number}
                delay={index * 0.08}
              >

                <div className="min-h-[270px] rounded-[18px] border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-500 hover:border-[#1683FF]/35 hover:bg-white/[0.04]">

                  <span className="font-mono text-[8px] text-[#1683FF]/65">
                    {item.number}
                  </span>

                  <h3 className="mt-16 font-[var(--font-heading)] text-3xl font-light tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-xs leading-6 text-white/30">
                    {item.text}
                  </p>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          PHYSICIAN LAYER
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#01050B]">

        <div className="mx-auto max-w-[1680px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">

          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">

            <div className="lg:col-span-5">

              <Reveal>

                <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#4D9BFF]">
                  08 / Physician layer
                </p>

                <h2 className="mt-8 font-[var(--font-heading)] text-[clamp(3.2rem,5.5vw,6rem)] font-light leading-[0.86] tracking-[-0.06em]">
                  Knowledge
                  <br />
                  informs.
                  <br />
                  Physicians
                  <br />
                  personalise.
                </h2>

              </Reveal>

            </div>

            <div className="lg:col-span-6 lg:col-start-7">

              <Reveal>

                <div className="border border-white/[0.08] bg-[#06152B]/50 p-7 md:p-10">

                  <div className="flex items-center justify-between border-b border-white/[0.07] pb-6">

                    <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#4D9BFF]">
                      DRIPLABS / Clinical principle
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#1683FF] shadow-[0_0_14px_rgba(22,131,255,.8)]" />

                  </div>

                  <div className="py-9">

                    {[
                      "Understand",
                      "Discuss",
                      "Assess",
                      "Personalise",
                    ].map((item, index) => (

                      <div
                        key={item}
                        className="flex items-center gap-5 border-b border-white/[0.06] py-5 last:border-b-0"
                      >

                        <span className="font-mono text-[8px] text-white/20">
                          0{index + 1}
                        </span>

                        <span className="font-[var(--font-heading)] text-2xl font-light text-white/80">
                          {item}
                        </span>

                      </div>

                    ))}

                  </div>

                  <p className="text-xs leading-6 text-white/30">
                    Final protocol selection, dosage and duration
                    remain subject to physician assessment and
                    clinical judgment.
                  </p>

                </div>

              </Reveal>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="relative bg-[#020812]">

        <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-32 lg:py-40">

          <Reveal>

            <div className="text-center">

              <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#4D9BFF]">
                09 / Clarity
              </p>

              <h2 className="mt-7 font-[var(--font-heading)] text-[clamp(3rem,5.5vw,6rem)] font-light leading-[0.86] tracking-[-0.06em]">
                Questions,
                <br />
                answered.
              </h2>

            </div>

          </Reveal>

          <div className="mt-16 border-t border-white/[0.08]">

            {faqItems.map((item, index) => {

              const open = openFaq === index;

              return (
                <div
                  key={item.question}
                  className="border-b border-white/[0.08]"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(open ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-8 py-7 text-left md:py-8"
                  >

                    <span className="font-[var(--font-heading)] text-xl font-light tracking-[-0.025em] text-white md:text-2xl">
                      {item.question}
                    </span>

                    <span
                      className={[
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm text-white/30 transition-all duration-500",
                        open
                          ? "rotate-45 border-[#1683FF]/50 bg-[#0066FF] text-white"
                          : "",
                      ].join(" ")}
                    >
                      +
                    </span>

                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: open ? "auto" : 0,
                      opacity: open ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >

                    <p className="max-w-3xl pb-8 pr-12 text-sm leading-7 text-white/35">
                      {item.answer}
                    </p>

                  </motion.div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#01050B]">

        <div className="absolute inset-0">

          <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/[0.055] blur-[170px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#01050B_75%)]" />

        </div>

        <div className="relative mx-auto max-w-[1680px] px-6 py-32 text-center md:px-10 md:py-44 lg:px-16 lg:py-52">

          <Reveal>

            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#4D9BFF]">
              10 / Begin
            </p>

          </Reveal>

          <Reveal delay={0.08}>

            <h2 className="mx-auto mt-8 max-w-[1100px] font-[var(--font-heading)] text-[clamp(4rem,8vw,9rem)] font-light leading-[0.8] tracking-[-0.075em]">
              Know more.
              <br />
              Choose deliberately.
            </h2>

          </Reveal>

          <Reveal delay={0.16}>

            <p className="mx-auto mt-9 max-w-xl text-sm leading-7 text-white/35 md:text-base">
              Begin your DRIPLABS journey with a physician-led
              conversation.
            </p>

          </Reveal>

          <Reveal delay={0.24}>

            <Link
              href="/book"
              className="group relative mt-10 inline-flex min-h-[56px] items-center gap-10 overflow-hidden rounded-[10px] bg-[#0066FF] px-8 text-[9px] uppercase tracking-[0.2em] text-white transition-all duration-700 hover:bg-[#1683FF] hover:shadow-[0_20px_70px_rgba(0,102,255,.25)]"
            >

              <span className="absolute inset-y-0 -left-[30%] w-[25%] skew-x-[-20deg] bg-white/20 transition-all duration-1000 group-hover:left-[120%]" />

              <span className="relative z-10">
                Begin your journey
              </span>

              <span className="relative z-10 text-lg transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>

            </Link>

          </Reveal>

        </div>

      </section>

      <Footer />

    </main>
  );
}