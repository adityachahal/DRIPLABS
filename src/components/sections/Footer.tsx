import Image from "next/image";

const consumerLinks = [
  ["Protocols", "/protocols"],
  ["NADx", "/nadx"],
  ["The Standard", "/standard"],
  ["Experience", "/experience"],
  ["Circle", "/circle"],
];

const professionalLinks = [
  ["Physicians", "/physicians"],
  ["Physician Dossier", "/physicians/dossier"],
  ["Practice Economics", "/physicians/economics"],
  ["Distributors", "/distributors"],
  ["Territory", "/distributors/territory"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#070708] text-[#F2F0EA]">
      {/* =========================================================
          ATMOSPHERIC BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute right-[-15%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[#C9A646]/[0.025] blur-[140px]" />

        <div className="absolute bottom-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-[#AFC7C2]/[0.02] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.7'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        {/* =======================================================
            MAIN FOOTER
        ======================================================= */}

        <div className="border-t border-white/[0.09] py-16 md:py-24 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
            {/* ===================================================
                BRAND
            =================================================== */}

            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="h-[5px] w-[5px] rounded-full bg-[#C9A646] shadow-[0_0_12px_rgba(201,166,70,0.65)]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#C9A646]">
                  DRIPLABS®
                </span>
              </div>

              <div className="mt-7">
                <Image
                  src="/images/brand/driplabs-logo.webp"
                  alt="DRIPLABS by Snnylo"
                  width={180}
                  height={64}
                  className="h-auto w-[155px] object-contain object-left opacity-90 md:w-[170px]"
                />
              </div>

              <p className="mt-8 max-w-sm font-[var(--font-heading)] text-2xl font-light leading-[1.05] tracking-[-0.03em] text-white/80 md:text-3xl">
                Wellness, built the way medicine is built.
              </p>

              <p className="mt-6 max-w-sm text-xs leading-6 text-white/30">
                Physician-supervised wellness · Manufactured in India
              </p>
            </div>

            {/* ===================================================
                EXPLORE
            =================================================== */}

            <div className="lg:col-span-2 lg:col-start-6">
              <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#C9A646]">
                Explore
              </p>

              <nav className="mt-7 flex flex-col gap-4">
                {consumerLinks.map(([label, href], index) => (
                  <a
                    key={href}
                    href={href}
                    className="group flex items-center gap-3 text-xs text-white/40 transition-colors duration-300 hover:text-white/85"
                  >
                    <span className="font-mono text-[7px] text-white/15 transition-colors duration-300 group-hover:text-[#C9A646]/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{label}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* ===================================================
                PARTNERS
            =================================================== */}

            <div className="lg:col-span-2">
              <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#C9A646]">
                Partners
              </p>

              <nav className="mt-7 flex flex-col gap-4">
                {professionalLinks.map(
                  ([label, href], index) => (
                    <a
                      key={href}
                      href={href}
                      className="group flex items-center gap-3 text-xs text-white/40 transition-colors duration-300 hover:text-white/85"
                    >
                      <span className="font-mono text-[7px] text-white/15 transition-colors duration-300 group-hover:text-[#C9A646]/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{label}</span>
                    </a>
                  ),
                )}
              </nav>
            </div>

            {/* ===================================================
                CONTACT
            =================================================== */}

            <div className="lg:col-span-3">
              <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#C9A646]">
                Contact
              </p>

              <div className="mt-7 flex flex-col text-xs">
                <a
                  href="tel:+919319119009"
                  className="group flex w-fit items-center gap-3 text-white/45 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-[4px] w-[4px] rounded-full bg-white/15 transition-all duration-300 group-hover:bg-[#C9A646] group-hover:shadow-[0_0_8px_rgba(201,166,70,0.5)]" />

                  +91 (931) 911-9009
                </a>

                <a
                  href="mailto:hello@thedriplabs.com"
                  className="group mt-4 flex w-fit items-center gap-3 text-white/45 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-[4px] w-[4px] rounded-full bg-white/15 transition-all duration-300 group-hover:bg-[#C9A646] group-hover:shadow-[0_0_8px_rgba(201,166,70,0.5)]" />

                  hello@thedriplabs.com
                </a>

                <a
                  href="/book"
                  className="group relative mt-9 flex w-full max-w-[300px] items-center justify-between overflow-hidden border border-[#C9A646]/50 bg-[#C9A646] px-5 py-4 text-[8px] uppercase tracking-[0.22em] text-[#070708] transition-all duration-500 hover:border-[#E5D39A] hover:bg-[#E5D39A]"
                >
                  <span className="absolute inset-y-0 left-0 w-0 bg-white/20 transition-all duration-700 group-hover:w-full" />

                  <span className="relative z-10">
                    Book a consultation
                  </span>

                  <span className="relative z-10 text-base transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* =====================================================
              LARGE BRAND SIGNATURE
          ===================================================== */}

          <div className="mt-20 overflow-hidden border-y border-white/[0.06] py-5 md:mt-28">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/15">
                WELLNESS / INDIA / 2026
              </span>

              <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-[#C9A646]/35">
                SNNYLO / DRIPLABS
              </span>
            </div>
          </div>

          {/* =====================================================
              LEGAL
          ===================================================== */}

          <div className="mt-7 border-t border-white/[0.06] pt-7">
            <div className="flex flex-col gap-6 text-[8px] uppercase tracking-[0.19em] text-white/20 md:flex-row md:items-start md:justify-between">
              <span className="shrink-0">
                © 2026 DRIPLABS®
              </span>

              <span className="max-w-3xl leading-5 md:text-center">
                Protocol names and taglines are
                wellness-positioning terms only — never
                claims of diagnosis, treatment, cure or
                prevention. Final protocol selection, dosage
                and duration remain the sole responsibility of
                the treating physician. Administration only in
                licensed settings. Not intended to diagnose,
                treat, cure or prevent any disease.
              </span>

              <span className="shrink-0 md:text-right">
                Snnylo Wellness Sciences
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}