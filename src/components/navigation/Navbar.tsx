"use client";

import Image from "next/image";
import Link from "next/link";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/* =========================================================
   DRIPLABS NAVBAR
========================================================= */

function ChevronDown({
  open = false,
}: {
  open?: boolean;
}) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={[
        "shrink-0 transition-transform duration-300",
        open ? "rotate-180" : "",
      ].join(" ")}
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 2.5L8 6L4.5 9.5"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 6.5H10.5M7 3L10.5 6.5L7 10"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="7.8"
        cy="7.8"
        r="5.4"
        stroke="currentColor"
        strokeWidth="1.15"
      />
      <path
        d="M12 12L16 16"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14.5 7.4C14.5 11.2 9 15.5 9 15.5S3.5 11.2 3.5 7.4C3.5 4.4 5.95 2 9 2C12.05 2 14.5 4.4 14.5 7.4Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle
        cx="9"
        cy="7.3"
        r="1.7"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
}

function MenuIcon({
  open,
}: {
  open: boolean;
}) {
  return (
    <span
      className="relative block h-5 w-6"
      aria-hidden="true"
    >
      <span
        className={[
          "absolute left-0 h-px w-6 bg-current",
          "transition-all duration-300",
          open
            ? "top-[9px] rotate-45"
            : "top-[3px]",
        ].join(" ")}
      />

      <span
        className={[
          "absolute left-0 top-[9px] h-px w-6 bg-current",
          "transition-opacity duration-200",
          open
            ? "opacity-0"
            : "opacity-100",
        ].join(" ")}
      />

      <span
        className={[
          "absolute left-0 h-px w-6 bg-current",
          "transition-all duration-300",
          open
            ? "top-[9px] -rotate-45"
            : "top-[15px]",
        ].join(" ")}
      />
    </span>
  );
}

/* =========================================================
   DATA
========================================================= */

const wellnessPaths = [
  "Skin & Beauty",
  "Longevity & Cellular Health",
  "Metabolic & Performance",
  "Recovery & Immune",
  "Cognitive & Neuro",
  "Digestive & Systemic",
  "Musculoskeletal",
  "Women's Wellness",
];

const featuredLinks = [
  {
    label: "NADx",
    href: "/nadx",
  },
  {
    label: "Signature Protocols",
    href: "/protocols",
  },
  {
    label: "Membership",
    href: "/circle",
  },
];

const experienceItems = [
  {
    title: "In-Centre",
    description:
      "Physician-led wellness at our centres",
    href: "/experience",
  },
  {
    title: "DRIPLABS Home",
    description:
      "IV wellness, delivered to your home",
    href: "/experience",
  },
  {
    title: "Women's Wellness",
    description:
      "A dedicated pathway for women",
    href: "/protocols/femme",
  },
  {
    title: "Your Journey",
    description:
      "Consultation → Personalisation → Experience → Follow-up",
    href: "/experience",
  },
  {
    title: "Membership",
    description:
      "Exclusive benefits & priority access",
    href: "/circle",
  },
];

const scienceLinks = [
  {
    label: "The DRIPLABS Standard",
    href: "/science#standard",
  },
  {
    label: "NADx",
    href: "/science#nadx",
  },
  {
    label: "Evidence & Research",
    href: "/science#evidence",
  },
  {
    label: "Ingredients",
    href: "/science#ingredients",
  },
  {
    label: "Quality & Traceability",
    href: "/science#traceability",
  },
  {
    label: "COA Library",
    href: "/science#coa",
  },
  {
    label: "Decode a Vial",
    href: "/science#decode",
  },
  {
    label: "Physician Dossier",
    href: "/science#dossier",
  },
];

const circleLinks = [
  {
    label: "Membership Plans",
    href: "/circle",
  },
  {
    label: "Benefits",
    href: "/circle",
  },
  {
    label: "Priority Access",
    href: "/circle",
  },
  {
    label: "Home Services",
    href: "/experience",
  },
  {
    label: "Wellness Journeys",
    href: "/experience",
  },
  {
    label: "Concierge",
    href: "/circle",
  },
  {
    label: "Member Events",
    href: "/circle",
  },
];

const locationLinks = [
  {
    label: "Centres",
    href: "/locations",
  },
  {
    label: "DRIPLABS Home",
    href: "/experience",
  },
  {
    label: "Coming Soon",
    href: "/locations",
  },
];

const physicianLinks = [
  "Physician Network",
  "Physician Dossier",
  "Clinical Education",
  "Medical Affairs",
];

const clinicLinks = [
  "Become a Partner",
  "Authorized Centre",
  "Clinical Collaboration",
];

const distributorLinks = [
  "Distribution Network",
  "Product Portfolio",
  "Territory",
];

const franchiseLinks = [
  "Franchise Opportunity",
  "The Model",
  "Training & Support",
];

/* =========================================================
   TYPES
========================================================= */

type MenuKey =
  | "explore"
  | "experience"
  | "science"
  | "circle"
  | "locations"
  | "partners";

/* =========================================================
   MAIN NAVBAR
========================================================= */

export default function Navbar() {
  const [activeMenu, setActiveMenu] =
    useState<MenuKey | null>(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [mobileSection, setMobileSection] =
    useState<MenuKey | null>(null);

  const [scrolled, setScrolled] =
    useState(false);

  const openTimer =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeTimer =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const reducedMotion = useReducedMotion();

  /* =======================================================
     SCROLL
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  /* =======================================================
     MOBILE BODY LOCK
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =======================================================
     MENU FUNCTIONS
  ======================================================= */

  const clearTimers = () => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }

    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = (menu: MenuKey) => {
    clearTimers();

    openTimer.current = setTimeout(
      () => {
        setActiveMenu(menu);
      },
      reducedMotion ? 0 : 70,
    );
  };

  const closeMenu = () => {
    clearTimers();

    closeTimer.current = setTimeout(
      () => {
        setActiveMenu(null);
      },
      reducedMotion ? 0 : 130,
    );
  };

  const keepMenuOpen = () => {
    clearTimers();
  };

  const closeAll = () => {
    clearTimers();
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  };

  const toggleMobileSection = (
    menu: MenuKey,
  ) => {
    setMobileSection(
      (current) =>
        current === menu
          ? null
          : menu,
    );
  };

  /* =======================================================
     ESCAPE
  ======================================================= */

  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        closeAll();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className={[
          "fixed inset-x-0 top-0 z-[100]",
          "transition-all duration-500",
          scrolled
            ? [
                "border-b border-white/10",
                "bg-[#020812]",
                "text-[#F7FAFF]",
                "shadow-[0_12px_50px_rgba(0,0,0,0.22)]",
              ].join(" ")
            : [
                "border-b border-transparent",
                "bg-transparent",
                "text-white",
              ].join(" "),
        ].join(" ")}
      >
        <div
          className={[
            "absolute bottom-0 left-0 right-0 h-px",
            "bg-gradient-to-r",
            "from-transparent",
            "via-[#1683FF]/50",
            "to-transparent",
            "transition-opacity duration-500",
            scrolled
              ? "opacity-100"
              : "opacity-0",
          ].join(" ")}
        />

        <div
          className={[
            "mx-auto flex max-w-[1800px]",
            "items-center",
            "px-5 sm:px-7 lg:px-1 xl:px-2",
            "h-[72px] lg:h-[78px]",
            "transition-all duration-500",
            scrolled
              ? "lg:h-[70px]"
              : "",
          ].join(" ")}
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            onClick={closeAll}
            aria-label="DRIPLABS home"
            className="group flex shrink-0 items-center"
          >
            <Image
              src="/images/brand/driplabs-logo.webp"
              alt="DRIPLABS"
              width={140}
              height={54}
              priority
              className={[
                "h-auto w-[108px]",
                "object-contain",
                "transition-all duration-500",
                "sm:w-[116px]",
                scrolled
                  ? "brightness-0 invert"
                  : "",
                "group-hover:opacity-75",
              ].join(" ")}
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            aria-label="Primary navigation"
           className="ml-auto mr-6 hidden lg:flex xl:mr-16"
          >
            <div
              className={[
                "flex items-center",
                "gap-6 xl:gap-8",
              ].join(" ")}
            >
              <DesktopNavItem
                label="Explore"
                menu="explore"
                activeMenu={activeMenu}
                openMenu={openMenu}
                closeMenu={closeMenu}
                keepMenuOpen={keepMenuOpen}
              >
                <ExploreDropdown
                  onClose={closeAll}
                />
              </DesktopNavItem>

              <DesktopNavItem
                label="Experience"
                menu="experience"
                activeMenu={activeMenu}
                openMenu={openMenu}
                closeMenu={closeMenu}
                keepMenuOpen={keepMenuOpen}
              >
                <ExperienceDropdown
                  onClose={closeAll}
                />
              </DesktopNavItem>

              <DesktopNavItem
                label="Science"
                menu="science"
                activeMenu={activeMenu}
                openMenu={openMenu}
                closeMenu={closeMenu}
                keepMenuOpen={keepMenuOpen}
              >
                <ScienceDropdown
                  onClose={closeAll}
                />
              </DesktopNavItem>

              {/* =================================================
                  NADx
              ================================================= */}

              <Link
                href="/nadx"
                onClick={closeAll}
                className={[
                  "group relative flex",
                  "items-center",
                  "py-3",
                  "text-[14px]",
                  "font-medium",
                  "tracking-[0.10em]",
                  "text-white/80",
                  "transition-colors duration-300",
                  "hover:text-white",
                ].join(" ")}
              >
                <span>NADx</span>

                <span
                  className={[
                    "absolute bottom-[2px]",
                    "left-0 h-px",
                    "bg-[#1683FF]",
                    "w-0 opacity-0",
                    "transition-all duration-300",
                    "group-hover:w-full",
                    "group-hover:opacity-100",
                  ].join(" ")}
                />
              </Link>

              <DesktopNavItem
                label="Circle"
                menu="circle"
                activeMenu={activeMenu}
                openMenu={openMenu}
                closeMenu={closeMenu}
                keepMenuOpen={keepMenuOpen}
              >
                <CircleDropdown
                  onClose={closeAll}
                />
              </DesktopNavItem>

              <DesktopNavItem
                label="Locations"
                menu="locations"
                activeMenu={activeMenu}
                openMenu={openMenu}
                closeMenu={closeMenu}
                keepMenuOpen={keepMenuOpen}
              >
                <LocationsDropdown
                  onClose={closeAll}
                />
              </DesktopNavItem>

              <DesktopNavItem
                label="Partners"
                menu="partners"
                activeMenu={activeMenu}
                openMenu={openMenu}
                closeMenu={closeMenu}
                keepMenuOpen={keepMenuOpen}
              >
                <PartnersDropdown
                  onClose={closeAll}
                />
              </DesktopNavItem>
            </div>
          </nav>

          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <div
            className={[
              "ml-6 hidden items-center",
              "gap-5 lg:flex xl:ml-8",
            ].join(" ")}
          >
            <Link
              href="/contact"
              onClick={closeAll}
              className={[
                "group relative inline-flex",
                "h-[40px] items-center gap-3",
                "overflow-hidden",
                "rounded-full",
                "border border-[#1683FF]/70",
                "bg-[#0066FF]",
                "px-5",
                "text-[14px]",
                "font-medium",
                "tracking-[0.12em]",
                "text-white",
                "transition-all duration-500",
                "hover:bg-[#1683FF]",
                "hover:shadow-[0_10px_35px_rgba(0,102,255,.25)]",
              ].join(" ")}
            >
              <span>
                Book a Consultation
              </span>

              <span
                className={[
                  "transition-transform duration-300",
                  "group-hover:translate-x-1",
                ].join(" ")}
              >
                <ArrowRight />
              </span>
            </Link>
          </div>

          {/* =================================================
              MOBILE ACTIONS
          ================================================= */}

          <div
            className={[
              "ml-auto flex items-center",
              "gap-3 lg:hidden",
            ].join(" ")}
          >
            <Link
              href="/book"
              onClick={closeAll}
              className={[
                "hidden sm:inline-flex",
                "min-h-[48px] items-center",
                "rounded-full",
                "border border-[#1683FF]/70",
                "bg-[#0066FF]",
                "px-6",
                "text-[8px]",
                "font-medium",
                "tracking-[0.15em]",
                "text-white",
                "transition-colors duration-300",
                "hover:bg-[#1683FF]",
              ].join(" ")}
            >
              BEGIN YOUR JOURNEY
            </Link>

            <button
              type="button"
              aria-label="Open navigation"
              aria-expanded={mobileOpen}
              onClick={() =>
                setMobileOpen(true)
              }
              className={[
                "flex h-9 w-9",
                "items-center justify-center",
                "rounded-full",
                "border border-white/10",
                "text-white",
                "transition-all duration-300",
                "hover:border-[#4D9BFF]/60",
                "hover:bg-[#0066FF]/10",
              ].join(" ")}
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          FULL SCREEN MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.65 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: reducedMotion
                  ? 0
                  : 0.35,
              }}
              className={[
                "fixed inset-0 z-[190]",
                "bg-[#01050B]",
                "hidden lg:block",
              ].join(" ")}
              onClick={closeAll}
            />

            <motion.div
              initial={
                reducedMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 0,
                      scale: 1.02,
                      filter: "blur(8px)",
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={
                reducedMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      scale: 1.01,
                      filter: "blur(6px)",
                    }
              }
              transition={{
                duration: reducedMotion
                  ? 0
                  : 0.4,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className={[
                "fixed inset-0 z-[200]",
                "overflow-hidden",
                "bg-[#020812]",
                "text-[#F7FAFF]",
              ].join(" ")}
            >
              <div className="pointer-events-none absolute left-1/2 top-[20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#0066FF]/[0.08] blur-[120px]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(140,203,255,.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(140,203,255,.035)_1px,transparent_1px)] bg-[size:80px_80px]" />

              <div className="relative flex h-full flex-col">
                <div
                  className={[
                    "flex h-[78px] shrink-0",
                    "items-center justify-between",
                    "border-b border-white/10",
                    "px-5 sm:px-8 lg:px-12",
                  ].join(" ")}
                >
                  <Link
                    href="/"
                    onClick={closeAll}
                    aria-label="DRIPLABS home"
                  >
                    <Image
                      src="/images/brand/driplabs-logo.webp"
                      alt="DRIPLABS"
                      width={130}
                      height={44}
                      className={[
                        "h-auto w-[108px]",
                        "object-contain",
                        "brightness-0 invert",
                      ].join(" ")}
                    />
                  </Link>

                  <button
                    type="button"
                    aria-label="Close navigation"
                    onClick={closeAll}
                    className={[
                      "flex h-10 w-10",
                      "items-center justify-center",
                      "rounded-full",
                      "border border-white/10",
                      "text-white",
                      "transition-all duration-300",
                      "hover:border-[#4D9BFF]/60",
                      "hover:bg-[#0066FF]/10",
                      "hover:text-[#8CCBFF]",
                    ].join(" ")}
                  >
                    <MenuIcon open />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <div
                    className={[
                      "mx-auto flex min-h-full",
                      "max-w-[1500px]",
                      "flex-col",
                      "px-5 py-10",
                      "sm:px-8 sm:py-14",
                      "lg:px-16 lg:py-16",
                    ].join(" ")}
                  >
                    {/* =================================================
                        DESKTOP OVERLAY MENU
                    ================================================= */}

                    <div
                      className={[
                        "hidden",
                        "lg:grid",
                        "lg:grid-cols-[1.1fr_0.9fr]",
                        "lg:gap-20",
                      ].join(" ")}
                    >
                      <div>
                        <EditorialMenuLink
                          label="Explore"
                          index="01"
                          onClick={() =>
                            setMobileSection(
                              mobileSection === "explore"
                                ? null
                                : "explore",
                            )
                          }
                          open={
                            mobileSection === "explore"
                          }
                          reducedMotion={
                            !!reducedMotion
                          }
                        />

                        <EditorialMenuLink
                          label="Experience"
                          index="02"
                          onClick={() =>
                            setMobileSection(
                              mobileSection === "experience"
                                ? null
                                : "experience",
                            )
                          }
                          open={
                            mobileSection === "experience"
                          }
                          reducedMotion={
                            !!reducedMotion
                          }
                        />

                        <EditorialMenuLink
                          label="Science"
                          index="03"
                          onClick={() =>
                            setMobileSection(
                              mobileSection === "science"
                                ? null
                                : "science",
                            )
                          }
                          open={
                            mobileSection === "science"
                          }
                          reducedMotion={
                            !!reducedMotion
                          }
                        />

                        <EditorialMenuLink
                          label="Circle"
                          index="04"
                          onClick={() =>
                            setMobileSection(
                              mobileSection === "circle"
                                ? null
                                : "circle",
                            )
                          }
                          open={
                            mobileSection === "circle"
                          }
                          reducedMotion={
                            !!reducedMotion
                          }
                        />

                        <EditorialMenuLink
                          label="Locations"
                          index="05"
                          onClick={() =>
                            setMobileSection(
                              mobileSection === "locations"
                                ? null
                                : "locations",
                            )
                          }
                          open={
                            mobileSection === "locations"
                          }
                          reducedMotion={
                            !!reducedMotion
                          }
                        />

                        <EditorialMenuLink
                          label="Partners"
                          index="06"
                          onClick={() =>
                            setMobileSection(
                              mobileSection === "partners"
                                ? null
                                : "partners",
                            )
                          }
                          open={
                            mobileSection === "partners"
                          }
                          reducedMotion={
                            !!reducedMotion
                          }
                        />
                      </div>

                      <div
                        className={[
                          "border-l",
                          "border-white/10",
                          "pl-12",
                        ].join(" ")}
                      >
                        <AnimatePresence mode="wait">
                          {mobileSection === "explore" && (
                            <motion.div
                              key="explore"
                              initial={{
                                opacity: 0,
                                y: 12,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              exit={{
                                opacity: 0,
                                y: -8,
                              }}
                              transition={{
                                duration: 0.3,
                              }}
                            >
                              <MobileExplore
                                onClose={closeAll}
                                large
                              />
                            </motion.div>
                          )}

                          {mobileSection === "experience" && (
                            <motion.div
                              key="experience"
                              initial={{
                                opacity: 0,
                                y: 12,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              exit={{
                                opacity: 0,
                                y: -8,
                              }}
                              transition={{
                                duration: 0.3,
                              }}
                            >
                              <MobileExperience
                                onClose={closeAll}
                                large
                              />
                            </motion.div>
                          )}

                          {mobileSection === "science" && (
                            <motion.div
                              key="science"
                              initial={{
                                opacity: 0,
                                y: 12,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              exit={{
                                opacity: 0,
                                y: -8,
                              }}
                              transition={{
                                duration: 0.3,
                              }}
                            >
                              <MobileSimpleLinks
                                links={scienceLinks}
                                onClose={closeAll}
                                large
                              />
                            </motion.div>
                          )}

                          {mobileSection === "circle" && (
                            <motion.div
                              key="circle"
                              initial={{
                                opacity: 0,
                                y: 12,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              exit={{
                                opacity: 0,
                                y: -8,
                              }}
                              transition={{
                                duration: 0.3,
                              }}
                            >
                              <MobileSimpleLinks
                                links={circleLinks}
                                onClose={closeAll}
                                large
                              />
                            </motion.div>
                          )}

                          {mobileSection === "locations" && (
                            <motion.div
                              key="locations"
                              initial={{
                                opacity: 0,
                                y: 12,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              exit={{
                                opacity: 0,
                                y: -8,
                              }}
                              transition={{
                                duration: 0.3,
                              }}
                            >
                              <MobileLocations
                                onClose={closeAll}
                                large
                              />
                            </motion.div>
                          )}

                          {mobileSection === "partners" && (
                            <motion.div
                              key="partners"
                              initial={{
                                opacity: 0,
                                y: 12,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              exit={{
                                opacity: 0,
                                y: -8,
                              }}
                              transition={{
                                duration: 0.3,
                              }}
                            >
                              <MobilePartners
                                onClose={closeAll}
                                large
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* =================================================
                        MOBILE ACCORDIONS
                    ================================================= */}

                    <div className="lg:hidden">
                      <MobileAccordion
                        title="Explore"
                        open={
                          mobileSection === "explore"
                        }
                        onClick={() =>
                          toggleMobileSection(
                            "explore",
                          )
                        }
                      >
                        <MobileExplore
                          onClose={closeAll}
                        />
                      </MobileAccordion>

                      <MobileAccordion
                        title="Experience"
                        open={
                          mobileSection === "experience"
                        }
                        onClick={() =>
                          toggleMobileSection(
                            "experience",
                          )
                        }
                      >
                        <MobileExperience
                          onClose={closeAll}
                        />
                      </MobileAccordion>

                      <MobileAccordion
                        title="Science"
                        open={
                          mobileSection === "science"
                        }
                        onClick={() =>
                          toggleMobileSection(
                            "science",
                          )
                        }
                      >
                        <MobileSimpleLinks
                          links={scienceLinks}
                          onClose={closeAll}
                        />
                      </MobileAccordion>

                      <MobileAccordion
                        title="Circle"
                        open={
                          mobileSection === "circle"
                        }
                        onClick={() =>
                          toggleMobileSection(
                            "circle",
                          )
                        }
                      >
                        <MobileSimpleLinks
                          links={circleLinks}
                          onClose={closeAll}
                        />
                      </MobileAccordion>

                      <MobileAccordion
                        title="Locations"
                        open={
                          mobileSection === "locations"
                        }
                        onClick={() =>
                          toggleMobileSection(
                            "locations",
                          )
                        }
                      >
                        <MobileLocations
                          onClose={closeAll}
                        />
                      </MobileAccordion>

                      <MobileAccordion
                        title="For partners"
                        open={
                          mobileSection === "partners"
                        }
                        onClick={() =>
                          toggleMobileSection(
                            "partners",
                          )
                        }
                      >
                        <MobilePartners
                          onClose={closeAll}
                        />
                      </MobileAccordion>
                    </div>

                    {/* =================================================
                        FINAL CTA
                    ================================================= */}

                    <div className="mt-auto pt-12 lg:pt-16">
                      <Link
                        href="/book"
                        onClick={closeAll}
                        className={[
                          "group flex w-full",
                          "items-center justify-between",
                          "border-t border-white/10",
                          "py-6",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "font-[var(--font-heading)]",
                            "text-[clamp(2rem,4vw,4rem)]",
                            "leading-none",
                            "tracking-[-0.035em]",
                            "text-white",
                          ].join(" ")}
                        >
                          Begin Your Journey
                        </span>

                        <span
                          className={[
                            "flex h-12 w-12",
                            "shrink-0 items-center",
                            "justify-center",
                            "rounded-full",
                            "bg-[#0066FF]",
                            "text-white",
                            "transition-all duration-300",
                            "group-hover:translate-x-1",
                            "group-hover:bg-[#1683FF]",
                            "group-hover:shadow-[0_8px_30px_rgba(0,102,255,.25)]",
                          ].join(" ")}
                        >
                          <ArrowRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================================
   DESKTOP NAV ITEM
========================================================= */

function DesktopNavItem({
  label,
  menu,
  activeMenu,
  openMenu,
  closeMenu,
  keepMenuOpen,
  children,
}: {
  label: string;
  menu: MenuKey;
  activeMenu: MenuKey | null;
  openMenu: (menu: MenuKey) => void;
  closeMenu: () => void;
  keepMenuOpen: () => void;
  children: ReactNode;
}) {
  const isActive =
    activeMenu === menu;

  return (
    <div
      className="relative flex h-full items-center"
      onMouseEnter={() =>
        openMenu(menu)
      }
      onMouseLeave={closeMenu}
    >
      <button
        type="button"
        aria-expanded={isActive}
        onClick={() => {
          if (isActive) {
            closeMenu();
          } else {
            openMenu(menu);
          }
        }}
        className={[
          "group relative flex",
          "items-center gap-1.5",
          "py-3",
          "text-[14px]",
          "font-medium",
          "tracking-[0.10em]",
          "text-white/80",
          "transition-colors duration-300",
          "hover:text-white",
        ].join(" ")}
      >
        <span>
          {label}
        </span>

        <span
          className={[
            "transition-colors duration-300",
            isActive
              ? "text-[#4D9BFF]"
              : "text-white/35",
          ].join(" ")}
        >
          <ChevronDown
            open={isActive}
          />
        </span>

        <span
          className={[
            "absolute bottom-[2px]",
            "left-0 h-px",
            "bg-[#1683FF]",
            "transition-all duration-300",
            isActive
              ? "w-full opacity-100"
              : [
                  "w-0 opacity-0",
                  "group-hover:w-full",
                  "group-hover:opacity-100",
                ].join(" "),
          ].join(" ")}
        />
      </button>

      <div
        className={[
          "absolute left-1/2 top-full",
          "h-5 w-full",
          "-translate-x-1/2",
        ].join(" ")}
        aria-hidden="true"
      />

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{
              opacity: 0,
              y: 8,
              scale: 0.985,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -4,
              scale: 0.99,
            }}
            transition={{
              duration: 0.28,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            onMouseEnter={keepMenuOpen}
            onMouseLeave={closeMenu}
            className={[
              "absolute left-1/2",
              "top-[calc(100%+14px)]",
              "-translate-x-1/2",
            ].join(" ")}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   DROPDOWN FRAME
========================================================= */

function DropdownFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative",
        "border border-white/10",
        "bg-[#06152B]/[0.97]",
        "text-[#F7FAFF]",
        "backdrop-blur-2xl",
        "shadow-[0_28px_80px_rgba(0,0,0,.38)]",
        "before:absolute",
        "before:left-1/2",
        "before:top-[-1px]",
        "before:h-px",
        "before:w-16",
        "before:-translate-x-1/2",
        "before:bg-[#1683FF]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/* =========================================================
   DROPDOWN HEADER
========================================================= */

function DropdownHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <span className="h-px w-6 bg-[#0066FF]" />

        <span
          className={[
            "text-[7px]",
            "uppercase",
            "tracking-[0.25em]",
            "text-[#4D9BFF]",
          ].join(" ")}
        >
          DRIPLABS
        </span>
      </div>

      <h3
  className={[
    "mt-4",
    "font-[var(--font-heading)]",
    "text-[30px]",
    "font-light",
    "leading-none",
    "tracking-[-0.035em]",
    "text-[#1683FF]",
  ].join(" ")}
>
        {title}
      </h3>

      <p
        className={[
          "mt-2",
          "text-[13px]",
          "leading-5",
          "text-white/65",
        ].join(" ")}
      >
        {subtitle}
      </p>
    </div>
  );
}

/* =========================================================
   EXPLORE DROPDOWN
========================================================= */

function ExploreDropdown({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <DropdownFrame className="w-[390px] p-7">
      <DropdownHeader
        title="Explore"
        subtitle="Discover your wellness path"
      />

      <div>
        <div
          className={[
            "mb-4 flex",
            "items-center justify-between",
            "border-t border-white/10",
            "pt-5",
          ].join(" ")}
        >
          <span
            className={[
              "text-[8px]",
              "font-medium",
              "tracking-[0.16em]",
              "text-white/75",
            ].join(" ")}
          >
            Wellness Paths
          </span>

          <span className="text-white/35">
            <ChevronRight />
          </span>
        </div>

        <div
          className={[
            "grid grid-cols-2",
            "gap-x-7 gap-y-3",
          ].join(" ")}
        >
          {wellnessPaths.map(
            (item) => (
              <DropdownLink
                key={item}
                label={item}
                href="/protocols"
                onClose={onClose}
              />
            ),
          )}
        </div>
      </div>

      <div
        className={[
          "mt-7",
          "border-t border-white/10",
          "pt-5",
        ].join(" ")}
      >
        <div
          className={[
            "mb-4 flex",
            "items-center justify-between",
          ].join(" ")}
        >
          <span
            className={[
              "text-[8px]",
              "font-medium",
              "tracking-[0.16em]",
              "text-white/75",
            ].join(" ")}
          >
            Featured
          </span>

          <span className="text-white/35">
            <ChevronRight />
          </span>
        </div>

        <div className="space-y-3">
          {featuredLinks.map(
            (item) => (
              <DropdownLink
                key={item.label}
                label={item.label}
                href={item.href}
                onClose={onClose}
              />
            ),
          )}
        </div>
      </div>

      <div
        className={[
          "mt-7",
          "border-t border-white/10",
          "pt-5",
        ].join(" ")}
      >
        <DropdownLink
          label="FAQ"
          href="/faq"
          onClose={onClose}
        />
      </div>
    </DropdownFrame>
  );
}

/* =========================================================
   EXPERIENCE DROPDOWN
========================================================= */

function ExperienceDropdown({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <DropdownFrame className="w-[380px] p-7">
      <DropdownHeader
        title="Experience"
        subtitle="How you can experience DRIPLABS"
      />

      <div className="space-y-5">
        {experienceItems.map(
          (item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={onClose}
              className="group block"
            >
              <div
                className={[
                  "flex items-start",
                  "justify-between",
                  "gap-5",
                ].join(" ")}
              >
                <div>
                  <span
                    className={[
                      "block",
                      "text-[11px]",
                      "font-medium",
                      "text-white/80",
                      "transition-colors",
                      "group-hover:text-[#8CCBFF]",
                    ].join(" ")}
                  >
                    {item.title}
                  </span>

                  <span
                    className={[
                      "mt-1.5 block",
                      "text-[9px]",
                      "leading-4",
                      "text-white/35",
                    ].join(" ")}
                  >
                    {item.description}
                  </span>
                </div>

                <span
                  className={[
                    "mt-1",
                    "text-[#4D9BFF]",
                    "opacity-0",
                    "transition-all duration-300",
                    "group-hover:translate-x-1",
                    "group-hover:opacity-100",
                  ].join(" ")}
                >
                  <ArrowRight />
                </span>
              </div>
            </Link>
          ),
        )}
      </div>
    </DropdownFrame>
  );
}

/* =========================================================
   SCIENCE DROPDOWN
========================================================= */

function ScienceDropdown({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <DropdownFrame className="w-[330px] p-7">
      <DropdownHeader
        title="Science"
        subtitle="Evidence. Transparency. Trust."
      />

      <div className="space-y-3.5">
        {scienceLinks.map(
          (item) => (
            <DropdownLink
              key={item.label}
              label={item.label}
              href={item.href}
              onClose={onClose}
            />
          ),
        )}
      </div>
    </DropdownFrame>
  );
}

/* =========================================================
   CIRCLE DROPDOWN
========================================================= */

function CircleDropdown({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <DropdownFrame className="w-[290px] p-7">
      <DropdownHeader
        title="Circle"
        subtitle="More than a membership"
      />

      <div className="space-y-3.5">
        {circleLinks.map(
          (item) => (
            <DropdownLink
              key={item.label}
              label={item.label}
              href={item.href}
              onClose={onClose}
            />
          ),
        )}
      </div>
    </DropdownFrame>
  );
}

/* =========================================================
   LOCATIONS DROPDOWN
========================================================= */

function LocationsDropdown({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <DropdownFrame className="w-[285px] p-7">
      <DropdownHeader
        title="Locations"
        subtitle="Find DRIPLABS near you"
      />

      <div className="space-y-3.5">
        {locationLinks.map(
          (item) => (
            <DropdownLink
              key={item.label}
              label={item.label}
              href={item.href}
              onClose={onClose}
            />
          ),
        )}
      </div>

      <div
        className={[
          "mt-6",
          "border-t border-white/10",
          "pt-5",
        ].join(" ")}
      >
        <Link
          href="/locations"
          onClick={onClose}
          className={[
            "group flex",
            "items-center gap-2",
            "text-[8px]",
            "font-medium",
            "tracking-[0.14em]",
            "text-white/70",
            "transition-colors",
            "hover:text-[#8CCBFF]",
          ].join(" ")}
        >
          <MapPinIcon />

          <span>
            Find Your Nearest
          </span>

          <span
            className={[
              "ml-auto",
              "transition-transform duration-300",
              "group-hover:translate-x-1",
            ].join(" ")}
          >
            <ArrowRight />
          </span>
        </Link>
      </div>
    </DropdownFrame>
  );
}

/* =========================================================
   PARTNERS DROPDOWN
========================================================= */

function PartnersDropdown({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <DropdownFrame className="w-[370px] p-7">
      <DropdownHeader
        title="Partners"
        subtitle="Build the future with us"
      />

      <PartnerDropdownGroup
        title="Physicians"
        links={physicianLinks}
        href="/physicians"
        onClose={onClose}
      />

      <PartnerDivider />

      <PartnerDropdownGroup
        title="Clinics & Centres"
        links={clinicLinks}
        href="/physicians"
        onClose={onClose}
      />

      <PartnerDivider />

      <PartnerDropdownGroup
        title="Distributors"
        links={distributorLinks}
        href="/distributors"
        onClose={onClose}
      />

      <PartnerDivider />

      <PartnerDropdownGroup
        title="Franchise"
        links={franchiseLinks}
        href="/partners"
        onClose={onClose}
      />

      <Link
        href="/contact"
        onClick={onClose}
        className={[
          "mt-6 inline-flex",
          "text-[8px]",
          "font-medium",
          "tracking-[0.15em]",
          "text-[#4D9BFF]",
          "underline",
          "decoration-[#4D9BFF]/30",
          "underline-offset-4",
          "transition-colors",
          "hover:text-[#8CCBFF]",
        ].join(" ")}
      >
        Enquire Now
      </Link>
    </DropdownFrame>
  );
}

/* =========================================================
   DROPDOWN LINK
   IMPORTANT:
   Keep this component only ONCE.
========================================================= */

function DropdownLink({
  label,
  href,
  onClose,
}: {
  label: string;
  href: string;
  onClose: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className={[
        "group flex",
        "items-center",
        "justify-between",
        "gap-3",
        "text-[9px]",
        "leading-4",
        "text-white/50",
        "transition-colors duration-200",
        "hover:text-white",
      ].join(" ")}
    >
      <span>
        {label}
      </span>

      <span
        className={[
          "translate-x-[-3px]",
          "text-[#4D9BFF]",
          "opacity-0",
          "transition-all duration-200",
          "group-hover:translate-x-0",
          "group-hover:opacity-100",
        ].join(" ")}
      >
        <ArrowRight />
      </span>
    </Link>
  );
}

/* =========================================================
   PARTNER GROUP
   MAIN HEADING VISIBLE
   SUBMENU APPEARS ONLY ON HOVER
========================================================= */

function PartnerDropdownGroup({
  title,
  links,
  href,
  onClose,
}: {
  title: string;
  links: string[];
  href: string;
  onClose: () => void;
}) {
  return (
    <div className="group relative">
      {/* =================================================
          MAIN HEADING
      ================================================= */}

      <Link
        href={href}
        onClick={onClose}
        className={[
          "flex w-full",
          "items-center justify-between",
          "py-2",
          "text-[11px]",
          "font-medium",
          "tracking-[0.03em]",
          "text-white/80",
          "transition-all duration-300",
          "hover:text-white",
        ].join(" ")}
      >
        <span>
          {title}
        </span>

        <span
          className={[
            "ml-auto",
            "flex h-5 w-5",
            "items-center justify-center",
            "text-[#4D9BFF]",
            "opacity-50",
            "transition-all duration-300",
            "group-hover:translate-x-0.5",
            "group-hover:opacity-100",
          ].join(" ")}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:rotate-90"
          >
            <path
              d="M4.5 2.5L8 6L4.5 9.5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>

      {/* =================================================
          HIDDEN SUBMENU
          OPENS ONLY WHEN THIS GROUP IS HOVERED
      ================================================= */}

      <div
        className={[
          "grid",
          "grid-rows-[0fr]",
          "overflow-hidden",
          "opacity-0",
          "-translate-y-1",
          "transition-all duration-300 ease-out",

          "group-hover:grid-rows-[1fr]",
          "group-hover:translate-y-0",
          "group-hover:opacity-100",

          "group-focus-within:grid-rows-[1fr]",
          "group-focus-within:translate-y-0",
          "group-focus-within:opacity-100",
        ].join(" ")}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={[
              "ml-3",
              "border-l border-white/10",
              "py-2 pl-4",
            ].join(" ")}
          >
            <div className="grid gap-2">
              {links.map(
                (item) => (
                  <Link
                    key={item}
                    href={href}
                    onClick={onClose}
                    className={[
                      "group/sub",
                      "flex items-center",
                      "justify-between",
                      "gap-3",
                      "py-0.5",
                      "text-[9px]",
                      "leading-4",
                      "text-white/40",
                      "transition-all duration-200",
                      "hover:text-white/90",
                    ].join(" ")}
                  >
                    <span>
                      {item}
                    </span>

                    <span
                      className={[
                        "text-[#4D9BFF]",
                        "opacity-0",
                        "-translate-x-1",
                        "transition-all duration-200",
                        "group-hover/sub:translate-x-0",
                        "group-hover/sub:opacity-100",
                      ].join(" ")}
                    >
                      <ArrowRight />
                    </span>
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PARTNER DIVIDER
========================================================= */

function PartnerDivider() {
  return (
    <div className="my-3 h-px bg-white/10" />
  );
}

/* =========================================================
   EDITORIAL MENU LINK
========================================================= */

function EditorialMenuLink({
  label,
  index,
  onClick,
  open,
  reducedMotion,
}: {
  label: string;
  index: string;
  onClick: () => void;
  open: boolean;
  reducedMotion: boolean;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={
        reducedMotion
          ? {
              opacity: 1,
              x: 0,
            }
          : {
              opacity: 0,
              x: -20,
            }
      }
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: reducedMotion
          ? 0
          : 0.45,
        delay: reducedMotion
          ? 0
          : Number(index) * 0.06,
        ease: [
          0.22,
          1,
          0.36,
          1,
        ],
      }}
      className={[
        "group flex w-full",
        "items-baseline gap-5",
        "border-b border-white/10",
        "py-6",
        "text-left",
      ].join(" ")}
    >
      <span
        className={[
          "w-8 shrink-0",
          "text-[9px]",
          "font-medium",
          "tracking-[0.18em]",
          "text-[#4D9BFF]",
        ].join(" ")}
      >
        {index}
      </span>

      <span
        className={[
          "font-[var(--font-heading)]",
          "text-[clamp(3rem,5.5vw,5.5rem)]",
          "font-light",
          "leading-[0.92]",
          "tracking-[-0.045em]",
          "text-white",
          "transition-all duration-300",
          open
            ? "translate-x-2 text-[#8CCBFF]"
            : [
                "group-hover:translate-x-2",
                "group-hover:text-[#8CCBFF]",
              ].join(" "),
        ].join(" ")}
      >
        {label}
      </span>

      <span
        className={[
          "ml-auto shrink-0",
          "flex h-11 w-11",
          "items-center justify-center",
          "rounded-full",
          "border border-white/15",
          "text-white",
          "transition-all duration-300",
          open
            ? [
                "translate-x-0",
                "border-[#1683FF]",
                "bg-[#0066FF]",
                "opacity-100",
              ].join(" ")
            : [
                "translate-x-[-8px]",
                "opacity-0",
                "group-hover:translate-x-0",
                "group-hover:opacity-100",
              ].join(" "),
        ].join(" ")}
      >
        <ArrowRight />
      </span>
    </motion.button>
  );
}

/* =========================================================
   MOBILE ACCORDION
========================================================= */

function MobileAccordion({
  title,
  open,
  onClick,
  children,
}: {
  title: string;
  open: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className={[
          "flex min-h-[76px]",
          "w-full items-center",
          "justify-between",
          "text-left",
        ].join(" ")}
      >
        <span
          className={[
            "font-[var(--font-heading)]",
            "text-[clamp(2rem,8vw,3rem)]",
            "font-light",
            "leading-none",
            "tracking-[-0.04em]",
            "transition-colors duration-300",
            open
              ? "text-[#8CCBFF]"
              : "text-white",
          ].join(" ")}
        >
          {title}
        </span>

        <span
          className={[
            "flex h-9 w-9",
            "items-center justify-center",
            "rounded-full",
            "border",
            open
              ? "border-[#1683FF] bg-[#0066FF] text-white"
              : "border-white/15 text-white/60",
            "transition-all duration-300",
          ].join(" ")}
        >
          <ChevronDown open={open} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="overflow-hidden"
          >
            <div className="pb-7 pt-1">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   MOBILE EXPLORE
========================================================= */

function MobileExplore({
  onClose,
  large = false,
}: {
  onClose: () => void;
  large?: boolean;
}) {
  return (
    <div>
      <p
        className={[
          "mb-7 max-w-[360px]",
          "text-[10px]",
          "leading-5",
          "text-white/40",
        ].join(" ")}
      >
        Discover your wellness path
      </p>

      <div>
        <div
          className={[
            "mb-5 flex",
            "items-center justify-between",
            "border-t border-white/10",
            "pt-5",
          ].join(" ")}
        >
          <span
            className={[
              "text-[8px]",
              "font-medium",
              "tracking-[0.16em]",
              "text-white/65",
            ].join(" ")}
          >
            Wellness Paths
          </span>

          <span className="text-[#4D9BFF]">
            <ChevronRight />
          </span>
        </div>

        <div
          className={
            large
              ? "grid grid-cols-2 gap-x-10 gap-y-4"
              : "grid gap-3"
          }
        >
          {wellnessPaths.map(
            (item) => (
              <Link
                key={item}
                href="/protocols"
                onClick={onClose}
                className={
                  large
                    ? [
                        "text-[14px]",
                        "leading-5",
                        "text-white/55",
                        "transition-colors",
                        "hover:text-[#8CCBFF]",
                      ].join(" ")
                    : [
                        "text-[11px]",
                        "text-white/55",
                      ].join(" ")
                }
              >
                {item}
              </Link>
            ),
          )}
        </div>
      </div>

      <div
        className={[
          "mt-8",
          "border-t border-white/10",
          "pt-5",
        ].join(" ")}
      >
        <div
          className={[
            "mb-5 flex",
            "items-center justify-between",
          ].join(" ")}
        >
          <span
            className={[
              "text-[8px]",
              "font-medium",
              "tracking-[0.16em]",
              "text-white/65",
            ].join(" ")}
          >
            Featured
          </span>

          <span className="text-[#4D9BFF]">
            <ChevronRight />
          </span>
        </div>

        <div
          className={
            large
              ? "grid gap-4"
              : "grid gap-3"
          }
        >
          {featuredLinks.map(
            (item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={
                  large
                    ? [
                        "text-[14px]",
                        "text-white/55",
                        "transition-colors",
                        "hover:text-[#8CCBFF]",
                      ].join(" ")
                    : [
                        "text-[11px]",
                        "text-white/55",
                      ].join(" ")
                }
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MOBILE EXPERIENCE
========================================================= */

function MobileExperience({
  onClose,
  large = false,
}: {
  onClose: () => void;
  large?: boolean;
}) {
  return (
    <div className="space-y-6">
      <p
        className={[
          "text-[10px]",
          "leading-5",
          "text-white/40",
        ].join(" ")}
      >
        How you can experience DRIPLABS
      </p>

      {experienceItems.map(
        (item) => (
          <Link
            key={item.title}
            href={item.href}
            onClick={onClose}
            className="group block"
          >
            <span
              className={
                large
                  ? [
                      "block",
                      "text-[17px]",
                      "font-medium",
                      "text-white/80",
                      "transition-colors",
                      "group-hover:text-[#8CCBFF]",
                    ].join(" ")
                  : [
                      "block",
                      "text-[11px]",
                      "font-medium",
                      "text-white/80",
                    ].join(" ")
              }
            >
              {item.title}
            </span>

            <span
              className={
                large
                  ? [
                      "mt-1.5 block",
                      "max-w-[420px]",
                      "text-[11px]",
                      "leading-5",
                      "text-white/35",
                    ].join(" ")
                  : [
                      "mt-1 block",
                      "text-[9px]",
                      "leading-4",
                      "text-white/35",
                    ].join(" ")
              }
            >
              {item.description}
            </span>
          </Link>
        ),
      )}
    </div>
  );
}

/* =========================================================
   MOBILE SIMPLE LINKS
========================================================= */

function MobileSimpleLinks({
  links,
  onClose,
  large = false,
}: {
  links: {
    label: string;
    href: string;
  }[];
  onClose: () => void;
  large?: boolean;
}) {
  return (
    <div className="grid gap-1">
      {links.map(
        (item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className={[
              "flex items-center",
              "transition-colors",
              "hover:text-[#8CCBFF]",
              large
                ? "min-h-[48px] text-[17px]"
                : "min-h-[44px] text-[11px]",
              "text-white/55",
            ].join(" ")}
          >
            {item.label}
          </Link>
        ),
      )}
    </div>
  );
}

/* =========================================================
   MOBILE LOCATIONS
========================================================= */

function MobileLocations({
  onClose,
  large = false,
}: {
  onClose: () => void;
  large?: boolean;
}) {
  return (
    <div>
      <p
        className={[
          "mb-5",
          "text-[10px]",
          "leading-5",
          "text-white/40",
        ].join(" ")}
      >
        Find DRIPLABS near you
      </p>

      <div className="grid gap-1">
        {locationLinks.map(
          (item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className={[
                "flex items-center",
                "text-white/55",
                "transition-colors",
                "hover:text-[#8CCBFF]",
                large
                  ? "min-h-[48px] text-[17px]"
                  : "min-h-[44px] text-[11px]",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ),
        )}
      </div>

      <div
        className={[
          "mt-5",
          "border-t border-white/10",
          "pt-4",
        ].join(" ")}
      >
        <Link
          href="/locations"
          onClick={onClose}
          className={[
            "flex items-center gap-3",
            "font-medium",
            "text-[#4D9BFF]",
            "transition-colors",
            "hover:text-[#8CCBFF]",
            large
              ? "min-h-[48px] text-[11px]"
              : "min-h-[44px] text-[10px]",
          ].join(" ")}
        >
          <MapPinIcon />
          Find Your Nearest
        </Link>
      </div>
    </div>
  );
}

/* =========================================================
   MOBILE PARTNERS
========================================================= */

function MobilePartners({
  onClose,
  large = false,
}: {
  onClose: () => void;
  large?: boolean;
}) {
  return (
    <div className="space-y-7">
      <MobilePartnerGroup
        title="Physicians"
        links={physicianLinks}
        href="/physicians"
        onClose={onClose}
        large={large}
      />

      <MobilePartnerGroup
        title="Clinics & Centres"
        links={clinicLinks}
        href="/physicians"
        onClose={onClose}
        large={large}
      />

      <MobilePartnerGroup
        title="Distributors"
        links={distributorLinks}
        href="/distributors"
        onClose={onClose}
        large={large}
      />

      <MobilePartnerGroup
        title="Franchise"
        links={franchiseLinks}
        href="/partners"
        onClose={onClose}
        large={large}
      />

      <Link
        href="/contact"
        onClick={onClose}
        className={[
          "inline-flex",
          "min-h-[44px]",
          "items-center",
          "text-[9px]",
          "font-medium",
          "tracking-[0.14em]",
          "text-[#4D9BFF]",
          "underline",
          "decoration-[#4D9BFF]/30",
          "underline-offset-4",
          "transition-colors",
          "hover:text-[#8CCBFF]",
        ].join(" ")}
      >
        Enquire Now
      </Link>
    </div>
  );
}

/* =========================================================
   MOBILE PARTNER GROUP
========================================================= */

function MobilePartnerGroup({
  title,
  links,
  href,
  onClose,
  large = false,
}: {
  title: string;
  links: string[];
  href: string;
  onClose: () => void;
  large?: boolean;
}) {
  return (
    <div>
      <Link
        href={href}
        onClick={onClose}
        className={[
          "transition-colors",
          "hover:text-[#8CCBFF]",
          large
            ? "text-[18px] font-medium"
            : "text-[11px] font-medium",
          "text-white/80",
        ].join(" ")}
      >
        {title}
      </Link>

      <div
        className={[
          "mt-2 grid pl-3",
          large
            ? "gap-1.5"
            : "gap-1",
        ].join(" ")}
      >
        {links.map(
          (item) => (
            <Link
              key={item}
              href={href}
              onClick={onClose}
              className={[
                "flex items-center",
                "text-white/35",
                "transition-colors",
                "hover:text-[#8CCBFF]",
                large
                  ? "min-h-[36px] text-[13px]"
                  : "min-h-[40px] text-[10px]",
              ].join(" ")}
            >
              {item}
            </Link>
          ),
        )}
      </div>
    </div>
  );
}