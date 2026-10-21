"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";

const interests = [
  "General Enquiry",
  "Physician Consultation",
  "DRIPLABS Home",
  "Women's Wellness",
  "Membership",
  "Partnership",
  "Other",
];

const routes = [
  {
    number: "01",
    eyebrow: "GENERAL ENQUIRY",
    title: "General enquiry",
    description: "Have a question about DRIPLABS, our protocols, or services? We're here to help.",
    action: "Get in touch",
    href: "#enquiry",
    icon: "message" as const,
    tone: "from-[#EAF3FF] via-white to-[#DCEBFF]",
  },
  {
    number: "02",
    eyebrow: "PHYSICIAN CONSULTATION",
    title: "Consultation",
    description: "Speak with our team to understand the next step and arrange a consultation.",
    action: "Book a consultation",
    href: "/book",
    icon: "calendar" as const,
    tone: "from-[#F9F6EF] via-white to-[#E5F0FF]",
  },
  {
    number: "03",
    eyebrow: "DRIPLABS HOME",
    title: "Home experience",
    description: "Explore at-home IV therapy options and ask about availability in your area.",
    action: "Explore home care",
    href: "/experience",
    icon: "home" as const,
    tone: "from-[#E8F1FF] via-white to-[#F5F0E6]",
  },
  {
    number: "04",
    eyebrow: "PARTNERSHIPS",
    title: "Partnerships",
    description: "Explore collaboration opportunities for physicians, clinics, distributors, and strategic partners.",
    action: "Discuss partnerships",
    href: "/partners",
    icon: "people" as const,
    tone: "from-[#F5F0E6] via-white to-[#DCEBFF]",
  },
];

const journey = [
  { number: "01", title: "Enquiry", description: "Tell us what you would like to explore and how we can help." },
  { number: "02", title: "Conversation", description: "Our team learns about your questions, goals, and preferred experience." },
  { number: "03", title: "Physician assessment", description: "Where relevant, the next step involves an appropriate physician assessment." },
  { number: "04", title: "Your next step", description: "Move forward with the experience or pathway that is right for you." },
];

function Arrow({ down = false }: { down?: boolean }) {
  return down ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4v15m-6-6 6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
}

function Icon({ type }: { type: "message" | "calendar" | "home" | "people" | "headset" | "mail" }) {
  const common = { width: 25, height: 25, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };
  switch (type) {
    case "message": return <svg {...common}><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-5.5A7.5 7.5 0 1 1 20 11.5Z" /></svg>;
    case "calendar": return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" /></svg>;
    case "home": return <svg {...common}><path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-7h6v7" /></svg>;
    case "people": return <svg {...common}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20v-1.5A5.5 5.5 0 0 1 8 13h2a5.5 5.5 0 0 1 5.5 5.5V20M16 4.8a3.5 3.5 0 0 1 0 6.5M18 14a4.5 4.5 0 0 1 3.5 4.4V20" /></svg>;
    case "headset": return <svg {...common}><path d="M3 13v-2a9 9 0 0 1 18 0v2M3 13h3v6H5a2 2 0 0 1-2-2v-4ZM21 13h-3v6h1a2 2 0 0 0 2-2v-4ZM18 19a6 6 0 0 1-6 3" /></svg>;
    case "mail": return <svg {...common}><rect x="2.5" y="4.5" width="19" height="15" rx="2" /><path d="m3.5 6 8.5 7 8.5-7" /></svg>;
  }
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion();
  return <motion.div className={className} initial={reducedMotion ? false : { opacity: 0, y: 22 }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay: reducedMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export default function ContactPage() {
  const reducedMotion = useReducedMotion();
  const [selectedInterest, setSelectedInterest] = useState("General Enquiry");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // UI-only confirmation. Connect this handler to your contact API/provider to deliver enquiries.
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#FBFAF6] text-[#07152F]">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#F4F8FF] to-[#B9D8FF]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-[#F3E9D7]/70 blur-[100px]" />
          <div className="absolute right-[5%] top-[-12rem] h-[44rem] w-[44rem] rounded-full bg-[#4D9BFF]/40 blur-[100px]" />
          <div className="absolute right-[-8rem] bottom-[-15rem] h-[36rem] w-[36rem] rounded-full bg-[#005BFF]/30 blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(20,70,140,.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,70,140,.12)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <div className="relative mx-auto grid max-w-[1600px] items-center gap-8 px-5 pb-12 pt-16 sm:px-8 md:px-12 lg:min-h-[670px] lg:grid-cols-[1.03fr_.97fr] lg:gap-3 lg:px-16 lg:pb-16 lg:pt-12">
          <div className="relative z-10 order-2 max-w-[760px] lg:order-1">
            <Reveal>
              <p className="mb-7 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#315B9B]"><span className="h-1.5 w-1.5 rounded-full bg-[#086BFF] shadow-[0_0_14px_rgba(8,107,255,.7)]" />01 — CONTACT DRIPLABS</p>
              <h1 className="max-w-[820px] font-[var(--font-heading)] text-[clamp(3.7rem,8.1vw,8rem)] font-light leading-[0.84] tracking-[-0.075em] text-[#09152F]">Begin the<br /><span className="bg-gradient-to-r from-[#064CCB] via-[#0878FF] to-[#7BB8FF] bg-clip-text italic text-transparent">conversation.</span></h1>
              <p className="mt-7 max-w-[570px] text-[14px] leading-7 text-[#405779] sm:text-[15px]">Whether you’re exploring your first DRIPLABS experience, looking for a physician consultation, or interested in building with us, we’re here to help.</p>
              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[#AFC3DF]/80 pt-5 text-[8px] font-semibold uppercase tracking-[0.24em] text-[#536A8C] sm:gap-x-4">IDEAS <span className="text-[#1A75FF]">/</span> QUESTIONS <span className="text-[#1A75FF]">/</span> CONSULTATIONS <span className="text-[#1A75FF]">/</span> PARTNERSHIPS</div>
              <a href="#contact-options" className="group mt-8 inline-flex min-h-11 items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#194D9B] transition-colors hover:text-[#0066FF]">Explore ways to connect <span className="transition-transform group-hover:translate-y-1"><Arrow down /></span></a>
            </Reveal>
          </div>

          <div className="relative order-1 mx-auto min-h-[300px] w-full max-w-[680px] sm:min-h-[400px] lg:order-2 lg:min-h-[620px]">
            <div aria-hidden="true" className="absolute left-[9%] top-[8%] aspect-square w-[78%] rounded-full border border-white/80 shadow-[0_0_90px_rgba(42,122,255,.25)]" />
            <div aria-hidden="true" className="absolute left-[16%] top-[15%] aspect-square w-[64%] rounded-full border border-[#5B9CFF]/40" />
            <div aria-hidden="true" className="absolute left-[19%] top-[18%] aspect-square w-[58%] rounded-full bg-gradient-to-br from-white/95 via-[#B7D9FF]/70 to-[#076AFF]/65 shadow-[inset_-24px_-30px_70px_rgba(0,71,196,.24),inset_18px_18px_45px_rgba(255,255,255,.9),0_35px_90px_rgba(0,81,255,.24)]" />
            <div aria-hidden="true" className="absolute left-[25%] top-[24%] aspect-square w-[46%] overflow-hidden rounded-full border border-white/80 bg-gradient-to-br from-white/90 via-[#D8EAFF]/75 to-[#1474FF]/60 shadow-[inset_-20px_-25px_55px_rgba(0,71,196,.3)]">
              <div className="absolute -left-[12%] top-[18%] h-[45%] w-[120%] rotate-[-28deg] rounded-[50%] border-[18px] border-white/60 blur-[1px]" />
              <div className="absolute right-[13%] top-[17%] h-4 w-4 rounded-full bg-white shadow-[0_0_22px_10px_rgba(255,255,255,.8)]" />
              <div className="absolute bottom-[22%] left-[20%] h-3 w-3 rounded-full border border-white bg-[#80B9FF] shadow-[0_0_22px_8px_rgba(0,102,255,.28)]" />
            </div>
            <div aria-hidden="true" className="absolute right-[11%] top-[19%] h-5 w-5 rounded-full border border-white bg-gradient-to-br from-white to-[#72B5FF] shadow-[0_0_25px_10px_rgba(56,139,255,.22)]" />
            <div aria-hidden="true" className="absolute bottom-[18%] left-[10%] h-8 w-8 rounded-full border border-white/90 bg-gradient-to-br from-white to-[#7DBAFF] shadow-[0_0_28px_12px_rgba(56,139,255,.2)]" />
            <div className="absolute right-[2%] top-[17%] hidden max-w-[110px] text-[8px] font-medium uppercase leading-5 tracking-[0.3em] text-[#1C4F9A] sm:block">Science<br />meets<br />people</div>
            <div className="absolute bottom-[15%] right-[1%] hidden max-w-[150px] text-[8px] font-medium uppercase leading-5 tracking-[0.23em] text-[#1C4F9A] sm:block">Personalised care begins with a conversation.</div>
            <div aria-hidden="true" className="absolute left-[7%] top-[22%] h-[58%] w-[85%] rotate-[-24deg] rounded-[50%] border border-white/75" />
          </div>
        </div>
      </section>

      {/* CONTACT PATHWAYS */}
      <section id="contact-options" className="relative border-t border-white/80 bg-gradient-to-b from-[#EEF5FF] via-[#FBFAF6] to-[#F6F0E4] px-5 py-12 sm:px-8 md:px-12 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div><p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#1768D8]">02 — CHOOSE YOUR PATH</p><h2 className="mt-4 font-[var(--font-heading)] text-[clamp(2.5rem,5vw,5rem)] font-light leading-[0.9] tracking-[-0.06em] text-[#0A1935]">One conversation.<br /><span className="text-[#4C78B9]">Your way forward.</span></h2></div>
            <p className="max-w-[390px] text-[13px] leading-6 text-[#526987]">Choose the route closest to what you’re looking for. You can always start with a general enquiry.</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {routes.map((route, index) => (
              <Reveal key={route.number} delay={index * 0.06} className="h-full">
                <Link href={route.href} className={`group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[1.35rem] border border-white/90 bg-gradient-to-br ${route.tone} p-6 shadow-[0_14px_44px_rgba(34,83,150,.09)] transition duration-500 hover:-translate-y-1 hover:border-[#73A9FF] hover:shadow-[0_22px_55px_rgba(0,92,255,.16)] sm:p-7`}>
                  <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-[#5BA1FF]/20 blur-3xl transition duration-500 group-hover:bg-[#2F83FF]/35" />
                  <div className="relative flex items-center justify-between"><span className="text-[9px] font-semibold tracking-[0.2em] text-[#1768D8]">{route.number}</span><span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-white/65 text-[#086BFF] shadow-sm transition duration-300 group-hover:scale-105 group-hover:bg-[#086BFF] group-hover:text-white"><Icon type={route.icon} /></span></div>
                  <p className="relative mt-7 text-[8px] font-semibold uppercase tracking-[0.22em] text-[#657A9A]">{route.eyebrow}</p>
                  <h3 className="relative mt-3 font-[var(--font-heading)] text-[clamp(1.8rem,2.3vw,2.4rem)] font-light leading-[0.98] tracking-[-0.05em] text-[#0A1935]">{route.title}</h3>
                  <p className="relative mt-4 flex-1 text-[12px] leading-6 text-[#4D607C]">{route.description}</p>
                  <div className="relative mt-7 flex items-center justify-between border-t border-[#AFC3DF]/70 pt-4 text-[9px] font-semibold tracking-[0.12em] text-[#064FC6]"><span>{route.action}</span><span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/75 transition duration-300 group-hover:translate-x-1 group-hover:bg-[#086BFF] group-hover:text-white"><Arrow /></span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section id="enquiry" className="scroll-mt-24 bg-gradient-to-br from-[#F8F5ED] via-white to-[#E5F0FF] px-5 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#1768D8]">03 — SEND AN ENQUIRY</p>
            <h2 className="mt-6 font-[var(--font-heading)] text-[clamp(3.2rem,6.3vw,6.2rem)] font-light leading-[0.84] tracking-[-0.07em] text-[#0A1935]">Tell us what<br />you’re <span className="bg-gradient-to-r from-[#0756D8] to-[#6CAEFF] bg-clip-text italic text-transparent">exploring.</span></h2>
            <p className="mt-7 max-w-[390px] text-[14px] leading-7 text-[#526987]">Share a little about what brought you here. Our team will use your enquiry to help direct you to the most relevant next step.</p>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white bg-white/70 p-4 shadow-[0_12px_35px_rgba(34,83,150,.07)]"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#DCEBFF] to-[#A8CDFF] text-[#0756D8]"><Icon type="headset" /></span><div><p className="text-[12px] font-semibold text-[#0A1935]">Need help choosing?</p><p className="mt-1 text-[11px] leading-5 text-[#60738F]">Send a note and we’ll help you find the right path.</p></div></div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[1.6rem] border border-white bg-white/75 p-5 shadow-[0_24px_80px_rgba(33,78,142,.11)] backdrop-blur-xl sm:p-8 lg:p-10">
              {submitted ? (
                <div role="status" className="flex min-h-[420px] flex-col items-start justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E5F0FF] text-[#086BFF]"><svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                  <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#1768D8]">Enquiry prepared</p>
                  <h3 className="mt-3 font-[var(--font-heading)] text-4xl tracking-[-0.05em] text-[#0A1935]">Thank you for reaching out.</h3>
                  <p className="mt-4 max-w-[440px] text-sm leading-6 text-[#526987]">The form interface has recorded this state locally. Connect the form to your contact API or email provider to deliver enquiries to the DRIPLABS team.</p>
                  <button type="button" onClick={() => setSubmitted(false)} className="mt-7 rounded-full border border-[#B7CBE7] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#174D9B] transition hover:border-[#086BFF] hover:bg-[#EFF6FF]">Send another enquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your name" name="name" placeholder="Full name" required />
                    <Field label="Email address" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone number" name="phone" type="tel" placeholder="Optional contact number" />
                    <div><label htmlFor="interest" className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.17em] text-[#526987]">I’m interested in</label><select id="interest" name="interest" value={selectedInterest} onChange={(event) => setSelectedInterest(event.target.value)} className="h-12 w-full rounded-xl border border-[#D6E0EF] bg-[#FBFCFF] px-4 text-[13px] text-[#0A1935] outline-none transition focus:border-[#086BFF] focus:ring-4 focus:ring-[#086BFF]/10">{interests.map((interest) => <option key={interest}>{interest}</option>)}</select></div>
                  </div>
                  <div><label htmlFor="message" className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.17em] text-[#526987]">How can we help?</label><textarea id="message" name="message" rows={5} placeholder="Tell us a little about what you’re looking for…" className="w-full resize-y rounded-xl border border-[#D6E0EF] bg-[#FBFCFF] px-4 py-3 text-[13px] leading-6 text-[#0A1935] outline-none transition placeholder:text-[#8A9BB3] focus:border-[#086BFF] focus:ring-4 focus:ring-[#086BFF]/10" /></div>
                  <label className="flex items-start gap-3 text-[11px] leading-5 text-[#61738D]"><input type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[#086BFF]" /><span>I agree to be contacted by DRIPLABS regarding this enquiry.</span></label>
                  <div className="flex flex-col gap-4 border-t border-[#DCE4F0] pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-[300px] text-[10px] leading-5 text-[#71819A]">Please avoid including sensitive medical information in this form.</p><button type="submit" className="group inline-flex min-h-12 items-center justify-center gap-5 rounded-full bg-gradient-to-r from-[#0756D8] via-[#0878FF] to-[#4D9BFF] px-7 text-[10px] font-semibold uppercase tracking-[0.17em] text-white shadow-[0_10px_28px_rgba(0,92,255,.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(0,92,255,.3)]">Send enquiry <span className="transition-transform group-hover:translate-x-1"><Arrow /></span></button></div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="relative overflow-hidden border-t border-white bg-gradient-to-r from-[#E6F1FF] via-[#FBFAF6] to-[#F4EEDF] px-5 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-20">
        <div aria-hidden="true" className="absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#82B9FF]/30 blur-[90px]" />
        <div className="relative mx-auto max-w-[1500px]">
          <Reveal><p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#1768D8]">04 — WHAT HAPPENS NEXT</p><div className="mt-5 grid gap-6 lg:grid-cols-[.7fr_1.3fr] lg:gap-16"><h2 className="font-[var(--font-heading)] text-[clamp(2.7rem,5vw,5.3rem)] font-light leading-[0.88] tracking-[-0.06em] text-[#0A1935]">A thoughtful path<br /><span className="text-[#4D78B8]">from here.</span></h2><div className="grid gap-0 sm:grid-cols-2">{journey.map((item, index) => <div key={item.number} className={`border-t border-[#B8CBE3] py-5 sm:px-5 ${index % 2 ? "sm:border-l" : "sm:pl-0"}`}><p className="text-[9px] font-semibold tracking-[0.2em] text-[#1768D8]">{item.number}</p><h3 className="mt-3 font-[var(--font-heading)] text-2xl tracking-[-0.04em] text-[#0A1935]">{item.title}</h3><p className="mt-2 max-w-[320px] text-[12px] leading-6 text-[#5A6E8B]">{item.description}</p></div>)}</div></div></Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F7F2E8] via-[#EAF3FF] to-[#8DBEFF] px-5 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-24">
        <div aria-hidden="true" className="absolute right-[-7rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full border border-white/70 shadow-[0_0_100px_rgba(0,92,255,.14)]" />
        <div className="relative mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal><p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#1768D8]">YOUR NEXT STEP</p><h2 className="mt-5 font-[var(--font-heading)] text-[clamp(3.2rem,7vw,7rem)] font-light leading-[0.84] tracking-[-0.07em] text-[#0A1935]">Not sure where<br />to begin?</h2><p className="mt-6 max-w-[460px] text-[14px] leading-7 text-[#526987]">We’ll help you find the right path. Start with a consultation and take the next step with clarity.</p></Reveal>
          <Reveal delay={0.08}><Link href="/book" className="group inline-flex min-h-14 items-center justify-between gap-10 rounded-full bg-gradient-to-r from-[#064CCB] via-[#0878FF] to-[#3E91FF] px-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_14px_38px_rgba(0,92,255,.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(0,92,255,.35)]">Book a consultation <span className="transition-transform group-hover:translate-x-1"><Arrow /></span></Link></Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({ label, name, type = "text", placeholder, required = false }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return <div><label htmlFor={name} className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.17em] text-[#526987]">{label}{required && <span className="ml-1 text-[#086BFF]">*</span>}</label><input id={name} name={name} type={type} placeholder={placeholder} required={required} className="h-12 w-full rounded-xl border border-[#D6E0EF] bg-[#FBFCFF] px-4 text-[13px] text-[#0A1935] outline-none transition placeholder:text-[#8A9BB3] focus:border-[#086BFF] focus:ring-4 focus:ring-[#086BFF]/10" /></div>;
}
