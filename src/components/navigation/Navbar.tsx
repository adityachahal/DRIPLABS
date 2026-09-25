"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* =========================================================
   ICONS
========================================================= */

function ChevronDown({ open = false }: { open?: boolean }) {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="10"
      height="10"
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
      width="12"
      height="12"
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
      width="15"
      height="15"
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
      width="14"
      height="14"
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
    <span className="relative block h-4 w-5" aria-hidden="true">
      <span
        className={`absolute left-0 h-px w-5 bg-current transition-all duration-200 ${
          open ? "top-[7px] rotate-45" : "top-[2px]"
        }`}
      />

      <span
        className={`absolute left-0 top-[7px] h-px w-5 bg-current transition-opacity duration-150 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />

      <span
        className={`absolute left-0 h-px w-5 bg-current transition-all duration-200 ${
          open ? "top-[7px] -rotate-45" : "top-[12px]"
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

const featuredLinks = [
  "NADx",
  "Signature Protocols",
  "Membership",
];

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
  const [activeMenu, setActiveMenu] =
    useState<MenuKey | null>(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [mobileSection, setMobileSection] =
    useState<MenuKey | null>(null);

  const [scrolled, setScrolled] =
    useState(false);

  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  /* =======================================================
     SCROLL
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     MOBILE BODY LOCK
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =======================================================
     HOVER TIMERS
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

    openTimer.current = setTimeout(() => {
      setActiveMenu(menu);
    }, 100);
  };

  const closeMenu = () => {
    clearTimers();

    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
    }, 110);
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
          "fixed inset-x-0 top-[40px] z-[100]",
          "transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-white/[0.72] shadow-[0_1px_18px_rgba(0,0,0,0.04)] backdrop-blur-xl"
            : "border-b border-white/10 bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-[52px] max-w-[1800px] items-start px-5 pt-1.5 sm:px-7 lg:px-10 xl:px-12">
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            onClick={closeAll}
            aria-label="DRIPLABS home"
            className="group flex shrink-0 items-center pt-[2px]"
          >
            <Image
              src="/images/brand/driplabs-logo.webp"
              alt="DRIPLABS"
              width={130}
              height={44}
              priority
              className="h-auto w-[108px] object-contain transition-opacity duration-200 group-hover:opacity-80 sm:w-[116px]"
            />
          </Link>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <nav
            aria-label="Primary navigation"
            className="ml-auto hidden h-[50px] items-start lg:flex"
          >
            <div className="flex h-full items-start gap-4 pt-[7px] xl:gap-5">
              <DesktopNavItem
                label="EXPLORE"
                menu="explore"
                activeMenu={activeMenu}
                openMenu={openMenu}
                closeMenu={closeMenu}
                keepMenuOpen={keepMenuOpen}
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
              >
                <PartnersDropdown onClose={closeAll} />
              </DesktopNavItem>
            </div>
          </nav>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================= */}

          <div className="ml-5 hidden items-start gap-4 pt-[5px] lg:flex xl:ml-6">
            <button
              type="button"
              aria-label="Search"
              className="pt-[2px] text-white transition-opacity duration-200 hover:opacity-55"
            >
              <SearchIcon />
            </button>

            <Link
              href="/book"
              onClick={closeAll}
              className="group inline-flex h-[30px] items-center gap-2 rounded-full bg-[#1d1d1f] px-[15px] text-[7px] font-medium uppercase tracking-[0.14em] text-white transition-all duration-200 hover:scale-[1.015] hover:bg-[#333]"
            >
              <span>BEGIN YOUR JOURNEY</span>

              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight />
              </span>
            </Link>

            <button
              type="button"
              aria-label="Open navigation"
              onClick={() => setMobileOpen(true)}
              className="pt-[1px] text-white transition-opacity duration-200 hover:opacity-55"
            >
              <MenuIcon open={false} />
            </button>
          </div>

          {/* =================================================
              MOBILE
          ================================================= */}

          <div className="ml-auto flex items-center gap-4 lg:hidden">
            <Link
              href="/book"
              onClick={closeAll}
              className="hidden h-[32px] items-center rounded-full bg-[#1d1d1f] px-4 text-[7px] font-medium uppercase tracking-[0.14em] text-white sm:inline-flex"
            >
              BEGIN YOUR JOURNEY
            </Link>

            <button
              type="button"
              aria-label="Open navigation"
              onClick={() => setMobileOpen(true)}
              className="text-white"
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-white lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex h-[58px] shrink-0 items-center justify-between border-b border-black/[0.08] px-5 sm:px-7">
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
                    className="h-auto w-[104px] object-contain"
                  />
                </Link>

                <button
                  type="button"
                  aria-label="Close navigation"
                  onClick={() => setMobileOpen(false)}
                  className="text-[#1d1d1f]"
                >
                  <MenuIcon open={true} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 pb-8 sm:px-7">
                <MobileAccordion
                  title="EXPLORE"
                  open={mobileSection === "explore"}
                  onClick={() =>
                    toggleMobileSection("explore")
                  }
                >
                  <MobileExplore onClose={closeAll} />
                </MobileAccordion>

                <MobileAccordion
                  title="EXPERIENCE"
                  open={mobileSection === "experience"}
                  onClick={() =>
                    toggleMobileSection("experience")
                  }
                >
                  <MobileExperience onClose={closeAll} />
                </MobileAccordion>

                <MobileAccordion
                  title="SCIENCE"
                  open={mobileSection === "science"}
                  onClick={() =>
                    toggleMobileSection("science")
                  }
                >
                  <MobileSimpleLinks
                    links={scienceLinks}
                    href="/science"
                    onClose={closeAll}
                  />
                </MobileAccordion>

                <MobileAccordion
                  title="CIRCLE"
                  open={mobileSection === "circle"}
                  onClick={() =>
                    toggleMobileSection("circle")
                  }
                >
                  <MobileSimpleLinks
                    links={circleLinks}
                    href="/circle"
                    onClose={closeAll}
                  />
                </MobileAccordion>

                <MobileAccordion
                  title="LOCATIONS"
                  open={mobileSection === "locations"}
                  onClick={() =>
                    toggleMobileSection("locations")
                  }
                >
                  <MobileLocations onClose={closeAll} />
                </MobileAccordion>

                <MobileAccordion
                  title="FOR PARTNERS"
                  open={mobileSection === "partners"}
                  onClick={() =>
                    toggleMobileSection("partners")
                  }
                >
                  <MobilePartners onClose={closeAll} />
                </MobileAccordion>

                <Link
                  href="/book"
                  onClick={closeAll}
                  className="mt-7 flex h-[48px] items-center justify-between rounded-full bg-[#1d1d1f] px-5 text-[9px] font-medium uppercase tracking-[0.17em] text-white"
                >
                  BEGIN YOUR JOURNEY
                  <ArrowRight />
                </Link>
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
  const isActive = activeMenu === menu;

  return (
    <div
      className="relative flex h-full items-start"
      onMouseEnter={() => openMenu(menu)}
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
          "relative flex items-center gap-1",
          "text-[7px] font-medium uppercase tracking-[0.12em]",
          "text-white",
          "transition-opacity duration-200",
          isActive
            ? "opacity-100"
            : "opacity-85 hover:opacity-100",
        ].join(" ")}
      >
        <span>{label}</span>

        <span className="scale-[0.72] text-white/80">
          <ChevronDown open={isActive} />
        </span>

        <span
          className={[
            "absolute -bottom-[7px] left-0 h-px bg-white",
            "transition-all duration-200",
            isActive ? "w-full" : "w-0",
          ].join(" ")}
        />
      </button>

      {/* Hover bridge */}

      {isActive && (
        <div
          className="absolute left-1/2 top-full h-3 w-full -translate-x-1/2"
          aria-hidden="true"
        />
      )}

      {/* Isolated dropdown */}

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{
              opacity: 0,
              y: 5,
              scale: 0.985,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -3,
              scale: 0.99,
            }}
            transition={{
              duration: 0.17,
              ease: [0.22, 1, 0.36, 1],
            }}
            onMouseEnter={keepMenuOpen}
            onMouseLeave={closeMenu}
            className="absolute left-1/2 top-[calc(100%+10px)] -translate-x-1/2"
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
        "rounded-[14px] border border-black/[0.07]",
        "bg-white/95 backdrop-blur-xl",
        "shadow-[0_18px_50px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.04)]",
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
    <div className="mb-5">
      <h3 className="text-[12px] font-medium tracking-[-0.01em] text-[#1d1d1f]">
        {title}
      </h3>

      <p className="mt-1.5 text-[9px] leading-4 text-[#86868b]">
        {subtitle}
      </p>
    </div>
  );
}

/* =========================================================
   EXPLORE
========================================================= */

function ExploreDropdown({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <DropdownFrame className="w-[310px] p-5">
      <DropdownHeader
        title="Explore"
        subtitle="Discover your wellness path"
      />

      <div>
        <div className="mb-3 flex items-center justify-between border-t border-black/[0.08] pt-4">
          <span className="text-[10px] font-medium text-[#1d1d1f]">
            Wellness Paths
          </span>

          <ChevronRight />
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-2">
          {wellnessPaths.map((item) => (
            <DropdownLink
              key={item}
              label={item}
              href="/protocols"
              onClose={onClose}
            />
          ))}
        </div>
      </div>

      <div className="mt-5 border-t border-black/[0.08] pt-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-medium text-[#1d1d1f]">
            Featured
          </span>

          <ChevronRight />
        </div>

        <div className="space-y-2">
          {featuredLinks.map((item) => (
            <DropdownLink
              key={item}
              label={item}
              href="/protocols"
              onClose={onClose}
            />
          ))}
        </div>
      </div>
    </DropdownFrame>
  );
}

/* =========================================================
   EXPERIENCE
========================================================= */

function ExperienceDropdown({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <DropdownFrame className="w-[325px] p-5">
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
            <span className="block text-[10px] font-medium text-[#1d1d1f] transition-colors duration-200 group-hover:text-[#555]">
              {item.title}
            </span>

            <span className="mt-1 block text-[8px] leading-3.5 text-[#86868b]">
              {item.description}
            </span>
          </Link>
        ))}
      </div>
    </DropdownFrame>
  );
}

/* =========================================================
   SCIENCE
========================================================= */

function ScienceDropdown({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <DropdownFrame className="w-[255px] p-5">
      <DropdownHeader
        title="Science"
        subtitle="Evidence. Transparency. Trust."
      />

      <div className="space-y-2.5">
        {scienceLinks.map((item) => (
          <DropdownLink
            key={item}
            label={item}
            href="/science"
            onClose={onClose}
          />
        ))}
      </div>
    </DropdownFrame>
  );
}

/* =========================================================
   CIRCLE
========================================================= */

function CircleDropdown({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <DropdownFrame className="w-[235px] p-5">
      <DropdownHeader
        title="Circle"
        subtitle="More than a membership"
      />

      <div className="space-y-2.5">
        {circleLinks.map((item) => (
          <DropdownLink
            key={item}
            label={item}
            href="/circle"
            onClose={onClose}
          />
        ))}
      </div>
    </DropdownFrame>
  );
}

/* =========================================================
   LOCATIONS
========================================================= */

function LocationsDropdown({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <DropdownFrame className="w-[220px] p-5">
      <DropdownHeader
        title="Locations"
        subtitle="Find DRIPLABS near you"
      />

      <div className="space-y-2.5">
        {locationLinks.map((item) => (
          <DropdownLink
            key={item.label}
            label={item.label}
            href={item.href}
            onClose={onClose}
          />
        ))}
      </div>

      <div className="mt-5 border-t border-black/[0.08] pt-4">
        <Link
          href="/#locations"
          onClick={onClose}
          className="group flex items-center gap-2 text-[9px] font-medium text-[#1d1d1f]"
        >
          <MapPinIcon />

          <span className="transition-colors group-hover:text-[#666]">
            Find Your Nearest
          </span>

          <span className="ml-auto transition-transform duration-200 group-hover:translate-x-0.5">
            <ArrowRight />
          </span>
        </Link>
      </div>
    </DropdownFrame>
  );
}

/* =========================================================
   PARTNERS
========================================================= */

function PartnersDropdown({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <DropdownFrame className="w-[300px] p-5">
      <DropdownHeader
        title="For Partners"
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
        className="mt-4 inline-flex text-[9px] font-medium uppercase tracking-[0.12em] text-[#1d1d1f] underline decoration-black/20 underline-offset-4 transition-colors hover:decoration-black"
      >
        Enquire Now
      </Link>
    </DropdownFrame>
  );
}

/* =========================================================
   DROPDOWN LINK
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
      className="group block text-[9px] leading-4 text-[#1d1d1f] transition-colors duration-150 hover:text-[#777]"
    >
      {label}
    </Link>
  );
}

/* =========================================================
   PARTNER GROUP
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
        className="text-[10px] font-medium text-[#1d1d1f]"
      >
        {title}
      </Link>

      <div className="mt-2 space-y-1.5 pl-3">
        {links.map((item) => (
          <Link
            key={item}
            href={href}
            onClick={onClose}
            className="block text-[8px] leading-3.5 text-[#86868b] transition-colors hover:text-[#1d1d1f]"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

function PartnerDivider() {
  return (
    <div className="my-4 h-px bg-black/[0.07]" />
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
    <div className="border-b border-black/[0.08]">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className="flex min-h-[52px] w-full items-center justify-between text-left"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#1d1d1f]">
          {title}
        </span>

        <ChevronDown open={open} />
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
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <div className="pb-6 pt-1">
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
}: {
  onClose: () => void;
}) {
  return (
    <div>
      <p className="mb-5 text-[9px] leading-4 text-[#86868b]">
        Discover your wellness path
      </p>

      <div>
        <div className="mb-3 flex items-center justify-between border-t border-black/[0.08] pt-4">
          <span className="text-[10px] font-medium">
            Wellness Paths
          </span>

          <ChevronRight />
        </div>

        <div className="grid gap-3">
          {wellnessPaths.map((item) => (
            <Link
              key={item}
              href="/protocols"
              onClick={onClose}
              className="text-[11px] text-[#1d1d1f]"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-5 border-t border-black/[0.08] pt-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-medium">
            Featured
          </span>

          <ChevronRight />
        </div>

        <div className="grid gap-3">
          {featuredLinks.map((item) => (
            <Link
              key={item}
              href="/protocols"
              onClick={onClose}
              className="text-[11px] text-[#1d1d1f]"
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
}: {
  onClose: () => void;
}) {
  return (
    <div className="space-y-5">
      <p className="text-[9px] leading-4 text-[#86868b]">
        How you can experience DRIPLABS
      </p>

      {experienceItems.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          onClick={onClose}
          className="block min-h-[44px]"
        >
          <span className="block text-[11px] font-medium text-[#1d1d1f]">
            {item.title}
          </span>

          <span className="mt-1 block text-[9px] leading-4 text-[#86868b]">
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
}: {
  links: string[];
  href: string;
  onClose: () => void;
}) {
  return (
    <div className="grid gap-1">
      {links.map((item) => (
        <Link
          key={item}
          href={href}
          onClick={onClose}
          className="flex min-h-[44px] items-center text-[11px] text-[#1d1d1f]"
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
}: {
  onClose: () => void;
}) {
  return (
    <div>
      <p className="mb-4 text-[9px] leading-4 text-[#86868b]">
        Find DRIPLABS near you
      </p>

      <div className="grid gap-1">
        {locationLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="flex min-h-[44px] items-center text-[11px] text-[#1d1d1f]"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="mt-4 border-t border-black/[0.08] pt-4">
        <Link
          href="/#locations"
          onClick={onClose}
          className="flex min-h-[44px] items-center gap-3 text-[10px] font-medium text-[#1d1d1f]"
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
}: {
  onClose: () => void;
}) {
  return (
    <div className="space-y-6">
      <MobilePartnerGroup
        title="Physicians"
        links={physicianLinks}
        href="/physicians"
        onClose={onClose}
      />

      <MobilePartnerGroup
        title="Clinics & Centres"
        links={clinicLinks}
        href="/physicians"
        onClose={onClose}
      />

      <MobilePartnerGroup
        title="Distributors"
        links={distributorLinks}
        href="/distributors"
        onClose={onClose}
      />

      <MobilePartnerGroup
        title="Franchise"
        links={franchiseLinks}
        href="/partners"
        onClose={onClose}
      />

      <Link
        href="/contact"
        onClick={onClose}
        className="inline-flex min-h-[44px] items-center text-[9px] font-medium uppercase tracking-[0.14em] text-[#1d1d1f] underline decoration-black/20 underline-offset-4"
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
        className="text-[11px] font-medium text-[#1d1d1f]"
      >
        {title}
      </Link>

      <div className="mt-2 grid gap-1 pl-3">
        {links.map((item) => (
          <Link
            key={item}
            href={href}
            onClick={onClose}
            className="flex min-h-[40px] items-center text-[10px] text-[#86868b]"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}