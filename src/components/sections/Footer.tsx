import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#171714] text-[#f4f1eb]">
      <div className="mx-auto max-w-[1600px] px-6 pb-8 md:px-10 lg:px-14">
        <div className="border-t border-white/15 pt-12">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <Image
                src="/images/brand/driplabs-logo.webp"
                alt="DRIPLABS by Snnylo"
                width={180}
                height={64}
                className="h-auto w-[155px] object-contain object-left"
              />

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
                Nourish. Recharge. Restore.
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <p className="text-[9px] uppercase tracking-[0.22em] text-white/30">
                Explore
              </p>

              <nav className="mt-6 flex flex-col gap-4 text-sm text-white/65">
                <a href="#about" className="transition-opacity hover:opacity-50">
                  About
                </a>

                <a href="#drips" className="transition-opacity hover:opacity-50">
                  Drips
                </a>

                <a
                  href="#memberships"
                  className="transition-opacity hover:opacity-50"
                >
                  Memberships
                </a>

                <a
                  href="#locations"
                  className="transition-opacity hover:opacity-50"
                >
                  Locations
                </a>

                <a href="#faq" className="transition-opacity hover:opacity-50">
                  FAQ
                </a>
              </nav>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <p className="text-[9px] uppercase tracking-[0.22em] text-white/30">
                Contact
              </p>

              <div className="mt-6 text-sm text-white/65">
                <a
                  href="tel:+919319119009"
                  className="block transition-opacity hover:opacity-50"
                >
                  +91 (931) 911-9009
                </a>

                <a
                  href="mailto:hello@thedriplabs.com"
                  className="mt-3 block transition-opacity hover:opacity-50"
                >
                  hello@thedriplabs.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.2em] text-white/25 md:flex-row">
            <span>© 2026 DRIPLABS</span>

            <div className="flex gap-6">
              <a href="#" className="transition-opacity hover:opacity-50">
                Privacy
              </a>

              <a href="#" className="transition-opacity hover:opacity-50">
                Terms
              </a>
            </div>

            <span>Made for better wellness</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
