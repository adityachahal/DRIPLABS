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
    title: "Build what&apos;s next.",
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

export default function PartnersPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020812] text-[#F7FAFF]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[88svh] overflow-hidden">
        {/* Atmosphere */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/2 top-[18%] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#0066FF]/[0.07] blur-[120px]" />

          <div className="absolute -left-[20%] top-[45%] h-[500px] w-[500px] rounded-full bg-[#1683FF]/[0.035] blur-[100px]" />

          <div className="absolute -right-[15%] top-[35%] h-[500px] w-[500px] rounded-full bg-[#4D9BFF]/[0.025] blur-[100px]" />

          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
              [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
              [background-size:80px_80px]
            "
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020812_88%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[88svh] max-w-[1600px] items-center px-5 pb-20 pt-28 sm:px-8 lg:px-12">
          <div className="grid w-full items-center gap-10 lg:grid-cols-12 lg:gap-6">
            {/* Copy */}

            <div className="relative z-10 lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#1683FF]" />

                <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#4D9BFF]">
                  DRIPLABS Partnerships
                </p>
              </div>

              <h1 className="mt-7 max-w-[680px] font-serif text-[clamp(54px,7vw,100px)] leading-[0.87] tracking-[-0.06em]">
                Build what&apos;s
                <span className="block text-[#8CCBFF]">next.</span>
              </h1>

              <p className="mt-8 max-w-[520px] text-[14px] leading-7 text-white/50 sm:text-[15px]">
                Partner with DRIPLABS to create considered, physician-led
                wellness experiences built around a consistent standard of
                care, service and design.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#pathways"
                  className="
                    group
                    inline-flex
                    min-h-[48px]
                    items-center
                    gap-4
                    bg-[#0066FF]
                    px-7
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-white
                    transition-all
                    duration-500
                    hover:bg-[#1683FF]
                    hover:shadow-[0_15px_50px_rgba(0,102,255,0.25)]
                  "
                >
                  Explore partnerships
                  <Arrow />
                </a>

                <a
                  href="#contact"
                  className="
                    inline-flex
                    min-h-[48px]
                    items-center
                    border
                    border-white/[0.14]
                    bg-white/[0.025]
                    px-7
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-white/75
                    transition-all
                    duration-500
                    hover:border-[#1683FF]/50
                    hover:bg-white/[0.05]
                    hover:text-white
                  "
                >
                  Start a conversation
                </a>
              </div>
            </div>

            {/* Graphic */}

            <div className="relative lg:col-span-7">
              <div className="relative mx-auto aspect-[3/2] w-full max-w-[850px]">
                <div className="absolute inset-0 rounded-full bg-[#0066FF]/[0.04] blur-[80px]" />

                <Image
                  src="/images/sections/build-ecosystem.png"
                  alt="DRIPLABS partnership ecosystem"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="
                    object-contain
                    object-center
                    drop-shadow-[0_30px_80px_rgba(0,102,255,0.16)]
                  "
                />

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,#020812_100%)] opacity-50" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom technical line */}

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.07]">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
            <span className="font-mono text-[8px] tracking-[0.2em] text-white/25">
              DRIPLABS / PARTNERSHIP SYSTEM
            </span>

            <span className="font-mono text-[8px] tracking-[0.2em] text-white/25">
              01 — 04
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="relative border-t border-white/[0.07]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <p className="text-[9px] font-medium uppercase tracking-[0.26em] text-[#4D9BFF]">
                A connected ecosystem
              </p>

              <h2 className="mt-5 max-w-[500px] font-serif text-[clamp(38px,5vw,66px)] leading-[0.92] tracking-[-0.05em]">
                More than a treatment.
                <span className="block text-white/35">
                  A standard.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="max-w-[720px] text-[17px] leading-8 text-white/60">
                DRIPLABS is built as an ecosystem rather than a single
                destination. The experience depends on the people, spaces and
                partners behind it.
              </p>

              <p className="mt-6 max-w-[720px] text-[13px] leading-7 text-white/35">
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
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.26em] text-[#4D9BFF]">
                Partnership pathways
              </p>

              <h2 className="mt-4 font-serif text-[clamp(38px,5vw,68px)] leading-none tracking-[-0.05em]">
                Find your place
                <span className="text-white/35"> in the ecosystem.</span>
              </h2>
            </div>

            <p className="max-w-[360px] text-[12px] leading-6 text-white/35">
              Three distinct pathways. One considered approach to building the
              DRIPLABS standard.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {pathways.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="
                  group
                  relative
                  min-h-[470px]
                  overflow-hidden
                  border
                  border-white/[0.09]
                  bg-[linear-gradient(145deg,rgba(8,32,58,0.72),rgba(2,8,18,0.96))]
                  p-7
                  transition-all
                  duration-700
                  hover:-translate-y-1
                  hover:border-[#1683FF]/45
                  hover:shadow-[0_30px_80px_rgba(0,102,255,0.12)]
                  md:p-9
                "
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(0,102,255,0.13),transparent_30%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-[#4D9BFF]">
                      {item.number}
                    </span>

                    <span className="text-white/25 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#8CCBFF]">
                      ↗
                    </span>
                  </div>

                  <div className="mt-auto">
                    <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/35">
                      {item.eyebrow}
                    </p>

                    <h3 className="mt-4 font-serif text-[38px] leading-[0.95] tracking-[-0.04em]">
                      {item.title}
                    </h3>

                    <p className="mt-6 max-w-[420px] text-[13px] leading-7 text-white/45">
                      {item.description}
                    </p>

                    <div className="mt-7 border-t border-white/[0.08] pt-5">
                      <ul className="space-y-3">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.12em] text-white/45"
                          >
                            <span className="h-1 w-1 rounded-full bg-[#1683FF]" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.18em] text-[#8CCBFF]">
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
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#0066FF]/[0.035] blur-[100px]" />

        <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] text-[#4D9BFF]">
                  01
                </span>

                <span className="h-px w-10 bg-[#1683FF]/50" />

                <span className="text-[9px] uppercase tracking-[0.22em] text-white/35">
                  Physicians
                </span>
              </div>

              <h2 className="mt-6 max-w-[650px] font-serif text-[clamp(44px,5vw,72px)] leading-[0.92] tracking-[-0.05em]">
                Extend your
                <span className="block text-[#8CCBFF]">
                  practice.
                </span>
              </h2>

              <p className="mt-7 max-w-[580px] text-[14px] leading-7 text-white/45">
                Create a more considered wellness offering around your existing
                clinical practice, supported by the DRIPLABS framework.
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <div className="border border-white/[0.09] bg-[#06152B]/45 p-7 md:p-9">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#4D9BFF]">
                  The physician layer
                </p>

                <div className="mt-7 space-y-5">
                  {[
                    "Clinical oversight",
                    "Protocol framework",
                    "Patient experience",
                    "Operational structure",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 border-b border-white/[0.07] pb-5 last:border-0 last:pb-0"
                    >
                      <span className="font-mono text-[8px] text-white/25">
                        0{index + 1}
                      </span>

                      <span className="text-[12px] text-white/65">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
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
        className="relative overflow-hidden border-t border-white/[0.07] bg-[#06152B]/25"
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/[0.035] blur-[110px]" />

        <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="border border-white/[0.09] bg-[#020812]/70 p-7 md:p-9">
                <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/[0.06] bg-white/[0.06]">
                  {[
                    ["01", "Experience"],
                    ["02", "Operations"],
                    ["03", "Protocols"],
                    ["04", "Standards"],
                  ].map(([number, title]) => (
                    <div
                      key={number}
                      className="bg-[#020812] p-6 transition-colors duration-500 hover:bg-[#06152B]"
                    >
                      <span className="font-mono text-[8px] text-[#4D9BFF]">
                        {number}
                      </span>

                      <p className="mt-6 text-[11px] uppercase tracking-[0.14em] text-white/55">
                        {title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] text-[#4D9BFF]">
                  02
                </span>

                <span className="h-px w-10 bg-[#1683FF]/50" />

                <span className="text-[9px] uppercase tracking-[0.22em] text-white/35">
                  Clinics
                </span>
              </div>

              <h2 className="mt-6 max-w-[700px] font-serif text-[clamp(44px,5vw,72px)] leading-[0.92] tracking-[-0.05em]">
                Elevate your
                <span className="block text-[#8CCBFF]">
                  offering.
                </span>
              </h2>

              <p className="mt-7 max-w-[580px] text-[14px] leading-7 text-white/45">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,102,255,0.08),transparent_42%)]" />

        <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="font-mono text-[9px] text-[#4D9BFF]">
                03
              </span>

              <span className="h-px w-10 bg-[#1683FF]/50" />

              <span className="text-[9px] uppercase tracking-[0.22em] text-white/35">
                Strategic Partners
              </span>
            </div>

            <h2 className="mt-7 font-serif text-[clamp(46px,6vw,82px)] leading-[0.9] tracking-[-0.055em]">
              Build what&apos;s
              <span className="block text-[#8CCBFF]">
                next.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-[650px] text-[14px] leading-7 text-white/45">
              We collaborate with organisations that bring complementary
              capabilities, expertise, infrastructure or opportunities to the
              DRIPLABS ecosystem.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-[1100px] gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
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
                className="group bg-[#020812] p-7 transition-colors duration-500 hover:bg-[#06152B] md:p-9"
              >
                <span className="font-mono text-[8px] text-[#4D9BFF]">
                  0{index + 1}
                </span>

                <h3 className="mt-8 font-serif text-[30px] tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[12px] leading-6 text-white/35">
                  {item.text}
                </p>

                <div className="mt-8 h-px w-8 bg-[#1683FF]/60 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STANDARDS
      ========================================================= */}

      <section className="relative border-t border-white/[0.07]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-[9px] font-medium uppercase tracking-[0.26em] text-[#4D9BFF]">
                Partnership standards
              </p>

              <h2 className="mt-5 font-serif text-[clamp(40px,5vw,68px)] leading-[0.92] tracking-[-0.05em]">
                The standard
                <span className="block text-white/35">
                  stays consistent.
                </span>
              </h2>

              <p className="mt-7 max-w-[440px] text-[13px] leading-7 text-white/35">
                The partnership can evolve. The underlying principles remain
                considered, structured and experience-led.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {standards.map((item) => (
                  <div
                    key={item.number}
                    className="
                      group
                      grid
                      gap-5
                      py-7
                      transition-colors
                      duration-500
                      hover:bg-white/[0.015]
                      md:grid-cols-[70px_220px_1fr]
                      md:items-center
                    "
                  >
                    <span className="font-mono text-[9px] text-[#4D9BFF]">
                      {item.number}
                    </span>

                    <h3 className="font-serif text-[25px] tracking-[-0.02em]">
                      {item.title}
                    </h3>

                    <p className="text-[12px] leading-6 text-white/35">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#06152B]/25">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="text-[9px] font-medium uppercase tracking-[0.26em] text-[#4D9BFF]">
              The process
            </p>

            <h2 className="mt-5 font-serif text-[clamp(40px,5vw,68px)] leading-[0.92] tracking-[-0.05em]">
              From conversation
              <span className="block text-white/35">
                to collaboration.
              </span>
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-[1200px] gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.number}
                className="
                  group
                  border
                  border-white/[0.08]
                  bg-[#020812]/70
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#1683FF]/35
                  hover:bg-[#06152B]
                  md:p-7
                "
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8px] text-[#4D9BFF]">
                    {item.number}
                  </span>

                  <span className="text-white/15 transition-colors duration-500 group-hover:text-[#1683FF]">
                    +
                  </span>
                </div>

                <h3 className="mt-10 font-serif text-[27px] leading-none tracking-[-0.025em]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[11px] leading-6 text-white/35">
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
        className="relative overflow-hidden border-t border-white/[0.07]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.12),transparent_48%)]" />

        <div className="relative mx-auto max-w-[1200px] px-5 py-24 text-center sm:px-8 sm:py-28 lg:py-32">
          <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#4D9BFF]">
            Start a conversation
          </p>

          <h2 className="mx-auto mt-6 max-w-[900px] font-serif text-[clamp(48px,7vw,94px)] leading-[0.88] tracking-[-0.06em]">
            Let&apos;s build the
            <span className="block text-[#8CCBFF]">
              next chapter.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[570px] text-[13px] leading-7 text-white/40">
            Tell us about your practice, clinic, organisation or partnership
            idea. Our team can explore the right pathway with you.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@thedriplabs.com"
              className="
                group
                inline-flex
                min-h-[50px]
                items-center
                gap-4
                bg-[#0066FF]
                px-8
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-white
                transition-all
                duration-500
                hover:bg-[#1683FF]
                hover:shadow-[0_18px_55px_rgba(0,102,255,0.28)]
              "
            >
              Contact DRIPLABS
              <Arrow />
            </a>

            <Link
              href="/locations"
              className="
                inline-flex
                min-h-[50px]
                items-center
                border
                border-white/[0.14]
                px-8
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-white/65
                transition-all
                duration-500
                hover:border-[#1683FF]/50
                hover:text-white
              "
            >
              Explore locations
            </Link>
          </div>

          <div className="mx-auto mt-14 flex max-w-[700px] items-center justify-center gap-4 text-[8px] uppercase tracking-[0.2em] text-white/20">
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