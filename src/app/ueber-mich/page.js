import LastConversion from "@/components/ui/LastConversion";
import Image from "next/image";

export const metadata = {
  title: "Über mich | Athletiktrainer für Performance & nachhaltige Entwicklung",
  description:
    "Erfahre mehr über meinen Ansatz als Athletiktrainer: wissenschaftlich fundiertes Training für Leistung, Belastbarkeit und langfristige Entwicklung von Sportlern.",

  keywords:
    "Athletiktrainer Profil, Personal Trainer Sport Erfahrung, Athletiktraining Coach Deutschland, Sport Performance Coach, Trainer Philosophie Athletiktraining, Strength and Conditioning Coach, Coaching Ansatz Sport",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Über mich - Athletiktrainer für Performance & Entwicklung",
    description:
      "Mein Ansatz als Athletiktrainer: strukturiert, individuell und wissenschaftlich fundiert - für nachhaltige Leistungssteigerung.",
    url: "https://www.deine-domain.de/ueber-mich",
    siteName: "Peterfy Performance",
    type: "profile",
    locale: "de_DE",
    images: ["/og-image-about.jpg"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Über mich | Athletiktrainer",
    description:
      "Lerne meinen Coaching-Ansatz für Performance, Prävention und nachhaltige Entwicklung kennen.",
    images: ["/og-image-about.jpg"],
  },

  alternates: {
    canonical: "/ueber-mich",
  },
};

const stationen = [
  {
    jahr: "2016",
    titel: "Einstieg in den Leistungssport",
    beschreibung:
      "Erste Erfahrungen als aktiver Athlet im Jugendleistungssport — Grundstein für das Verständnis von Athletik und Körper.",
  },
  {
    jahr: "2019",
    titel: "Ausbildung zum Athletiktrainer",
    beschreibung:
      "Zertifizierte Ausbildung mit Fokus auf Schnelligkeit, Kraft und sportartspezifische Leistungsentwicklung.",
  },
  {
    jahr: "2021",
    titel: "Gründung Peterfy Performance",
    beschreibung:
      "Start des eigenen Trainingskonzepts — individuell, messbar und auf echte Leistungssteigerung ausgerichtet.",
  },
  {
    jahr: "2023",
    titel: "Erweiterung auf Vereinskooperationen",
    beschreibung:
      "Aufbau langfristiger Partnerschaften mit Vereinen im Nachwuchs- und Leistungsbereich.",
  },
];

const werte = [
  {
    label: "Individualität",
    desc: "Kein Athlet ist gleich. Jedes Programm wird von Grund auf neu entwickelt.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Messbarkeit",
    desc: "Fortschritte müssen sichtbar sein. Daten und Struktur stehen im Mittelpunkt.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: "Konsequenz",
    desc: "Ergebnisse entstehen durch System, nicht durch Zufall. Konsequentes Training zahlt sich aus.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
];

export default function UeberMich() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-[#0a0a0a] px-5 py-28 md:px-12 md:py-36">
        <div className="mx-auto max-w-6xl grid items-center gap-16 md:grid-cols-2 md:gap-20">

          {/* Links */}
          <div className="order-2 md:order-1 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#00C9A7]" />
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#00C9A7]">
                Über mich
              </span>
            </div>

            <h1
              className="leading-[0.92] tracking-tight text-white"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 13vw, 6rem)" }}
            >
              Nicolas<br />
              <span className="text-[#00C9A7]">Peterfy.</span>
            </h1>

            <div className="flex flex-col gap-5">
              <p className="text-[1rem] font-light leading-[1.85] text-white/60">
                Peterfy Performance steht für zielgerichtetes, modernes
                Athletiktraining — individuell angepasst auf deine sportlichen
                Anforderungen.
              </p>
              <p className="text-[1rem] font-light leading-[1.85] text-white/60">
                Egal ob du deine Schnelligkeit, Kraft oder Beweglichkeit verbessern
                willst — hier bekommst du ein System, das funktioniert.
              </p>
            </div>

            <a
              href="/kontakt"
              className="group inline-flex items-center gap-3 self-start border border-[#00C9A7] px-8 py-4 rounded-xl text-[#00C9A7] text-sm font-semibold uppercase tracking-widest transition-colors duration-200 hover:bg-[#00C9A7] hover:text-black"
            >
              Training anfragen
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
            </a>
          </div>

          {/* Rechts */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-[#00C9A7]/20" />
              <Image
                src="/images/athletik-trainer-beispiel.avif"
                alt="Nicolas Peterfy — Athletiktrainer"
                width={280}
                height={420}
                style={{ height: "auto" }}
                className="relative rounded-2xl object-cover w-[260px] sm:w-[280px]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── Divider ── */}
      <div className="px-5 md:px-12">
        <div className="mx-auto max-w-6xl border-t border-white/5" />
      </div>

      {/* ── Werte ── */}
      <section className="px-5 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-6xl">

          <div className="mb-14">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#00C9A7]" />
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#00C9A7]">
                Meine Werte
              </span>
            </div>
            <h2
              className="leading-[0.92] tracking-tight text-white"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.5rem, 10vw, 5rem)" }}
            >
              Wofür ich<br />
              <span className="text-[#00C9A7]">stehe.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {werte.map((w) => (
              <div
                key={w.label}
                className="relative flex flex-col gap-5 rounded-2xl border border-white/5 bg-[#111] p-7 overflow-hidden"
              >
                <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-gradient-to-b from-[#00C9A7] to-transparent" />
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#00C9A7]/30 text-[#00C9A7]">
                  {w.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-2">{w.label}</p>
                  <p className="text-[0.88rem] font-light leading-relaxed text-white/40">
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="px-5 md:px-12">
        <div className="mx-auto max-w-6xl border-t border-white/5" />
      </div>

      {/* ── Werdegang ── */}
      <section className="px-5 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-6xl">

          <div className="mb-14">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#00C9A7]" />
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#00C9A7]">
                Werdegang
              </span>
            </div>
            <h2
              className="leading-[0.92] tracking-tight text-white"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.5rem, 10vw, 5rem)" }}
            >
              Mein{" "}
              <span className="text-[#00C9A7]">Weg.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-0">
            {stationen.map((s, i) => (
              <div key={s.jahr} className="flex gap-8 group">

                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-[#00C9A7] shrink-0 mt-1" />
                  {i < stationen.length - 1 && (
                    <div className="w-[1px] flex-1 bg-white/5 my-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-12">
                  <span className="text-[0.7rem] uppercase tracking-[0.2em] text-[#00C9A7] mb-2 block">
                    {s.jahr}
                  </span>
                  <p className="text-sm font-semibold text-white mb-2">{s.titel}</p>
                  <p className="text-[0.88rem] font-light leading-relaxed text-white/40">
                    {s.beschreibung}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="px-5 md:px-12">
        <div className="mx-auto max-w-6xl border-t border-white/5" />
      </div>

      {/* ── CTA ── */}
      <LastConversion />

    </main>
  );
}