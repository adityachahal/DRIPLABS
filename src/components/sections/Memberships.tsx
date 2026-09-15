"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import {
  circleMemberships,
  membershipPlans,
} from "@/data/memberships";

type MembershipMode = "packages" | "unlimited" | "circle";

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
      className="overflow-hidden bg-[#F5F0E7] text-[#0B1D35]"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="mx-auto max-w-[1600px] px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-40 lg:px-14">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="driplabs-label text-[#77736A]">
              Membership
            </p>

            <div className="mt-6 h-px w-14 bg-[#C9A646]" />

            <p className="mt-5 max-w-[190px] text-[9px] uppercase leading-5 tracking-[0.18em] text-[#99958C]">
              Make wellness
              <br />
              a ritual.
            </p>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <motion.h2
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[1050px] text-[clamp(4rem,7.8vw,8.8rem)] font-light leading-[0.78] tracking-[-0.075em]"
            >
              A deeper
              <br />
              commitment
              <br />
              to wellness.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="mt-9 max-w-xl text-sm leading-7 text-[#59616B] md:text-base"
            >
              Choose from structured packages, unlimited
              access options or recurring DRIPLABS Circle
              membership.
            </motion.p>
          </div>
        </div>
      </div>

      {/* =====================================================
          MEMBERSHIP TYPE SELECTOR
      ===================================================== */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="flex flex-wrap border-y border-[#0B1D35]/10">
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

      {/* =====================================================
          PACKAGES / UNLIMITED
      ===================================================== */}
      {mode !== "circle" && (
        <div className="mx-auto max-w-[1600px] px-6 pb-28 pt-10 md:px-10 md:pb-40 md:pt-14 lg:px-14">
          <div className="grid overflow-hidden border border-[#0B1D35]/10 lg:grid-cols-12">
            {/* -------------------------------------------------
                PLAN LIST
            ------------------------------------------------- */}
            <div className="lg:col-span-7">
              {visiblePlans.map((plan, index) => {
                const selected =
                  selectedSlug === plan.slug;

                return (
                  <button
                    key={plan.slug}
                    type="button"
                    aria-pressed={selected}
                    onClick={() =>
                      setSelectedSlug(plan.slug)
                    }
                    className="relative flex min-h-[96px] w-full items-center justify-between border-b border-[#0B1D35]/10 px-6 text-left transition-all duration-500 last:border-b-0 md:min-h-[112px] md:px-9"
                    style={{
                      backgroundColor: selected
                        ? "#0B1D35"
                        : "#F5F0E7",
                    }}
                  >
                    <span
                      className="absolute left-0 top-0 h-full w-[3px] bg-[#C9A646]"
                      style={{
                        opacity: selected ? 1 : 0,
                      }}
                    />

                    <div className="flex min-w-0 items-center gap-5">
                      <span
                        className="w-6 shrink-0 text-[8px] tracking-[0.25em]"
                        style={{
                          color: selected
                            ? "#C9A646"
                            : "#99958C",
                        }}
                      >
                        {String(index + 1).padStart(
                          2,
                          "0",
                        )}
                      </span>

                      <div className="min-w-0">
                        <h3
                          className="text-xl font-light tracking-[-0.025em] md:text-2xl"
                          style={{
                            color: selected
                              ? "#F5F0E7"
                              : "#0B1D35",
                          }}
                        >
                          {plan.name}
                        </h3>

                        <p
                          className="mt-2 text-[9px] uppercase tracking-[0.16em]"
                          style={{
                            color: selected
                              ? "rgba(245,240,231,0.45)"
                              : "#99958C",
                          }}
                        >
                          {plan.sessions}
                        </p>
                      </div>
                    </div>

                    <div className="ml-5 flex shrink-0 items-center gap-4">
                      <span
                        className="hidden text-sm md:block"
                        style={{
                          color: selected
                            ? "rgba(245,240,231,0.58)"
                            : "#77736A",
                        }}
                      >
                        ₹
                        {plan.price.toLocaleString(
                          "en-IN",
                        )}
                      </span>

                      <span
                        className="text-base"
                        style={{
                          color: selected
                            ? "#C9A646"
                            : "#99958C",
                        }}
                      >
                        →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* -------------------------------------------------
                SELECTED PLAN
            ------------------------------------------------- */}
            <div className="flex min-h-[620px] flex-col justify-between bg-[#122845] text-[#F5F0E7] lg:col-span-5">
              <SelectedPlan plan={activePlan} />

              <div className="border-t border-white/10 p-7 md:p-9">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                      Before GST
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      ₹
                      {activePlan.price.toLocaleString(
                        "en-IN",
                      )}
                    </p>
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                      Including GST
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      ₹
                      {activePlan.total.toLocaleString(
                        "en-IN",
                      )}
                    </p>
                  </div>
                </div>

                <a
                  href="/book"
                  className="mt-8 flex items-center justify-between bg-[#C9A646] px-5 py-4 text-[9px] uppercase tracking-[0.22em] text-[#0B1D35] transition-colors duration-300 hover:bg-[#E5D39A]"
                >
                  <span className="text-[#0B1D35]">
                    Choose this membership
                  </span>

                  <span className="text-[#0B1D35]">
                    →
                  </span>
                </a>

                <p className="mt-5 text-[8px] leading-5 text-white/25">
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

      {/* =====================================================
          DRIPLABS CIRCLE
      ===================================================== */}
      {mode === "circle" && (
        <div className="mx-auto max-w-[1600px] px-6 pb-28 pt-10 md:px-10 md:pb-40 md:pt-14 lg:px-14">
          <div className="grid gap-6 md:grid-cols-2">
            {circleMemberships.map(
              (membership, index) => (
                <motion.article
                  key={membership.slug}
                  initial={{
                    opacity: 0,
                    y: 35,
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
                    delay: index * 0.08,
                  }}
                  className="border border-[#0B1D35]/10 bg-[#EEE8DC] p-7 md:p-10 lg:p-12"
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between">
                    <span className="text-[8px] tracking-[0.24em] text-[#C9A646]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[8px] uppercase tracking-[0.2em] text-[#99958C]">
                      Monthly
                    </span>
                  </div>

                  {/* Card title */}
                  <h3 className="mt-16 max-w-lg text-[clamp(3rem,4vw,4.8rem)] font-light leading-[0.86] tracking-[-0.055em] text-[#0B1D35]">
                    {membership.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-7 max-w-xl text-sm leading-7 text-[#59616B]">
                    {membership.summary}
                  </p>

                  {/* Price */}
                  <div className="mt-12 border-t border-[#0B1D35]/10 pt-7">
                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#99958C]">
                      Monthly commitment
                    </p>

                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-[clamp(3.5rem,5vw,5.5rem)] font-light leading-none tracking-[-0.07em] text-[#0B1D35]">
                        ₹
                        {membership.monthlyPrice.toLocaleString(
                          "en-IN",
                        )}
                      </span>

                      <span className="text-[9px] uppercase tracking-[0.16em] text-[#99958C]">
                        / month
                      </span>
                    </div>

                    <p className="mt-4 text-[9px] uppercase tracking-[0.16em] text-[#77736A]">
                      {membership.term}
                    </p>
                  </div>

                  {/* CTA */}
                  <a
  href="/book"
  className="group mt-10 flex items-center justify-between border border-[#0B1D35]/25 bg-transparent px-5 py-4 text-[9px] uppercase tracking-[0.22em] text-[#0B1D35] transition-all duration-400 hover:border-[#0B1D35] hover:bg-[#0B1D35]"
>
  <span className="text-[#0B1D35] transition-colors duration-300 group-hover:text-[#F5F0E7]">
    Explore Circle
  </span>

  <span className="text-[#0B1D35] transition-colors duration-300 group-hover:text-[#C9A646]">
    →
  </span>
</a>
                </motion.article>
              ),
            )}
          </div>
        </div>
      )}

      {/* =====================================================
          FOOTNOTE
      ===================================================== */}
      <div className="mx-auto max-w-[1600px] px-6 pb-10 md:px-10 lg:px-14">
        <div className="border-t border-[#0B1D35]/10 pt-5">
          <p className="max-w-4xl text-[8px] leading-5 text-[#99958C]">
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
      className="relative flex items-center gap-4 border-r border-[#0B1D35]/10 px-5 py-5 text-[9px] uppercase tracking-[0.2em] transition-colors duration-300 last:border-r-0 md:px-8"
      style={{
        backgroundColor: active
          ? "#0B1D35"
          : "#F5F0E7",
        color: active
          ? "#F5F0E7"
          : "#0B1D35",
      }}
    >
      {active && (
        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A646]" />
      )}

      <span
        style={{
          color: active
            ? "#F5F0E7"
            : "#0B1D35",
        }}
      >
        {label}
      </span>

      <span
        className="text-[8px]"
        style={{
          color: active
            ? "#C9A646"
            : "#99958C",
        }}
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
      key={plan.slug}
      initial={{
        opacity: 0,
        y: 18,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="p-7 md:p-9 lg:p-10"
    >
      <div className="flex items-center justify-between">
        <p className="text-[8px] uppercase tracking-[0.22em] text-white/35">
          Selected membership
        </p>

        <span className="text-[8px] uppercase tracking-[0.18em] text-[#C9A646]">
          {plan.type === "unlimited"
            ? "Unlimited"
            : "Package"}
        </span>
      </div>

      <h3 className="mt-16 max-w-md text-5xl font-light leading-[0.86] tracking-[-0.06em] text-[#F5F0E7] md:text-6xl">
        {plan.name}
      </h3>

      <p className="mt-7 max-w-md text-sm leading-6 text-white/50">
        {plan.summary}
      </p>

      {plan.discount !== undefined && (
        <div className="mt-10 inline-flex items-center gap-3 border border-white/10 px-4 py-3">
          <span className="text-[8px] uppercase tracking-[0.18em] text-white/35">
            Package discount
          </span>

          <span className="text-sm text-[#C9A646]">
            {plan.discount}%
          </span>
        </div>
      )}

      {plan.gift && (
        <div className="mt-4 inline-flex items-center gap-3 border border-[#C9A646]/30 px-4 py-3">
          <span className="text-[8px] uppercase tracking-[0.18em] text-white/35">
            Longevity gift
          </span>

          <span className="text-sm text-[#C9A646]">
            {plan.gift}
          </span>
        </div>
      )}

      <div className="mt-12 border-t border-white/10 pt-6">
        <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
          Included sessions
        </p>

        <p className="mt-3 text-2xl font-light tracking-[-0.03em] text-[#F5F0E7]">
          {plan.sessions}
        </p>
      </div>
    </motion.div>
  );
}