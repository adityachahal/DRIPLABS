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
      setScrolled(window.scrollY > 40);
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
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-700 ${
          scrolled
            ? "bg-[#08090B]/82 text-[#F4F2EC] backdrop-blur-2xl"
            : "bg-transparent text-[#F4F2EC]"
        }`}
      >
        {/* Top technical accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-0 top-0 h-px w-[18vw] origin-left bg-gradient-to-r from-[#C9A646] to-transparent"
        />

        {/* Subtle bottom hairline when scrolling */}
        <motion.div
          animate={{
            opacity: scrolled ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.07]"
        />

        <div
          className={`mx-auto flex max-w-[1380px] items-center justify-between px-5 transition-all duration-700 sm:px-7 lg:px-10 ${
            scrolled ? "py-3.5" : "py-5"
          }`}
        >
          {/* ====================================================
              LOGO
              ==================================================== */}
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
              className="h-auto w-[128px] object-contain brightness-0 invert transition-all duration-700 sm:w-[138px]"
            />
          </a>

          {/* ====================================================
              DESKTOP NAVIGATION
              ==================================================== */}
          <nav className="hidden items-center lg:flex">
            <div className="flex items-center gap-6 xl:gap-8">
              {mainNavigation.slice(0, 4).map((item) => (
                <NavLink
                  key={item.label}
                  item={item}
                  scrolled={scrolled}
                />
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
                  className="group flex items-center gap-2 py-2 text-[9px] uppercase tracking-[0.21em] text-[#A7A8AC] transition-colors duration-300 hover:text-[#F4F2EC]"
                >
                  <span>Pathways</span>

                  <span
                    className={`text-[8px] text-[#C9A646] transition-transform duration-500 ${
                      pathwaysOpen ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>

                <AnimatePresence>
                  {pathwaysOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                        filter: "blur(5px)",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                        filter: "blur(4px)",
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute right-[-120px] top-full mt-4 w-[510px] overflow-hidden border border-white/[0.10] bg-[#101216]/96 text-[#F4F2EC] shadow-[0_30px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl"
                    >
                      <div className="border-b border-white/[0.08] px-5 pb-4 pt-4">
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-[8px] uppercase tracking-[0.28em] text-[#6F7278]">
                              Choose your entry
                            </p>

                            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#C9A646]">
                              DRIPLABS
                            </p>
                          </div>

                          <span className="font-mono text-[8px] tracking-[0.18em] text-[#555960]">
                            04 PATHWAYS
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2">
                        {pathwayItems.map((item) => (
                          <a
                            key={item.number}
                            href={item.href}
                            onClick={closeMenus}
                            className="group/pathway relative border-b border-white/[0.07] px-5 py-6 transition-colors duration-500 hover:bg-white/[0.035] md:nth-[odd]:border-r"
                          >
                            <div className="flex items-start justify-between">
                              <span className="font-mono text-[8px] tracking-[0.2em] text-[#C9A646]">
                                {item.number}
                              </span>

                              <span className="text-[#555960] transition-all duration-500 group-hover/pathway:translate-x-1 group-hover/pathway:text-[#C9A646]">
                                →
                              </span>
                            </div>

                            <p className="mt-6 text-[8px] uppercase tracking-[0.2em] text-[#6F7278]">
                              {item.label}
                            </p>

                            <p className="mt-2 font-[var(--font-heading)] text-[1.65rem] font-light leading-none tracking-[-0.035em] text-[#F4F2EC]">
                              {item.headline}
                            </p>

                            <p className="mt-3 max-w-[205px] text-[10px] leading-5 text-[#777A80]">
                              {item.description}
                            </p>
                          </a>
                        ))}
                      </div>

                      <div className="h-px bg-gradient-to-r from-[#C9A646]/50 via-transparent to-transparent" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                item={mainNavigation[4]}
                scrolled={scrolled}
              />

              {/* MORE */}
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
                  className="group flex items-center gap-2 py-2 text-[9px] uppercase tracking-[0.21em] text-[#A7A8AC] transition-colors duration-300 hover:text-[#F4F2EC]"
                >
                  <span>More</span>

                  <span
                    className={`text-[8px] text-[#C9A646] transition-transform duration-500 ${
                      exploreOpen ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>

                <AnimatePresence>
                  {exploreOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                        filter: "blur(5px)",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                        filter: "blur(4px)",
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute right-0 top-full mt-4 w-[380px] overflow-hidden border border-white/[0.10] bg-[#101216]/96 p-2 text-[#F4F2EC] shadow-[0_30px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl"
                    >
                      {exploreItems.map((item, index) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={closeMenus}
                          className="group/item flex items-center justify-between border-b border-white/[0.07] px-4 py-5 last:border-b-0 transition-colors duration-500 hover:bg-white/[0.035]"
                        >
                          <div>
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-[8px] tracking-[0.2em] text-[#C9A646]">
                                0{index + 1}
                              </span>

                              <span className="text-sm font-light tracking-[-0.015em]">
                                {item.label}
                              </span>
                            </div>

                            <p className="mt-2 max-w-[265px] text-[10px] leading-5 text-[#777A80]">
                              {item.description}
                            </p>
                          </div>

                          <span className="text-[#555960] transition-all duration-500 group-hover/item:translate-x-1 group-hover/item:text-[#C9A646]">
                            →
                          </span>
                        </a>
                      ))}

                      <div className="h-px bg-gradient-to-r from-[#C9A646]/50 via-transparent to-transparent" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </nav>

          {/* ====================================================
              DESKTOP CTA
              ==================================================== */}
          <div className="hidden lg:block">
            <motion.a
              href="/book"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              onClick={closeMenus}
              className="group relative inline-flex items-center gap-4 overflow-hidden border border-[#C9A646]/45 bg-[#C9A646]/[0.045] px-5 py-3.5 text-[8px] uppercase tracking-[0.23em] text-[#F4F2EC] transition-all duration-500 hover:border-[#C9A646] hover:bg-[#C9A646]/[0.10] hover:shadow-[0_0_30px_rgba(201,166,70,0.10)]"
            >
              <span className="relative z-10">Book Your Drip</span>

              <span className="relative z-10 text-[#C9A646] transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>

              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#C9A646] transition-all duration-700 group-hover:w-full" />
            </motion.a>
          </div>

          {/* ====================================================
              MOBILE MENU BUTTON
              ==================================================== */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-[110] flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span className="sr-only">
              {menuOpen ? "Close navigation" : "Open navigation"}
            </span>

            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-1/2 h-px w-full origin-center transition-all duration-500 ${
                  menuOpen
                    ? "rotate-45 bg-[#F4F2EC]"
                    : " -translate-y-1.5 bg-[#F4F2EC]"
                }`}
              />

              <span
                className={`absolute left-0 top-1/2 h-px w-full origin-center transition-all duration-500 ${
                  menuOpen
                    ? "-rotate-45 bg-[#F4F2EC]"
                    : "translate-y-1.5 bg-[#F4F2EC]"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* ========================================================
          MOBILE NAVIGATION
          ======================================================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-[90] overflow-hidden bg-[#08090B] text-[#F4F2EC] lg:hidden"
          >
            <div className="driplabs-noise flex h-full flex-col overflow-y-auto px-5 pb-7 pt-28 sm:px-7">
              {/* Ambient glow */}
              <div className="pointer-events-none absolute right-[-25%] top-[10%] h-[380px] w-[380px] rounded-full bg-[#C9A646]/[0.035] blur-[100px]" />

              <div className="relative flex items-start justify-between border-b border-white/[0.08] pb-5">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#555960]">
                    Snnylo Wellness Sciences
                  </p>

                  <p className="mt-2 text-[8px] uppercase tracking-[0.22em] text-[#C9A646]">
                    Physician-led · Pharma-grade · Made in India
                  </p>
                </div>

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#555960]">
                  Menu
                </span>
              </div>

              {/* MAIN NAV */}
              <nav className="relative mt-6">
                {mainNavigation.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenus}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.055,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-center justify-between border-b border-white/[0.08] py-5"
                  >
                    <span className="flex items-center gap-5">
                      <span className="font-mono text-[8px] tracking-[0.2em] text-[#C9A646]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[2rem] font-light leading-none tracking-[-0.045em]">
                        {item.label}
                      </span>
                    </span>

                    <span className="text-[#555960] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#C9A646]">
                      →
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* PATHWAYS */}
              <div className="relative mt-9">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-[#555960]">
                    Choose your path
                  </p>

                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#C9A646]">
                    04
                  </span>
                </div>

                <div className="border-t border-white/[0.08]">
                  {pathwayItems.map((item, index) => (
                    <motion.a
                      key={item.number}
                      href={item.href}
                      onClick={closeMenus}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group block border-b border-white/[0.08] py-5"
                    >
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <div className="flex items-center gap-4">
                            <span className="font-mono text-[8px] tracking-[0.2em] text-[#C9A646]">
                              {item.number}
                            </span>

                            <span className="text-sm font-light text-[#A7A8AC]">
                              {item.label}
                            </span>
                          </div>

                          <p className="mt-2 pl-8 font-[var(--font-heading)] text-[1.5rem] font-light leading-none tracking-[-0.03em] text-[#F4F2EC]/90">
                            {item.headline}
                          </p>
                        </div>

                        <span className="pt-1 text-[#555960] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#C9A646]">
                          →
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* MORE */}
              <div className="relative mt-9">
                <p className="mb-4 text-[8px] uppercase tracking-[0.25em] text-[#555960]">
                  More from DRIPLABS
                </p>

                <div className="border-t border-white/[0.08]">
                  {exploreItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={closeMenus}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.58 + index * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex items-center justify-between border-b border-white/[0.08] py-4"
                    >
                      <span className="flex items-center gap-4">
                        <span className="font-mono text-[8px] tracking-[0.2em] text-[#C9A646]">
                          0{index + 1}
                        </span>

                        <span className="text-sm font-light">
                          {item.label}
                        </span>
                      </span>

                      <span className="text-[#555960] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#C9A646]">
                        →
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.82,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mt-auto pt-9"
              >
                <motion.a
                  href="/book"
                  onClick={closeMenus}
                  whileTap={{ scale: 0.985 }}
                  className="group flex items-center justify-between border border-[#C9A646]/60 bg-[#C9A646] px-6 py-5 text-[9px] uppercase tracking-[0.24em]"
                >
                  <span className="text-[#08090B]">Book Your Drip</span>

                  <span className="text-[#08090B] transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </motion.a>

                <div className="mt-5 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.2em] text-[#555960]">
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
      className={`group relative whitespace-nowrap px-1 py-2 text-[9px] uppercase tracking-[0.2em] transition-colors duration-300 ${
        scrolled ? "text-[#A7A8AC]" : "text-[#A7A8AC]"
      } hover:text-[#F4F2EC]`}
    >
      <span>{item.label}</span>

      <span className="absolute bottom-0 left-1 h-px w-0 bg-[#C9A646] transition-all duration-500 group-hover:w-[calc(100%-0.5rem)]" />
    </a>
  );
}
