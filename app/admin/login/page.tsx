"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setError(result.message || "Invalid email or password.");
        setLoading(false);
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Unable to sign in. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F0E7] text-[#0B1D35]">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="relative hidden overflow-hidden bg-[#071525] lg:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(201,166,70,0.16),transparent_55%)]" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#C9A646]">
                DRIPLABS
              </p>

              <p className="mt-4 max-w-xs text-[10px] uppercase leading-6 tracking-[0.22em] text-white/45">
                Private operations portal
                <br />
                Physician-led wellness
              </p>
            </div>

            <div>
              <p className="font-serif text-6xl font-light leading-[0.9] text-[#F5F0E7] xl:text-8xl">
                Nourish.
                <br />
                Recharge.
                <br />
                Restore.
              </p>
            </div>

            <p className="text-[9px] uppercase tracking-[0.24em] text-white/35">
              Internal use only
            </p>
          </div>
        </section>

        <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
          <div className="w-full max-w-md">
            <div className="mb-12">
              <p className="text-[9px] uppercase tracking-[0.32em] text-[#C9A646]">
                DRIPLABS / OPERATIONS
              </p>

              <h1 className="mt-5 font-serif text-6xl font-light tracking-[-0.05em] sm:text-7xl">
                Welcome back.
              </h1>

              <p className="mt-5 max-w-sm text-sm leading-6 text-[#0B1D35]/60">
                Sign in to access booking operations and manage incoming
                physician-led wellness requests.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[9px] uppercase tracking-[0.24em] text-[#0B1D35]/50"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="admin@thedriplabs.com"
                  autoComplete="username"
                  required
                  className="w-full border-b border-[#0B1D35]/20 bg-transparent px-0 py-4 text-sm text-[#0B1D35] outline-none transition-colors placeholder:text-[#0B1D35]/25 focus:border-[#C9A646]"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-[9px] uppercase tracking-[0.24em] text-[#0B1D35]/50"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter password"
                  autoComplete="current-password"
                  required
                  className="w-full border-b border-[#0B1D35]/20 bg-transparent px-0 py-4 text-sm text-[#0B1D35] outline-none transition-colors placeholder:text-[#0B1D35]/25 focus:border-[#C9A646]"
                />
              </div>

              {error && (
                <div className="border-l border-red-700/50 pl-4">
                  <p className="text-xs leading-5 text-red-700">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-between border border-[#0B1D35] bg-[#0B1D35] px-6 py-5 text-[9px] uppercase tracking-[0.28em] text-[#F5F0E7] transition-all duration-300 hover:bg-[#C9A646] hover:text-[#0B1D35] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>
                  {loading ? "Signing in..." : "Enter operations"}
                </span>

                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>

            <div className="mt-12 border-t border-[#0B1D35]/10 pt-5">
              <p className="text-[8px] uppercase leading-5 tracking-[0.2em] text-[#0B1D35]/35">
                Physician supervised use only
                <br />
                Internal operations portal
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
