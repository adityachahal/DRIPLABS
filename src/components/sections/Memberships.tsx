"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import {
  circleMemberships,
  membershipPlans,
} from "@/data/memberships";

type MembershipMode = "packages" | "unlimited" | "circle";

const easeLuxury = [0.22, 1, 0.36, 1] as const;

export default function Memberships() {
  const [mode, setMode] =
    useState<MembershipMode>("packages");

  const [selectedSlug, setSelectedSlug] =
    useState<string>(membershipPlans[0].slug);

  const packagePlans = useMemo(
    () =>
      membershipPlans.filter(
        (plan) => plan.type === "package",
      ),
    [],
  );

  const unlimitedPlans = useMemo(
    () =>
      membershipPlans.filter(
        (plan) => plan.type === "unlimited",
      ),
    [],
  );

  const activePlan =
    membershipPlans.find(
      (plan) => plan.slug === selectedSlug,
    ) ?? membershipPlans[0];

  const visiblePlans =
    mode === "packages"
      ? packagePlans
      : unlimitedPlans;

  return (
    <section
      id="memberships"
      className="relative overflow-hidden bg-[#0A0A0B] text-[#F2F0EA]"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-20%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#C9A646]/[0.035] blur-[140px]" />

        <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-[#B7D7D1]/[0.025] blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:radial-gradient(rgba(255,255,255,0.8)_0.5px,transparent_0.5px)] [background-size:5px_5px]" />
      </div>

      {/* =========================================================
          HEADER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-40 lg:px-14">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: easeLuxury,
            }}
            className="md:col-span-3"
          >
            <div className="flex items-center gap-3">
              <span className="h-[5px] w-[5px] rounded-full bg-[#C9A646] shadow-[0_0_14px_rgba(201,166,70,0.7)]" />

              <p className="driplabs-label text-white/45">
                Membership
              </p>
            </div>

            <div className="mt-7 h-px w-16 bg-gradient-to-r from-[#C9A646] to-transparent" />

            <p className="mt-6 max-w-[190px] text-[9px] uppercase leading-5 tracking-[0.2em] text-white/30">
              Make wellness
              <br />
              a ritual.
            </p>
          </motion.div>

          <div className="md:col-span-8 md:col-start-5">
            <motion.h2
              initial={{ opacity: 0, y: 55, filter: "blur(8px)" }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1.1,
                ease: easeLuxury,
              }}
              className="max-w-[1050px] text-[clamp(4rem,8vw,8.8rem)] font-light leading-[0.8] tracking-[-0.075em] text-[#F3F1EB]"
            >
              A deeper
              <br />
              commitment
              <br />
              <span className="text-white/40">
                to wellness.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.18,
                ease: easeLuxury,
              }}
              className="mt-10 max-w-xl text-sm leading-7 text-white/45 md:text-base"
            >
              Choose from structured packages, unlimited
              access options or recurring DRIPLABS Circle
              membership.
            </motion.p>
          </div>
        </div>
      </div>

      {/* =========================================================
          MEMBERSHIP TYPE SELECTOR
      ========================================================= */}

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <div className="relative flex overflow-x-auto border-y border-white/[0.09] scrollbar-hide">
          <ModeButton
            active={mode === "packages"}
            label="Packages"
            count={packagePlans.length.toString()}
            onClick={() => {
              setMode("packages");
              setSelectedSlug(packagePlans[0].slug);
            }}
          />

          <ModeButton
            active={mode === "unlimited"}
            label="Unlimited"
            count={unlimitedPlans.length.toString()}
            onClick={() => {
              setMode("unlimited");
              setSelectedSlug(unlimitedPlans[0].slug);
            }}
          />

          <ModeButton
            active={mode === "circle"}
            label="DRIPLABS Circle"
            count={circleMemberships.length.toString()}
            onClick={() => {
              setMode("circle");
            }}
          />
        </div>
      </div>

      {/* =========================================================
          PACKAGES / UNLIMITED
      ========================================================= */}

      {mode !== "circle" && (
        <div className="relative mx-auto max-w-[1400px] px-6 pb-28 pt-10 md:px-10 md:pb-40 md:pt-14 lg:px-14">
          <div className="grid gap-px overflow-hidden border border-white/[0.09] bg-white/[0.07] lg:grid-cols-12">
            {/* ===================================================
                PLAN LIST
            =================================================== */}

            <div className="bg-[#0D0D0F] lg:col-span-7">
              <div className="border-b border-white/[0.07] px-6 py-4 md:px-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                    Available memberships
                  </span>

                  <span className="font-mono text-[8px] text-[#C9A646]/60">
                    {String(visiblePlans.length)
                      .padStart(2, "0")}{" "}
                    OPTIONS
                  </span>
                </div>
              </div>

              {visiblePlans.map((plan, index) => {
                const selected =
                  selectedSlug === plan.slug;

                return (
                  <motion.button
                    key={plan.slug}
                    type="button"
                    aria-pressed={selected}
                    onClick={() =>
                      setSelectedSlug(plan.slug)
                    }
                    whileHover={{
                      x: selected ? 0 : 4,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: easeLuxury,
                    }}
                    className="group relative flex min-h-[112px] w-full items-center justify-between border-b border-white/[0.07] px-6 text-left last:border-b-0 md:min-h-[132px] md:px-9"
                  >
                    {/* Active rail */}
                    <motion.span
                      initial={false}
                      animate={{
                        opacity: selected ? 1 : 0,
                        scaleY: selected ? 1 : 0.2,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: easeLuxury,
                      }}
                      className="absolute bottom-0 left-0 top-0 w-[2px] origin-center bg-[#C9A646] shadow-[0_0_18px_rgba(201,166,70,0.6)]"
                    />

                    {/* Hover wash */}
                    <span
                      className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                        selected
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                      style={{
                        background: selected
                          ? "linear-gradient(90deg, rgba(201,166,70,0.07), transparent 70%)"
                          : "linear-gradient(90deg, rgba(255,255,255,0.025), transparent 70%)",
                      }}
                    />

                    <div className="relative z-10 flex min-w-0 items-center gap-5">
                      <span
                        className={`w-6 shrink-0 font-mono text-[8px] tracking-[0.25em] ${
                          selected
                            ? "text-[#C9A646]"
                            : "text-white/20"
                        }`}
                      >
                        {String(index + 1).padStart(
                          2,
                          "0",
                        )}
                      </span>

                      <div className="min-w-0">
                        <h3
                          className={`text-xl font-light tracking-[-0.025em] transition-colors duration-500 md:text-2xl ${
                            selected
                              ? "text-[#F2F0EA]"
                              : "text-white/65 group-hover:text-white"
                          }`}
                        >
                          {plan.name}
                        </h3>

                        <p
                          className={`mt-2 text-[9px] uppercase tracking-[0.16em] transition-colors duration-500 ${
                            selected
                              ? "text-white/35"
                              : "text-white/20"
                          }`}
                        >
                          {plan.sessions}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 ml-5 flex shrink-0 items-center gap-5">
                      <span
                        className={`hidden font-mono text-sm transition-colors duration-500 md:block ${
                          selected
                            ? "text-white/65"
                            : "text-white/25"
                        }`}
                      >
                        ₹
                        {plan.price.toLocaleString(
                          "en-IN",
                        )}
                      </span>

                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-500 ${
                          selected
                            ? "border-[#C9A646]/50 bg-[#C9A646]/10 text-[#C9A646]"
                            : "border-white/10 text-white/25 group-hover:border-white/25 group-hover:text-white/60"
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* ===================================================
                SELECTED PLAN
            =================================================== */}

            <div className="relative flex min-h-[650px] flex-col justify-between overflow-hidden bg-[#111114] lg:col-span-5">
              {/* Technical background */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
              >
                <div className="absolute right-[-20%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[#C9A646]/[0.045] blur-[100px]" />

                <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:80px_80px]" />
              </div>

              <AnimatePresence mode="wait">
                <SelectedPlan
                  key={activePlan.slug}
                  plan={activePlan}
                />
              </AnimatePresence>

              <div className="relative border-t border-white/[0.08] p-7 md:p-9">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                      Before GST
                    </p>

                    <p className="mt-2 font-mono text-sm text-white/65">
                      ₹
                      {activePlan.price.toLocaleString(
                        "en-IN",
                      )}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                      Including GST
                    </p>

                    <p className="mt-2 font-mono text-sm text-white/65">
                      ₹
                      {activePlan.total.toLocaleString(
                        "en-IN",
                      )}
                    </p>
                  </div>
                </div>

                <a
                  href="/book"
                  className="group relative mt-8 flex items-center justify-between overflow-hidden border border-[#C9A646]/45 bg-[#C9A646] px-5 py-4 text-[9px] uppercase tracking-[0.22em] text-[#0A0A0B] transition-all duration-500 hover:border-[#E5D39A] hover:bg-[#E5D39A]"
                >
                  <span className="relative z-10">
                    Choose this membership
                  </span>

                  <span className="relative z-10 text-base transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>

                  <span className="absolute inset-y-0 left-0 w-0 bg-white/20 transition-all duration-700 group-hover:w-full" />
                </a>

                <p className="mt-5 text-[8px] leading-5 text-white/20">
                  Final membership eligibility, terms and
                  treatment scheduling remain subject to
                  applicable DRIPLABS policies and physician
                  assessment where required.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          DRIPLABS CIRCLE
      ========================================================= */}

      {mode === "circle" && (
        <div className="relative mx-auto max-w-[1400px] px-6 pb-28 pt-10 md:px-10 md:pb-40 md:pt-14 lg:px-14">
          <div className="mb-8 flex items-center justify-between border-b border-white/[0.08] pb-5">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
              Recurring membership
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#C9A646]/60">
              DRIPLABS / CIRCLE
            </span>
          </div>

          <div className="grid gap-px bg-white/[0.08] md:grid-cols-2">
            {circleMemberships.map(
              (membership, index) => (
                <motion.article
                  key={membership.slug}
                  initial={{
                    opacity: 0,
                    y: 35,
                    filter: "blur(5px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: easeLuxury,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="group relative overflow-hidden bg-[#101012] p-7 transition-colors duration-500 hover:bg-[#131316] md:p-10 lg:p-12"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute right-[-15%] top-[-20%] h-64 w-64 rounded-full bg-[#C9A646]/0 blur-[90px] transition-all duration-700 group-hover:bg-[#C9A646]/[0.055]" />

                  {/* Card header */}
                  <div className="relative z-10 flex items-start justify-between">
                    <span className="font-mono text-[8px] tracking-[0.24em] text-[#C9A646]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                      Monthly
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 mt-16 max-w-lg text-[clamp(3rem,4vw,4.8rem)] font-light leading-[0.86] tracking-[-0.055em] text-[#F2F0EA]">
                    {membership.name}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 mt-7 max-w-xl text-sm leading-7 text-white/40">
                    {membership.summary}
                  </p>

                  {/* Price */}
                  <div className="relative z-10 mt-12 border-t border-white/[0.08] pt-7">
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                      Monthly commitment
                    </p>

                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-[clamp(3.5rem,5vw,5.5rem)] font-light leading-none tracking-[-0.07em] text-[#F2F0EA]">
                        ₹
                        {membership.monthlyPrice.toLocaleString(
                          "en-IN",
                        )}
                      </span>

                      <span className="text-[9px] uppercase tracking-[0.16em] text-white/25">
                        / month
                      </span>
                    </div>

                    <p className="mt-4 text-[9px] uppercase tracking-[0.16em] text-white/30">
                      {membership.term}
                    </p>
                  </div>

                  {/* CTA */}
                  <a
                    href="/book"
                    className="group/cta relative z-10 mt-10 flex items-center justify-between overflow-hidden border border-white/15 bg-transparent px-5 py-4 text-[9px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:border-[#C9A646]/50 hover:bg-[#C9A646]"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover/cta:text-[#0A0A0B]">
                      Explore Circle
                    </span>

                    <span className="relative z-10 text-[#C9A646] transition-all duration-300 group-hover/cta:translate-x-1 group-hover/cta:text-[#0A0A0B]">
                      →
                    </span>
                  </a>
                </motion.article>
              ),
            )}
          </div>
        </div>
      )}

      {/* =========================================================
          FOOTNOTE
      ========================================================= */}

      <div className="relative mx-auto max-w-[1400px] px-6 pb-10 md:px-10 lg:px-14">
        <div className="border-t border-white/[0.08] pt-5">
          <p className="max-w-4xl text-[8px] leading-5 text-white/25">
            Membership pricing shown here reflects the current
            DRIPLABS membership information provided for this
            build. Treatment suitability, physician scheduling,
            membership terms and applicable conditions should be
            confirmed before purchase.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   MODE BUTTON
============================================================= */

function ModeButton({
  active,
  label,
  count,
  onClick,
}: {
  active: boolean;
  label: string;
  count: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className="group relative flex shrink-0 items-center gap-4 border-r border-white/[0.08] px-5 py-5 text-[9px] uppercase tracking-[0.2em] transition-all duration-500 last:border-r-0 md:px-8"
    >
      <span
        className={`absolute bottom-0 left-0 right-0 h-[2px] origin-left transition-transform duration-500 ${
          active
            ? "scale-x-100 bg-[#C9A646] shadow-[0_0_14px_rgba(201,166,70,0.5)]"
            : "scale-x-0 bg-white/20 group-hover:scale-x-100"
        }`}
      />

      <span
        className={`transition-colors duration-300 ${
          active
            ? "text-[#F2F0EA]"
            : "text-white/30 group-hover:text-white/65"
        }`}
      >
        {label}
      </span>

      <span
        className={`font-mono text-[8px] transition-colors duration-300 ${
          active
            ? "text-[#C9A646]"
            : "text-white/20 group-hover:text-white/40"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

/* =============================================================
   SELECTED PLAN
============================================================= */

function SelectedPlan({
  plan,
}: {
  plan: (typeof membershipPlans)[number];
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
        filter: "blur(6px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.6,
        ease: easeLuxury,
      }}
      className="relative p-7 md:p-9 lg:p-10"
    >
      {/* Protocol ID */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-[5px] w-[5px] rounded-full bg-[#C9A646] shadow-[0_0_12px_rgba(201,166,70,0.6)]" />

          <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/30">
            Selected membership
          </p>
        </div>

        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#C9A646]">
          {plan.type === "unlimited"
            ? "Unlimited"
            : "Package"}
        </span>
      </div>

      {/* Selected plan */}
      <h3 className="mt-16 max-w-md text-5xl font-light leading-[0.86] tracking-[-0.06em] text-[#F2F0EA] md:text-6xl">
        {plan.name}
      </h3>

      <p className="mt-7 max-w-md text-sm leading-6 text-white/45">
        {plan.summary}
      </p>

      {/* Package metadata */}
      {plan.discount !== undefined && (
        <div className="mt-10 inline-flex items-center gap-3 border border-white/[0.1] bg-white/[0.02] px-4 py-3">
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
            Package discount
          </span>

          <span className="font-mono text-sm text-[#C9A646]">
            {plan.discount}%
          </span>
        </div>
      )}

      {plan.gift && (
        <div className="mt-4 inline-flex items-center gap-3 border border-[#C9A646]/25 bg-[#C9A646]/[0.035] px-4 py-3">
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
            Longevity gift
          </span>

          <span className="text-sm text-[#C9A646]">
            {plan.gift}
          </span>
        </div>
      )}

      {/* Sessions */}
      <div className="mt-12 border-t border-white/[0.08] pt-6">
        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
          Included sessions
        </p>

        <p className="mt-3 text-2xl font-light tracking-[-0.03em] text-[#F2F0EA]">
          {plan.sessions}
        </p>
      </div>
    </motion.div>
  );
}