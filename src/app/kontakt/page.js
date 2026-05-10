"use client";

import { useState } from "react";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sport: "",
    nachricht: "",
    website: "", // Honeypot
    privacyAccepted: false, // Datenschutz-Checkbox
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/kontakt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setSent(true);
  };

  return (
    <main className="bg-[#0a0a0a] min-h-screen px-5 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-16">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-[#3fbf8d]" />
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#3fbf8d]">
              Kontakt
            </span>
          </div>
          <h1
            className="leading-[0.92] tracking-tight text-white"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 13vw, 6rem)" }}
          >
            Lass uns<br />
            <span className="text-[#3fbf8d]">reden.</span>
          </h1>
          <p className="mt-6 text-[0.95rem] font-light leading-relaxed text-white/40 max-w-sm">
            Kein langer Prozess — schreib uns kurz und wir melden uns
            innerhalb von 24 Stunden.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">

          {/* ── Formular ── */}
          {sent ? (
            <div className="flex flex-col justify-center gap-5 rounded-2xl border border-white/5 bg-[#111] p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#3fbf8d]/30 text-[#3fbf8d]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p
                className="leading-tight text-white"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2rem, 8vw, 3.5rem)" }}
              >
                Nachricht<br />
                <span className="text-[#3fbf8d]">erhalten.</span>
              </p>
              <p className="text-[0.95rem] font-light leading-relaxed text-white/40">
                Wir melden uns so schnell wie möglich bei dir. Bis gleich.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[0.7rem] uppercase tracking-[0.18em] text-white/40">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Max Mustermann"
                  className="rounded-xl border border-white/10 bg-[#111] px-5 py-4 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-[#3fbf8d]"
                />
              </div>

              {/* E-Mail */}
              <div className="flex flex-col gap-2">
                <label className="text-[0.7rem] uppercase tracking-[0.18em] text-white/40">
                  E-Mail
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="max@example.com"
                  className="rounded-xl border border-white/10 bg-[#111] px-5 py-4 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-[#3fbf8d]"
                />
              </div>

              {/* Sportart */}
              <div className="flex flex-col gap-2">
                <label className="text-[0.7rem] uppercase tracking-[0.18em] text-white/40">
                  Sportart / Ziel
                </label>
                <input
                  type="text"
                  name="sport"
                  value={formData.sport}
                  onChange={handleChange}
                  placeholder="z. B. Fußball, Schnelligkeit verbessern …"
                  className="rounded-xl border border-white/10 bg-[#111] px-5 py-4 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-[#3fbf8d]"
                />
              </div>

              {/* Nachricht */}
              <div className="flex flex-col gap-2">
                <label className="text-[0.7rem] uppercase tracking-[0.18em] text-white/40">
                  Nachricht
                </label>
                <textarea
                  name="nachricht"
                  required
                  rows={5}
                  value={formData.nachricht}
                  onChange={handleChange}
                  placeholder="Erzähl uns von deinen Zielen …"
                  className="rounded-xl border border-white/10 bg-[#111] px-5 py-4 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-[#3fbf8d] resize-none"
                />
              </div>

              {/* Invisible Botcheck / Honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              {/* Datenschutz Checkbox */}
              <label className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                <input
                  type="checkbox"
                  name="privacyAccepted"
                  required
                  checked={formData.privacyAccepted}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border border-white/20 bg-[#111] accent-[#3fbf8d]"
                />
                <span>
                  Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung
                  meiner Daten zum Zweck der Bearbeitung meiner Anfrage zu.
                </span>
              </label>

              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-3 rounded-xl border border-[#3fbf8d] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-[#3fbf8d] transition-colors duration-200 hover:bg-[#3fbf8d] hover:text-black"
              >
                Nachricht senden
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          )}

          {/* ── Infos ── */}
          <div className="flex flex-col gap-10">

            {/* Direktkontakt */}
            <div className="flex flex-col gap-5">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-white/40">
                Direktkontakt
              </p>

              <a
                href="https://instagram.com/n_peterfy"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-[#111] px-6 py-5 transition-colors hover:border-[#3fbf8d]/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3fbf8d]/30 text-[#3fbf8d]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Instagram</p>
                  <p className="text-xs text-white/40">@n_peterfy</p>
                </div>
                <svg className="w-4 h-4 ml-auto text-white/20 transition-transform group-hover:translate-x-1 group-hover:text-[#3fbf8d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="mailto:info@peterfyperformance.de"
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-[#111] px-6 py-5 transition-colors hover:border-[#3fbf8d]/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3fbf8d]/30 text-[#3fbf8d]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">E-Mail</p>
                  <p className="text-xs text-white/40">info@peterfyperformance.de</p>
                </div>
                <svg className="w-4 h-4 ml-auto text-white/20 transition-transform group-hover:translate-x-1 group-hover:text-[#3fbf8d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-white/5" />

            {/* Versprechen */}
            <div className="flex flex-col gap-5">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-white/40">
                Was dich erwartet
              </p>
              {[
                { label: "Antwort in 24h", desc: "Wir melden uns schnell und unkompliziert." },
                { label: "Kein Vertrag nötig", desc: "Erstgespräch ist kostenlos und unverbindlich." },
                { label: "Individuell", desc: "Kein Copy-Paste — jeder Athlet ist anders." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="mt-1 h-[6px] w-[6px] shrink-0 rounded-full bg-[#3fbf8d]" />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs leading-relaxed text-white/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}