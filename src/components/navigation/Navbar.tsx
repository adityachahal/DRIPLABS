"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const mainNavigation = [
  { label: "About", href: "/about" },
  { label: "Protocols", href: "/protocols" },
  { label: "How It Works", href: "/experience" },
  { label: "Membership", href: "/#memberships" },
  { label: "Locations", href: "/#locations" },
];

const exploreItems = [
  {
    label: "NADx",
    description: "Discover the dedicated NADx experience.",
    href: "/nadx",
  },
  {
    label: "DripLabs Standard",
    description: "See how the DRIPLABS wellness system is built.",
    href: "/standard",
  },
  {
    label: "The Experience",
    description: "Understand the physician-led DRIPLABS journey.",
    href: "/experience",
  },
  {
    label: "FAQ",
    description: "Answers to common questions about DRIPLABS.",
    href: "/#faq",
  },
];

const pathwayItems = [
  {
    number: "01",
    label: "Members",
    headline: "Personal wellness.",
    description:
      "Protocols, membership and the DRIPLABS journey for your own wellness.",
    href: "/circle",
  },
  {
    number: "02",
    label: "Physicians / Clinics",
    headline: "Clinical partnership.",
    description:
      "Clinical documentation, partnership models and physician resources.",
    href: "/physicians",
  },
  {
    number: "03",
    label: "Distributors / Stockists",
    headline: "Build the territory.",
    description:
      "Portfolio, territory and commercial partnership information.",
    href: "/distributors",
  },
  {
    number: "04",
    label: "The Circle",
    headline: "Stay within the world.",
    description:
      "A closer relationship with DRIPLABS through member access and education.",
    href: "/circle",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pathwaysOpen, setPathwaysOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenus = () => {
    setPathwaysOpen(false);
    setExploreOpen(false);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[#F5F0E7]/95 text-[#0B1D35] shadow-[0_1px_0_rgba(11,29,53,0.08)] backdrop-blur-xl"
            : "bg-transparent text-[#F5F0E7]"
        }`}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-0 top-0 h-px w-[22vw] origin-left bg-[#C9A646]"
        />

        <div
          className={`mx-auto flex max-w-[1680px] items-center justify-between px-6 transition-all duration-500 md:px-10 lg:px-14 ${
            scrolled ? "py-4" : "py-6"
          }`}
        >
          {/* LOGO */}
          <a
            href="/"
            onClick={closeMenus}
            aria-label="DRIPLABS home"
            className="relative z-[110] flex shrink-0 items-center select-none"
          >
            <Image
              src="/images/brand/driplabs-logo.webp"
              alt="DRIPLABS by Snnylo"
              width={180}
              height={64}
              priority
              className={`h-auto w-[138px] object-contain transition-all duration-500 md:w-[150px] ${
                scrolled ? "brightness-[0.22] saturate-[0.75]" : ""
              }`}
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
            {mainNavigation.slice(0, 4).map((item) => (
              <NavLink key={item.label} item={item} scrolled={scrolled} />
            ))}

            {/* PATHWAYS */}
            <div
              className="relative"
              onMouseEnter={() => setPathwaysOpen(true)}
              onMouseLeave={() => setPathwaysOpen(false)}
            >
              <button
                type="button"
                aria-expanded={pathwaysOpen}
                aria-haspopup="true"
                onClick={() => setPathwaysOpen((open) => !open)}
                className={`group flex items-center gap-2 border-b border-transparent pb-1 text-[9px] uppercase tracking-[0.21em] transition-all duration-300 ${
                  scrolled ? "text-[#0B1D35]" : "text-[#F5F0E7]"
                } hover:border-[#C9A646]`}
              >
                <span>Pathways</span>

                <span
                  className={`text-[9px] transition-transform duration-300 ${
                    pathwaysOpen ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>

              <AnimatePresence>
                {pathwaysOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute right-0 top-full mt-5 w-[470px] border border-[#0B1D35]/10 bg-[#F5F0E7] p-3 text-[#0B1D35] shadow-[0_24px_70px_rgba(11,29,53,0.14)]"
                  >
                    <div className="flex items-start justify-between border-b border-[#0B1D35]/10 px-4 pb-4 pt-2">
                      <div>
                        <p className="text-[8px] uppercase tracking-[0.27em] text-[#77736A]">
                          Choose your entry
                        </p>

                        <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#C9A646]">
                          DRIPLABS
                        </p>
                      </div>

                      <span className="text-[8px] uppercase tracking-[0.18em] text-[#99958C]">
                        04 PATHWAYS
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2">
                      {pathwayItems.map((item) => (
                        <a
                          key={item.number}
                          href={item.href}
                          onClick={closeMenus}
                          className="group/pathway border-b border-[#0B1D35]/10 px-4 py-6 transition-colors duration-300 hover:bg-[#ECE6DB] md:nth-[odd]:border-r"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <span className="text-[8px] tracking-[0.2em] text-[#C9A646]">
                              {item.number}
                            </span>

                            <span className="pt-0.5 text-[#99958C] transition-transform duration-300 group-hover/pathway:translate-x-1">
                              →
                            </span>
                          </div>

                          <p className="mt-5 text-[8px] uppercase tracking-[0.2em] text-[#77736A]">
                            {item.label}
                          </p>

                          <p className="mt-2 font-[var(--font-heading)] text-[1.6rem] font-light leading-none tracking-[-0.035em]">
                            {item.headline}
                          </p>

                          <p className="mt-3 text-[10px] leading-5 text-[#666259]">
                            {item.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              item={mainNavigation[4]}
              scrolled={scrolled}
            />

            {/* EXPLORE */}
            <div
              className="relative"
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
            >
              <button
                type="button"
                aria-expanded={exploreOpen}
                aria-haspopup="true"
                onClick={() => setExploreOpen((open) => !open)}
                className={`group flex items-center gap-2 border-b border-transparent pb-1 text-[9px] uppercase tracking-[0.21em] transition-all duration-300 ${
                  scrolled ? "text-[#0B1D35]" : "text-[#F5F0E7]"
                } hover:border-[#C9A646]`}
              >
                <span>More</span>

                <span
                  className={`text-[9px] transition-transform duration-300 ${
                    exploreOpen ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>

              <AnimatePresence>
                {exploreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute right-0 top-full mt-5 w-[360px] border border-[#0B1D35]/10 bg-[#F5F0E7] p-3 text-[#0B1D35] shadow-[0_24px_70px_rgba(11,29,53,0.14)]"
                  >
                    {exploreItems.map((item, index) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={closeMenus}
                        className="group/item block border-b border-[#0B1D35]/10 px-4 py-5 last:border-b-0"
                      >
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <div className="flex items-center gap-3">
                              <span className="text-[8px] tracking-[0.2em] text-[#C9A646]">
                                0{index + 1}
                              </span>

                              <span className="text-base font-light tracking-[-0.02em]">
                                {item.label}
                              </span>
                            </div>

                            <p className="mt-2 max-w-[255px] text-[10px] leading-5 text-[#666259]">
                              {item.description}
                            </p>
                          </div>

                          <span className="pt-1 text-[#99958C] transition-transform duration-300 group-hover/item:translate-x-1">
                            →
                          </span>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <motion.a
              href="/book"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={closeMenus}
              className={`group inline-flex items-center gap-4 border px-5 py-3 text-[9px] uppercase tracking-[0.22em] transition-all duration-500 ${
                scrolled
                  ? "border-[#0B1D35]/25 bg-transparent hover:border-[#0B1D35] hover:bg-[#0B1D35]"
                  : "border-white/35 bg-transparent hover:border-[#C9A646] hover:bg-[#C9A646]"
              }`}
            >
              <span
                className={
                  scrolled
                    ? "text-[#0B1D35] transition-colors duration-300 group-hover:text-[#F5F0E7]"
                    : "text-[#F5F0E7] transition-colors duration-300 group-hover:text-[#0B1D35]"
                }
              >
                Book Your Drip
              </span>

              <span
                className={
                  scrolled
                    ? "text-[#0B1D35] transition-colors duration-300 group-hover:text-[#C9A646]"
                    : "text-[#F5F0E7] transition-colors duration-300 group-hover:text-[#0B1D35]"
                }
              >
                →
              </span>
            </motion.a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-[110] flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span className="sr-only">
              {menuOpen ? "Close navigation" : "Open navigation"}
            </span>

            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-1/2 h-px w-full origin-center transition-all duration-300 ${
                  menuOpen
                    ? "rotate-45 bg-[#F5F0E7]"
                    : scrolled
                      ? "-translate-y-1.5 bg-[#0B1D35]"
                      : "-translate-y-1.5 bg-[#F5F0E7]"
                }`}
              />

              <span
                className={`absolute left-0 top-1/2 h-px w-full origin-center transition-all duration-300 ${
                  menuOpen
                    ? "-rotate-45 bg-[#F5F0E7]"
                    : scrolled
                      ? "translate-y-1.5 bg-[#0B1D35]"
                      : "translate-y-1.5 bg-[#F5F0E7]"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[90] bg-[#0B1D35] text-[#F5F0E7] lg:hidden"
          >
            <div className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-28 md:px-10">
              <div className="flex items-start justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.28em] text-white/35">
                    Snnylo Wellness Sciences
                  </p>

                  <p className="mt-2 text-[8px] uppercase tracking-[0.22em] text-[#C9A646]">
                    Physician-led · Pharma-grade · Made in India
                  </p>
                </div>

                <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Menu
                </span>
              </div>

              <nav className="mt-7">
                {mainNavigation.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenus}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.045,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-center justify-between border-b border-white/10 py-5"
                  >
                    <span className="flex items-center gap-5">
                      <span className="text-[8px] tracking-[0.2em] text-[#C9A646]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-3xl font-light tracking-[-0.04em]">
                        {item.label}
                      </span>
                    </span>

                    <span className="text-lg text-white/25 transition-opacity duration-300 group-hover:opacity-60">
                      →
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* MOBILE PATHWAYS */}
              <div className="mt-10">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-white/35">
                    Choose your path
                  </p>

                  <span className="text-[8px] uppercase tracking-[0.2em] text-[#C9A646]">
                    04
                  </span>
                </div>

                <div className="border-t border-white/10">
                  {pathwayItems.map((item, index) => (
                    <motion.a
                      key={item.number}
                      href={item.href}
                      onClick={closeMenus}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.22 + index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group block border-b border-white/10 py-5"
                    >
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <div className="flex items-center gap-4">
                            <span className="text-[8px] tracking-[0.2em] text-[#C9A646]">
                              {item.number}
                            </span>

                            <span className="text-base font-light">
                              {item.label}
                            </span>
                          </div>

                          <p className="mt-2 pl-8 font-[var(--font-heading)] text-[1.5rem] font-light leading-none tracking-[-0.03em] text-white/85">
                            {item.headline}
                          </p>
                        </div>

                        <span className="pt-1 text-white/30 transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* MOBILE MORE */}
              <div className="mt-10">
                <p className="mb-5 text-[8px] uppercase tracking-[0.25em] text-white/35">
                  More from DRIPLABS
                </p>

                <div className="border-t border-white/10">
                  {exploreItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={closeMenus}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.48 + index * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex items-center justify-between border-b border-white/10 py-4"
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-[8px] tracking-[0.2em] text-[#C9A646]">
                          0{index + 1}
                        </span>

                        <span className="text-sm font-light">
                          {item.label}
                        </span>
                      </span>

                      <span className="text-white/25 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.72,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-auto pt-10"
              >
                <motion.a
                  href="/book"
                  onClick={closeMenus}
                  whileTap={{ scale: 0.985 }}
                  className="group flex items-center justify-between bg-[#C9A646] px-6 py-5 text-[9px] uppercase tracking-[0.24em]"
                >
                  <span className="text-[#0B1D35]">Book Your Drip</span>
                  <span className="text-[#0B1D35]">→</span>
                </motion.a>

                <div className="mt-6 flex items-center justify-between text-[8px] uppercase tracking-[0.2em] text-white/25">
                  <span>DRIPLABS®</span>
                  <span>India</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  item,
  scrolled,
}: {
  item: {
    label: string;
    href: string;
  };
  scrolled: boolean;
}) {
  return (
    <a
      href={item.href}
      className={`group relative whitespace-nowrap pb-1 text-[9px] uppercase tracking-[0.2em] ${
        scrolled ? "text-[#0B1D35]" : "text-[#F5F0E7]"
      }`}
    >
      <span className="transition-opacity duration-300 group-hover:opacity-55">
        {item.label}
      </span>

      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C9A646] transition-all duration-400 group-hover:w-full" />
    </a>
  );
}



