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
    <footer className="bg-[#060F1F] text-[#F7F4EC]">
      <div className="mx-auto max-w-[1680px] px-5 md:px-10 lg:px-14">
        <div className="border-t border-white/10 py-16 md:py-24">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <Image
                src="/images/brand/driplabs-logo.webp"
                alt="DRIPLABS by Snnylo"
                width={180}
                height={64}
                className="h-auto w-[155px] object-contain object-left md:w-[170px]"
              />

              <p className="mt-7 max-w-sm font-[var(--font-heading)] text-2xl font-light leading-[1.05] tracking-[-0.03em] text-white/82">
                Wellness, built the way medicine is built.
              </p>

              <p className="mt-6 max-w-sm text-xs leading-6 text-white/38">
                Physician-supervised wellness · Manufactured in India
              </p>
            </div>

            <div className="lg:col-span-2 lg:col-start-6">
              <p className="text-[8px] uppercase tracking-[0.25em] text-[#E3CE8E]">
                Explore
              </p>

              <nav className="mt-6 flex flex-col gap-4 text-xs text-white/52">
                {consumerLinks.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="transition-colors duration-300 hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="lg:col-span-2">
              <p className="text-[8px] uppercase tracking-[0.25em] text-[#E3CE8E]">
                Partners
              </p>

              <nav className="mt-6 flex flex-col gap-4 text-xs text-white/52">
                {professionalLinks.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="transition-colors duration-300 hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="lg:col-span-3">
              <p className="text-[8px] uppercase tracking-[0.25em] text-[#E3CE8E]">
                Contact
              </p>

              <div className="mt-6 flex flex-col text-xs text-white/52">
                <a
                  href="tel:+919319119009"
                  className="transition-colors duration-300 hover:text-white"
                >
                  +91 (931) 911-9009
                </a>

                <a
                  href="mailto:hello@thedriplabs.com"
                  className="mt-3 transition-colors duration-300 hover:text-white"
                >
                  hello@thedriplabs.com
                </a>

                <a
                  href="/book"
                  className="mt-8 inline-flex w-fit items-center gap-4 border border-[#C9A227] px-5 py-3 text-[8px] uppercase tracking-[0.22em] text-[#E3CE8E] transition-all duration-500 hover:bg-[#C9A227] hover:text-[#060F1F]"
                >
                  Book a consultation →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-7 md:mt-24">
            <div className="flex flex-col gap-5 text-[8px] uppercase tracking-[0.19em] text-white/25 md:flex-row md:items-start md:justify-between">
              <span>© 2026 DRIPLABS®</span>

              <span className="max-w-2xl leading-5 md:text-center">
                Protocol names and taglines are wellness-positioning terms
                only — never claims of diagnosis, treatment, cure or
                prevention. Final protocol selection, dosage and duration
                remain the sole responsibility of the treating physician.
                Administration only in licensed settings. Not intended to
                diagnose, treat, cure or prevent any disease.
              </span>

              <span className="md:text-right">
                Snnylo Wellness Sciences
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
