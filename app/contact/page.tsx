"use client";

import Link from "next/link";
import { useState } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";


/* =========================================================
   DRIPLABS CONTACT
   ELECTRIC BLUE / MIDNIGHT SYSTEM
========================================================= */

const C = {
  midnight: "#020812",
  deep: "#06152B",
  ocean: "#08203A",
  oceanDeep: "#01050B",

  electric: "#0066FF",
  bright: "#1683FF",
  soft: "#4D9BFF",
  ice: "#8CCBFF",

  white: "#F7FAFF",
};


/* =========================================================
   DATA
========================================================= */

const contactRoutes = [
  {
    number: "01",
    eyebrow: "GENERAL ENQUIRY",
    title: "Talk to DRIPLABS.",
    description:
      "Have a question about DRIPLABS, our experiences, protocols or how the system works? Start here.",
    href: "#enquiry",
    action: "SEND AN ENQUIRY",
  },

  {
    number: "02",
    eyebrow: "PHYSICIAN CONSULTATION",
    title: "Begin with the physician.",
    description:
      "Explore the next step in your wellness journey with a physician-led assessment.",
    href: "/book",
    action: "BOOK A CONSULTATION",
  },

  {
    number: "03",
    eyebrow: "DRIPLABS HOME",
    title: "Bring the experience home.",
    description:
      "Ask the team about experiencing DRIPLABS through a considered home-wellness pathway.",
    href: "/experience",
    action: "EXPLORE HOME",
  },

  {
    number: "04",
    eyebrow: "PARTNERSHIPS",
    title: "Build with DRIPLABS.",
    description:
      "For physicians, clinics, distributors and other partnership enquiries.",
    href: "/partners",
    action: "EXPLORE PARTNERS",
  },
];


const interests = [
  "General Enquiry",
  "Physician Consultation",
  "DRIPLABS Home",
  "Women's Wellness",
  "Membership",
  "Partnership",
  "Other",
];


const journey = [
  {
    number: "01",
    title: "Enquiry",
    description:
      "Tell us what you would like to explore and how we can help.",
  },

  {
    number: "02",
    title: "Conversation",
    description:
      "Our team understands your goals, questions and preferred experience.",
  },

  {
    number: "03",
    title: "Physician Assessment",
    description:
      "Where relevant, the appropriate next step involves physician assessment.",
  },

  {
    number: "04",
    title: "Your Next Step",
    description:
      "Move forward with the experience or pathway appropriate to you.",
  },
];


/* =========================================================
   REVEAL
========================================================= */

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
              y: 24,
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
        amount: 0.18,
      }}
      transition={{
        duration: 0.7,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


/* =========================================================
   ICONS
========================================================= */

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 7H11"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      <path
        d="M7.5 3.5L11 7L7.5 10.5"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function ArrowDown() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 2V11"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      <path
        d="M3.5 7.5L7 11L10.5 7.5"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function MapPin() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14.5 7.3C14.5 11.2 9 15.6 9 15.6S3.5 11.2 3.5 7.3C3.5 4.3 5.95 2 9 2C12.05 2 14.5 4.3 14.5 7.3Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />

      <circle
        cx="9"
        cy="7.2"
        r="1.7"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
}


/* =========================================================
   PAGE
========================================================= */

export default function ContactPage() {
  const reducedMotion = useReducedMotion();

  const [submitted, setSubmitted] =
    useState(false);

  const [selectedInterest, setSelectedInterest] =
    useState("General Enquiry");


  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    /*
      UI-only submission state.

      Connect this handler to your backend/API/form
      provider when the submission endpoint is ready.
    */

    setSubmitted(true);
  }


  return (
    <main
      className={[
        "min-h-screen",
        "overflow-hidden",
        "bg-[#020812]",
        "text-[#F7FAFF]",
      ].join(" ")}
    >

      <Navbar />


      {/* =====================================================
          01 — HERO
      ===================================================== */}

      <section
        className={[
          "relative min-h-[88svh]",
          "overflow-hidden",
          "bg-[#020812]",
        ].join(" ")}
      >

        {/* Ambient atmosphere */}

        <div
          className={[
            "pointer-events-none",
            "absolute",
            "left-1/2",
            "top-[8%]",
            "h-[620px]",
            "w-[620px]",
            "-translate-x-1/2",
            "rounded-full",
            "bg-[#0066FF]/[0.10]",
            "blur-[140px]",
          ].join(" ")}
        />


        <div
          className={[
            "pointer-events-none",
            "absolute",
            "right-[-15%]",
            "top-[18%]",
            "h-[520px]",
            "w-[520px]",
            "rounded-full",
            "bg-[#1683FF]/[0.055]",
            "blur-[120px]",
          ].join(" ")}
        />


        {/* Grid */}

        <div
          className={[
            "pointer-events-none",
            "absolute inset-0",
            "opacity-60",
            "bg-[linear-gradient(to_right,rgba(140,203,255,.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(140,203,255,.035)_1px,transparent_1px)]",
            "bg-[size:90px_90px]",
          ].join(" ")}
        />


        {/* Vertical centre line */}

        <div
          className={[
            "pointer-events-none",
            "absolute",
            "bottom-0",
            "left-1/2",
            "top-0",
            "hidden",
            "w-px",
            "bg-gradient-to-b",
            "from-transparent",
            "via-[#4D9BFF]/10",
            "to-transparent",
            "lg:block",
          ].join(" ")}
        />


        <div
          className={[
            "relative",
            "mx-auto",
            "flex min-h-[88svh]",
            "max-w-[1800px]",
            "flex-col",
            "justify-end",
            "px-5",
            "pb-12",
            "pt-32",
            "sm:px-8",
            "md:px-10",
            "md:pb-16",
            "lg:px-14",
            "lg:pb-20",
          ].join(" ")}
        >

          <Reveal>

            <div className="flex items-center gap-4">

              <span className="h-px w-10 bg-[#0066FF]" />

              <p
                className={[
                  "text-[8px]",
                  "font-medium",
                  "uppercase",
                  "tracking-[0.32em]",
                  "text-[#4D9BFF]",
                ].join(" ")}
              >
                01 — CONTACT DRIPLABS
              </p>

            </div>


            <div
              className={[
                "mt-8",
                "grid gap-10",
                "md:grid-cols-12",
                "md:items-end",
              ].join(" ")}
            >

              <div className="md:col-span-8">

                <h1
                  className={[
                    "max-w-[1050px]",
                    "font-[var(--font-heading)]",
                    "text-[clamp(4.2rem,10vw,10rem)]",
                    "font-light",
                    "leading-[0.78]",
                    "tracking-[-0.075em]",
                    "text-[#F7FAFF]",
                  ].join(" ")}
                >
                  Begin the
                  <br />
                  conversation.
                </h1>

              </div>


              <div
                className={[
                  "md:col-span-4",
                  "md:pb-3",
                ].join(" ")}
              >

                <p
                  className={[
                    "max-w-md",
                    "text-[13px]",
                    "leading-7",
                    "text-white/48",
                    "md:text-[14px]",
                  ].join(" ")}
                >
                  Whether you are exploring your first
                  DRIPLABS experience, looking for a
                  physician consultation, or interested in
                  building with us, start here.
                </p>


                <a
                  href="#enquiry"
                  className={[
                    "group",
                    "mt-7",
                    "inline-flex",
                    "items-center",
                    "gap-4",
                    "text-[8px]",
                    "font-medium",
                    "uppercase",
                    "tracking-[0.22em]",
                    "text-[#8CCBFF]",
                  ].join(" ")}
                >
                  START AN ENQUIRY

                  <span
                    className={[
                      "transition-transform",
                      "duration-300",
                      "group-hover:translate-y-1",
                    ].join(" ")}
                  >
                    <ArrowDown />
                  </span>
                </a>

              </div>

            </div>

          </Reveal>


          {/* Hero metadata */}

          <div
            className={[
              "mt-20",
              "grid grid-cols-2",
              "border-t border-white/10",
              "md:grid-cols-4",
            ].join(" ")}
          >

            {[
              ["01", "GENERAL ENQUIRY"],
              ["02", "CONSULTATION"],
              ["03", "HOME EXPERIENCE"],
              ["04", "PARTNERSHIPS"],
            ].map(
              ([number, label]) => (
                <div
                  key={number}
                  className={[
                    "border-b border-white/10",
                    "py-5",
                    "md:border-b-0",
                    "md:border-r",
                    "md:last:border-r-0",
                    "md:px-6",
                    "md:first:pl-0",
                  ].join(" ")}
                >

                  <p className="text-[8px] tracking-[0.2em] text-[#4D9BFF]">
                    {number}
                  </p>

                  <p
                    className={[
                      "mt-2",
                      "text-[8px]",
                      "uppercase",
                      "tracking-[0.18em]",
                      "text-white/40",
                    ].join(" ")}
                  >
                    {label}
                  </p>

                </div>
              ),
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          02 — CONTACT ROUTES
      ===================================================== */}

      <section
        className={[
          "relative",
          "border-t border-white/10",
          "bg-[#06152B]",
        ].join(" ")}
      >

        <div
          className={[
            "mx-auto",
            "max-w-[1800px]",
            "px-5",
            "py-20",
            "sm:px-8",
            "md:px-10",
            "md:py-28",
            "lg:px-14",
            "lg:py-36",
          ].join(" ")}
        >

          <Reveal>

            <div
              className={[
                "grid gap-8",
                "lg:grid-cols-12",
                "lg:items-end",
              ].join(" ")}
            >

              <div className="lg:col-span-7">

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-[#0066FF]" />

                  <p
                    className={[
                      "text-[8px]",
                      "uppercase",
                      "tracking-[0.3em]",
                      "text-[#4D9BFF]",
                    ].join(" ")}
                  >
                    02 — CHOOSE YOUR PATH
                  </p>

                </div>


                <h2
                  className={[
                    "mt-7",
                    "max-w-5xl",
                    "font-[var(--font-heading)]",
                    "text-[clamp(3.4rem,7vw,7rem)]",
                    "font-light",
                    "leading-[0.82]",
                    "tracking-[-0.065em]",
                    "text-white",
                  ].join(" ")}
                >
                  One conversation.
                  <br />
                  Different ways forward.
                </h2>

              </div>


              <div className="lg:col-span-5">

                <p
                  className={[
                    "max-w-md",
                    "text-[13px]",
                    "leading-7",
                    "text-white/42",
                  ].join(" ")}
                >
                  Choose the route closest to what
                  you are looking for. You can always
                  start with a general enquiry.
                </p>

              </div>

            </div>

          </Reveal>


          <div
            className={[
              "mt-16",
              "grid",
              "gap-px",
              "overflow-hidden",
              "border border-white/10",
              "bg-white/10",
              "md:grid-cols-2",
            ].join(" ")}
          >

            {contactRoutes.map(
              (route, index) => (
                <Reveal
                  key={route.number}
                  delay={index * 0.06}
                >

                  <Link
                    href={route.href}
                    className={[
                      "group",
                      "relative",
                      "block",
                      "min-h-[330px]",
                      "overflow-hidden",
                      "bg-[#020812]",
                      "p-7",
                      "transition-all duration-500",
                      "hover:bg-[#08203A]",
                      "sm:p-9",
                      "lg:p-11",
                    ].join(" ")}
                  >

                    {/* blue hover glow */}

                    <div
                      className={[
                        "pointer-events-none",
                        "absolute",
                        "right-[-100px]",
                        "top-[-100px]",
                        "h-[280px]",
                        "w-[280px]",
                        "rounded-full",
                        "bg-[#0066FF]/[0.12]",
                        "opacity-0",
                        "blur-[70px]",
                        "transition-opacity duration-700",
                        "group-hover:opacity-100",
                      ].join(" ")}
                    />


                    <div
                      className={[
                        "relative",
                        "flex h-full",
                        "flex-col",
                      ].join(" ")}
                    >

                      <div
                        className={[
                          "flex",
                          "items-center",
                          "justify-between",
                        ].join(" ")}
                      >

                        <span
                          className={[
                            "text-[8px]",
                            "tracking-[0.2em]",
                            "text-[#4D9BFF]",
                          ].join(" ")}
                        >
                          {route.number}
                        </span>


                        <span
                          className={[
                            "flex h-10 w-10",
                            "items-center justify-center",
                            "rounded-full",
                            "border border-white/10",
                            "text-white/45",
                            "transition-all duration-400",
                            "group-hover:border-[#1683FF]/60",
                            "group-hover:bg-[#0066FF]",
                            "group-hover:text-white",
                          ].join(" ")}
                        >
                          <ArrowRight />
                        </span>

                      </div>


                      <div className="mt-auto">

                        <p
                          className={[
                            "text-[8px]",
                            "uppercase",
                            "tracking-[0.24em]",
                            "text-white/30",
                          ].join(" ")}
                        >
                          {route.eyebrow}
                        </p>


                        <h3
                          className={[
                            "mt-4",
                            "max-w-lg",
                            "font-[var(--font-heading)]",
                            "text-[clamp(2rem,3.5vw,3.5rem)]",
                            "font-light",
                            "leading-[0.9]",
                            "tracking-[-0.045em]",
                            "text-white",
                          ].join(" ")}
                        >
                          {route.title}
                        </h3>


                        <p
                          className={[
                            "mt-5",
                            "max-w-md",
                            "text-[11px]",
                            "leading-6",
                            "text-white/38",
                          ].join(" ")}
                        >
                          {route.description}
                        </p>


                        <div
                          className={[
                            "mt-7",
                            "text-[8px]",
                            "font-medium",
                            "uppercase",
                            "tracking-[0.2em]",
                            "text-[#4D9BFF]",
                            "transition-colors",
                            "group-hover:text-[#8CCBFF]",
                          ].join(" ")}
                        >
                          {route.action}
                        </div>

                      </div>

                    </div>

                  </Link>

                </Reveal>
              ),
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          03 — ENQUIRY FORM
      ===================================================== */}

      <section
        id="enquiry"
        className={[
          "relative",
          "bg-[#020812]",
          "scroll-mt-20",
        ].join(" ")}
      >

        <div
          className={[
            "mx-auto",
            "max-w-[1800px]",
            "px-5",
            "py-20",
            "sm:px-8",
            "md:px-10",
            "md:py-28",
            "lg:px-14",
            "lg:py-36",
          ].join(" ")}
        >

          <div
            className={[
              "grid gap-16",
              "lg:grid-cols-12",
              "lg:gap-20",
            ].join(" ")}
          >

            {/* LEFT */}

            <Reveal
              className="lg:col-span-5"
            >

              <div className="sticky top-28">

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-[#0066FF]" />

                  <p
                    className={[
                      "text-[8px]",
                      "uppercase",
                      "tracking-[0.3em]",
                      "text-[#4D9BFF]",
                    ].join(" ")}
                  >
                    03 — SEND AN ENQUIRY
                  </p>

                </div>


                <h2
                  className={[
                    "mt-7",
                    "max-w-xl",
                    "font-[var(--font-heading)]",
                    "text-[clamp(3.5rem,7vw,7rem)]",
                    "font-light",
                    "leading-[0.8]",
                    "tracking-[-0.065em]",
                    "text-white",
                  ].join(" ")}
                >
                  Tell us
                  <br />
                  what you're
                  <br />
                  exploring.
                </h2>


                <p
                  className={[
                    "mt-8",
                    "max-w-md",
                    "text-[13px]",
                    "leading-7",
                    "text-white/40",
                  ].join(" ")}
                >
                  Share a little about what brought
                  you here. Our team can help direct
                  your enquiry to the appropriate
                  next step.
                </p>


                <div
                  className={[
                    "mt-12",
                    "border-t border-white/10",
                    "pt-7",
                  ].join(" ")}
                >

                  <p
                    className={[
                      "text-[8px]",
                      "uppercase",
                      "tracking-[0.2em]",
                      "text-[#4D9BFF]",
                    ].join(" ")}
                  >
                    PHYSICIAN-LED
                  </p>

                  <p
                    className={[
                      "mt-3",
                      "max-w-sm",
                      "text-[11px]",
                      "leading-6",
                      "text-white/32",
                    ].join(" ")}
                  >
                    Where applicable, protocol selection,
                    dosage and administration remain
                    subject to physician assessment.
                  </p>

                </div>

              </div>

            </Reveal>


            {/* FORM */}

            <Reveal
              delay={0.08}
              className="lg:col-span-7"
            >

              {submitted ? (
                <div
                  className={[
                    "flex min-h-[600px]",
                    "flex-col",
                    "items-center",
                    "justify-center",
                    "border border-white/10",
                    "bg-[#06152B]",
                    "px-8",
                    "text-center",
                  ].join(" ")}
                >

                  <div
                    className={[
                      "flex h-16 w-16",
                      "items-center justify-center",
                      "rounded-full",
                      "border border-[#1683FF]/50",
                      "bg-[#0066FF]/10",
                      "text-[#8CCBFF]",
                    ].join(" ")}
                  >
                    <span className="text-xl">
                      ✓
                    </span>
                  </div>


                  <p
                    className={[
                      "mt-8",
                      "text-[8px]",
                      "uppercase",
                      "tracking-[0.3em]",
                      "text-[#4D9BFF]",
                    ].join(" ")}
                  >
                    ENQUIRY RECEIVED
                  </p>


                  <h3
                    className={[
                      "mt-5",
                      "font-[var(--font-heading)]",
                      "text-[clamp(2.5rem,5vw,5rem)]",
                      "font-light",
                      "leading-[0.85]",
                      "tracking-[-0.055em]",
                      "text-white",
                    ].join(" ")}
                  >
                    Thank you.
                  </h3>


                  <p
                    className={[
                      "mt-6",
                      "max-w-md",
                      "text-[12px]",
                      "leading-6",
                      "text-white/40",
                    ].join(" ")}
                  >
                    Your enquiry has been captured.
                    Connect this form to your preferred
                    backend or CRM to complete the
                    submission workflow.
                  </p>


                  <button
                    type="button"
                    onClick={() =>
                      setSubmitted(false)
                    }
                    className={[
                      "mt-8",
                      "text-[8px]",
                      "uppercase",
                      "tracking-[0.2em]",
                      "text-[#4D9BFF]",
                      "underline",
                      "underline-offset-4",
                    ].join(" ")}
                  >
                    SEND ANOTHER ENQUIRY
                  </button>

                </div>
              ) : (

                <form
                  onSubmit={handleSubmit}
                  className={[
                    "border border-white/10",
                    "bg-[#06152B]",
                    "p-6",
                    "sm:p-8",
                    "lg:p-10",
                  ].join(" ")}
                >

                  {/* FORM TOP */}

                  <div
                    className={[
                      "flex flex-col gap-4",
                      "border-b border-white/10",
                      "pb-7",
                      "sm:flex-row",
                      "sm:items-end",
                      "sm:justify-between",
                    ].join(" ")}
                  >

                    <div>

                      <p
                        className={[
                          "text-[8px]",
                          "uppercase",
                          "tracking-[0.2em]",
                          "text-[#4D9BFF]",
                        ].join(" ")}
                      >
                        YOUR DETAILS
                      </p>

                      <p
                        className={[
                          "mt-2",
                          "text-[11px]",
                          "text-white/35",
                        ].join(" ")}
                      >
                        All fields marked * are required.
                      </p>

                    </div>


                    <span
                      className={[
                        "text-[8px]",
                        "uppercase",
                        "tracking-[0.18em]",
                        "text-white/20",
                      ].join(" ")}
                    >
                      DRIPLABS / ENQUIRY
                    </span>

                  </div>


                  {/* NAME */}

                  <div
                    className={[
                      "grid gap-8",
                      "py-8",
                      "sm:grid-cols-2",
                    ].join(" ")}
                  >

                    <Field
                      label="First name"
                      name="firstName"
                      required
                    />

                    <Field
                      label="Last name"
                      name="lastName"
                      required
                    />

                  </div>


                  {/* CONTACT */}

                  <div
                    className={[
                      "grid gap-8",
                      "border-t border-white/10",
                      "py-8",
                      "sm:grid-cols-2",
                    ].join(" ")}
                  >

                    <Field
                      label="Email address"
                      name="email"
                      type="email"
                      required
                    />

                    <Field
                      label="Phone number"
                      name="phone"
                      type="tel"
                      required
                    />

                  </div>


                  {/* LOCATION */}

                  <div
                    className={[
                      "grid gap-8",
                      "border-t border-white/10",
                      "py-8",
                      "sm:grid-cols-2",
                    ].join(" ")}
                  >

                    <Field
                      label="City / location"
                      name="location"
                      required
                    />


                    <div>

                      <label
                        htmlFor="interest"
                        className={[
                          "mb-3 block",
                          "text-[8px]",
                          "uppercase",
                          "tracking-[0.18em]",
                          "text-white/35",
                        ].join(" ")}
                      >
                        I am interested in
                      </label>


                      <div className="relative">

                        <select
                          id="interest"
                          name="interest"
                          value={selectedInterest}
                          onChange={(event) =>
                            setSelectedInterest(
                              event.target.value,
                            )
                          }
                          className={[
                            "h-12 w-full",
                            "appearance-none",
                            "border-b border-white/15",
                            "bg-transparent",
                            "pr-8",
                            "text-[12px]",
                            "text-white",
                            "outline-none",
                            "transition-colors",
                            "focus:border-[#1683FF]",
                          ].join(" ")}
                        >

                          {interests.map(
                            (interest) => (
                              <option
                                key={interest}
                                value={interest}
                                className="bg-[#06152B]"
                              >
                                {interest}
                              </option>
                            ),
                          )}

                        </select>


                        <span
                          className={[
                            "pointer-events-none",
                            "absolute right-0 top-1/2",
                            "-translate-y-1/2",
                            "text-[#4D9BFF]",
                          ].join(" ")}
                        >
                          <ArrowDown />
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* MESSAGE */}

                  <div
                    className={[
                      "border-t border-white/10",
                      "py-8",
                    ].join(" ")}
                  >

                    <label
                      htmlFor="message"
                      className={[
                        "mb-3 block",
                        "text-[8px]",
                        "uppercase",
                        "tracking-[0.18em]",
                        "text-white/35",
                      ].join(" ")}
                    >
                      How can we help?
                    </label>


                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us a little about what you're looking for..."
                      className={[
                        "w-full",
                        "resize-none",
                        "border-b border-white/15",
                        "bg-transparent",
                        "py-3",
                        "text-[12px]",
                        "leading-6",
                        "text-white",
                        "outline-none",
                        "placeholder:text-white/20",
                        "focus:border-[#1683FF]",
                      ].join(" ")}
                    />

                  </div>


                  {/* CONSENT */}

                  <label
                    className={[
                      "flex items-start",
                      "gap-3",
                      "border-t border-white/10",
                      "pt-7",
                    ].join(" ")}
                  >

                    <input
                      type="checkbox"
                      required
                      className={[
                        "mt-0.5",
                        "h-4 w-4",
                        "accent-[#0066FF]",
                      ].join(" ")}
                    />

                    <span
                      className={[
                        "text-[10px]",
                        "leading-5",
                        "text-white/32",
                      ].join(" ")}
                    >
                      I agree to be contacted by
                      DRIPLABS regarding this enquiry.
                    </span>

                  </label>


                  {/* SUBMIT */}

                  <div className="mt-8">

                    <button
                      type="submit"
                      className={[
                        "group",
                        "flex w-full",
                        "items-center",
                        "justify-between",
                        "bg-[#0066FF]",
                        "px-6",
                        "py-5",
                        "text-left",
                        "transition-all duration-500",
                        "hover:bg-[#1683FF]",
                        "hover:shadow-[0_15px_50px_rgba(0,102,255,.22)]",
                      ].join(" ")}
                    >

                      <span
                        className={[
                          "text-[8px]",
                          "font-medium",
                          "uppercase",
                          "tracking-[0.22em]",
                          "text-white",
                        ].join(" ")}
                      >
                        SEND ENQUIRY
                      </span>


                      <span
                        className={[
                          "transition-transform duration-300",
                          "group-hover:translate-x-1",
                        ].join(" ")}
                      >
                        <ArrowRight />
                      </span>

                    </button>

                  </div>

                </form>

              )}

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          04 — WHAT HAPPENS NEXT
      ===================================================== */}

      <section
        className={[
          "relative",
          "overflow-hidden",
          "border-t border-white/10",
          "bg-[#08203A]",
        ].join(" ")}
      >

        <div
          className={[
            "absolute",
            "right-[-10%]",
            "top-1/2",
            "h-[500px]",
            "w-[500px]",
            "-translate-y-1/2",
            "rounded-full",
            "bg-[#0066FF]/[0.08]",
            "blur-[120px]",
          ].join(" ")}
        />


        <div
          className={[
            "relative",
            "mx-auto",
            "max-w-[1800px]",
            "px-5",
            "py-20",
            "sm:px-8",
            "md:px-10",
            "md:py-28",
            "lg:px-14",
            "lg:py-36",
          ].join(" ")}
        >

          <Reveal>

            <div
              className={[
                "grid gap-10",
                "lg:grid-cols-12",
              ].join(" ")}
            >

              <div className="lg:col-span-5">

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-[#1683FF]" />

                  <p
                    className={[
                      "text-[8px]",
                      "uppercase",
                      "tracking-[0.3em]",
                      "text-[#8CCBFF]",
                    ].join(" ")}
                  >
                    04 — WHAT HAPPENS NEXT
                  </p>

                </div>


                <h2
                  className={[
                    "mt-7",
                    "font-[var(--font-heading)]",
                    "text-[clamp(3.5rem,7vw,7rem)]",
                    "font-light",
                    "leading-[0.8]",
                    "tracking-[-0.065em]",
                  ].join(" ")}
                >
                  A considered
                  <br />
                  next step.
                </h2>

              </div>


              <div className="lg:col-span-7">

                <p
                  className={[
                    "max-w-xl",
                    "text-[13px]",
                    "leading-7",
                    "text-white/42",
                  ].join(" ")}
                >
                  Every enquiry starts with understanding
                  what you are looking for. From there,
                  the appropriate route can be considered.
                </p>

              </div>

            </div>

          </Reveal>


          <div
            className={[
              "mt-16",
              "grid",
              "border-t border-white/10",
              "md:grid-cols-4",
            ].join(" ")}
          >

            {journey.map(
              (step, index) => (
                <Reveal
                  key={step.number}
                  delay={index * 0.07}
                >

                  <div
                    className={[
                      "relative",
                      "border-b border-white/10",
                      "py-8",
                      "md:min-h-[280px]",
                      "md:border-b-0",
                      "md:border-r",
                      "md:px-7",
                      "md:first:pl-0",
                      "md:last:border-r-0",
                    ].join(" ")}
                  >

                    <span
                      className={[
                        "text-[8px]",
                        "tracking-[0.2em]",
                        "text-[#4D9BFF]",
                      ].join(" ")}
                    >
                      {step.number}
                    </span>


                    <h3
                      className={[
                        "mt-12",
                        "font-[var(--font-heading)]",
                        "text-3xl",
                        "font-light",
                        "tracking-[-0.04em]",
                      ].join(" ")}
                    >
                      {step.title}
                    </h3>


                    <p
                      className={[
                        "mt-4",
                        "max-w-[220px]",
                        "text-[10px]",
                        "leading-5",
                        "text-white/35",
                      ].join(" ")}
                    >
                      {step.description}
                    </p>


                    {index < journey.length - 1 && (
                      <span
                        className={[
                          "absolute",
                          "right-5",
                          "top-8",
                          "hidden",
                          "text-[#1683FF]/60",
                          "md:block",
                        ].join(" ")}
                      >
                        →
                      </span>
                    )}

                  </div>

                </Reveal>
              ),
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          05 — LOCATIONS
      ===================================================== */}

      <section
        className={[
          "relative",
          "border-t border-white/10",
          "bg-[#020812]",
        ].join(" ")}
      >

        <div
          className={[
            "mx-auto",
            "max-w-[1800px]",
            "px-5",
            "py-20",
            "sm:px-8",
            "md:px-10",
            "md:py-28",
            "lg:px-14",
            "lg:py-32",
          ].join(" ")}
        >

          <div
            className={[
              "grid gap-12",
              "lg:grid-cols-12",
              "lg:items-end",
            ].join(" ")}
          >

            <Reveal className="lg:col-span-8">

              <div className="flex items-center gap-4">

                <span className="h-px w-10 bg-[#0066FF]" />

                <p
                  className={[
                    "text-[8px]",
                    "uppercase",
                    "tracking-[0.3em]",
                    "text-[#4D9BFF]",
                  ].join(" ")}
                >
                  05 — FIND DRIPLABS
                </p>

              </div>


              <h2
                className={[
                  "mt-7",
                  "font-[var(--font-heading)]",
                  "text-[clamp(3.5rem,7vw,7rem)]",
                  "font-light",
                  "leading-[0.8]",
                  "tracking-[-0.065em]",
                ].join(" ")}
              >
                Find your
                <br />
                nearest centre.
              </h2>

            </Reveal>


            <Reveal
              delay={0.08}
              className="lg:col-span-4"
            >

              <p
                className={[
                  "max-w-md",
                  "text-[13px]",
                  "leading-7",
                  "text-white/40",
                ].join(" ")}
              >
                Explore DRIPLABS locations and
                discover the experience available
                closest to you.
              </p>


              <Link
                href="/locations"
                className={[
                  "group",
                  "mt-7",
                  "inline-flex",
                  "items-center",
                  "gap-4",
                  "border-b border-[#1683FF]/50",
                  "pb-3",
                  "text-[8px]",
                  "font-medium",
                  "uppercase",
                  "tracking-[0.22em]",
                  "text-[#8CCBFF]",
                ].join(" ")}
              >

                <MapPin />

                EXPLORE LOCATIONS

                <span
                  className={[
                    "transition-transform",
                    "duration-300",
                    "group-hover:translate-x-1",
                  ].join(" ")}
                >
                  <ArrowRight />
                </span>

              </Link>

            </Reveal>

          </div>


          {/* location visual */}

          <Reveal
            delay={0.1}
            className="mt-16"
          >

            <Link
              href="/locations"
              className={[
                "group",
                "relative",
                "block",
                "min-h-[360px]",
                "overflow-hidden",
                "border border-white/10",
                "bg-[#06152B]",
              ].join(" ")}
            >

              {/* radial field */}

              <div
                className={[
                  "absolute inset-0",
                  "bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,.14),transparent_42%)]",
                ].join(" ")}
              />


              {/* grid */}

              <div
                className={[
                  "absolute inset-0",
                  "bg-[linear-gradient(to_right,rgba(140,203,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(140,203,255,.04)_1px,transparent_1px)]",
                  "bg-[size:70px_70px]",
                ].join(" ")}
              />


              {/* central marker */}

              <div
                className={[
                  "absolute",
                  "left-1/2",
                  "top-1/2",
                  "-translate-x-1/2",
                  "-translate-y-1/2",
                ].join(" ")}
              >

                <div
                  className={[
                    "flex h-24 w-24",
                    "items-center justify-center",
                    "rounded-full",
                    "border border-[#1683FF]/50",
                    "bg-[#0066FF]/10",
                    "shadow-[0_0_100px_rgba(0,102,255,.18)]",
                  ].join(" ")}
                >

                  <div
                    className={[
                      "flex h-3 w-3",
                      "rounded-full",
                      "bg-[#4D9BFF]",
                      "shadow-[0_0_30px_rgba(77,155,255,.8)]",
                    ].join(" ")}
                  />

                </div>

              </div>


              {/* copy */}

              <div
                className={[
                  "absolute",
                  "bottom-0",
                  "left-0",
                  "right-0",
                  "flex",
                  "items-end",
                  "justify-between",
                  "gap-8",
                  "bg-gradient-to-t from-[#020812] via-[#020812]/80 to-transparent",
                  "p-7",
                  "pt-28",
                  "sm:p-9",
                  "sm:pt-32",
                ].join(" ")}
              >

                <div>

                  <p
                    className={[
                      "text-[8px]",
                      "uppercase",
                      "tracking-[0.22em]",
                      "text-[#4D9BFF]",
                    ].join(" ")}
                  >
                    DRIPLABS LOCATIONS
                  </p>

                  <p
                    className={[
                      "mt-3",
                      "font-[var(--font-heading)]",
                      "text-3xl",
                      "font-light",
                      "tracking-[-0.04em]",
                    ].join(" ")}
                  >
                    Explore the network.
                  </p>

                </div>


                <span
                  className={[
                    "flex h-12 w-12",
                    "shrink-0",
                    "items-center justify-center",
                    "rounded-full",
                    "border border-white/15",
                    "text-white/60",
                    "transition-all duration-300",
                    "group-hover:border-[#1683FF]",
                    "group-hover:bg-[#0066FF]",
                    "group-hover:text-white",
                  ].join(" ")}
                >
                  <ArrowRight />
                </span>

              </div>

            </Link>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          06 — FINAL CTA
      ===================================================== */}

      <section
        className={[
          "relative",
          "overflow-hidden",
          "border-t border-white/10",
          "bg-[#06152B]",
        ].join(" ")}
      >

        <div
          className={[
            "pointer-events-none",
            "absolute",
            "left-1/2",
            "top-1/2",
            "h-[600px]",
            "w-[600px]",
            "-translate-x-1/2",
            "-translate-y-1/2",
            "rounded-full",
            "bg-[#0066FF]/[0.08]",
            "blur-[140px]",
          ].join(" ")}
        />


        <div
          className={[
            "relative",
            "mx-auto",
            "max-w-[1800px]",
            "px-5",
            "py-24",
            "sm:px-8",
            "md:px-10",
            "md:py-32",
            "lg:px-14",
            "lg:py-40",
          ].join(" ")}
        >

          <Reveal>

            <div
              className={[
                "grid gap-12",
                "lg:grid-cols-12",
                "lg:items-end",
              ].join(" ")}
            >

              <div className="lg:col-span-8">

                <p
                  className={[
                    "text-[8px]",
                    "uppercase",
                    "tracking-[0.3em]",
                    "text-[#4D9BFF]",
                  ].join(" ")}
                >
                  YOUR NEXT STEP
                </p>


                <h2
                  className={[
                    "mt-7",
                    "max-w-5xl",
                    "font-[var(--font-heading)]",
                    "text-[clamp(3.7rem,8vw,8rem)]",
                    "font-light",
                    "leading-[0.8]",
                    "tracking-[-0.07em]",
                  ].join(" ")}
                >
                  Begin with a
                  <br />
                  physician
                  <br />
                  conversation.
                </h2>

              </div>


              <div className="lg:col-span-4">

                <p
                  className={[
                    "max-w-md",
                    "text-[13px]",
                    "leading-7",
                    "text-white/40",
                  ].join(" ")}
                >
                  Ready to explore DRIPLABS?
                  Take the next step and begin
                  your journey.
                </p>


                <Link
                  href="/book"
                  className={[
                    "group",
                    "mt-8",
                    "inline-flex",
                    "w-full",
                    "items-center",
                    "justify-between",
                    "bg-[#0066FF]",
                    "px-6",
                    "py-5",
                    "text-[8px]",
                    "font-medium",
                    "uppercase",
                    "tracking-[0.22em]",
                    "text-white",
                    "transition-all duration-500",
                    "hover:bg-[#1683FF]",
                    "hover:shadow-[0_15px_50px_rgba(0,102,255,.22)]",
                    "sm:w-auto",
                    "sm:min-w-[280px]",
                  ].join(" ")}
                >

                  BEGIN YOUR JOURNEY

                  <span
                    className={[
                      "transition-transform",
                      "duration-300",
                      "group-hover:translate-x-1",
                    ].join(" ")}
                  >
                    <ArrowRight />
                  </span>

                </Link>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      <Footer />

    </main>
  );
}


/* =========================================================
   FORM FIELD
========================================================= */

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className={[
          "mb-3 block",
          "text-[8px]",
          "uppercase",
          "tracking-[0.18em]",
          "text-white/35",
        ].join(" ")}
      >
        {label}
        {required && (
          <span className="ml-1 text-[#4D9BFF]">
            *
          </span>
        )}
      </label>


      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={[
          "h-12 w-full",
          "border-b border-white/15",
          "bg-transparent",
          "text-[12px]",
          "text-white",
          "outline-none",
          "transition-colors duration-300",
          "placeholder:text-white/20",
          "focus:border-[#1683FF]",
        ].join(" ")}
      />

    </div>
  );
}