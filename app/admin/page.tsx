"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import AdminNavigation from "@/components/admin/AdminNavigation";

type Booking = {
  id: string;
  reference: string;
  customerName: string;
  email: string;
  phone: string;
  location: string;
  protocol: string;
  membership: string | null;
  date: string;
  time: string;
  status: string;
  createdAt: string;
};

export default function AdminDashboardPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBookings() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/admin/bookings", {
          cache: "no-store",
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message || "Unable to load booking data."
          );
        }

        setBookings(result.bookings ?? []);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to load booking data."
        );
      } finally {
        setLoading(false);
      }
    }

    loadBookings();
  }, []);

  const stats = useMemo(() => {
    return {
      total: bookings.length,
      pending: bookings.filter(
        (booking) => booking.status === "PENDING"
      ).length,
      confirmed: bookings.filter(
        (booking) => booking.status === "CONFIRMED"
      ).length,
      completed: bookings.filter(
        (booking) => booking.status === "COMPLETED"
      ).length,
      cancelled: bookings.filter(
        (booking) => booking.status === "CANCELLED"
      ).length,
      rejected: bookings.filter(
        (booking) => booking.status === "REJECTED"
      ).length,
    };
  }, [bookings]);

  const recentBookings = useMemo(() => {
    return [...bookings]
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      )
      .slice(0, 6);
  }, [bookings]);

  const upcomingBookings = useMemo(() => {
    const now = new Date();

    return [...bookings]
      .filter((booking) => {
        const appointment = new Date(
          `${booking.date}T${booking.time}`
        );

        return (
          appointment >= now &&
          booking.status !== "CANCELLED" &&
          booking.status !== "REJECTED"
        );
      })
      .sort(
        (a, b) =>
          new Date(`${a.date}T${a.time}`).getTime() -
          new Date(`${b.date}T${b.time}`).getTime()
      )
      .slice(0, 5);
  }, [bookings]);

  function formatDate(date: string) {
    if (!date) return "—";

    const parsed = new Date(`${date}T00:00:00`);

    return parsed.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  function formatDateTime(date: string) {
    if (!date) return "—";

    const parsed = new Date(date);

    return parsed.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  function statusLabel(status: string) {
    return status.charAt(0) + status.slice(1).toLowerCase();
  }

  function statusClass(status: string) {
    switch (status) {
      case "CONFIRMED":
        return "border border-emerald-900/10 bg-emerald-900/5 text-emerald-800";

      case "COMPLETED":
        return "border border-blue-900/10 bg-blue-900/5 text-blue-800";

      case "CANCELLED":
        return "border border-red-900/10 bg-red-900/5 text-red-800";

      case "REJECTED":
        return "border border-orange-900/10 bg-orange-900/5 text-orange-800";

      default:
        return "border border-amber-900/10 bg-amber-900/5 text-amber-800";
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F0E7]">
      <div className="flex min-h-screen">
        {/* =========================================================
            ADMIN NAVIGATION
        ========================================================= */}
        <AdminNavigation />

        {/* =========================================================
            DASHBOARD CONTENT
        ========================================================= */}
        <main className="min-w-0 flex-1 bg-[#F5F0E7] text-[#0B1D35]">
          {/* Header */}
          <header className="border-b border-[#0B1D35]/10 bg-[#F5F0E7]/95">
            <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-10 lg:px-14">
              <div>
                <p className="text-[10px] uppercase tracking-[0.34em] text-[#C9A646]">
                  DRIPLABS
                </p>

                <p className="mt-2 text-[8px] uppercase tracking-[0.24em] text-[#0B1D35]/40">
                  Operations / Dashboard
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/admin/bookings"
                  className="border border-[#0B1D35]/15 px-4 py-3 text-[8px] uppercase tracking-[0.24em] transition-colors duration-300 hover:border-[#C9A646] hover:bg-[#C9A646] hover:text-[#0B1D35]"
                >
                  Manage Bookings
                </Link>

                <Link
                  href="/"
                  className="hidden border border-[#0B1D35]/15 px-4 py-3 text-[8px] uppercase tracking-[0.24em] transition-colors duration-300 hover:border-[#C9A646] hover:bg-[#C9A646] hover:text-[#0B1D35] sm:block"
                >
                  View Site
                </Link>
              </div>
            </div>
          </header>

          {/* Main */}
          <div className="mx-auto max-w-[1600px] px-6 py-10 md:px-10 md:py-14 lg:px-14">
            {/* Intro */}
            <section className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="mb-5 flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-[#0B1D35]/45">
                  <span className="h-px w-8 bg-[#C9A646]" />
                  Private operations
                </p>

                <h1 className="font-serif text-6xl font-light leading-[0.9] tracking-[-0.05em] md:text-8xl">
                  Good morning.
                </h1>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#0B1D35]/60">
                  A live overview of your DRIPLABS booking activity,
                  upcoming sessions and operational demand.
                </p>
              </div>

              <div className="lg:col-span-4 lg:text-right">
                <p className="text-[9px] uppercase tracking-[0.24em] text-[#0B1D35]/35">
                  Current operational view
                </p>

                <p className="mt-3 font-serif text-3xl font-light">
                  {new Date().toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </section>

            {/* Error */}
            {error && (
              <section className="mb-8 border border-red-900/15 bg-red-900/5 p-5">
                <p className="text-xs text-red-800">{error}</p>
              </section>
            )}

            {/* Stats */}
            <section className="grid gap-px border border-[#0B1D35]/10 bg-[#0B1D35]/10 sm:grid-cols-2 lg:grid-cols-6">
              <StatCard
                label="Total bookings"
                value={stats.total}
                loading={loading}
              />

              <StatCard
                label="Pending"
                value={stats.pending}
                loading={loading}
              />

              <StatCard
                label="Confirmed"
                value={stats.confirmed}
                loading={loading}
              />

              <StatCard
                label="Completed"
                value={stats.completed}
                loading={loading}
              />

              <StatCard
                label="Cancelled"
                value={stats.cancelled}
                loading={loading}
              />

              <StatCard
                label="Rejected"
                value={stats.rejected}
                loading={loading}
              />
            </section>

            {/* Main dashboard grid */}
            <section className="mt-10 grid gap-10 xl:grid-cols-12">
              {/* Recent bookings */}
              <div className="xl:col-span-8">
                <div className="flex items-end justify-between border-b border-[#0B1D35]/10 pb-5">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.28em] text-[#C9A646]">
                      Activity
                    </p>

                    <h2 className="mt-2 font-serif text-4xl font-light tracking-[-0.04em]">
                      Recent bookings
                    </h2>
                  </div>

                  <Link
                    href="/admin/bookings"
                    className="text-[8px] uppercase tracking-[0.22em] text-[#0B1D35]/50 transition-colors hover:text-[#C9A646]"
                  >
                    View all →
                  </Link>
                </div>

                <div className="mt-6 overflow-x-auto">
                  {loading ? (
                    <div className="py-16 text-center text-[9px] uppercase tracking-[0.24em] text-[#0B1D35]/35">
                      Loading booking activity...
                    </div>
                  ) : recentBookings.length === 0 ? (
                    <div className="border border-dashed border-[#0B1D35]/15 py-16 text-center">
                      <p className="text-[9px] uppercase tracking-[0.24em] text-[#0B1D35]/35">
                        No bookings yet
                      </p>
                    </div>
                  ) : (
                    <table className="w-full min-w-[760px] border-collapse">
                      <thead>
                        <tr className="border-b border-[#0B1D35]/10 text-left">
                          <th className="pb-4 pr-5 text-[8px] uppercase tracking-[0.2em] text-[#0B1D35]/35">
                            Reference
                          </th>

                          <th className="pb-4 pr-5 text-[8px] uppercase tracking-[0.2em] text-[#0B1D35]/35">
                            Guest
                          </th>

                          <th className="pb-4 pr-5 text-[8px] uppercase tracking-[0.2em] text-[#0B1D35]/35">
                            Protocol
                          </th>

                          <th className="pb-4 pr-5 text-[8px] uppercase tracking-[0.2em] text-[#0B1D35]/35">
                            Date
                          </th>

                          <th className="pb-4 text-[8px] uppercase tracking-[0.2em] text-[#0B1D35]/35">
                            Status
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {recentBookings.map((booking) => (
                          <tr
                            key={booking.id}
                            className="border-b border-[#0B1D35]/8"
                          >
                            <td className="py-5 pr-5 text-xs font-medium">
                              {booking.reference}
                            </td>

                            <td className="py-5 pr-5">
                              <p className="text-sm">
                                {booking.customerName}
                              </p>

                              <p className="mt-1 text-[10px] text-[#0B1D35]/40">
                                {booking.email}
                              </p>
                            </td>

                            <td className="py-5 pr-5">
                              <p className="max-w-[220px] text-sm">
                                {booking.protocol}
                              </p>

                              <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-[#0B1D35]/35">
                                {booking.location}
                              </p>
                            </td>

                            <td className="py-5 pr-5 whitespace-nowrap text-sm">
                              {formatDateTime(booking.createdAt)}
                            </td>

                            <td className="py-5">
                              <span
                                className={`inline-flex px-3 py-1.5 text-[8px] uppercase tracking-[0.16em] ${statusClass(
                                  booking.status
                                )}`}
                              >
                                {statusLabel(booking.status)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>

              {/* Upcoming */}
              <div className="xl:col-span-4">
                <div className="border-b border-[#0B1D35]/10 pb-5">
                  <p className="text-[9px] uppercase tracking-[0.28em] text-[#C9A646]">
                    Calendar
                  </p>

                  <h2 className="mt-2 font-serif text-4xl font-light tracking-[-0.04em]">
                    Upcoming
                  </h2>
                </div>

                <div className="mt-6">
                  {loading ? (
                    <div className="py-10 text-[9px] uppercase tracking-[0.22em] text-[#0B1D35]/35">
                      Loading...
                    </div>
                  ) : upcomingBookings.length === 0 ? (
                    <div className="border border-dashed border-[#0B1D35]/15 p-8">
                      <p className="text-[9px] uppercase leading-5 tracking-[0.2em] text-[#0B1D35]/35">
                        No upcoming appointments found.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-0">
                      {upcomingBookings.map((booking) => (
                        <div
                          key={booking.id}
                          className="border-b border-[#0B1D35]/10 py-5 first:pt-0"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-[9px] uppercase tracking-[0.18em] text-[#C9A646]">
                                {formatDate(booking.date)}
                              </p>

                              <h3 className="mt-2 font-serif text-2xl font-light">
                                {booking.customerName}
                              </h3>
                            </div>

                            <span
                              className={`shrink-0 px-2.5 py-1 text-[7px] uppercase tracking-[0.14em] ${statusClass(
                                booking.status
                              )}`}
                            >
                              {statusLabel(booking.status)}
                            </span>
                          </div>

                          <p className="mt-3 text-xs text-[#0B1D35]/55">
                            {booking.protocol}
                          </p>

                          <div className="mt-3 flex items-center justify-between text-[9px] uppercase tracking-[0.16em] text-[#0B1D35]/35">
                            <span>{booking.location}</span>
                            <span>{booking.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Operational links */}
            <section className="mt-14 border-t border-[#0B1D35]/10 pt-10">
              <div className="grid gap-4 md:grid-cols-3">
                <AdminLink
                  title="Bookings"
                  description="Review requests and manage booking status."
                  href="/admin/bookings"
                />

                <AdminLink
                  title="Public website"
                  description="Open the customer-facing DRIPLABS experience."
                  href="/"
                />

                <div className="border border-[#0B1D35]/10 p-6">
                  <p className="text-[8px] uppercase tracking-[0.24em] text-[#C9A646]">
                    System
                  </p>

                  <p className="mt-3 font-serif text-2xl font-light">
                    Operations online
                  </p>

                  <p className="mt-2 text-xs leading-5 text-[#0B1D35]/50">
                    Booking data is being read from the live application
                    database.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  loading,
}: {
  label: string;
  value: number;
  loading: boolean;
}) {
  return (
    <div className="bg-[#F5F0E7] p-6 md:p-7">
      <p className="text-[8px] uppercase tracking-[0.24em] text-[#0B1D35]/40">
        {label}
      </p>

      <p className="mt-6 font-serif text-5xl font-light tracking-[-0.05em]">
        {loading ? "—" : value}
      </p>
    </div>
  );
}

function AdminLink({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group border border-[#0B1D35]/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A646]/70 hover:bg-[#EEE8DC]"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-[8px] uppercase tracking-[0.24em] text-[#C9A646]">
            Operations
          </p>

          <h3 className="mt-3 font-serif text-3xl font-light">
            {title}
          </h3>

          <p className="mt-3 max-w-sm text-xs leading-5 text-[#0B1D35]/50">
            {description}
          </p>
        </div>

        <span className="mt-1 text-lg transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
