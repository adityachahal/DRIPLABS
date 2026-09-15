"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navigation = [
  {
    label: "Dashboard",
    href: "/admin",
  },
  {
    label: "Bookings",
    href: "/admin/bookings",
  },
  {
    label: "Protocols",
    href: "/admin/protocols",
  },
  {
    label: "Locations",
    href: "/admin/locations",
  },
  {
    label: "Memberships",
    href: "/admin/memberships",
  },
  {
    label: "Customers",
    href: "/admin/customers",
  },
];

export default function AdminNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  function isActive(href: string) {
    if (href === "/admin") {
      return pathname === "/admin";
    }

    return pathname.startsWith(href);
  }

  async function handleLogout() {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });
    } finally {
      router.push("/admin/login");
      router.refresh();
    }
  }

  return (
    <aside className="sticky top-0 z-50 hidden h-screen w-[250px] shrink-0 border-r border-[#F5F0E7]/10 bg-[#071525] text-[#F5F0E7] lg:block">
      <div className="flex h-full flex-col">
        {/* Brand */}
        <div className="border-b border-white/10 px-7 py-7">
          <Link href="/admin" className="block">
            <p className="text-[12px] uppercase tracking-[0.38em] text-[#F5F0E7]">
              DRIPLABS
            </p>

            <p className="mt-3 text-[8px] uppercase tracking-[0.25em] text-white/35">
              Operations
            </p>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-7">
          <p className="px-3 pb-4 text-[8px] uppercase tracking-[0.25em] text-white/25">
            Workspace
          </p>

          <div className="space-y-1">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center justify-between border-l px-3 py-3.5 text-[9px] uppercase tracking-[0.2em] transition-all duration-300 ${
                    active
                      ? "border-[#C9A646] bg-white/[0.04] text-[#F5F0E7]"
                      : "border-transparent text-white/45 hover:border-[#C9A646]/50 hover:bg-white/[0.025] hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>

                  <span
                    className={`text-xs transition-transform duration-300 ${
                      active
                        ? "translate-x-0 text-[#C9A646]"
                        : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-[#C9A646]"
                    }`}
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer actions */}
        <div className="border-t border-white/10 px-7 py-6">
          <Link
            href="/"
            className="block text-[8px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-[#C9A646]"
          >
            View website →
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="mt-5 text-[8px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-red-300"
          >
            Sign out
          </button>

          <p className="mt-7 text-[7px] uppercase leading-5 tracking-[0.18em] text-white/20">
            Private operations portal
            <br />
            Internal use only
          </p>
        </div>
      </div>
    </aside>
  );
}
