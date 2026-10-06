import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";

const pathways = [
  {
    number: "01",
    eyebrow: "For Physicians",
    title: "Extend your practice.",
    description:
      "Bring a more structured, physician-led wellness experience into your existing practice with the DRIPLABS ecosystem.",
    points: [
      "Physician-led experience",
      "Structured wellness protocols",
      "Clinical and operational framework",
      "Premium patient experience",
    ],
    href: "#physicians",
  },
  {
    number: "02",
    eyebrow: "For Clinics",
    title: "Elevate your offering.",
    description:
      "Create a refined IV wellness experience within a clinic environment designed around consistency, care and premium service.",
    points: [
      "Premium treatment environment",
      "Protocol-led experience",
      "Operational support",
      "Consistent brand standards",
    ],
    href: "#clinics",
  },
  {
    number: "03",
    eyebrow: "For Strategic Partners",
    title: "Build what's next.",
    description:
      "Collaborate with DRIPLABS across complementary capabilities, locations, technology and wellness infrastructure.",
    points: [
      "Strategic collaboration",
      "Shared capabilities",
      "New market opportunities",
      "Long-term partnerships",
    ],
    href: "#strategic-partners",
  },
];

const standards = [
  {
    number: "01",
    title: "Physician-led",
    description:
      "Every partnership is designed around a responsible, physician-led wellness experience.",
  },
  {
    number: "02",
    title: "Consistency",
    description:
      "A clear operating philosophy helps maintain a considered experience across locations and partners.",
  },
  {
    number: "03",
    title: "Traceability",
    description:
      "The DRIPLABS approach places emphasis on structured protocols, product transparency and process discipline.",
  },
  {
    number: "04",
    title: "Experience",
    description:
      "The physical and digital experience is treated as part of the standard, not an afterthought.",
  },
];

const process = [
  {
    number: "01",
    title: "Start a conversation",
    description:
      "Tell us about your practice, clinic, organisation or partnership opportunity.",
  },
  {
    number: "02",
    title: "Understand the fit",
    description:
      "Our team explores the opportunity, operating model and requirements together.",
  },
  {
    number: "03",
    title: "Build the framework",
    description:
      "The relevant partnership pathway, experience and operational framework are defined.",
  },
  {
    number: "04",
    title: "Launch together",
    description:
      "Move from planning into a structured partnership with the DRIPLABS team.",
  },
];

function Arrow() {
  return (
    <span className="transition-transform duration-500 group-hover:translate-x-1">
      →
    </span>
  );
}

function SectionLabel({
  number,
  children,
}: {
  number?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      {number && (
        <span className="font-mono text-[9px] tracking-[0.18em] text-[#8ccfff]">
          {number}
        </span>
      )}

      <span className="h-px w-8 bg-[#5da8ff]/50" />

      <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/40">
        {children}
      </span>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <main className="partners-redesign min-h-screen overflow-hidden">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="partners-hero relative min-h-[100svh] overflow-hidden">
        {/* Atmospheric background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="partners-light partners-light-one" />
          <div className="partners-light partners-light-two" />

          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:90px_90px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,transparent_0%,#03070d_72%)]" />

          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#03070d] to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1700px] items-center px-5 pb-20 pt-32 sm:px-8 lg:px-14">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-4">
            {/* Hero copy */}
            <div className="partners-hero-copy relative z-10">
              <SectionLabel>DRIPLABS Partnerships</SectionLabel>

              <h1 className="mt-8 max-w-[720px] font-serif text-[clamp(58px,8vw,118px)] leading-[0.82] tracking-[-0.065em]">
                Build what&apos;s
                <span className="partners-gradient-text block">
                  next.
                </span>
              </h1>

              <div className="mt-8 h-px w-20 bg-gradient-to-r from-[#5da8ff] to-transparent" />

              <p className="mt-7 max-w-[510px] text-[14px] leading-7 text-white/48 sm:text-[15px]">
                Partner with DRIPLABS to create considered, physician-led
                wellness experiences built around a consistent standard of
                care, service and design.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#pathways"
                  className="partners-primary-button group inline-flex min-h-[52px] items-center gap-5 px-7 text-[9px] font-medium uppercase tracking-[0.2em] text-white"
                >
                  Explore partnerships
                  <Arrow />
                </a>

                <a
                  href="#contact"
                  className="partners-secondary-button inline-flex min-h-[52px] items-center border border-white/[0.12] px-7 text-[9px] font-medium uppercase tracking-[0.2em] text-white/65"
                >
                  Start a conversation
                </a>
              </div>
            </div>

            {/* Hero visual */}
            <div className="partners-hero-visual relative min-h-[440px] lg:min-h-[650px]">
              <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#65b2ff]/10 lg:h-[570px] lg:w-[570px]" />

              <div className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#65b2ff]/10 lg:h-[430px] lg:w-[430px]" />

              <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1574ff]/10 blur-[70px]" />

              <div className="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-[#a8ddff] shadow-[0_0_18px_5px_rgba(110,190,255,0.5)]" />

              <div className="absolute right-[15%] top-[35%] h-1 w-1 rounded-full bg-[#a8ddff] shadow-[0_0_18px_5px_rgba(110,190,255,0.5)]" />

              <div className="absolute bottom-[18%] left-[30%] h-1 w-1 rounded-full bg-[#a8ddff] shadow-[0_0_18px_5px_rgba(110,190,255,0.5)]" />

              <div className="relative mx-auto aspect-[3/2] w-full max-w-[900px] pt-10">
                <Image
                  src="/images/sections/build-ecosystem.png"
                  alt="DRIPLABS partnership ecosystem"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain object-center drop-shadow-[0_40px_100px_rgba(0,105,255,0.2)]"
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#03070d_95%)] opacity-50" />
              </div>

              <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4 whitespace-nowrap text-[8px] uppercase tracking-[0.3em] text-white/25">
                <span className="h-px w-10 bg-white/10" />
                Partnership ecosystem
                <span className="h-px w-10 bg-white/10" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.07]">
          <div className="mx-auto flex max-w-[1700px] items-center justify-between px-5 py-4 sm:px-8 lg:px-14">
            <span className="font-mono text-[8px] tracking-[0.22em] text-white/20">
              DRIPLABS / PARTNERSHIP SYSTEM
            </span>

            <span className="font-mono text-[8px] tracking-[0.22em] text-white/20">
              01 — 04
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="relative border-t border-white/[0.07]">
        <div className="mx-auto max-w-[1700px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <SectionLabel>A connected ecosystem</SectionLabel>

              <h2 className="mt-6 max-w-[560px] font-serif text-[clamp(42px,5.5vw,78px)] leading-[0.88] tracking-[-0.055em]">
                More than a treatment.
                <span className="block text-white/25">
                  A standard.
                </span>
              </h2>
            </div>

            <div className="lg:pt-12">
              <p className="max-w-[740px] text-[18px] leading-8 text-white/58">
                DRIPLABS is built as an ecosystem rather than a single
                destination. The experience depends on the people, spaces and
                partners behind it.
              </p>

              <p className="mt-7 max-w-[680px] text-[13px] leading-7 text-white/32">
                Our partnership model is designed to bring together clinical
                expertise, operational discipline and a premium wellness
                experience while preserving the character of each partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PATHWAYS
      ========================================================= */}

      <section
        id="pathways"
        className="relative border-t border-white/[0.07]"
      >
        <div className="mx-auto max-w-[1700px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <SectionLabel>Partnership pathways</SectionLabel>

              <h2 className="mt-6 max-w-[900px] font-serif text-[clamp(44px,6vw,82px)] leading-[0.87] tracking-[-0.06em]">
                Find your place
                <span className="text-white/25"> in the ecosystem.</span>
              </h2>
            </div>

            <p className="max-w-[340px] text-[12px] leading-6 text-white/30">
              Three distinct pathways. One considered approach to building the
              DRIPLABS standard.
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-3">
            {pathways.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="partners-pathway group relative min-h-[520px] overflow-hidden border border-white/[0.09] bg-[#07111d] p-7 md:p-9"
              >
                <div className="partners-card-glow absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-[#72b8ff]">
                      {item.number}
                    </span>

                    <span className="text-lg text-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#9bd3ff]">
                      ↗
                    </span>
                  </div>

                  <div className="mt-auto">
                    <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/32">
                      {item.eyebrow}
                    </p>

                    <h3 className="mt-4 max-w-[420px] font-serif text-[clamp(36px,4vw,54px)] leading-[0.88] tracking-[-0.045em]">
                      {item.title}
                    </h3>

                    <p className="mt-6 max-w-[430px] text-[13px] leading-7 text-white/40">
                      {item.description}
                    </p>

                    <div className="mt-7 border-t border-white/[0.08] pt-5">
                      <ul className="space-y-3">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-center gap-3 text-[9px] uppercase tracking-[0.13em] text-white/42"
                          >
                            <span className="h-1 w-1 rounded-full bg-[#5da8ff]" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[#91cbff]">
                      Explore pathway
                      <Arrow />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PHYSICIANS
      ========================================================= */}

      <section
        id="physicians"
        className="relative overflow-hidden border-t border-white/[0.07]"
      >
        <div className="partners-section-light absolute right-[-10%] top-[-10%]" />

        <div className="relative mx-auto max-w-[1700px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.72fr] lg:gap-24">
            <div>
              <SectionLabel number="01">Physicians</SectionLabel>

              <h2 className="mt-7 max-w-[800px] font-serif text-[clamp(48px,6vw,88px)] leading-[0.85] tracking-[-0.06em]">
                Extend your
                <span className="block partners-gradient-text">
                  practice.
                </span>
              </h2>

              <p className="mt-8 max-w-[600px] text-[15px] leading-8 text-white/42">
                Create a more considered wellness offering around your existing
                clinical practice, supported by the DRIPLABS framework.
              </p>
            </div>

            <div className="partners-premium-panel p-7 md:p-10">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#72b8ff]">
                The physician layer
              </p>

              <div className="mt-8 space-y-0">
                {[
                  "Clinical oversight",
                  "Protocol framework",
                  "Patient experience",
                  "Operational structure",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center gap-5 border-b border-white/[0.08] py-5 last:border-0"
                  >
                    <span className="font-mono text-[8px] text-white/20">
                      0{index + 1}
                    </span>

                    <span className="text-[12px] uppercase tracking-[0.1em] text-white/60 transition-colors duration-300 group-hover:text-white">
                      {item}
                    </span>

                    <span className="ml-auto text-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#72b8ff]">
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLINICS
      ========================================================= */}

      <section
        id="clinics"
        className="relative overflow-hidden border-t border-white/[0.07] bg-[#06101a]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(30,125,255,0.07),transparent_38%)]" />

        <div className="relative mx-auto max-w-[1700px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-[0.72fr_1fr] lg:gap-24">
            <div className="order-2 lg:order-1">
              <div className="partners-premium-panel p-7 md:p-10">
                <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07]">
                  {[
                    ["01", "Experience"],
                    ["02", "Operations"],
                    ["03", "Protocols"],
                    ["04", "Standards"],
                  ].map(([number, title]) => (
                    <div
                      key={number}
                      className="group min-h-[150px] bg-[#040a11] p-6 transition-colors duration-500 hover:bg-[#0a1a2b]"
                    >
                      <span className="font-mono text-[8px] text-[#72b8ff]">
                        {number}
                      </span>

                      <p className="mt-12 text-[10px] uppercase tracking-[0.15em] text-white/45 transition-colors group-hover:text-white">
                        {title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionLabel number="02">Clinics</SectionLabel>

              <h2 className="mt-7 max-w-[850px] font-serif text-[clamp(48px,6vw,88px)] leading-[0.85] tracking-[-0.06em]">
                Elevate your
                <span className="block partners-gradient-text">
                  offering.
                </span>
              </h2>

              <p className="mt-8 max-w-[600px] text-[15px] leading-8 text-white/42">
                Introduce a premium wellness experience into your clinic with a
                framework designed to connect protocols, people, environment
                and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STRATEGIC PARTNERS
      ========================================================= */}

      <section
        id="strategic-partners"
        className="relative overflow-hidden border-t border-white/[0.07]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(30,130,255,0.1),transparent_45%)]" />

        <div className="relative mx-auto max-w-[1700px] px-5 py-28 sm:px-8 lg:px-14 lg:py-36">
          <div className="mx-auto max-w-[1000px] text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="font-mono text-[9px] text-[#72b8ff]">
                03
              </span>

              <span className="h-px w-8 bg-[#5da8ff]/50" />

              <span className="text-[9px] uppercase tracking-[0.28em] text-white/35">
                Strategic Partners
              </span>
            </div>

            <h2 className="mt-8 font-serif text-[clamp(52px,7vw,104px)] leading-[0.82] tracking-[-0.065em]">
              Build what&apos;s
              <span className="block partners-gradient-text">next.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-[680px] text-[14px] leading-7 text-white/40">
              We collaborate with organisations that bring complementary
              capabilities, expertise, infrastructure or opportunities to the
              DRIPLABS ecosystem.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-[1200px] gap-px border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
            {[
              {
                title: "Capability",
                text: "Bring expertise, technology or infrastructure into the ecosystem.",
              },
              {
                title: "Reach",
                text: "Explore opportunities to expand the DRIPLABS experience into new environments.",
              },
              {
                title: "Innovation",
                text: "Develop new ideas and experiences around the future of wellness.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="partners-strategy-card group bg-[#040a11] p-8 md:p-10"
              >
                <span className="font-mono text-[8px] text-[#72b8ff]">
                  0{index + 1}
                </span>

                <h3 className="mt-12 font-serif text-[34px] tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[12px] leading-6 text-white/32">
                  {item.text}
                </p>

                <div className="mt-10 h-px w-8 bg-[#5da8ff] transition-all duration-700 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STANDARDS
      ========================================================= */}

      <section className="relative border-t border-white/[0.07]">
        <div className="mx-auto max-w-[1700px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <SectionLabel>Partnership standards</SectionLabel>

              <h2 className="mt-6 font-serif text-[clamp(44px,5.5vw,78px)] leading-[0.86] tracking-[-0.06em]">
                The standard
                <span className="block text-white/25">
                  stays consistent.
                </span>
              </h2>

              <p className="mt-8 max-w-[440px] text-[13px] leading-7 text-white/32">
                The partnership can evolve. The underlying principles remain
                considered, structured and experience-led.
              </p>
            </div>

            <div className="border-y border-white/[0.08]">
              {standards.map((item) => (
                <div
                  key={item.number}
                  className="group grid gap-5 border-b border-white/[0.08] py-7 last:border-0 md:grid-cols-[70px_220px_1fr] md:items-center"
                >
                  <span className="font-mono text-[9px] text-[#72b8ff]">
                    {item.number}
                  </span>

                  <h3 className="font-serif text-[28px] tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-2">
                    {item.title}
                  </h3>

                  <p className="max-w-[500px] text-[12px] leading-6 text-white/32">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#06101a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(30,125,255,0.06),transparent_45%)]" />

        <div className="relative mx-auto max-w-[1700px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
          <div className="mx-auto max-w-[850px] text-center">
            <SectionLabel>The process</SectionLabel>

            <h2 className="mt-6 font-serif text-[clamp(44px,5.5vw,78px)] leading-[0.86] tracking-[-0.06em]">
              From conversation
              <span className="block text-white/25">
                to collaboration.
              </span>
            </h2>
          </div>

          <div className="relative mx-auto mt-16 grid max-w-[1250px] gap-3 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-[35px] hidden h-px bg-gradient-to-r from-transparent via-[#5da8ff]/30 to-transparent lg:block" />

            {process.map((item) => (
              <div
                key={item.number}
                className="partners-process-card group relative border border-white/[0.08] bg-[#03080f] p-7 md:p-8"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full border border-[#5da8ff]/30 bg-[#071321] font-mono text-[8px] text-[#72b8ff]">
                    {item.number}
                  </span>

                  <span className="text-white/15 transition-colors duration-500 group-hover:text-[#72b8ff]">
                    +
                  </span>
                </div>

                <h3 className="mt-12 font-serif text-[28px] leading-none tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[11px] leading-6 text-white/32">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CTA
      ========================================================= */}

      <section
        id="contact"
        className="partners-contact relative overflow-hidden border-t border-white/[0.07]"
      >
        <div className="partners-contact-glow absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0878ff]/10 blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#03070d_78%)]" />

        <div className="relative mx-auto max-w-[1300px] px-5 py-32 text-center sm:px-8 lg:py-44">
          <SectionLabel>Start a conversation</SectionLabel>

          <h2 className="mx-auto mt-7 max-w-[1100px] font-serif text-[clamp(54px,8vw,112px)] leading-[0.8] tracking-[-0.07em]">
            Let&apos;s build the
            <span className="block partners-gradient-text">
              next chapter.
            </span>
          </h2>

          <p className="mx-auto mt-9 max-w-[600px] text-[13px] leading-7 text-white/38">
            Tell us about your practice, clinic, organisation or partnership
            idea. Our team can explore the right pathway with you.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@thedriplabs.com"
              className="partners-primary-button group inline-flex min-h-[54px] items-center gap-5 px-8 text-[9px] font-medium uppercase tracking-[0.2em] text-white"
            >
              Contact DRIPLABS
              <Arrow />
            </a>

            <Link
              href="/locations"
              className="partners-secondary-button inline-flex min-h-[54px] items-center border border-white/[0.13] px-8 text-[9px] font-medium uppercase tracking-[0.2em] text-white/60"
            >
              Explore locations
            </Link>
          </div>

          <div className="mx-auto mt-16 flex max-w-[800px] items-center gap-4 text-[8px] uppercase tracking-[0.25em] text-white/18">
            <span className="h-px flex-1 bg-white/[0.07]" />
            <span>DRIPLABS PARTNERSHIP SYSTEM</span>
            <span className="h-px flex-1 bg-white/[0.07]" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}