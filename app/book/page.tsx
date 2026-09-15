"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";

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

export default function BookPage() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [protocols, setProtocols] = useState<Protocol[]>([]);

  const [step, setStep] = useState<Step>(1);

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedProtocol, setSelectedProtocol] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [membership, setMembership] = useState("No membership");

  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [bookingReference, setBookingReference] = useState("");

  useEffect(() => {
    async function loadBookingData() {
      try {
        setLoading(true);
        setError("");

        const [locationsResponse, protocolsResponse] = await Promise.all([
          fetch("/api/locations", {
            cache: "no-store",
          }),
          fetch("/api/protocols", {
            cache: "no-store",
          }),
        ]);

        if (!locationsResponse.ok) {
          throw new Error("Unable to load DripLabs locations.");
        }

        if (!protocolsResponse.ok) {
          throw new Error("Unable to load DripLabs protocols.");
        }

        const locationsJson = await locationsResponse.json();
        const protocolsJson = await protocolsResponse.json();

        const activeLocations = Array.isArray(locationsJson.data)
          ? locationsJson.data.filter(
              (location: Location) => location.bookingEnabled
            )
          : [];

        const activeProtocols = Array.isArray(protocolsJson.data)
          ? protocolsJson.data.filter(
              (protocol: Protocol) => protocol.active
            )
          : [];

        setLocations(activeLocations);
        setProtocols(activeProtocols);
      } catch (loadError) {
        setError(
          loadError instanceof Error
            ? loadError.message
            : "We could not load the booking information."
        );
      } finally {
        setLoading(false);
      }
    }

    loadBookingData();
  }, []);

  const activeLocation = useMemo(
    () =>
      locations.find((location) => location.id === selectedLocation) ?? null,
    [locations, selectedLocation]
  );

  const activeProtocol = useMemo(
    () =>
      protocols.find((protocol) => protocol.slug === selectedProtocol) ?? null,
    [protocols, selectedProtocol]
  );

  const minDate = useMemo(() => {
    const date = new Date();

    date.setDate(date.getDate() + 1);

    return date.toISOString().split("T")[0];
  }, []);

  const formatPrice = (price: number | null) => {
    if (typeof price !== "number") {
      return "Price on assessment";
    }

    return `₹${price.toLocaleString("en-IN")}`;
  };

  const canContinue = () => {
    if (step === 1) {
      return Boolean(selectedLocation);
    }

    if (step === 2) {
      return Boolean(selectedProtocol);
    }

    if (step === 3) {
      return Boolean(selectedDate && selectedTime);
    }

    if (step === 4) {
      return Boolean(membership);
    }

    if (step === 5) {
      return Boolean(
        customerName.trim() &&
          email.trim() &&
          phone.trim()
      );
    }

    return false;
  };

  function nextStep() {
    setError("");

    if (!canContinue()) {
      setError("Please complete this step before continuing.");
      return;
    }

    if (step < 5) {
      setStep((current) => (current + 1) as Step);
    }
  }

  function previousStep() {
    setError("");

    if (step > 1) {
      setStep((current) => (current - 1) as Step);
    }
  }

  async function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (!canContinue()) {
      setError("Please complete all required details.");
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
          location: activeLocation?.city ?? selectedLocation,
          protocol: activeProtocol?.name ?? selectedProtocol,
          date: selectedDate,
          time: selectedTime,
          membership:
            membership === "No membership" ? undefined : membership,
        }),
      });

      const contentType = response.headers.get("content-type") ?? "";
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

      if (contentType.includes("application/json")) {
        try {
          result = JSON.parse(responseText);
        } catch {
          throw new Error(
            "The server returned an invalid response. Please try again."
          );
        }
      } else {
        console.error(
          "Unexpected booking API response:",
          response.status,
          responseText
        );

        throw new Error(
          `The booking service returned an unexpected response (${response.status}). Please try again.`
        );
      }

      if (!response.ok) {
        throw new Error(
          result.error ||
            result.message ||
            `We could not complete your booking request (${response.status}).`
        );
      }

      if (!result.success) {
        throw new Error(
          result.error ||
            "We could not complete your booking request."
        );
      }

      const reference = result.booking?.reference?.trim();

      if (!reference) {
        throw new Error(
          "Your request was submitted, but no booking reference was returned."
        );
      }

      setBookingReference(reference);
    } catch (bookingError) {
      setError(
        bookingError instanceof Error
          ? bookingError.message
          : "Something went wrong while submitting your booking."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (bookingReference) {
    return (
      <main className="min-h-screen bg-[var(--dl-ivory)] text-[var(--dl-navy)]">
        <section className="flex min-h-screen items-center justify-center px-6 py-24">
          <div className="w-full max-w-3xl text-center">
            <p className="driplabs-label mb-6">
              Booking Request Received
            </p>

            <div className="mx-auto mb-10 flex h-20 w-20 items-center justify-center border border-[var(--dl-gold)]">
              <span className="text-3xl text-[var(--dl-gold)]">
                ✓
              </span>
            </div>

            <h1 className="driplabs-display text-5xl leading-[0.95] md:text-7xl">
              Your next step
              <br />
              starts here.
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-[var(--dl-muted)]">
              Your booking request has been received. A DripLabs team
              member will review your request and coordinate the
              physician-led assessment and session details.
            </p>

            <div className="mx-auto mt-10 max-w-md border-y border-[var(--dl-line)] py-7">
              <p className="driplabs-label mb-2">
                Booking Reference
              </p>

              <p className="font-mono text-2xl tracking-[0.12em]">
                {bookingReference}
              </p>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/" className="driplabs-button">
                Return Home
              </Link>

              <Link
                href="/protocols"
                className="driplabs-button-secondary"
              >
                Explore Protocols
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--dl-ivory)] text-[var(--dl-navy)]">
      <section className="relative overflow-hidden bg-[var(--dl-navy)] px-6 pb-20 pt-32 text-[var(--dl-ivory)] md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-4xl">
            <p className="driplabs-label mb-6 text-[var(--dl-gold-soft)]">
              DRIPLABS / BOOK YOUR DRIP
            </p>

            <h1 className="driplabs-display text-6xl leading-[0.9] md:text-8xl lg:text-[8.5rem]">
              Begin your
              <br />
              assessment.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              Choose your location, explore the protocol range, and
              request your preferred appointment. Every session begins
              with physician assessment and suitability review.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-20 right-[-80px] h-72 w-72 rounded-full border border-white/10 md:h-96 md:w-96" />
      </section>

      <section className="px-6 py-12 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 border-y border-[var(--dl-line)] py-5">
            <div className="grid grid-cols-2 md:grid-cols-5">
              {steps.map((item) => (
                <div
                  key={item.number}
                  className={`relative py-3 md:py-2 ${
                    step >= item.number
                      ? "text-[var(--dl-navy)]"
                      : "text-[var(--dl-muted)]"
                  }`}
                >
                  {step >= item.number && (
                    <span className="absolute left-0 top-0 h-px w-full bg-[var(--dl-gold)]" />
                  )}

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs">
                      0{item.number}
                    </span>

                    <span className="text-xs uppercase tracking-[0.18em]">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="py-32 text-center">
              <p className="driplabs-label">
                Loading DripLabs
              </p>

              <p className="mt-4 text-[var(--dl-muted)]">
                Preparing your booking experience.
              </p>
            </div>
          ) : (
            <form onSubmit={submitBooking}>
              <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
                <div>
                  {step === 1 && (
                    <StepShell
                      eyebrow="Step 01"
                      title="Where would you like to receive your session?"
                      description="Select a currently bookable DripLabs market."
                    >
                      <div className="grid gap-px bg-[var(--dl-line)] md:grid-cols-2">
                        {locations.map((location) => {
                          const selected =
                            selectedLocation === location.id;

                          return (
                            <button
                              key={location.id}
                              type="button"
                              onClick={() => {
                                setSelectedLocation(location.id);
                                setError("");
                              }}
                              className={`group min-h-36 border text-left transition ${
                                selected
                                  ? "border-[var(--dl-navy)] bg-[var(--dl-navy)] text-[var(--dl-ivory)]"
                                  : "border-transparent bg-white hover:bg-[var(--dl-paper)]"
                              }`}
                            >
                              <div className="p-6">
                                <div className="mb-10 flex items-start justify-between">
                                  <span className="driplabs-label">
                                    {location.type}
                                  </span>

                                  <span
                                    className={`h-3 w-3 rounded-full border ${
                                      selected
                                        ? "border-[var(--dl-gold)] bg-[var(--dl-gold)]"
                                        : "border-[var(--dl-muted)]"
                                    }`}
                                  />
                                </div>

                                <h2 className="font-serif text-3xl">
                                  {location.city}
                                </h2>

                                <p
                                  className={`mt-2 text-sm ${
                                    selected
                                      ? "text-white/60"
                                      : "text-[var(--dl-muted)]"
                                  }`}
                                >
                                  {location.region}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                  {location.services.clinic && (
                                    <span className="border border-current/20 px-3 py-1 text-[10px] uppercase tracking-[0.14em]">
                                      Clinic
                                    </span>
                                  )}

                                  {location.services.atHome && (
                                    <span className="border border-current/20 px-3 py-1 text-[10px] uppercase tracking-[0.14em]">
                                      At Home
                                    </span>
                                  )}

                                  {location.services.nadx && (
                                    <span className="border border-current/20 px-3 py-1 text-[10px] uppercase tracking-[0.14em]">
                                      NADx
                                    </span>
                                  )}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-8 border-l-2 border-[var(--dl-gold)] bg-white px-6 py-5">
                        <p className="text-sm leading-7 text-[var(--dl-muted)]">
                          More markets are part of the planned DripLabs
                          expansion network. Booking is currently
                          enabled only for active markets.
                        </p>
                      </div>
                    </StepShell>
                  )}

                  {step === 2 && (
                    <StepShell
                      eyebrow="Step 02"
                      title="Explore the protocol system."
                      description="Select the protocol you would like to discuss during your physician assessment."
                    >
                      <div className="border-y border-[var(--dl-line)]">
                        {protocols.map((protocol) => {
                          const selected =
                            selectedProtocol === protocol.slug;

                          return (
                            <button
                              key={protocol.id}
                              type="button"
                              onClick={() => {
                                setSelectedProtocol(protocol.slug);
                                setError("");
                              }}
                              className={`group block w-full border-b border-[var(--dl-line)] text-left last:border-b-0 ${
                                selected
                                  ? "bg-[var(--dl-navy)] text-[var(--dl-ivory)]"
                                  : "hover:bg-white"
                              }`}
                            >
                              <div className="grid gap-5 p-6 md:grid-cols-[70px_1fr_auto] md:items-center md:p-7">
                                <span className="font-mono text-xs opacity-60">
                                  {String(protocol.number).padStart(
                                    2,
                                    "0"
                                  )}
                                </span>

                                <div>
                                  <div className="flex flex-wrap items-center gap-3">
                                    <h2 className="font-serif text-3xl">
                                      {protocol.name}
                                    </h2>

                                    <span className="driplabs-label opacity-60">
                                      {protocol.family}
                                    </span>
                                  </div>

                                  <p
                                    className={`mt-3 max-w-2xl text-sm leading-7 ${
                                      selected
                                        ? "text-white/60"
                                        : "text-[var(--dl-muted)]"
                                    }`}
                                  >
                                    {protocol.shortDescription}
                                  </p>
                                </div>

                                <div className="md:text-right">
                                  <p className="font-mono text-sm">
                                    {formatPrice(protocol.price)}
                                  </p>

                                  <p
                                    className={`mt-1 text-xs ${
                                      selected
                                        ? "text-white/50"
                                        : "text-[var(--dl-muted)]"
                                    }`}
                                  >
                                    {protocol.duration}
                                  </p>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </StepShell>
                  )}

                  {step === 3 && (
                    <StepShell
                      eyebrow="Step 03"
                      title="Choose your preferred time."
                      description="This is a request for your preferred appointment slot. The final session is confirmed after physician review."
                    >
                      <div className="grid gap-8 md:grid-cols-2">
                        <div>
                          <label className="driplabs-label mb-3 block">
                            Preferred Date
                          </label>

                          <input
                            type="date"
                            min={minDate}
                            value={selectedDate}
                            onChange={(event) =>
                              setSelectedDate(event.target.value)
                            }
                            className="w-full border border-[var(--dl-line)] bg-white px-5 py-5 text-[var(--dl-navy)] outline-none transition focus:border-[var(--dl-gold)]"
                          />
                        </div>

                        <div>
                          <label className="driplabs-label mb-3 block">
                            Preferred Time
                          </label>

                          <select
                            value={selectedTime}
                            onChange={(event) =>
                              setSelectedTime(event.target.value)
                            }
                            className="w-full border border-[var(--dl-line)] bg-white px-5 py-5 text-[var(--dl-navy)] outline-none transition focus:border-[var(--dl-gold)]"
                          >
                            <option value="">
                              Select a time
                            </option>
                            <option value="09:00">
                              09:00 AM
                            </option>
                            <option value="10:00">
                              10:00 AM
                            </option>
                            <option value="11:00">
                              11:00 AM
                            </option>
                            <option value="12:00">
                              12:00 PM
                            </option>
                            <option value="13:00">
                              01:00 PM
                            </option>
                            <option value="14:00">
                              02:00 PM
                            </option>
                            <option value="15:00">
                              03:00 PM
                            </option>
                            <option value="16:00">
                              04:00 PM
                            </option>
                            <option value="17:00">
                              05:00 PM
                            </option>
                            <option value="18:00">
                              06:00 PM
                            </option>
                            <option value="19:00">
                              07:00 PM
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="mt-8 grid gap-px bg-[var(--dl-line)] md:grid-cols-2">
                        <div className="bg-[var(--dl-navy)] p-6 text-[var(--dl-ivory)]">
                          <p className="driplabs-label text-[var(--dl-gold-soft)]">
                            Standard IV
                          </p>

                          <p className="mt-4 font-serif text-3xl">
                            45–60 minutes
                          </p>
                        </div>

                        <div className="bg-[var(--dl-navy)] p-6 text-[var(--dl-ivory)]">
                          <p className="driplabs-label text-[var(--dl-gold-soft)]">
                            NADx
                          </p>

                          <p className="mt-4 font-serif text-3xl">
                            3–4 hours
                          </p>
                        </div>
                      </div>
                    </StepShell>
                  )}

                  {step === 4 && (
                    <StepShell
                      eyebrow="Step 04"
                      title="Are you already a DripLabs member?"
                      description="Membership information helps our team prepare the booking request. Physician suitability still determines the final protocol."
                    >
                      <div className="grid gap-3">
                        {membershipOptions.map((option) => {
                          const selected = membership === option;

                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => {
                                setMembership(option);
                                setError("");
                              }}
                              className={`flex items-center justify-between border px-6 py-5 text-left transition ${
                                selected
                                  ? "border-[var(--dl-navy)] bg-[var(--dl-navy)] text-[var(--dl-ivory)]"
                                  : "border-[var(--dl-line)] bg-white hover:bg-[var(--dl-paper)]"
                              }`}
                            >
                              <span className="text-sm uppercase tracking-[0.12em]">
                                {option}
                              </span>

                              <span
                                className={`h-3 w-3 rounded-full border ${
                                  selected
                                    ? "border-[var(--dl-gold)] bg-[var(--dl-gold)]"
                                    : "border-[var(--dl-muted)]"
                                }`}
                              />
                            </button>
                          );
                        })}
                      </div>
                    </StepShell>
                  )}

                  {step === 5 && (
                    <StepShell
                      eyebrow="Step 05"
                      title="Tell us where to reach you."
                      description="We'll use these details to follow up on your appointment request."
                    >
                      <div className="grid gap-7">
                        <div>
                          <label className="driplabs-label mb-3 block">
                            Full Name
                          </label>

                          <input
                            type="text"
                            value={customerName}
                            onChange={(event) =>
                              setCustomerName(event.target.value)
                            }
                            placeholder="Your full name"
                            className="w-full border border-[var(--dl-line)] bg-white px-5 py-5 text-[var(--dl-navy)] outline-none placeholder:text-[var(--dl-muted)] focus:border-[var(--dl-gold)]"
                          />
                        </div>

                        <div className="grid gap-7 md:grid-cols-2">
                          <div>
                            <label className="driplabs-label mb-3 block">
                              Email Address
                            </label>

                            <input
                              type="email"
                              value={email}
                              onChange={(event) =>
                                setEmail(event.target.value)
                              }
                              placeholder="you@example.com"
                              className="w-full border border-[var(--dl-line)] bg-white px-5 py-5 text-[var(--dl-navy)] outline-none placeholder:text-[var(--dl-muted)] focus:border-[var(--dl-gold)]"
                            />
                          </div>

                          <div>
                            <label className="driplabs-label mb-3 block">
                              Phone Number
                            </label>

                            <input
                              type="tel"
                              value={phone}
                              onChange={(event) =>
                                setPhone(event.target.value)
                              }
                              placeholder="+91"
                              className="w-full border border-[var(--dl-line)] bg-white px-5 py-5 text-[var(--dl-navy)] outline-none placeholder:text-[var(--dl-muted)] focus:border-[var(--dl-gold)]"
                            />
                          </div>
                        </div>

                        <div className="border-t border-[var(--dl-line)] pt-8">
                          <p className="driplabs-label mb-5">
                            Booking Summary
                          </p>

                          <div className="grid gap-px bg-[var(--dl-line)] md:grid-cols-2">
                            <SummaryItem
                              label="Location"
                              value={activeLocation?.city ?? "—"}
                            />

                            <SummaryItem
                              label="Protocol"
                              value={activeProtocol?.name ?? "—"}
                            />

                            <SummaryItem
                              label="Date"
                              value={selectedDate || "—"}
                            />

                            <SummaryItem
                              label="Time"
                              value={selectedTime || "—"}
                            />

                            <SummaryItem
                              label="Membership"
                              value={membership}
                            />

                            <SummaryItem
                              label="Protocol Price"
                              value={
                                activeProtocol
                                  ? formatPrice(activeProtocol.price)
                                  : "—"
                              }
                            />
                          </div>
                        </div>

                        <div className="border-l-2 border-[var(--dl-gold)] bg-white px-6 py-5">
                          <p className="text-sm leading-7 text-[var(--dl-muted)]">
                            Submitting this form creates a booking
                            request, not a guaranteed medical
                            appointment. Protocol suitability and final
                            confirmation remain subject to physician
                            assessment.
                          </p>
                        </div>
                      </div>
                    </StepShell>
                  )}

                  {error && (
                    <div className="mt-8 border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <div className="mt-10 flex flex-col-reverse gap-4 sm:flex-row sm:justify-between">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={previousStep}
                        className="driplabs-button-secondary"
                      >
                        Back
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 5 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="driplabs-button"
                      >
                        Continue
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={submitting}
                        className="driplabs-button disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {submitting
                          ? "Submitting..."
                          : "Request Your Drip"}
                      </button>
                    )}
                  </div>
                </div>

                <aside className="lg:sticky lg:top-28 lg:self-start">
                  <div className="bg-[var(--dl-navy)] p-7 text-[var(--dl-ivory)] md:p-8">
                    <p className="driplabs-label mb-8 text-[var(--dl-gold-soft)]">
                      Your Selection
                    </p>

                    <div className="space-y-7">
                      <SelectionItem
                        number="01"
                        label="Location"
                        value={
                          activeLocation?.city ?? "Not selected"
                        }
                      />

                      <SelectionItem
                        number="02"
                        label="Protocol"
                        value={
                          activeProtocol?.name ?? "Not selected"
                        }
                      />

                      <SelectionItem
                        number="03"
                        label="Schedule"
                        value={
                          selectedDate && selectedTime
                            ? `${selectedDate} · ${selectedTime}`
                            : "Not selected"
                        }
                      />

                      <SelectionItem
                        number="04"
                        label="Membership"
                        value={
                          membership === "No membership"
                            ? "No membership"
                            : membership
                        }
                      />
                    </div>

                    {activeProtocol && (
                      <div className="mt-10 border-t border-white/10 pt-7">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <p className="driplabs-label text-white/40">
                              Starting Price
                            </p>

                            <p className="mt-2 font-serif text-4xl">
                              {formatPrice(activeProtocol.price)}
                            </p>
                          </div>

                          <p className="text-xs text-white/40">
                            {activeProtocol.duration}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="mt-10 border-t border-white/10 pt-7">
                      <p className="text-sm leading-7 text-white/55">
                        Every DripLabs session begins with physician
                        assessment before a protocol is confirmed.
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

function StepShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-10 max-w-3xl">
        <p className="driplabs-label mb-5">{eyebrow}</p>

        <h2 className="driplabs-display text-5xl leading-[0.95] md:text-7xl">
          {title}
        </h2>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--dl-muted)] md:text-base">
          {description}
        </p>
      </div>

      {children}
    </div>
  );
}

function SelectionItem({
  number,
  label,
  value,
}: {
  number: string;
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
      <div className="mb-2 flex items-center gap-3">
        <span className="font-mono text-[10px] text-[var(--dl-gold-soft)]">
          {number}
        </span>

        <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
          {label}
        </span>
      </div>

      <p className="font-serif text-2xl">{value}</p>
    </div>
  );
}

function SummaryItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white p-5">
      <p className="driplabs-label">{label}</p>

      <p className="mt-2 text-sm">{value}</p>
    </div>
  );
}