"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const mainNavigation = [
  { label: "About", href: "#about" },
  { label: "Protocols", href: "#protocol-system" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Membership", href: "#memberships" },
  { label: "Locations", href: "#locations" },
  { label: "FAQ", href: "#faq" },
];

const exploreItems = [
  {
    label: "Protocols",
    description: "Explore the DRIPLABS wellness system.",
    href: "#drips",
  },
  {
    label: "NADx",
    description: "Discover the dedicated NADx experience.",
    href: "#nad",
  },
  {
    label: "Membership",
    description: "Packages, unlimited access and DRIPLABS Circle.",
    href: "#memberships",
  },
];

const audienceItems = [
  {
    number: "01",
    label: "For Consumers",
    description:
      "Discover treatments, membership and your DRIPLABS journey.",
    href: "#drips",
  },
  {
    number: "02",
    label: "For Physicians",
    description:
      "Explore clinical partnerships, protocols, training and support.",
    href: "#physicians",
  },
  {
    number: "03",
    label: "For Partners",
    description:
      "Distributor, stockist, C&F and franchise-style opportunities.",
    href: "#partners",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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
    setExploreOpen(false);
    setMenuOpen(false);
  };

  return (
    <>
      {/* =========================================================
          PRIMARY NAVBAR
      ========================================================= */}
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[#F5F0E7]/95 text-[#0B1D35] shadow-[0_1px_0_rgba(11,29,53,0.08)] backdrop-blur-xl"
            : "bg-transparent text-[#F5F0E7]"
        }`}
      >
        {/* Gold top line */}
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
          {/* =====================================================
              LOGO
          ===================================================== */}
          <a
            href="/"
            onClick={closeMenus}
            aria-label="DRIPLABS home"
            className="relative z-[110] flex items-center select-none"
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

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <nav className="hidden items-center gap-7 lg:flex">
            {/* ABOUT */}
            <NavLink item={mainNavigation[0]} />

            {/* EXPLORE */}
            <div
              className="relative"
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
            >
              <button
                type="button"
                aria-expanded={exploreOpen}
                onClick={() => setExploreOpen((open) => !open)}
                className={`group flex items-center gap-2 text-[9px] uppercase tracking-[0.21em] transition-all duration-300 ${
                  scrolled
                    ? "text-[#0B1D35]"
                    : "text-[#F5F0E7]"
                } hover:opacity-60`}
              >
                <span>Explore</span>

                <span
                  className={`text-[10px] transition-transform duration-300 ${
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
                      y: 12,
                      scale: 0.985,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 12,
                      scale: 0.985,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-1/2 top-full mt-5 w-[390px] -translate-x-1/2 border border-[#0B1D35]/10 bg-[#F5F0E7] p-3 text-[#0B1D35] shadow-[0_24px_70px_rgba(11,29,53,0.14)]"
                  >
                    <div className="flex items-start justify-between border-b border-[#0B1D35]/10 px-4 pb-4 pt-2">
                      <div>
                        <p className="text-[8px] uppercase tracking-[0.26em] text-[#77736A]">
                          Explore
                        </p>

                        <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#C9A646]">
                          DRIPLABS
                        </p>
                      </div>

                      <span className="text-[8px] uppercase tracking-[0.18em] text-[#99958C]">
                        03
                      </span>
                    </div>

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

                              <span className="text-lg font-light tracking-[-0.03em] text-[#0B1D35]">
                                {item.label}
                              </span>
                            </div>

                            <p className="mt-2 max-w-[265px] text-[10px] leading-5 text-[#666259]">
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

            {/* REMAINING LINKS */}
            {mainNavigation.slice(1).map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </nav>

          {/* =====================================================
              DESKTOP CTA
          ===================================================== */}
          <div className="hidden lg:block">
            <motion.a
              href="/book"
              whileHover={{
                y: -1,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={closeMenus}
              className={`group inline-flex items-center gap-4 border px-6 py-3 text-[9px] uppercase tracking-[0.22em] transition-all duration-500 ${
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

              <motion.span
                animate={{
                  x: [0, 2, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className={
                  scrolled
                    ? "text-[#0B1D35] transition-all duration-300 group-hover:text-[#C9A646]"
                    : "text-[#F5F0E7] transition-all duration-300 group-hover:text-[#0B1D35]"
                }
              >
                →
              </motion.span>
            </motion.a>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation" : "Open navigation"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-[110] flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span className="sr-only">
              {menuOpen
                ? "Close navigation"
                : "Open navigation"}
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

      {/* =========================================================
          MOBILE NAVIGATION
      ========================================================= */}
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
              {/* Header */}
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

              {/* Main navigation */}
              <nav className="mt-7">
                {mainNavigation.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenus}
                    initial={{
                      opacity: 0,
                      x: -24,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
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

                    <span className="text-lg text-white/25 transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* Audience pathways */}
              <div className="mt-12">
                <p className="mb-5 text-[8px] uppercase tracking-[0.25em] text-white/35">
                  Choose your path
                </p>

                <div className="border-t border-white/10">
                  {audienceItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={closeMenus}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.25 + index * 0.06,
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

                          <p className="mt-2 max-w-sm pl-8 text-[10px] leading-5 text-white/40">
                            {item.description}
                          </p>
                        </div>

                        <span className="text-white/30 transition-transform duration-300 group-hover:translate-x-2">
                          →
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
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
                  <span className="text-[#0B1D35]">
                    Book Your Drip
                  </span>

                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                    className="text-[#0B1D35]"
                  >
                    →
                  </motion.span>
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

/* =========================================================
   DESKTOP NAV LINK
========================================================= */

function NavLink({
  item,
}: {
  item: {
    label: string;
    href: string;
  };
}) {
  return (
    <a
      href={item.href}
      className="group relative text-[9px] uppercase tracking-[0.2em]"
    >
      <span className="transition-opacity duration-300 group-hover:opacity-55">
        {item.label}
      </span>

      <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#C9A646] transition-all duration-400 group-hover:w-full" />
    </a>
  );
}

