import LastConversion from "@/components/ui/LastConversion";
import Image from "next/image";

export const metadata = {
  title: "Über mich | Athletiktrainer für Performance & Entwicklung",
  description:
    "Wissenschaftlich fundiertes Athletiktraining für Leistung, Belastbarkeit und langfristige Entwicklung von Sportlern - erfahre mehr über meinen Ansatz.",

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
    url: "https://www.peterfy-performance.de/ueber-mich",
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

const stationen = [
  {
    org: "SpVgg Unterhaching",
    rolle: "Jugend-Bundesliga",
    desc: "Leistungssport auf höchstem Nachwuchsniveau — hier entstand mein Verständnis für die Anforderungen des professionellen Sports.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
      </svg>
    ),
  },
  {
    org: "FT-Club München & MFS",
    rolle: "Athletiktraining & Fußballschule",
    desc: "Trainer im Freigewicht-Gym des FT-Clubs sowie bei der Münchner Fußballschule — wo ich Kindern und Jugendlichen fußballtechnische Grundlagen und Bewegungskompetenz vermittelt habe.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    org: "FC Bayern München",
    rolle: "Athletiktrainer Jugend (laufend)",
    desc: "Athletiktrainer bei den Jugendmannschaften des FC Bayern München — strukturiertes Leistungstraining im Umfeld des deutschen Rekordmeisters.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    org: "TU München",
    rolle: "Master Sportwissenschaft (laufend)",
    desc: "Bachelor mit Note 1,0 abgeschlossen — aktuell im Masterstudium an einer der renommiertesten Universitäten Deutschlands.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

const stats = [
  { value: "TUM", label: "Masterstudium", sub: "TU München" },
  { value: "FCB", label: "Station", sub: "FC Bayern München" },
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
              <div className="h-[2px] w-8 bg-[#3fbf8d]" />
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#3fbf8d]">
                Über mich
              </span>
            </div>

            <h1
              className="leading-[0.92] tracking-tight text-white"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 13vw, 6rem)" }}
            >
              Nicolas<br />
              <span className="text-[#3fbf8d]">Peterfy.</span>
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
              className="group inline-flex items-center gap-3 self-start border border-[#3fbf8d] px-8 py-4 rounded-xl text-[#3fbf8d] text-sm font-semibold uppercase tracking-widest transition-colors duration-200 hover:bg-[#3fbf8d] hover:text-black"
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
              
              <Image
                src="/images/nicolas-peterfy-2.avif"
                alt="Nicolas Peterfy — Athletiktrainer"
                width={280}
                height={420}
                style={{ height: "auto" }}
                priority
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

      {/* ── Biografie: Vom Leistungssport zur Wissenschaft ── */}
      <section className="px-5 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2 md:gap-24 items-start">

          {/* Linke Spalte: Text & Stats */}
          <div className="flex flex-col gap-10">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-[#3fbf8d]" />
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#3fbf8d]">
                  Mein Weg
                </span>
              </div>
              <h2
                className="leading-[0.92] tracking-tight text-white mb-8"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.5rem, 10vw, 5rem)" }}
              >
                Vom Leistungssport<br />
                <span className="text-[#3fbf8d]">zur Wissenschaft.</span>
              </h2>
              <div className="flex flex-col gap-5">
                <p className="text-[1rem] font-light leading-[1.85] text-white/60">
                  Als ehemaliger Jugend-Bundesligaspieler der SpVgg Unterhaching kenne ich die Anforderungen des Leistungssports aus erster Hand. Diese Praxiserfahrung verbinde ich heute mit fundierter wissenschaftlicher Expertise.
                </p>
                <p className="text-[1rem] font-light leading-[1.85] text-white/60">
                  Mein Ziel: Dich mit einem verantwortungsbewussten und wissenschaftlich fundierten Training dabei zu unterstützen, deine maximale Leistungsfähigkeit sicher und nachhaltig zu erreichen — ob als Athlet oder als Mensch, der mehr aus sich machen will.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="flex flex-col gap-1 rounded-2xl border border-white/5 bg-[#111] p-5 text-center sm:text-left"
                >
                  <span
                    className="text-[#3fbf8d] leading-none tracking-tight"
                    style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(1.6rem, 5vw, 2.4rem)" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-[0.75rem] font-semibold text-white/80">{s.label}</span>
                  <span className="text-[0.72rem] font-light text-white/30">{s.sub}</span>
                </div>
              ))}
            </div>

            {/* Spezialisierungen */}
            <div className="rounded-2xl border border-[#3fbf8d]/15 bg-[#3fbf8d]/5 p-6 flex flex-col gap-3">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[#3fbf8d] font-semibold mb-1">
                Spezialisierungen
              </p>
              {[
                "Funktionelles Training & Athletikentwicklung",
                "Rehabilitation & Verletzungsprävention",
                "Leistungsorientierte Trainingsplanung",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#3fbf8d] flex-shrink-0" />
                  <span className="text-[0.88rem] font-light text-white/60">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rechte Spalte: Timeline der Stationen */}
          <div className="flex flex-col gap-2">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/30 font-semibold mb-6">
              Stationen & Erfahrung
            </p>
            <div className="relative flex flex-col">
              {/* Vertikale Linie */}
              <div className="absolute left-[19px] top-6 bottom-6 w-[1px] bg-gradient-to-b from-[#3fbf8d]/40 via-[#3fbf8d]/15 to-transparent" />

              {stationen.map((s, i) => (
                <div key={s.org} className="relative flex gap-5 pb-10 last:pb-0">
                  {/* Icon-Kreis */}
                  <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#3fbf8d]/30 bg-[#111] text-[#3fbf8d]">
                    {s.icon}
                  </div>
                  {/* Content */}
                  <div className="flex flex-col gap-1 pt-1.5">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="text-[0.95rem] font-semibold text-white">{s.org}</span>
                      <span className="text-[0.72rem] uppercase tracking-wider text-[#3fbf8d]/70 font-medium">
                        {s.rolle}
                      </span>
                    </div>
                    <p className="text-[0.85rem] font-light leading-relaxed text-white/40">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
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
              <div className="h-[2px] w-8 bg-[#3fbf8d]" />
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#3fbf8d]">
                Meine Werte
              </span>
            </div>
            <h2
              className="leading-[0.92] tracking-tight text-white"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.5rem, 10vw, 5rem)" }}
            >
              Wofür ich<br />
              <span className="text-[#3fbf8d]">stehe.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {werte.map((w) => (
              <div
                key={w.label}
                className="relative flex flex-col gap-5 rounded-2xl border border-white/5 bg-[#111] p-7 overflow-hidden"
              >
                <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-gradient-to-b from-[#3fbf8d] to-transparent" />
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3fbf8d]/30 text-[#3fbf8d]">
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

      {/* ── CTA ── */}
      <LastConversion />

    </main>
  );
}