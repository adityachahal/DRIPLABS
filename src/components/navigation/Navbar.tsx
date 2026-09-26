"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* =========================================================
   ICONS
========================================================= */

function ChevronDown({ open = false }: { open?: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
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

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-6" aria-hidden="true">
      <span
        className={`absolute left-0 h-px w-6 bg-current transition-all duration-300 ${
          open ? "top-[9px] rotate-45" : "top-[3px]"
        }`}
      />

      <span
        className={`absolute left-0 top-[9px] h-px w-6 bg-current transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />

      <span
        className={`absolute left-0 h-px w-6 bg-current transition-all duration-300 ${
          open ? "top-[9px] -rotate-45" : "top-[15px]"
        }`}
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

const featuredLinks = ["NADx", "Signature Protocols", "Membership"];

const experienceItems = [
  {
    title: "In-Centre",
    description: "Physician-led wellness at our centres",
    href: "/experience",
  },
  {
    title: "DRIPLABS Home",
    description: "IV wellness, delivered to your home",
    href: "/experience",
  },
  {
    title: "Women's Wellness",
    description: "A dedicated pathway for women",
    href: "/experience",
  },
  {
    title: "Your Journey",
    description:
      "Consultation → Personalisation → Experience → Follow-up",
    href: "/experience",
  },
  {
    title: "Membership",
    description: "Exclusive benefits & priority access",
    href: "/circle",
  },
];

const scienceLinks = [
  "The DRIPLABS Standard",
  "NADx",
  "Evidence & Research",
  "Ingredients",
  "Quality & Traceability",
  "COA Library",
  "Decode a Vial",
  "Physician Dossier",
];

const circleLinks = [
  "Membership Plans",
  "Benefits",
  "Priority Access",
  "Home Services",
  "Wellness Journeys",
  "Concierge",
  "Member Events",
];

const locationLinks = [
  {
    label: "Centres",
    href: "/#locations",
  },
  {
    label: "DRIPLABS Home",
    href: "/experience",
  },
  {
    label: "Coming Soon",
    href: "/#locations",
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
   NAVBAR
========================================================= */

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reducedMotion = useReducedMotion();

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
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAll();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

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
      reducedMotion ? 0 : 80,
    );
  };

  const closeMenu = () => {
    clearTimers();

    closeTimer.current = setTimeout(
      () => {
        setActiveMenu(null);
      },
      reducedMotion ? 0 : 120,
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

  const toggleMobileSection = (menu: MenuKey) => {
    setMobileSection((current) =>
      current === menu ? null : menu,
    );
  };

  return (
    <>
      {/* =====================================================
          MAIN NAVIGATION
      ===================================================== */}

      <header
        className={[
          "fixed inset-x-0 top-0 z-[100]",
          "transition-all duration-500",
          scrolled
            ? "border-b border-[#241B16]/10 bg-[#F4F0E8]/90 text-[#241B16] shadow-[0_8px_30px_rgba(36,27,22,0.05)] backdrop-blur-xl"
            : "border-b border-white/10 bg-transparent text-white",
        ].join(" ")}
      >
        <div
          className={[
            "mx-auto flex max-w-[1800px] items-center",
            "px-5 sm:px-7 lg:px-10 xl:px-12",
            "h-[72px] lg:h-[78px]",
            "transition-all duration-500",
            scrolled ? "lg:h-[70px]" : "",
          ].join(" ")}
        >
          {/* LOGO */}

          <Link
            href="/"
            onClick={closeAll}
            aria-label="DRIPLABS home"
            className="group flex shrink-0 items-center"
          >
            <Image
              src="/images/brand/driplabs-logo.webp"
              alt="DRIPLABS"
              width={130}
              height={44}
              priority
              className={[
                "h-auto w-[108px] object-contain",
                "transition-all duration-300",
                "sm:w-[116px]",
                scrolled ? "brightness-[0.65]" : "",
                "group-hover:opacity-70",
              ].join(" ")}
            />
          </Link>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <nav
            aria-label="Primary navigation"
            className="ml-auto hidden lg:flex"
          >
            <div className="flex items-center gap-5 xl:gap-6 2xl:gap-7">
              <DesktopNavItem
                label="EXPLORE"
                menu="explore"
                activeMenu={activeMenu}
                openMenu={openMenu}
                closeMenu={closeMenu}
                keepMenuOpen={keepMenuOpen}
                scrolled={scrolled}
              >
                <ExploreDropdown onClose={closeAll} />
              </DesktopNavItem>

              <DesktopNavItem
                label="EXPERIENCE"
                menu="experience"
                activeMenu={activeMenu}
                openMenu={openMenu}
                closeMenu={closeMenu}
                keepMenuOpen={keepMenuOpen}
                scrolled={scrolled}
              >
                <ExperienceDropdown onClose={closeAll} />
              </DesktopNavItem>

              <DesktopNavItem
                label="SCIENCE"
                menu="science"
                activeMenu={activeMenu}
                openMenu={openMenu}
                closeMenu={closeMenu}
                keepMenuOpen={keepMenuOpen}
                scrolled={scrolled}
              >
                <ScienceDropdown onClose={closeAll} />
              </DesktopNavItem>

              <DesktopNavItem
                label="CIRCLE"
                menu="circle"
                activeMenu={activeMenu}
                openMenu={openMenu}
                closeMenu={closeMenu}
                keepMenuOpen={keepMenuOpen}
                scrolled={scrolled}
              >
                <CircleDropdown onClose={closeAll} />
              </DesktopNavItem>

              <DesktopNavItem
                label="LOCATIONS"
                menu="locations"
                activeMenu={activeMenu}
                openMenu={openMenu}
                closeMenu={closeMenu}
                keepMenuOpen={keepMenuOpen}
                scrolled={scrolled}
              >
                <LocationsDropdown onClose={closeAll} />
              </DesktopNavItem>

              <DesktopNavItem
                label="FOR PARTNERS"
                menu="partners"
                activeMenu={activeMenu}
                openMenu={openMenu}
                closeMenu={closeMenu}
                keepMenuOpen={keepMenuOpen}
                scrolled={scrolled}
              >
                <PartnersDropdown onClose={closeAll} />
              </DesktopNavItem>
            </div>
          </nav>

          {/* DESKTOP ACTIONS */}

          <div className="ml-5 hidden items-center gap-3 lg:flex xl:ml-6">
            <Link
              href="/#locations"
              onClick={closeAll}
              aria-label="Find a DRIPLABS location"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              <MapPinIcon />
            </Link>

            <button
              type="button"
              aria-label="Search"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              <SearchIcon />
            </button>

            <Link
              href="/contact"
              onClick={closeAll}
              className={[
                "group inline-flex items-center gap-2",
                "border border-current px-4 py-2",
                "text-[8px] font-medium uppercase tracking-[0.16em]",
                "transition-all duration-300",
                "hover:bg-current hover:text-[#F4F0E8]",
              ].join(" ")}
            >
              Begin Your Journey
              <ArrowRight />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            aria-label={
              mobileOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((current) => !current);
              setActiveMenu(null);
            }}
            className={[
              "ml-auto flex items-center justify-center lg:hidden",
              "transition-opacity duration-300 hover:opacity-60",
            ].join(" ")}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: reducedMotion ? 0 : 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-[90] overflow-y-auto bg-[#F4F0E8] text-[#241B16] lg:hidden"
          >
            <div className="min-h-screen px-5 pb-12 pt-[96px] sm:px-7">
              <div className="mx-auto max-w-[760px]">
                <MobileAccordion
                  title="Explore"
                  open={mobileSection === "explore"}
                  onClick={() =>
                    toggleMobileSection("explore")
                  }
                >
                  <MobileExplore
                    onClose={closeAll}
                    large
                  />
                </MobileAccordion>

                <MobileAccordion
                  title="Experience"
                  open={mobileSection === "experience"}
                  onClick={() =>
                    toggleMobileSection("experience")
                  }
                >
                  <MobileExperience
                    onClose={closeAll}
                    large
                  />
                </MobileAccordion>

                <MobileAccordion
                  title="Science"
                  open={mobileSection === "science"}
                  onClick={() =>
                    toggleMobileSection("science")
                  }
                >
                  <MobileSimpleLinks
                    links={scienceLinks}
                    href="/science"
                    onClose={closeAll}
                    large
                  />
                </MobileAccordion>

                <MobileAccordion
                  title="Circle"
                  open={mobileSection === "circle"}
                  onClick={() =>
                    toggleMobileSection("circle")
                  }
                >
                  <MobileSimpleLinks
                    links={circleLinks}
                    href="/circle"
                    onClose={closeAll}
                    large
                  />
                </MobileAccordion>

                <MobileAccordion
                  title="Locations"
                  open={mobileSection === "locations"}
                  onClick={() =>
                    toggleMobileSection("locations")
                  }
                >
                  <MobileLocations
                    onClose={closeAll}
                    large
                  />
                </MobileAccordion>

                <MobileAccordion
                  title="For Partners"
                  open={mobileSection === "partners"}
                  onClick={() =>
                    toggleMobileSection("partners")
                  }
                >
                  <MobilePartners
                    onClose={closeAll}
                    large
                  />
                </MobileAccordion>

                <div className="mt-8 grid gap-3 border-t border-[#241B16]/10 pt-8">
                  <Link
                    href="/contact"
                    onClick={closeAll}
                    className="inline-flex min-h-[54px] items-center justify-between border border-[#241B16] px-5 text-[11px] font-medium uppercase tracking-[0.14em]"
                  >
                    Begin Your Journey
                    <ArrowRight />
                  </Link>

                  <Link
                    href="/#locations"
                    onClick={closeAll}
                    className="inline-flex min-h-[54px] items-center justify-between border border-[#241B16]/10 px-5 text-[11px] font-medium uppercase tracking-[0.14em]"
                  >
                    Find Your Nearest
                    <MapPinIcon />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
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
  scrolled,
  children,
}: {
  label: string;
  menu: MenuKey;
  activeMenu: MenuKey | null;
  openMenu: (menu: MenuKey) => void;
  closeMenu: () => void;
  keepMenuOpen: () => void;
  scrolled: boolean;
  children: ReactNode;
}) {
  const open = activeMenu === menu;

  return (
    <div
      className="relative"
      onMouseEnter={() => openMenu(menu)}
      onMouseLeave={closeMenu}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onFocus={() => openMenu(menu)}
        onBlur={closeMenu}
        className={[
          "group flex items-center gap-[3px]",
          "h-7 whitespace-nowrap",
          "text-[8px] xl:text-[8.5px] 2xl:text-[9px]",
          "font-normal uppercase tracking-[0.19em]",
          "leading-none",
          "transition-colors duration-300",

          scrolled
            ? "text-[#241B16] hover:text-[#006F8F]"
            : "text-white hover:text-white/65",
        ].join(" ")}
      >
        {label}

        <span className="scale-[0.7] opacity-80">
          <ChevronDown open={open} />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 8,
              filter: "blur(4px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: 6,
              filter: "blur(3px)",
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            onMouseEnter={keepMenuOpen}
            onMouseLeave={closeMenu}
            className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
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
        "border border-white/30",
        "bg-[#F4EEE4]/[0.95] backdrop-blur-2xl",
        "shadow-[0_20px_60px_rgba(28,18,12,0.18),0_4px_16px_rgba(28,18,12,0.08)]",
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
      <h3 className="font-[var(--font-heading)] text-[24px] leading-none tracking-[-0.025em] text-[#006F8F]">
        {title}
      </h3>

      <p className="mt-1.5 text-[10px] leading-4 tracking-[0.02em] text-[#6F5747]">
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
    <DropdownFrame className="w-[295px] p-4">
      <DropdownHeader
        title="Explore"
        subtitle="Find your path to better living"
      />

      <div>
        <div className="mb-4 flex items-center justify-between border-t border-[#241B16]/10 pt-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#756C64]">
            Wellness Paths
          </span>

          <ChevronRight />
        </div>

        <div className="grid grid-cols-2 gap-x-7 gap-y-3">
          {wellnessPaths.map((item) => (
            <Link
              key={item}
              href="/protocols"
              onClick={onClose}
              className="text-[10px] leading-4 text-[#241B16] transition-colors duration-200 hover:text-[#F8FAF8]"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-[#241B16]/10 pt-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#756C64]">
            Featured
          </span>

          <ChevronRight />
        </div>

        <div className="space-y-3">
          {featuredLinks.map((item) => (
            <Link
              key={item}
              href="/protocols"
              onClick={onClose}
              className="group flex items-center justify-between gap-3 text-[10px] leading-4 text-[#241B16] transition-colors duration-200 hover:text-[#6F5747]"
            >
              <span>{item}</span>

              <span className="translate-x-[-3px] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                <ChevronRight />
              </span>
            </Link>
          ))}
        </div>
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
    <DropdownFrame className="w-[305px] p-4">
      <DropdownHeader
        title="Experience"
        subtitle="How you can experience DRIPLABS"
      />

      <div className="space-y-4">
        {experienceItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            onClick={onClose}
            className="group block"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] font-medium text-[#241B16] transition-colors duration-200 group-hover:text-[#6F5747]">
                {item.title}
              </span>

              <span className="translate-x-[-3px] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                <ChevronRight />
              </span>
            </div>

            <span className="mt-1 block text-[9px] leading-4 text-[#6F5747]">
              {item.description}
            </span>
          </Link>
        ))}
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
    <DropdownFrame className="w-[240px] p-4">
      <DropdownHeader
        title="Science"
        subtitle="The thinking behind the experience"
      />

      <div className="space-y-3">
        {scienceLinks.map((item) => (
          <DropdownLink
            key={item}
            label={item}
            href="/science"
            onClick={onClose}
          />
        ))}
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
    <DropdownFrame className="w-[220px] p-4">
      <DropdownHeader
        title="Circle"
        subtitle="Membership, access & benefits"
      />

      <div className="space-y-3">
        {circleLinks.map((item) => (
          <DropdownLink
            key={item}
            label={item}
            href="/circle"
            onClick={onClose}
          />
        ))}
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
    <DropdownFrame className="w-[205px] p-4">
      <DropdownHeader
        title="Locations"
        subtitle="Find DRIPLABS near you"
      />

      <div className="space-y-3">
        {locationLinks.map((item) => (
          <DropdownLink
            key={item.label}
            label={item.label}
            href={item.href}
            onClick={onClose}
          />
        ))}
      </div>

      <div className="mt-5 border-t border-[#241B16]/10 pt-4">
        <Link
          href="/#locations"
          onClick={onClose}
          className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em] text-[#241B16] transition-colors duration-200 hover:text-[#6F5747]"
        >
          <MapPinIcon />
          Find Your Nearest
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
    <DropdownFrame className="w-[280px] p-4">
      <DropdownHeader
        title="For Partners"
        subtitle="Build with DRIPLABS"
      />

      <div className="space-y-5">
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
      </div>

      <div className="mt-5 border-t border-[#241B16]/10 pt-4">
        <Link
          href="/contact"
          onClick={onClose}
          className="inline-flex text-[10px] font-medium uppercase tracking-[0.14em] text-[#241B16] underline decoration-[#241B16]/20 underline-offset-4 transition-colors duration-200 hover:text-[#6F5747]"
        >
          Enquire Now
        </Link>
      </div>
    </DropdownFrame>
  );
}

/* =========================================================
   DROPDOWN LINK
========================================================= */

function DropdownLink({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex items-center justify-between gap-3 text-[10px] leading-4 text-[#241B16] transition-colors duration-200 hover:text-[#6F5747]"
    >
      <span>{label}</span>

      <span className="translate-x-[-3px] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
        <ChevronRight />
      </span>
    </Link>
  );
}

/* =========================================================
   PARTNER DIVIDER
========================================================= */

function PartnerDivider() {
  return (
    <div className="my-5 h-px bg-[#241B16]/8" />
  );
}

/* =========================================================
   PARTNER DROPDOWN GROUP
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
    <div>
      <Link
        href={href}
        onClick={onClose}
        className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#40362F] transition-colors duration-200 hover:text-[#6F5747]"
      >
        {title}
      </Link>

      <div className="mt-2 grid gap-1 pl-3">
        {links.map((item) => (
          <Link
            key={item}
            href={href}
            onClick={onClose}
            className="text-[9px] leading-4 text-[#6F5747] transition-colors duration-200 hover:text-[#241B16]"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   EDITORIAL MENU LINK
========================================================= */

function EditorialMenuLink({
  href,
  label,
  description,
  onClick,
}: {
  href: string;
  label: string;
  description?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group block border-b border-[#241B16]/10 py-4 transition-colors duration-300 last:border-b-0"
    >
      <div className="flex items-center justify-between gap-5">
        <div>
          <span className="block font-[var(--font-heading)] text-[clamp(1.8rem,4vw,3rem)] leading-none tracking-[-0.035em] text-[#241B16] transition-colors duration-300 group-hover:text-[#6F5747]">
            {label}
          </span>

          {description ? (
            <span className="mt-2 block max-w-[480px] text-[10px] leading-5 text-[#756C64]">
              {description}
            </span>
          ) : null}
        </div>

        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#241B16]/15 text-[#241B16] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#241B16]">
          <ArrowRight />
        </span>
      </div>
    </Link>
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
    <div className="border-b border-[#241B16]/10">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className="flex min-h-[76px] w-full items-center justify-between text-left"
      >
        <span className="font-[var(--font-heading)] text-[clamp(2rem,8vw,3rem)] leading-none tracking-[-0.035em]">
          {title}
        </span>

        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#241B16]/15">
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
              ease: [0.22, 1, 0.36, 1],
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
      <p className="mb-7 max-w-[360px] text-[10px] leading-5 text-[#756C64]">
        Discover your wellness path
      </p>

      <div>
        <div className="mb-5 flex items-center justify-between border-t border-[#241B16]/10 pt-5">
          <span className="text-[11px] font-medium uppercase tracking-[0.14em]">
            Wellness Paths
          </span>

          <ChevronRight />
        </div>

        <div
          className={
            large
              ? "grid grid-cols-2 gap-x-10 gap-y-4"
              : "grid gap-3"
          }
        >
          {wellnessPaths.map((item) => (
            <Link
              key={item}
              href="/protocols"
              onClick={onClose}
              className={
                large
                  ? "text-[14px] leading-5 text-[#40362F] transition-colors hover:text-[#241B16]"
                  : "text-[11px] text-[#40362F]"
              }
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-[#241B16]/10 pt-5">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[11px] font-medium uppercase tracking-[0.14em]">
            Featured
          </span>

          <ChevronRight />
        </div>

        <div
          className={
            large ? "grid gap-4" : "grid gap-3"
          }
        >
          {featuredLinks.map((item) => (
            <Link
              key={item}
              href="/protocols"
              onClick={onClose}
              className={
                large
                  ? "text-[14px] text-[#40362F]"
                  : "text-[11px] text-[#40362F]"
              }
            >
              {item}
            </Link>
          ))}
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
      <p className="text-[10px] leading-5 text-[#756C64]">
        How you can experience DRIPLABS
      </p>

      {experienceItems.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          onClick={onClose}
          className="group block"
        >
          <span
            className={
              large
                ? "block text-[17px] font-medium text-[#241B16]"
                : "block text-[11px] font-medium text-[#241B16]"
            }
          >
            {item.title}
          </span>

          <span
            className={
              large
                ? "mt-1.5 block max-w-[420px] text-[11px] leading-5 text-[#756C64]"
                : "mt-1 block text-[9px] leading-4 text-[#756C64]"
            }
          >
            {item.description}
          </span>
        </Link>
      ))}
    </div>
  );
}

/* =========================================================
   MOBILE SIMPLE LINKS
========================================================= */

function MobileSimpleLinks({
  links,
  href,
  onClose,
  large = false,
}: {
  links: string[];
  href: string;
  onClose: () => void;
  large?: boolean;
}) {
  return (
    <div className="grid gap-1">
      {links.map((item) => (
        <Link
          key={item}
          href={href}
          onClick={onClose}
          className={[
            "flex items-center transition-colors hover:text-[#756C64]",
            large
              ? "min-h-[48px] text-[17px]"
              : "min-h-[44px] text-[11px]",
          ].join(" ")}
        >
          {item}
        </Link>
      ))}
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
      <p className="mb-5 text-[10px] leading-5 text-[#756C64]">
        Find DRIPLABS near you
      </p>

      <div className="grid gap-1">
        {locationLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className={[
              "flex items-center",
              large
                ? "min-h-[48px] text-[17px]"
                : "min-h-[44px] text-[11px]",
            ].join(" ")}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="mt-5 border-t border-[#241B16]/10 pt-4">
        <Link
          href="/#locations"
          onClick={onClose}
          className={[
            "flex items-center gap-3 font-medium",
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
        className="inline-flex min-h-[44px] items-center text-[11px] font-medium uppercase tracking-[0.14em] underline decoration-[#241B16]/20 underline-offset-4"
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
        className={
          large
            ? "text-[18px] font-medium"
            : "text-[11px] font-medium"
        }
      >
        {title}
      </Link>

      <div
        className={[
          "mt-2 grid pl-3",
          large ? "gap-1.5" : "gap-1",
        ].join(" ")}
      >
        {links.map((item) => (
          <Link
            key={item}
            href={href}
            onClick={onClose}
            className={
              large
                ? "flex min-h-[36px] items-center text-[13px] text-[#756C64]"
                : "flex min-h-[40px] items-center text-[10px] text-[#756C64]"
            }
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}