"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import AdminNavigation from "@/components/admin/AdminNavigation";

type BookingStatus =
  | "PENDING"
  | "CONFIRMED"
  | "COMPLETED"
  | "CANCELLED"
  | "REJECTED";

type Booking = {
  id: string;
  reference: string;
  customerId: string;
  customerName: string;
  email: string;
  phone: string;
  locationId: string;
  protocolId: string;
  membershipId: string | null;
  membershipName: string | null;
  date: string;
  time: string;
  status: BookingStatus;
  createdAt: string;
};

type BookingResponse = {
  success: boolean;
  bookings?: Booking[];
  count?: number;
  error?: string;
};

const STATUS_OPTIONS: BookingStatus[] = [
  "PENDING",
  "CONFIRMED",
  "COMPLETED",
  "CANCELLED",
  "REJECTED",
];

const statusLabel: Record<BookingStatus, string> = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
  REJECTED: "Rejected",
};

const statusClass: Record<BookingStatus, string> = {
  PENDING: "admin-status admin-status-pending",
  CONFIRMED: "admin-status admin-status-confirmed",
  COMPLETED: "admin-status admin-status-completed",
  CANCELLED: "admin-status admin-status-cancelled",
  REJECTED: "admin-status admin-status-rejected",
};

function formatDate(value: string) {
  const date = new Date(`${value}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatDateTime(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "ALL" | BookingStatus
  >("ALL");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchBookings = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/bookings", {
        cache: "no-store",
      });

      const data = (await response.json()) as BookingResponse;

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to load bookings.");
      }

      setBookings(data.bookings ?? []);
    } catch (fetchError) {
      setError(
        fetchError instanceof Error
          ? fetchError.message
          : "Unable to load bookings."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchBookings();
  }, [fetchBookings]);

  const filteredBookings = useMemo(() => {
    const query = search.trim().toLowerCase();

    return bookings.filter((booking) => {
      const matchesStatus =
        statusFilter === "ALL" || booking.status === statusFilter;

      const matchesSearch =
        !query ||
        [
          booking.reference,
          booking.customerName,
          booking.email,
          booking.phone,
          booking.locationId,
          booking.protocolId,
          booking.membershipName ?? "",
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return matchesStatus && matchesSearch;
    });
  }, [bookings, search, statusFilter]);

  const stats = useMemo(
    () => ({
      total: bookings.length,
      pending: bookings.filter((b) => b.status === "PENDING").length,
      confirmed: bookings.filter((b) => b.status === "CONFIRMED").length,
      completed: bookings.filter((b) => b.status === "COMPLETED").length,
    }),
    [bookings]
  );

  async function updateStatus(
    bookingId: string,
    status: BookingStatus
  ) {
    setUpdatingId(bookingId);
    setError("");

    try {
      const response = await fetch("/api/bookings/status", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookingId,
          status,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to update booking.");
      }

      setBookings((current) =>
        current.map((booking) =>
          booking.id === bookingId
            ? { ...booking, status }
            : booking
        )
      );
    } catch (updateError) {
      setError(
        updateError instanceof Error
          ? updateError.message
          : "Unable to update booking."
      );
    } finally {
      setUpdatingId(null);
    }
  }

  return (
    <div className="min-h-screen bg-[var(--dl-ivory)]">
      <div className="flex min-h-screen">
        {/* =========================================================
            ADMIN NAVIGATION
        ========================================================= */}
        <AdminNavigation />

        {/* =========================================================
            BOOKINGS CONTENT
        ========================================================= */}
        <main className="min-w-0 flex-1">
          <div className="admin-page">
            <style jsx>{`
              .admin-page {
                min-height: 100vh;
                padding: 2rem var(--page-x) 5rem;
                background: var(--dl-ivory);
                color: var(--dl-ink);
              }

              .admin-shell {
                width: min(100%, var(--container-width));
                margin: 0 auto;
              }

              .admin-header {
                display: flex;
                justify-content: space-between;
                align-items: end;
                gap: 2rem;
                padding-bottom: 2rem;
                border-bottom: 1px solid var(--border-strong);
              }

              .admin-eyebrow {
                margin: 0 0 0.75rem;
                font-size: 0.68rem;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: var(--dl-gold);
              }

              .admin-title {
                margin: 0;
                font-family: var(--font-display), Georgia, serif;
                font-size: clamp(3.5rem, 7vw, 7rem);
                line-height: 0.9;
                letter-spacing: var(--display-tracking);
                font-weight: 500;
                color: var(--dl-navy);
              }

              .admin-subtitle {
                max-width: 38rem;
                margin: 1rem 0 0;
                color: var(--dl-ink-soft);
                line-height: 1.7;
              }

              .admin-button {
                min-height: 2.8rem;
                padding: 0 1.1rem;
                border: 1px solid var(--dl-navy);
                background: var(--dl-navy);
                color: var(--dl-ivory);
                font: inherit;
                font-size: 0.7rem;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                cursor: pointer;
              }

              .admin-button:hover {
                background: var(--dl-gold);
                border-color: var(--dl-gold);
                color: var(--dl-navy);
              }

              .admin-button:disabled {
                opacity: 0.6;
                cursor: not-allowed;
              }

              .admin-stats {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                margin-top: 2rem;
                border-top: 1px solid var(--border-strong);
                border-bottom: 1px solid var(--border-strong);
              }

              .admin-stat {
                padding: 1.4rem 1.2rem;
                border-right: 1px solid var(--border);
              }

              .admin-stat:last-child {
                border-right: 0;
              }

              .admin-stat-label {
                display: block;
                margin-bottom: 0.4rem;
                font-size: 0.63rem;
                letter-spacing: 0.15em;
                text-transform: uppercase;
                color: var(--muted);
              }

              .admin-stat-value {
                font-family: var(--font-display), Georgia, serif;
                font-size: 2.6rem;
                line-height: 1;
                color: var(--dl-navy);
              }

              .admin-toolbar {
                display: flex;
                gap: 1rem;
                margin-top: 2rem;
              }

              .admin-search,
              .admin-filter {
                height: 2.8rem;
                border: 1px solid var(--border-strong);
                border-radius: 0;
                background: transparent;
                color: var(--dl-ink);
                font: inherit;
                outline: none;
              }

              .admin-search {
                flex: 1;
                padding: 0 0.9rem;
              }

              .admin-filter {
                min-width: 11rem;
                padding: 0 0.75rem;
                background: var(--dl-ivory);
              }

              .admin-search:focus,
              .admin-filter:focus {
                border-color: var(--dl-gold);
              }

              .admin-error {
                margin-top: 1rem;
                padding: 0.9rem 1rem;
                border: 1px solid rgba(140, 50, 50, 0.25);
                color: #7c2929;
                background: rgba(140, 50, 50, 0.05);
              }

              .admin-table-wrap {
                margin-top: 1rem;
                overflow-x: auto;
                border-top: 1px solid var(--border-strong);
              }

              .admin-table {
                width: 100%;
                min-width: 1100px;
                border-collapse: collapse;
              }

              .admin-table th,
              .admin-table td {
                padding: 1rem 0.8rem;
                text-align: left;
                border-bottom: 1px solid var(--border);
                vertical-align: middle;
              }

              .admin-table th {
                font-size: 0.62rem;
                letter-spacing: 0.14em;
                text-transform: uppercase;
                color: var(--muted);
              }

              .admin-table td {
                font-size: 0.82rem;
              }

              .admin-reference {
                color: var(--dl-gold);
                font-weight: 700;
              }

              .admin-primary {
                color: var(--dl-navy);
                font-weight: 650;
              }

              .admin-secondary {
                margin-top: 0.2rem;
                color: var(--dl-ink-soft);
                font-size: 0.74rem;
              }

              .admin-status {
                display: inline-flex;
                padding: 0.45rem 0.6rem;
                border: 1px solid currentColor;
                font-size: 0.6rem;
                letter-spacing: 0.12em;
                text-transform: uppercase;
              }

              .admin-status-pending {
                color: #9a711f;
              }

              .admin-status-confirmed {
                color: #44684e;
              }

              .admin-status-completed {
                color: #315878;
              }

              .admin-status-cancelled,
              .admin-status-rejected {
                color: #8a4343;
              }

              .admin-status-select {
                width: 100%;
                min-width: 9rem;
                margin-top: 0.5rem;
                height: 2.15rem;
                padding: 0 0.5rem;
                border: 1px solid var(--border-strong);
                border-radius: 0;
                background: var(--dl-ivory);
                color: var(--dl-ink);
                font: inherit;
                font-size: 0.74rem;
              }

              .admin-status-select:focus {
                outline: none;
                border-color: var(--dl-gold);
              }

              .admin-empty,
              .admin-loading {
                padding: 4rem 1rem;
                text-align: center;
                color: var(--muted);
              }

              @media (max-width: 800px) {
                .admin-header {
                  align-items: flex-start;
                  flex-direction: column;
                }

                .admin-stats {
                  grid-template-columns: repeat(2, 1fr);
                }

                .admin-stat:nth-child(2) {
                  border-right: 0;
                }

                .admin-toolbar {
                  flex-direction: column;
                }

                .admin-search,
                .admin-filter {
                  width: 100%;
                }
              }

              @media (max-width: 520px) {
                .admin-stats {
                  grid-template-columns: 1fr;
                }

                .admin-stat {
                  border-right: 0;
                  border-bottom: 1px solid var(--border);
                }

                .admin-stat:last-child {
                  border-bottom: 0;
                }
              }
            `}</style>

            <div className="admin-shell">
              <header className="admin-header">
                <div>
                  <p className="admin-eyebrow">
                    DRIPLABS / Operations
                  </p>

                  <h1 className="admin-title">Bookings</h1>

                  <p className="admin-subtitle">
                    Private operations view for managing physician-led
                    booking requests across the DRIPLABS network.
                  </p>
                </div>

                <button
                  type="button"
                  className="admin-button"
                  onClick={() => void fetchBookings()}
                  disabled={loading}
                >
                  {loading ? "Refreshing..." : "Refresh"}
                </button>
              </header>

              <section className="admin-stats">
                <div className="admin-stat">
                  <span className="admin-stat-label">Total</span>
                  <strong className="admin-stat-value">
                    {stats.total}
                  </strong>
                </div>

                <div className="admin-stat">
                  <span className="admin-stat-label">Pending</span>
                  <strong className="admin-stat-value">
                    {stats.pending}
                  </strong>
                </div>

                <div className="admin-stat">
                  <span className="admin-stat-label">Confirmed</span>
                  <strong className="admin-stat-value">
                    {stats.confirmed}
                  </strong>
                </div>

                <div className="admin-stat">
                  <span className="admin-stat-label">Completed</span>
                  <strong className="admin-stat-value">
                    {stats.completed}
                  </strong>
                </div>
              </section>

              <section className="admin-toolbar">
                <input
                  type="search"
                  className="admin-search"
                  placeholder="Search reference, customer, email, phone..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />

                <select
                  className="admin-filter"
                  value={statusFilter}
                  onChange={(event) =>
                    setStatusFilter(
                      event.target.value as "ALL" | BookingStatus
                    )
                  }
                >
                  <option value="ALL">All statuses</option>

                  {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {statusLabel[status]}
                    </option>
                  ))}
                </select>
              </section>

              {error ? (
                <div className="admin-error">{error}</div>
              ) : null}

              <section className="admin-table-wrap">
                {loading ? (
                  <div className="admin-loading">
                    Loading bookings...
                  </div>
                ) : filteredBookings.length === 0 ? (
                  <div className="admin-empty">
                    No bookings match the current filters.
                  </div>
                ) : (
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Reference</th>
                        <th>Customer</th>
                        <th>Location</th>
                        <th>Protocol</th>
                        <th>Membership</th>
                        <th>Appointment</th>
                        <th>Status</th>
                        <th>Received</th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredBookings.map((booking) => (
                        <tr key={booking.id}>
                          <td>
                            <div className="admin-reference">
                              {booking.reference}
                            </div>
                          </td>

                          <td>
                            <div className="admin-primary">
                              {booking.customerName}
                            </div>

                            <div className="admin-secondary">
                              {booking.email}
                            </div>

                            <div className="admin-secondary">
                              {booking.phone}
                            </div>
                          </td>

                          <td>
                            <div className="admin-primary">
                              {booking.locationId}
                            </div>
                          </td>

                          <td>
                            <div className="admin-primary">
                              {booking.protocolId}
                            </div>
                          </td>

                          <td>
                            {booking.membershipName ? (
                              <div className="admin-primary">
                                {booking.membershipName}
                              </div>
                            ) : (
                              <div className="admin-secondary">
                                No membership
                              </div>
                            )}
                          </td>

                          <td>
                            <div className="admin-primary">
                              {formatDate(booking.date)}
                            </div>

                            <div className="admin-secondary">
                              {booking.time}
                            </div>
                          </td>

                          <td>
                            <div className={statusClass[booking.status]}>
                              {statusLabel[booking.status]}
                            </div>

                            <select
                              className="admin-status-select"
                              value={booking.status}
                              disabled={updatingId === booking.id}
                              onChange={(event) =>
                                void updateStatus(
                                  booking.id,
                                  event.target.value as BookingStatus
                                )
                              }
                            >
                              {STATUS_OPTIONS.map((status) => (
                                <option key={status} value={status}>
                                  {statusLabel[status]}
                                </option>
                              ))}
                            </select>
                          </td>

                          <td>
                            <div className="admin-secondary">
                              {formatDateTime(booking.createdAt)}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
