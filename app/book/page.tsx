"use client";

import {
  FormEvent,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

/* =========================================================
   TYPES
========================================================= */

type Location = {
  id: string;
  city: string;
  region: string;
  country: string;
  status: "active" | "expansion";
  phase: 1 | 2;
  type: "Central Location" | "Expansion Market";
  address: string | null;
  landmark: string | null;
  phone: string;
  bookingEnabled: boolean;
  services: {
    clinic: boolean;
    atHome: boolean;
    nadx: boolean;
  };
};

type Protocol = {
  id: string;
  slug: string;
  number: number;
  name: string;
  family: string;
  category: string;
  shortDescription: string;
  description: string;
  duration: string;
  price: number | null;
  image: string;
  benefits: string[];
  evidenceTier: "established" | "adjunctive" | "emerging";
  active: boolean;
};

type Step = 1 | 2 | 3 | 4 | 5;

const steps = [
  { number: 1, label: "Location" },
  { number: 2, label: "Protocol" },
  { number: 3, label: "Schedule" },
  { number: 4, label: "Membership" },
  { number: 5, label: "Details" },
];

const membershipOptions = [
  "No membership",
  "Essential Start",
  "Signature Glow",
  "Unlimited Quarterly",
  "Performance Edit",
  "Longevity Starter",
  "Unlimited Half-Year",
  "Elite Circle",
  "Prestige Longevity",
  "Unlimited Annual",
  "DripLabs Circle — Essential",
  "DripLabs Circle — Longevity",
];

const timeOptions = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

/* =========================================================
   ICONS
========================================================= */

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h13M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowLeft({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M19 12H6M11 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Check({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m5 12 4 4L19 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function BookPage() {
  const shouldReduceMotion = useReducedMotion();

  const [locations, setLocations] = useState<Location[]>([]);
  const [protocols, setProtocols] = useState<Protocol[]>([]);

  const [step, setStep] = useState<Step>(1);

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedProtocol, setSelectedProtocol] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [membership, setMembership] =
    useState("No membership");

  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [bookingReference, setBookingReference] =
    useState("");

  /* =========================================================
     LOAD BOOKING DATA
     
     IMPORTANT:
     /api/locations returns { data: [...] }
     /api/protocols returns { data: [...] }
  ========================================================= */

  useEffect(() => {
    let mounted = true;

    async function loadData() {
      try {
        setLoading(true);
        setError("");

        const [
          locationsResponse,
          protocolsResponse,
        ] = await Promise.all([
          fetch("/api/locations", {
            cache: "no-store",
          }),
          fetch("/api/protocols", {
            cache: "no-store",
          }),
        ]);

        if (!locationsResponse.ok) {
          throw new Error(
            "Unable to load DripLabs locations."
          );
        }

        if (!protocolsResponse.ok) {
          throw new Error(
            "Unable to load DripLabs protocols."
          );
        }

        const locationsData =
          await locationsResponse.json();

        const protocolsData =
          await protocolsResponse.json();

        if (!mounted) return;

        /*
         * THE IMPORTANT FIX:
         *
         * The APIs return:
         *
         * {
         *   data: [...]
         * }
         *
         * not:
         *
         * [...]
         */

        const activeLocations = Array.isArray(
          locationsData.data
        )
          ? locationsData.data.filter(
              (location: Location) =>
                location.bookingEnabled
            )
          : [];

        const activeProtocols = Array.isArray(
          protocolsData.data
        )
          ? protocolsData.data.filter(
              (protocol: Protocol) =>
                protocol.active
            )
          : [];

        setLocations(activeLocations);
        setProtocols(activeProtocols);
      } catch (err) {
        console.error(
          "Booking data error:",
          err
        );

        if (mounted) {
          setError(
            err instanceof Error
              ? err.message
              : "We couldn't load the booking options."
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  /* =========================================================
     ACTIVE SELECTIONS
  ========================================================= */

  const activeLocation = useMemo(
    () =>
      locations.find(
        (location) =>
          location.id === selectedLocation
      ) ?? null,
    [locations, selectedLocation]
  );

  const activeProtocol = useMemo(
    () =>
      protocols.find(
        (protocol) =>
          protocol.slug === selectedProtocol
      ) ?? null,
    [protocols, selectedProtocol]
  );

  /* =========================================================
     DATE
  ========================================================= */

  const minDate = useMemo(() => {
    const date = new Date();

    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() + 1);

    return [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(
        2,
        "0"
      ),
      String(date.getDate()).padStart(
        2,
        "0"
      ),
    ].join("-");
  }, []);

  const formattedDate = selectedDate
    ? new Intl.DateTimeFormat("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(
        new Date(`${selectedDate}T12:00:00`)
      )
    : "";

  /* =========================================================
     PRICE
  ========================================================= */

  function formatPrice(price: number | null) {
    if (typeof price !== "number") {
      return "Price on assessment";
    }

    return `₹${price.toLocaleString("en-IN")}`;
  }

  /* =========================================================
     VALIDATION
  ========================================================= */

  function validateStep(
    currentStep: Step
  ) {
    setError("");

    if (
      currentStep === 1 &&
      !selectedLocation
    ) {
      setError(
        "Please select a location to continue."
      );
      return false;
    }

    if (
      currentStep === 2 &&
      !selectedProtocol
    ) {
      setError(
        "Please select a protocol to continue."
      );
      return false;
    }

    if (currentStep === 3) {
      if (!selectedDate) {
        setError(
          "Please select your preferred date."
        );
        return false;
      }

      if (!selectedTime) {
        setError(
          "Please select your preferred time."
        );
        return false;
      }
    }

    if (currentStep === 5) {
      if (!customerName.trim()) {
        setError(
          "Please enter your name."
        );
        return false;
      }

      if (!email.trim()) {
        setError(
          "Please enter your email address."
        );
        return false;
      }

      if (!phone.trim()) {
        setError(
          "Please enter your phone number."
        );
        return false;
      }
    }

    return true;
  }

  /* =========================================================
     NAVIGATION
  ========================================================= */

  function nextStep() {
    if (!validateStep(step)) {
      return;
    }

    if (step < 5) {
      setStep(
        (current) =>
          (current + 1) as Step
      );

      window.scrollTo({
        top: 0,
        behavior: shouldReduceMotion
          ? "auto"
          : "smooth",
      });
    }
  }

  function previousStep() {
    setError("");

    if (step > 1) {
      setStep(
        (current) =>
          (current - 1) as Step
      );

      window.scrollTo({
        top: 0,
        behavior: shouldReduceMotion
          ? "auto"
          : "smooth",
      });
    }
  }

  /* =========================================================
     SUBMIT
  ========================================================= */

  async function submitBooking(event: FormEvent) {
  event.preventDefault();

  setError("");

  if (!validateStep(5)) {
    return;
  }

  try {
    setSubmitting(true);

    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerName: customerName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        location:
          activeLocation?.city ?? selectedLocation,
        protocol:
          activeProtocol?.name ?? selectedProtocol,
        date: selectedDate,
        time: selectedTime,
        membership:
          membership === "No membership"
            ? undefined
            : membership,
      }),
    });

    /*
     * Read the response as text first.
     * This lets us properly diagnose JSON and
     * non-JSON responses from the API.
     */
    const contentType =
      response.headers.get("content-type") ?? "";

    const responseText = await response.text();

    let result: {
      success?: boolean;
      message?: string;
      error?: string;
      booking?: {
        reference?: string;
        customerName?: string;
        email?: string;
        phone?: string;
        location?: string;
        protocol?: string;
        date?: string;
        time?: string;
        membership?: string | null;
        status?: string;
      };
    } = {};

    /*
     * JSON response
     */
    if (contentType.includes("application/json")) {
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error(
          "Invalid booking API JSON:",
          parseError,
          responseText
        );

        throw new Error(
          "The booking service returned an invalid response. Please try again."
        );
      }
    } else {
      /*
       * Something other than JSON came back.
       * This is useful with Next.js/Turbopack because
       * an unexpected server error can sometimes return
       * an HTML/text response.
       */
      console.error(
        "Unexpected booking API response:",
        {
          status: response.status,
          statusText: response.statusText,
          contentType,
          responseText,
        }
      );

      throw new Error(
        `The booking service returned an unexpected response (${response.status}). Please try again.`
      );
    }

    /*
     * IMPORTANT:
     * The API can return its actual failure in either
     * `error` or `message`.
     */
    if (!response.ok) {
      console.error(
        "Booking API error:",
        result
      );

      throw new Error(
        result.error ||
          result.message ||
          `We could not complete your booking request (${response.status}).`
      );
    }

    /*
     * HTTP 200 but success=false
     */
    if (!result.success) {
      console.error(
        "Booking API returned success=false:",
        result
      );

      throw new Error(
        result.error ||
          result.message ||
          "We could not complete your booking request."
      );
    }

    /*
     * Make sure the backend actually returned
     * a booking reference.
     */
    const reference =
      result.booking?.reference?.trim();

    if (!reference) {
      console.error(
        "Booking created without reference:",
        result
      );

      throw new Error(
        "Your request was submitted, but no booking reference was returned."
      );
    }

    /*
     * Success
     */
    setBookingReference(reference);
  } catch (bookingError) {
    console.error(
      "Booking submission failed:",
      bookingError
    );

    setError(
      bookingError instanceof Error
        ? bookingError.message
        : "Something went wrong while submitting your booking."
    );
  } finally {
    setSubmitting(false);
  }
}
  /* =========================================================
     SUCCESS SCREEN
  ========================================================= */

  if (bookingReference) {
    return (
      <main className="min-h-screen overflow-hidden bg-[#01050B] text-[#F7FAFF]">
        <div className="relative flex min-h-screen items-center justify-center px-6 py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-1/2 top-[-15%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#0066FF]/12 blur-[140px]" />

            <div className="absolute bottom-[-15%] left-[10%] h-[420px] w-[420px] rounded-full bg-[#1683FF]/8 blur-[120px]" />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize:
                  "80px 80px",
              }}
            />
          </div>

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 24,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="relative z-10 w-full max-w-[760px] text-center"
          >
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#1683FF]/50 bg-[#0066FF]/10 text-[#4D9BFF]">
              <Check size={26} />
            </div>

            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.32em] text-[#4D9BFF]">
              Booking request received
            </p>

            <h1 className="font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[0.88] tracking-[-0.055em]">
              Your next step
              <br />
              <span className="text-white/45">
                starts here.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-[560px] text-[15px] leading-7 text-white/60">
              Thank you,{" "}
              {customerName.split(
                " "
              )[0] || "there"}
              . Your request has been
              received. A DRIPLABS team
              member will review your
              details and follow up with
              the next step.
            </p>

            <div className="mx-auto mt-10 max-w-[520px] rounded-[18px] border border-white/10 bg-white/[0.035] p-6 text-left backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Reference
                  </p>

                  <p className="mt-2 font-mono text-sm tracking-[0.16em] text-[#8CCBFF]">
                    {bookingReference}
                  </p>
                </div>

                <div className="h-2 w-2 rounded-full bg-[#1683FF] shadow-[0_0_18px_rgba(0,102,255,.8)]" />
              </div>

              <div className="grid gap-5 pt-5 sm:grid-cols-2">
                <ConfirmationItem
                  label="Location"
                  value={
                    activeLocation?.city ||
                    selectedLocation
                  }
                />

                <ConfirmationItem
                  label="Protocol"
                  value={
                    activeProtocol?.name ||
                    selectedProtocol
                  }
                />

                <ConfirmationItem
                  label="Preferred date"
                  value={formattedDate}
                />

                <ConfirmationItem
                  label="Preferred time"
                  value={selectedTime}
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-[10px] border border-white/12 px-7 text-[10px] font-medium uppercase tracking-[0.18em] text-white/70 transition hover:border-white/25 hover:text-white"
              >
                Return home
              </Link>

              <Link
                href="/protocols"
                className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-[10px] bg-[#0066FF] px-7 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-[#1683FF] hover:shadow-[0_12px_40px_rgba(0,102,255,.25)]"
              >
                Explore protocols
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  /* =========================================================
     MAIN
  ========================================================= */

  return (
    <main className="min-h-screen bg-[#01050B] text-[#F7FAFF]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-[8%] top-[-35%] h-[650px] w-[650px] rounded-full bg-[#0066FF]/12 blur-[150px]" />

          <div className="absolute right-[-12%] top-[10%] h-[550px] w-[550px] rounded-full bg-[#1683FF]/8 blur-[140px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize:
                "90px 90px",
            }}
          />
        </div>

        {/* Minimal header */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1500px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <span className="text-[15px] font-semibold tracking-[0.24em] text-white">
              DRIPLABS
            </span>

            <span className="text-[8px] tracking-[0.16em] text-white/30">
              ®
            </span>
          </Link>

          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/45 transition hover:text-white"
          >
            <ArrowLeft size={13} />
            Back to site
          </Link>
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-24">
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="max-w-[900px]"
          >
            <p className="mb-6 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.32em] text-[#4D9BFF]">
              <span className="h-px w-8 bg-[#1683FF]" />
              Begin your journey
            </p>

            <h1 className="font-serif text-[clamp(3.8rem,8vw,8rem)] leading-[0.86] tracking-[-0.065em]">
              Begin with
              <br />
              <span className="text-white/40">
                intention.
              </span>
            </h1>

            <p className="mt-8 max-w-[620px] text-[15px] leading-7 text-white/55 sm:text-[16px]">
              Tell us how you would like
              to begin. Choose your
              location, explore a protocol,
              select a preferred time, and
              leave the rest to the DRIPLABS
              team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          BOOKING AREA
      ===================================================== */}

      <section className="bg-[#F7FAFF] text-[#020812]">
        <div className="mx-auto max-w-[1500px] px-5 py-10 sm:px-8 lg:px-12 lg:py-16">
          {/* Progress */}
          <div className="mb-10 overflow-x-auto pb-2">
            <div className="flex min-w-[620px] items-center">
              {steps.map(
                (item, index) => {
                  const active =
                    step === item.number;

                  const completed =
                    step > item.number;

                  return (
                    <div
                      key={item.number}
                      className="flex flex-1 items-center"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          if (completed) {
                            setError("");
                            setStep(
                              item.number as Step
                            );
                          }
                        }}
                        disabled={
                          !completed &&
                          !active
                        }
                        className="group flex items-center gap-3 disabled:cursor-default"
                      >
                        <span
                          className={[
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[10px] font-medium transition-all duration-300",
                            active
                              ? "border-[#0066FF] bg-[#0066FF] text-white shadow-[0_6px_20px_rgba(0,102,255,.18)]"
                              : completed
                                ? "border-[#0066FF]/30 bg-[#0066FF]/8 text-[#0066FF]"
                                : "border-[#020812]/12 text-[#020812]/35",
                          ].join(" ")}
                        >
                          {completed ? (
                            <Check size={13} />
                          ) : (
                            item.number
                          )}
                        </span>

                        <span
                          className={[
                            "hidden text-[9px] uppercase tracking-[0.18em] transition sm:block",
                            active
                              ? "text-[#020812]"
                              : completed
                                ? "text-[#0066FF]"
                                : "text-[#020812]/35",
                          ].join(" ")}
                        >
                          {item.label}
                        </span>
                      </button>

                      {index <
                        steps.length -
                          1 && (
                        <div className="mx-4 h-px flex-1 bg-[#020812]/8">
                          <div
                            className="h-full bg-[#0066FF] transition-all duration-500"
                            style={{
                              width:
                                completed
                                  ? "100%"
                                  : "0%",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                className="mb-8 flex items-center justify-between gap-4 rounded-[10px] border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700"
              >
                <span>{error}</span>

                <button
                  type="button"
                  onClick={() =>
                    setError("")
                  }
                  className="text-xs text-red-500 hover:text-red-800"
                >
                  ×
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading */}
          {loading ? (
            <LoadingState />
          ) : (
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
              {/* =================================================
                  LEFT
              ================================================= */}

              <div className="min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 14,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={
                      shouldReduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            y: -8,
                          }
                    }
                    transition={{
                      duration: 0.45,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                  >
                    {/* =========================================
                        STEP 1 — LOCATION
                    ========================================= */}

                    {step === 1 && (
                      <StepShell
                        eyebrow="01 / Location"
                        title="Where would you like to begin?"
                        description="Choose the DRIPLABS location that works best for you."
                      >
                        {locations.length ===
                        0 ? (
                          <div className="rounded-[16px] border border-[#020812]/8 bg-white p-10 text-center">
                            <p className="font-serif text-2xl">
                              No locations
                              available
                            </p>

                            <p className="mx-auto mt-3 max-w-[420px] text-sm leading-6 text-[#020812]/45">
                              There are currently
                              no locations enabled
                              for booking.
                            </p>

                            <button
                              type="button"
                              onClick={() =>
                                window.location.reload()
                              }
                              className="mt-6 rounded-[9px] bg-[#0066FF] px-6 py-3 text-[9px] uppercase tracking-[0.18em] text-white"
                            >
                              Refresh
                            </button>
                          </div>
                        ) : (
                          <div className="grid gap-3 md:grid-cols-2">
                            {locations.map(
                              (location) => {
                                const selected =
                                  selectedLocation ===
                                  location.id;

                                return (
                                  <button
                                    key={
                                      location.id
                                    }
                                    type="button"
                                    onClick={() => {
                                      setSelectedLocation(
                                        location.id
                                      );
                                      setError("");
                                    }}
                                    className={[
                                      "group relative overflow-hidden rounded-[16px] border p-6 text-left transition-all duration-400",
                                      selected
                                        ? "border-[#0066FF] bg-[#0066FF]/[0.035] shadow-[0_12px_40px_rgba(0,102,255,.08)]"
                                        : "border-[#020812]/8 bg-white hover:border-[#0066FF]/35 hover:shadow-[0_12px_35px_rgba(2,8,18,.06)]",
                                    ].join(
                                      " "
                                    )}
                                  >
                                    <div
                                      className={[
                                        "absolute left-0 top-0 h-full w-[2px] origin-top bg-[#0066FF] transition-transform duration-500",
                                        selected
                                          ? "scale-y-100"
                                          : "scale-y-0 group-hover:scale-y-100",
                                      ].join(
                                        " "
                                      )}
                                    />

                                    <div className="flex items-start justify-between gap-4">
                                      <div>
                                        <p className="text-[9px] uppercase tracking-[0.22em] text-[#0066FF]">
                                          {
                                            location.type
                                          }
                                        </p>

                                        <h3 className="mt-3 font-serif text-[32px] leading-none tracking-[-0.04em]">
                                          {
                                            location.city
                                          }
                                        </h3>

                                        <p className="mt-2 text-xs text-[#020812]/45">
                                          {
                                            location.region
                                          }
                                          ,{" "}
                                          {
                                            location.country
                                          }
                                        </p>
                                      </div>

                                      <span
                                        className={[
                                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all",
                                          selected
                                            ? "border-[#0066FF] bg-[#0066FF] text-white"
                                            : "border-[#020812]/10 text-transparent",
                                        ].join(
                                          " "
                                        )}
                                      >
                                        <Check size={12} />
                                      </span>
                                    </div>

                                    <div className="mt-7 border-t border-[#020812]/8 pt-5">
                                      {location.address && (
                                        <p className="text-[12px] leading-5 text-[#020812]/55">
                                          {
                                            location.address
                                          }
                                        </p>
                                      )}

                                      {location.landmark && (
                                        <p className="mt-1 text-[11px] text-[#020812]/35">
                                          {
                                            location.landmark
                                          }
                                        </p>
                                      )}
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                      {location
                                        .services
                                        .clinic && (
                                        <ServiceTag>
                                          In centre
                                        </ServiceTag>
                                      )}

                                      {location
                                        .services
                                        .atHome && (
                                        <ServiceTag>
                                          At home
                                        </ServiceTag>
                                      )}

                                      {location
                                        .services
                                        .nadx && (
                                        <ServiceTag>
                                          NADx
                                        </ServiceTag>
                                      )}
                                    </div>
                                  </button>
                                );
                              }
                            )}
                          </div>
                        )}
                      </StepShell>
                    )}

                    {/* =========================================
                        STEP 2 — PROTOCOL
                    ========================================= */}

                    {step === 2 && (
                      <StepShell
                        eyebrow="02 / Protocol"
                        title="Choose your protocol."
                        description="Explore the available DRIPLABS protocols and choose the experience you would like to request."
                      >
                        <div className="space-y-2">
                          {protocols.map(
                            (protocol) => {
                              const selected =
                                selectedProtocol ===
                                protocol.slug;

                              return (
                                <button
                                  key={
                                    protocol.slug
                                  }
                                  type="button"
                                  onClick={() => {
                                    setSelectedProtocol(
                                      protocol.slug
                                    );
                                    setError("");
                                  }}
                                  className={[
                                    "group relative w-full overflow-hidden rounded-[14px] border p-5 text-left transition-all duration-400 sm:p-6",
                                    selected
                                      ? "border-[#0066FF] bg-[#0066FF]/[0.035]"
                                      : "border-[#020812]/8 bg-white hover:border-[#0066FF]/30 hover:bg-[#020812]/[0.012]",
                                  ].join(
                                    " "
                                  )}
                                >
                                  <div
                                    className={[
                                      "absolute left-0 top-0 h-full w-[2px] bg-[#0066FF] transition-transform duration-500",
                                      selected
                                        ? "scale-y-100"
                                        : "scale-y-0 group-hover:scale-y-100",
                                    ].join(
                                      " "
                                    )}
                                  />

                                  <div className="grid gap-5 sm:grid-cols-[60px_minmax(0,1fr)_auto] sm:items-center">
                                    <div className="text-[10px] font-mono tracking-[0.12em] text-[#0066FF]">
                                      {String(
                                        protocol.number
                                      ).padStart(
                                        2,
                                        "0"
                                      )}
                                    </div>

                                    <div className="min-w-0">
                                      <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="font-serif text-[28px] leading-none tracking-[-0.035em]">
                                          {
                                            protocol.name
                                          }
                                        </h3>

                                        {selected && (
                                          <span className="rounded-full bg-[#0066FF] px-2 py-1 text-[7px] uppercase tracking-[0.15em] text-white">
                                            Selected
                                          </span>
                                        )}
                                      </div>

                                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[9px] uppercase tracking-[0.15em] text-[#020812]/35">
                                        <span>
                                          {
                                            protocol.family
                                          }
                                        </span>

                                        <span>
                                          {
                                            protocol.category
                                          }
                                        </span>

                                        <span>
                                          {
                                            protocol.duration
                                          }
                                        </span>
                                      </div>

                                      <p className="mt-3 max-w-[650px] text-[12px] leading-5 text-[#020812]/50">
                                        {
                                          protocol.shortDescription
                                        }
                                      </p>
                                    </div>

                                    <div className="flex items-center justify-between gap-5 sm:block sm:text-right">
                                      <p className="text-sm font-medium text-[#020812]">
                                        {formatPrice(
                                          protocol.price
                                        )}
                                      </p>

                                      <div
                                        className={[
                                          "mt-2 ml-auto flex h-7 w-7 items-center justify-center rounded-full border transition-all",
                                          selected
                                            ? "border-[#0066FF] bg-[#0066FF] text-white"
                                            : "border-[#020812]/10 text-transparent",
                                        ].join(
                                          " "
                                        )}
                                      >
                                        <Check size={12} />
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              );
                            }
                          )}
                        </div>
                      </StepShell>
                    )}

                    {/* =========================================
                        STEP 3 — SCHEDULE
                    ========================================= */}

                    {step === 3 && (
                      <StepShell
                        eyebrow="03 / Schedule"
                        title="Find a time that works."
                        description="Choose your preferred date and time. Your request will be reviewed by the DRIPLABS team."
                      >
                        <div className="grid gap-8 md:grid-cols-2">
                          <div>
                            <label
                              htmlFor="booking-date"
                              className="mb-3 block text-[9px] font-medium uppercase tracking-[0.2em] text-[#020812]/45"
                            >
                              Preferred date
                            </label>

                            <input
                              id="booking-date"
                              type="date"
                              min={minDate}
                              value={
                                selectedDate
                              }
                              onChange={(
                                event
                              ) => {
                                setSelectedDate(
                                  event.target
                                    .value
                                );
                                setError("");
                              }}
                              className="h-14 w-full rounded-[10px] border border-[#020812]/10 bg-white px-4 text-sm outline-none transition focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/8"
                            />
                          </div>

                          <div>
                            <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[#020812]/45">
                              Preferred time
                            </p>

                            <div className="grid grid-cols-3 gap-2">
                              {timeOptions.map(
                                (time) => {
                                  const selected =
                                    selectedTime ===
                                    time;

                                  return (
                                    <button
                                      key={
                                        time
                                      }
                                      type="button"
                                      onClick={() => {
                                        setSelectedTime(
                                          time
                                        );
                                        setError(
                                          ""
                                        );
                                      }}
                                      className={[
                                        "h-12 rounded-[9px] border text-[11px] font-medium transition-all duration-300",
                                        selected
                                          ? "border-[#0066FF] bg-[#0066FF] text-white shadow-[0_8px_25px_rgba(0,102,255,.16)]"
                                          : "border-[#020812]/8 bg-white text-[#020812]/55 hover:border-[#0066FF]/35 hover:text-[#020812]",
                                      ].join(
                                        " "
                                      )}
                                    >
                                      {time}
                                    </button>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 rounded-[14px] border border-[#0066FF]/12 bg-[#0066FF]/[0.035] p-5">
                          <div className="flex gap-4">
                            <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#0066FF] shadow-[0_0_12px_rgba(0,102,255,.55)]" />

                            <div>
                              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#020812]">
                                Preferred time,
                                not a
                                confirmed slot
                              </p>

                              <p className="mt-2 text-[12px] leading-5 text-[#020812]/50">
                                Your selected
                                date and time
                                will be submitted
                                as a preference.
                                The DRIPLABS team
                                will confirm the
                                appointment
                                separately.
                              </p>
                            </div>
                          </div>
                        </div>
                      </StepShell>
                    )}

                    {/* =========================================
                        STEP 4 — MEMBERSHIP
                    ========================================= */}

                    {step === 4 && (
                      <StepShell
                        eyebrow="04 / Membership"
                        title="Are you a member?"
                        description="Membership is optional. Choose the plan that applies to your booking, or continue without one."
                      >
                        <div className="grid gap-2 sm:grid-cols-2">
                          {membershipOptions.map(
                            (option) => {
                              const selected =
                                membership ===
                                option;

                              return (
                                <button
                                  key={
                                    option
                                  }
                                  type="button"
                                  onClick={() => {
                                    setMembership(
                                      option
                                    );
                                    setError("");
                                  }}
                                  className={[
                                    "group flex min-h-[76px] items-center justify-between gap-4 rounded-[12px] border px-5 text-left transition-all duration-300",
                                    selected
                                      ? "border-[#0066FF] bg-[#0066FF]/[0.035]"
                                      : "border-[#020812]/8 bg-white hover:border-[#0066FF]/30",
                                  ].join(
                                    " "
                                  )}
                                >
                                  <span
                                    className={[
                                      "text-[12px] transition",
                                      selected
                                        ? "text-[#020812]"
                                        : "text-[#020812]/55 group-hover:text-[#020812]",
                                    ].join(
                                      " "
                                    )}
                                  >
                                    {option}
                                  </span>

                                  <span
                                    className={[
                                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all",
                                      selected
                                        ? "border-[#0066FF] bg-[#0066FF] text-white"
                                        : "border-[#020812]/10 text-transparent",
                                    ].join(
                                      " "
                                    )}
                                  >
                                    <Check size={11} />
                                  </span>
                                </button>
                              );
                            }
                          )}
                        </div>
                      </StepShell>
                    )}

                    {/* =========================================
                        STEP 5 — DETAILS
                    ========================================= */}

                    {step === 5 && (
                      <form
                        onSubmit={
                          submitBooking
                        }
                      >
                        <StepShell
                          eyebrow="05 / Details"
                          title="Tell us a little about you."
                          description="These details allow our team to follow up regarding your booking request."
                        >
                          <div className="grid gap-5 sm:grid-cols-2">
                            <Field
                              id="customer-name"
                              label="Full name"
                              value={
                                customerName
                              }
                              onChange={
                                setCustomerName
                              }
                              placeholder="Your full name"
                            />

                            <Field
                              id="customer-email"
                              label="Email address"
                              type="email"
                              value={email}
                              onChange={setEmail}
                              placeholder="you@example.com"
                            />

                            <div className="sm:col-span-2">
                              <Field
                                id="customer-phone"
                                label="Phone number"
                                type="tel"
                                value={phone}
                                onChange={setPhone}
                                placeholder="+91"
                              />
                            </div>
                          </div>

                          <div className="mt-8 border-t border-[#020812]/8 pt-7">
                            <div className="flex gap-3">
                              <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#0066FF]/35 text-[#0066FF]">
                                <Check size={10} />
                              </div>

                              <p className="max-w-[760px] text-[11px] leading-5 text-[#020812]/45">
                                All protocols are
                                subject to physician
                                assessment and
                                clinical suitability.
                                Booking a request does
                                not constitute a
                                diagnosis, treatment
                                recommendation, or
                                confirmed appointment.
                              </p>
                            </div>
                          </div>
                        </StepShell>

                        <button
                          type="submit"
                          disabled={submitting}
                          className="mt-8 inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-[11px] bg-[#0066FF] px-8 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-400 hover:bg-[#1683FF] hover:shadow-[0_15px_45px_rgba(0,102,255,.22)] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {submitting ? (
                            <>
                              <span className="h-4 w-4 animate-spin rounded-full border border-white/30 border-t-white" />
                              Sending request
                            </>
                          ) : (
                            <>
                              Request my
                              appointment
                              <ArrowRight size={15} />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                {step < 5 && (
                  <div className="mt-8 flex items-center justify-between border-t border-[#020812]/8 pt-7">
                    <button
                      type="button"
                      onClick={
                        previousStep
                      }
                      disabled={step === 1}
                      className="inline-flex min-h-[48px] items-center gap-2 rounded-[9px] px-4 text-[9px] font-medium uppercase tracking-[0.18em] text-[#020812]/45 transition hover:text-[#020812] disabled:invisible"
                    >
                      <ArrowLeft size={14} />
                      Back
                    </button>

                    <button
                      type="button"
                      onClick={nextStep}
                      className="group inline-flex min-h-[52px] items-center gap-3 rounded-[10px] bg-[#0066FF] px-7 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-all duration-400 hover:bg-[#1683FF] hover:shadow-[0_12px_35px_rgba(0,102,255,.2)]"
                    >
                      Continue
                      <ArrowRight size={15} />
                    </button>
                  </div>
                )}

                {step === 5 && (
                  <button
                    type="button"
                    onClick={
                      previousStep
                    }
                    className="mt-5 inline-flex items-center gap-2 px-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[#020812]/40 transition hover:text-[#020812]"
                  >
                    <ArrowLeft size={14} />
                    Back
                  </button>
                )}
              </div>

              {/* =================================================
                  SUMMARY
              ================================================= */}

              <aside className="lg:sticky lg:top-8 lg:self-start">
                <div className="overflow-hidden rounded-[18px] bg-[#020812] text-white shadow-[0_20px_70px_rgba(2,8,18,.16)]">
                  <div className="relative overflow-hidden p-6 sm:p-7">
                    <div
                      aria-hidden="true"
                      className="absolute right-[-100px] top-[-100px] h-[260px] w-[260px] rounded-full bg-[#0066FF]/12 blur-[80px]"
                    />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#4D9BFF]">
                          Your selection
                        </p>

                        <span className="h-1.5 w-1.5 rounded-full bg-[#1683FF] shadow-[0_0_12px_rgba(0,102,255,.8)]" />
                      </div>

                      <div className="mt-8 space-y-6">
                        <SummaryItem
                          number="01"
                          label="Location"
                          value={
                            activeLocation?.city ||
                            "Not selected"
                          }
                        />

                        <SummaryItem
                          number="02"
                          label="Protocol"
                          value={
                            activeProtocol?.name ||
                            "Not selected"
                          }
                        />

                        <SummaryItem
                          number="03"
                          label="Schedule"
                          value={
                            selectedDate &&
                            selectedTime
                              ? `${selectedDate} · ${selectedTime}`
                              : "Not selected"
                          }
                        />

                        <SummaryItem
                          number="04"
                          label="Membership"
                          value={
                            membership
                          }
                        />
                      </div>

                      <div className="mt-8 border-t border-white/10 pt-6">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                              Protocol price
                            </p>

                            <p className="mt-2 font-serif text-[25px] tracking-[-0.025em]">
                              {activeProtocol
                                ? formatPrice(
                                    activeProtocol.price
                                  )
                                : "—"}
                            </p>
                          </div>

                          {activeProtocol && (
                            <span className="text-[8px] uppercase tracking-[0.15em] text-white/30">
                              {
                                activeProtocol.duration
                              }
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/8 bg-white/[0.025] px-6 py-5 sm:px-7">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                      Physician-led
                    </p>

                    <p className="mt-2 text-[11px] leading-5 text-white/45">
                      Every protocol remains
                      subject to physician
                      assessment and clinical
                      suitability.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   STEP SHELL
========================================================= */

function StepShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-10 max-w-[800px]">
        <p className="mb-4 text-[9px] font-medium uppercase tracking-[0.25em] text-[#0066FF]">
          {eyebrow}
        </p>

        <h2 className="font-serif text-[clamp(2.6rem,5vw,4.8rem)] leading-[0.92] tracking-[-0.055em] text-[#020812]">
          {title}
        </h2>

        <p className="mt-5 max-w-[650px] text-[13px] leading-6 text-[#020812]/45">
          {description}
        </p>
      </div>

      {children}
    </div>
  );
}

/* =========================================================
   FIELD
========================================================= */

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (
    value: string
  ) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-3 block text-[9px] font-medium uppercase tracking-[0.2em] text-[#020812]/45"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value
          )
        }
        placeholder={placeholder}
        autoComplete={
          id === "customer-name"
            ? "name"
            : id === "customer-email"
              ? "email"
              : "tel"
        }
        className="h-14 w-full rounded-[10px] border border-[#020812]/10 bg-white px-4 text-sm text-[#020812] outline-none placeholder:text-[#020812]/20 transition focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/8"
      />
    </div>
  );
}

/* =========================================================
   SERVICE TAG
========================================================= */

function ServiceTag({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="rounded-full border border-[#020812]/8 bg-[#020812]/[0.02] px-2.5 py-1 text-[7px] uppercase tracking-[0.15em] text-[#020812]/40">
      {children}
    </span>
  );
}

/* =========================================================
   SUMMARY ITEM
========================================================= */

function SummaryItem({
  number,
  label,
  value,
}: {
  number: string;
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[34px_minmax(0,1fr)] gap-3">
      <span className="font-mono text-[8px] tracking-[0.12em] text-[#4D9BFF]/70">
        {number}
      </span>

      <div className="min-w-0">
        <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
          {label}
        </p>

        <p className="mt-1.5 truncate text-[12px] text-white/75">
          {value}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   CONFIRMATION ITEM
========================================================= */

function ConfirmationItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
        {label}
      </p>

      <p className="mt-2 text-[12px] leading-5 text-white/70">
        {value || "—"}
      </p>
    </div>
  );
}

/* =========================================================
   LOADING
========================================================= */

function LoadingState() {
  return (
    <div className="flex min-h-[520px] items-center justify-center rounded-[18px] border border-[#020812]/8 bg-white">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border border-[#020812]/10 border-t-[#0066FF]" />

        <p className="mt-5 text-[9px] uppercase tracking-[0.25em] text-[#020812]/35">
          Preparing your journey
        </p>
      </div>
    </div>
  );
}