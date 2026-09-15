"use client";

import { useEffect, useMemo, useState } from "react";
import AdminNavigation from "@/components/admin/AdminNavigation";

type Protocol = {
  id: string;
  number: number;
  slug: string;
  name: string;
  family: string;
  category: string;
  shortDescription: string;
  description: string;
  duration: string;
  price: number | null;
  image: string;
  evidenceTier: string;
  active: boolean;
};

type ProtocolResponse = {
  success: boolean;
  protocols?: Protocol[];
  count?: number;
  error?: string;
};

type ProtocolForm = {
  name: string;
  family: string;
  category: string;
  shortDescription: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  evidenceTier: string;
  active: boolean;
};

function createForm(protocol: Protocol): ProtocolForm {
  return {
    name: protocol.name,
    family: protocol.family,
    category: protocol.category,
    shortDescription: protocol.shortDescription,
    description: protocol.description,
    duration: protocol.duration,
    price: protocol.price === null ? "" : String(protocol.price),
    image: protocol.image,
    evidenceTier: protocol.evidenceTier,
    active: protocol.active,
  };
}

export default function AdminProtocolsPage() {
  const [protocols, setProtocols] = useState<Protocol[]>([]);
  const [search, setSearch] = useState("");
  const [familyFilter, setFamilyFilter] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [form, setForm] = useState<ProtocolForm | null>(null);

  useEffect(() => {
    async function loadProtocols() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/admin/protocols", {
          cache: "no-store",
        });

        const data = (await response.json()) as ProtocolResponse;

        if (!response.ok || !data.success) {
          throw new Error(
            data.error || "Unable to load protocols."
          );
        }

        setProtocols(data.protocols ?? []);
      } catch (fetchError) {
        setError(
          fetchError instanceof Error
            ? fetchError.message
            : "Unable to load protocols."
        );
      } finally {
        setLoading(false);
      }
    }

    void loadProtocols();
  }, []);

  const families = useMemo(() => {
    return Array.from(
      new Set(protocols.map((protocol) => protocol.family))
    ).sort();
  }, [protocols]);

  const filteredProtocols = useMemo(() => {
    const query = search.trim().toLowerCase();

    return protocols.filter((protocol) => {
      const matchesFamily =
        familyFilter === "ALL" ||
        protocol.family === familyFilter;

      const matchesSearch =
        !query ||
        [
          protocol.number,
          protocol.name,
          protocol.slug,
          protocol.family,
          protocol.category,
          protocol.shortDescription,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return matchesFamily && matchesSearch;
    });
  }, [protocols, search, familyFilter]);

  const activeCount = protocols.filter(
    (protocol) => protocol.active
  ).length;

  function startEditing(protocol: Protocol) {
    setEditingId(protocol.id);
    setForm(createForm(protocol));
    setError("");
  }

  function cancelEditing() {
    setEditingId(null);
    setForm(null);
  }

  function updateForm<K extends keyof ProtocolForm>(
    field: K,
    value: ProtocolForm[K]
  ) {
    setForm((current) => {
      if (!current) return current;

      return {
        ...current,
        [field]: value,
      };
    });
  }

  async function saveProtocol(protocolId: string) {
    if (!form) return;

    setSavingId(protocolId);
    setError("");

    try {
      const response = await fetch("/api/admin/protocols", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: protocolId,
          name: form.name,
          family: form.family,
          category: form.category,
          shortDescription: form.shortDescription,
          description: form.description,
          duration: form.duration,
          price: form.price,
          image: form.image,
          evidenceTier: form.evidenceTier,
          active: form.active,
        }),
      });

      const data = (await response.json()) as {
        success: boolean;
        protocol?: Protocol;
        error?: string;
      };

      if (!response.ok || !data.success || !data.protocol) {
        throw new Error(
          data.error || "Unable to save protocol."
        );
      }

      setProtocols((current) =>
        current.map((protocol) =>
          protocol.id === protocolId
            ? data.protocol!
            : protocol
        )
      );

      setEditingId(null);
      setForm(null);
    } catch (saveError) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Unable to save protocol."
      );
    } finally {
      setSavingId(null);
    }
  }

  return (
    <div className="min-h-screen bg-[var(--dl-ivory)]">
      <div className="flex min-h-screen">
        <AdminNavigation />

        <main className="min-w-0 flex-1">
          <div className="protocol-page">
            <style jsx>{`
              .protocol-page {
                min-height: 100vh;
                padding: 2rem var(--page-x) 5rem;
                background: var(--dl-ivory);
                color: var(--dl-ink);
              }

              .protocol-shell {
                width: min(100%, var(--container-width));
                margin: 0 auto;
              }

              .protocol-header {
                display: flex;
                justify-content: space-between;
                align-items: end;
                gap: 2rem;
                padding-bottom: 2rem;
                border-bottom: 1px solid var(--border-strong);
              }

              .protocol-eyebrow {
                margin: 0 0 0.75rem;
                font-size: 0.68rem;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: var(--dl-gold);
              }

              .protocol-title {
                margin: 0;
                font-family: var(--font-display), Georgia, serif;
                font-size: clamp(3.5rem, 7vw, 7rem);
                line-height: 0.9;
                letter-spacing: var(--display-tracking);
                font-weight: 500;
                color: var(--dl-navy);
              }

              .protocol-subtitle {
                max-width: 40rem;
                margin: 1rem 0 0;
                color: var(--dl-ink-soft);
                line-height: 1.7;
              }

              .protocol-meta {
                text-align: right;
              }

              .protocol-meta-label {
                font-size: 0.62rem;
                letter-spacing: 0.16em;
                text-transform: uppercase;
                color: var(--muted);
              }

              .protocol-meta-value {
                margin-top: 0.4rem;
                font-family: var(--font-display), Georgia, serif;
                font-size: 2.5rem;
                line-height: 1;
                color: var(--dl-navy);
              }

              .protocol-toolbar {
                display: flex;
                gap: 1rem;
                margin-top: 2rem;
              }

              .protocol-search,
              .protocol-filter {
                height: 2.8rem;
                border: 1px solid var(--border-strong);
                border-radius: 0;
                background: transparent;
                color: var(--dl-ink);
                font: inherit;
                outline: none;
              }

              .protocol-search {
                flex: 1;
                padding: 0 0.9rem;
              }

              .protocol-filter {
                min-width: 14rem;
                padding: 0 0.75rem;
                background: var(--dl-ivory);
              }

              .protocol-search:focus,
              .protocol-filter:focus,
              .edit-input:focus,
              .edit-textarea:focus {
                border-color: var(--dl-gold);
              }

              .protocol-error {
                margin-top: 1rem;
                padding: 0.9rem 1rem;
                border: 1px solid rgba(140, 50, 50, 0.25);
                color: #7c2929;
                background: rgba(140, 50, 50, 0.05);
              }

              .protocol-list {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 1px;
                margin-top: 2rem;
                border-top: 1px solid var(--border-strong);
                border-left: 1px solid var(--border);
                background: var(--border);
              }

              .protocol-card {
                display: flex;
                min-height: 17rem;
                flex-direction: column;
                justify-content: space-between;
                background: var(--dl-ivory);
                padding: 1.6rem;
              }

              .protocol-card.editing {
                grid-column: 1 / -1;
                background: var(--dl-paper);
              }

              .protocol-card-top {
                display: flex;
                align-items: start;
                justify-content: space-between;
                gap: 1rem;
              }

              .protocol-number {
                font-size: 0.65rem;
                letter-spacing: 0.16em;
                color: var(--dl-gold);
              }

              .protocol-active,
              .protocol-inactive {
                padding: 0.35rem 0.55rem;
                border: 1px solid currentColor;
                font-size: 0.58rem;
                letter-spacing: 0.12em;
                text-transform: uppercase;
              }

              .protocol-active {
                color: #44684e;
              }

              .protocol-inactive {
                color: #8a4343;
              }

              .protocol-family {
                margin-top: 2rem;
                font-size: 0.62rem;
                letter-spacing: 0.15em;
                text-transform: uppercase;
                color: var(--muted);
              }

              .protocol-name {
                margin-top: 0.6rem;
                font-family: var(--font-display), Georgia, serif;
                font-size: clamp(2rem, 3vw, 3rem);
                line-height: 0.95;
                letter-spacing: -0.03em;
                color: var(--dl-navy);
              }

              .protocol-category {
                margin-top: 0.5rem;
                font-size: 0.65rem;
                letter-spacing: 0.13em;
                text-transform: uppercase;
                color: var(--dl-gold);
              }

              .protocol-description {
                max-width: 38rem;
                margin-top: 1rem;
                color: var(--dl-ink-soft);
                font-size: 0.82rem;
                line-height: 1.7;
              }

              .protocol-card-bottom {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1rem;
                margin-top: 2rem;
                padding-top: 1rem;
                border-top: 1px solid var(--border);
              }

              .protocol-detail-label {
                display: block;
                margin-bottom: 0.3rem;
                font-size: 0.57rem;
                letter-spacing: 0.13em;
                text-transform: uppercase;
                color: var(--muted);
              }

              .protocol-detail-value {
                color: var(--dl-navy);
                font-size: 0.78rem;
              }

              .protocol-action {
                margin-top: 1.5rem;
                display: flex;
                gap: 0.75rem;
              }

              .protocol-button {
                border: 1px solid var(--dl-navy);
                background: var(--dl-navy);
                color: var(--dl-ivory);
                padding: 0.75rem 1rem;
                font: inherit;
                font-size: 0.62rem;
                letter-spacing: 0.14em;
                text-transform: uppercase;
                cursor: pointer;
                transition: all 250ms ease;
              }

              .protocol-button:hover {
                border-color: var(--dl-gold);
                background: var(--dl-gold);
                color: var(--dl-navy);
              }

              .protocol-button.secondary {
                background: transparent;
                color: var(--dl-navy);
              }

              .protocol-button.secondary:hover {
                background: var(--dl-navy);
                color: var(--dl-ivory);
              }

              .edit-form {
                margin-top: 1.5rem;
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 1rem;
              }

              .edit-field.full {
                grid-column: 1 / -1;
              }

              .edit-label {
                display: block;
                margin-bottom: 0.45rem;
                font-size: 0.58rem;
                letter-spacing: 0.13em;
                text-transform: uppercase;
                color: var(--muted);
              }

              .edit-input,
              .edit-textarea {
                width: 100%;
                border: 1px solid var(--border-strong);
                border-radius: 0;
                background: var(--dl-ivory);
                color: var(--dl-ink);
                font: inherit;
                outline: none;
              }

              .edit-input {
                height: 2.8rem;
                padding: 0 0.75rem;
              }

              .edit-textarea {
                min-height: 8rem;
                padding: 0.75rem;
                resize: vertical;
                line-height: 1.6;
              }

              .edit-check {
                display: flex;
                align-items: center;
                gap: 0.6rem;
                height: 100%;
                padding-top: 1.25rem;
              }

              .edit-check input {
                width: 1rem;
                height: 1rem;
                accent-color: var(--dl-gold);
              }

              .edit-check label {
                font-size: 0.72rem;
                color: var(--dl-ink-soft);
              }

              .protocol-empty,
              .protocol-loading {
                grid-column: 1 / -1;
                padding: 5rem 1rem;
                text-align: center;
                color: var(--muted);
                background: var(--dl-ivory);
              }

              @media (max-width: 900px) {
                .protocol-list {
                  grid-template-columns: 1fr;
                }

                .protocol-card.editing {
                  grid-column: auto;
                }

                .edit-form {
                  grid-template-columns: 1fr;
                }

                .edit-field.full {
                  grid-column: auto;
                }
              }

              @media (max-width: 800px) {
                .protocol-header {
                  align-items: flex-start;
                  flex-direction: column;
                }

                .protocol-meta {
                  text-align: left;
                }

                .protocol-toolbar {
                  flex-direction: column;
                }

                .protocol-search,
                .protocol-filter {
                  width: 100%;
                }
              }

              @media (max-width: 520px) {
                .protocol-card-bottom {
                  grid-template-columns: 1fr;
                }

                .protocol-action {
                  flex-direction: column;
                }
              }
            `}</style>

            <div className="protocol-shell">
              <header className="protocol-header">
                <div>
                  <p className="protocol-eyebrow">
                    DRIPLABS / Operations
                  </p>

                  <h1 className="protocol-title">
                    Protocols
                  </h1>

                  <p className="protocol-subtitle">
                    Internal catalogue view for the DRIPLABS
                    consumer protocol library. Review and manage
                    protocol information stored in PostgreSQL.
                  </p>
                </div>

                <div className="protocol-meta">
                  <div className="protocol-meta-label">
                    Active protocols
                  </div>

                  <div className="protocol-meta-value">
                    {loading ? "—" : activeCount}
                  </div>
                </div>
              </header>

              <section className="protocol-toolbar">
                <input
                  type="search"
                  className="protocol-search"
                  placeholder="Search protocol, family, category..."
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                />

                <select
                  className="protocol-filter"
                  value={familyFilter}
                  onChange={(event) =>
                    setFamilyFilter(event.target.value)
                  }
                >
                  <option value="ALL">
                    All wellness families
                  </option>

                  {families.map((family) => (
                    <option key={family} value={family}>
                      {family}
                    </option>
                  ))}
                </select>
              </section>

              {error ? (
                <div className="protocol-error">{error}</div>
              ) : null}

              <section className="protocol-list">
                {loading ? (
                  <div className="protocol-loading">
                    Loading protocols...
                  </div>
                ) : filteredProtocols.length === 0 ? (
                  <div className="protocol-empty">
                    No protocols match the current filters.
                  </div>
                ) : (
                  filteredProtocols.map((protocol) => {
                    const editing = editingId === protocol.id;

                    return (
                      <article
                        key={protocol.id}
                        className={`protocol-card ${
                          editing ? "editing" : ""
                        }`}
                      >
                        <div>
                          <div className="protocol-card-top">
                            <span className="protocol-number">
                              {String(protocol.number).padStart(
                                2,
                                "0"
                              )}
                            </span>

                            {protocol.active ? (
                              <span className="protocol-active">
                                Active
                              </span>
                            ) : (
                              <span className="protocol-inactive">
                                Inactive
                              </span>
                            )}
                          </div>

                          {editing && form ? (
                            <div className="edit-form">
                              <div className="edit-field">
                                <label className="edit-label">
                                  Protocol name
                                </label>

                                <input
                                  className="edit-input"
                                  value={form.name}
                                  onChange={(event) =>
                                    updateForm(
                                      "name",
                                      event.target.value
                                    )
                                  }
                                />
                              </div>

                              <div className="edit-field">
                                <label className="edit-label">
                                  Family
                                </label>

                                <input
                                  className="edit-input"
                                  value={form.family}
                                  onChange={(event) =>
                                    updateForm(
                                      "family",
                                      event.target.value
                                    )
                                  }
                                />
                              </div>

                              <div className="edit-field">
                                <label className="edit-label">
                                  Category
                                </label>

                                <input
                                  className="edit-input"
                                  value={form.category}
                                  onChange={(event) =>
                                    updateForm(
                                      "category",
                                      event.target.value
                                    )
                                  }
                                />
                              </div>

                              <div className="edit-field">
                                <label className="edit-label">
                                  Duration
                                </label>

                                <input
                                  className="edit-input"
                                  value={form.duration}
                                  onChange={(event) =>
                                    updateForm(
                                      "duration",
                                      event.target.value
                                    )
                                  }
                                />
                              </div>

                              <div className="edit-field">
                                <label className="edit-label">
                                  Price
                                </label>

                                <input
                                  className="edit-input"
                                  type="number"
                                  min="0"
                                  step="0.01"
                                  value={form.price}
                                  onChange={(event) =>
                                    updateForm(
                                      "price",
                                      event.target.value
                                    )
                                  }
                                  placeholder="Leave blank for consultation"
                                />
                              </div>

                              <div className="edit-field">
                                <label className="edit-label">
                                  Evidence tier
                                </label>

                                <input
                                  className="edit-input"
                                  value={form.evidenceTier}
                                  onChange={(event) =>
                                    updateForm(
                                      "evidenceTier",
                                      event.target.value
                                    )
                                  }
                                />
                              </div>

                              <div className="edit-field full">
                                <label className="edit-label">
                                  Short description
                                </label>

                                <textarea
                                  className="edit-textarea"
                                  value={form.shortDescription}
                                  onChange={(event) =>
                                    updateForm(
                                      "shortDescription",
                                      event.target.value
                                    )
                                  }
                                />
                              </div>

                              <div className="edit-field full">
                                <label className="edit-label">
                                  Description
                                </label>

                                <textarea
                                  className="edit-textarea"
                                  value={form.description}
                                onChange={(event) =>
                                    updateForm(
                                      "description",
                                      event.target.value
                                    )
                                  }
                                />
                              </div>

                              <div className="edit-field">
                                <label className="edit-label">
                                  Image path
                                </label>

                                <input
                                  className="edit-input"
                                  value={form.image}
                                  onChange={(event) =>
                                    updateForm(
                                      "image",
                                      event.target.value
                                    )
                                  }
                                />
                              </div>

                              <div className="edit-field">
                                <div className="edit-check">
                                  <input
                                    id={`active-${protocol.id}`}
                                    type="checkbox"
                                    checked={form.active}
                                    onChange={(event) =>
                                      updateForm(
                                        "active",
                                        event.target.checked
                                      )
                                    }
                                  />

                                  <label
                                    htmlFor={`active-${protocol.id}`}
                                  >
                                    Protocol is active
                                  </label>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <>
                              <p className="protocol-family">
                                {protocol.family}
                              </p>

                              <h2 className="protocol-name">
                                {protocol.name}
                              </h2>

                              <p className="protocol-category">
                                {protocol.category}
                              </p>

                              <p className="protocol-description">
                                {protocol.shortDescription}
                              </p>
                            </>
                          )}
                        </div>

                        {editing && form ? (
                          <div className="protocol-action">
                            <button
                              type="button"
                              className="protocol-button"
                              disabled={
                                savingId === protocol.id
                              }
                              onClick={() =>
                                void saveProtocol(protocol.id)
                              }
                            >
                              {savingId === protocol.id
                                ? "Saving..."
                                : "Save changes"}
                            </button>

                            <button
                              type="button"
                              className="protocol-button secondary"
                              disabled={
                                savingId === protocol.id
                              }
                              onClick={cancelEditing}
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <>
                            <div className="protocol-card-bottom">
                              <div>
                                <span className="protocol-detail-label">
                                  Duration
                                </span>

                                <span className="protocol-detail-value">
                                  {protocol.duration || "—"}
                                </span>
                              </div>

                              <div>
                                <span className="protocol-detail-label">
                                  Price
                                </span>

                                <span className="protocol-detail-value">
                                  {protocol.price !== null
                                    ? `₹${protocol.price.toLocaleString(
                                        "en-IN"
                                      )}`
                                    : "Consultation"}
                                </span>
                              </div>

                              <div>
                                <span className="protocol-detail-label">
                                  Evidence
                                </span>

                                <span className="protocol-detail-value">
                                  {protocol.evidenceTier || "—"}
                                </span>
                              </div>
                            </div>

                            <div className="protocol-action">
                              <button
                                type="button"
                                className="protocol-button"
                                onClick={() =>
                                  startEditing(protocol)
                                }
                              >
                                Edit protocol
                              </button>
                            </div>
                          </>
                        )}
                      </article>
                    );
                  })
                )}
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
