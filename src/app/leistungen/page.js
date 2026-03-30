import CTAButton from "@/components/ui/CTAButton";
import LastConversion from "@/components/ui/LastConversion";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Leistungen | Athletiktraining für Leistung, Schnelligkeit & Prävention",
  description:
    "1:1 Training, Gruppentraining und Athletik Camps: Individuelle Programme für maximale Leistung, messbare Fortschritte und nachhaltige Entwicklung im Sport.",

  keywords:
    "Athletiktraining Leistungen, 1:1 Training Sport, Gruppentraining Athletik, Athletik Camps Deutschland, Personal Trainer Sport Angebote, Performance Training Programme, Athletiktraining Verein",

  openGraph: {
    title: "Athletiktraining Leistungen | Individuell, strukturiert, effektiv",
    description:
      "Vom 1:1 Training bis zum Camp: Finde das passende Athletiktraining für deine Ziele und erreiche messbare Fortschritte.",
    url: "https://www.deine-domain.de/leistungen",
    siteName: "Peterfy Performance",
    type: "website",
    locale: "de_DE",
    images: ["/og-image-leistungen.jpg"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Leistungen | Athletiktraining Programme",
    description:
      "Individuelle Trainingsformate für maximale sportliche Entwicklung.",
    images: ["/og-image-leistungen.jpg"],
  },

  alternates: {
    canonical: "/leistungen",
  },
};

const leistungen = [
  {
    id: "einzeltraining",
    label: "1:1 Training",
    headline: "Individuell.",
    sub: "Maximale Aufmerksamkeit. Dein Training, dein Tempo, dein Ziel.",
    beschreibung:
      "Im 1:1 Training steht du im Mittelpunkt. Jede Einheit wird individuell auf deine Stärken, Schwächen und Ziele abgestimmt. Kein Standardprogramm — sondern ein System, das für dich entwickelt wurde.",
    punkte: [
      "Individuelle Trainingsplanung",
      "Direktes Feedback in Echtzeit",
      "Messbare Fortschritte",
      "Flexibel in Zeit und Ort",
    ],
    bild: "/images/athletik-trainer-beispiel.avif",
    alt: "1:1 Athletiktraining",
  },
  {
    id: "gruppentraining",
    label: "Gruppentraining",
    headline: "Gemeinsam.",
    sub: "Die Energie der Gruppe. Der Fokus des Einzelnen.",
    beschreibung:
      "Gruppentraining verbindet die Motivation des Kollektivs mit gezieltem athletischem Input. Perfekt für Teams, Trainingsgruppen oder Athleten, die in einem sportlichen Umfeld wachsen wollen.",
    punkte: [
      "Gruppen von 4-12 Athleten",
      "Strukturierte Einheiten",
      "Teamdynamik und Wettkampfgeist",
      "Kosteneffizient",
    ],
    bild: "/images/athletik-trainer-beispiel.avif",
    alt: "Gruppentraining Athletik",
  },
  {
    id: "camps",
    label: "Camps",
    headline: "Intensiv.",
    sub: "Kraftraum oder Platz — komprimiertes Training auf höchstem Level.",
    beschreibung:
      "Die Camps von Peterfy Performance bieten intensive Trainingsblöcke für Athleten, die in kurzer Zeit maximale Entwicklung erzielen wollen. Ob im Kraftraum oder auf dem Platz — hier wird gearbeitet.",
    punkte: [
      "Kraftraum-Camps: Kraft & Explosivität",
      "Platz-Camps: Schnelligkeit & Agilität",
      "Mehrere Tage, klare Struktur",
      "Für Einzel- und Gruppenanmeldung",
    ],
    bild: "/images/athletik-trainer-beispiel.avif",
    alt: "Athletik Camp Training",
  },
];

const vereinsvorteile = [
  {
    label: "Saisonplanung",
    desc: "Athletiktraining passend zur Saisonstruktur deines Vereins.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    label: "Nachwuchsförderung",
    desc: "Gezielte Athletikentwicklung für U-Mannschaften und Talente.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Verletzungsprävention",
    desc: "Stabilitäts- und Präventionstraining reduziert Ausfallzeiten.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Langfristige Kooperation",
    desc: "Aufbau einer dauerhaften Trainingsstruktur für deinen Verein.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

function LeistungSection({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <section className="px-5 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className={`flex flex-col gap-16 md:grid md:grid-cols-2 md:items-center md:gap-20 ${!isEven ? "md:[&>*:first-child]:order-2" : ""}`}>

          {/* Text */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#00C9A7]" />
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#00C9A7]">
                {item.label}
              </span>
            </div>

            <div>
              <h2
                className="leading-[0.92] tracking-tight text-white"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 12vw, 5.5rem)" }}
              >
                {item.headline}<br />
                <span className="text-[#00C9A7]">{item.label}.</span>
              </h2>
              <p className="mt-4 text-[0.95rem] font-light leading-relaxed text-white/40">
                {item.sub}
              </p>
            </div>

            <p className="text-[1rem] font-light leading-[1.85] text-white/60">
              {item.beschreibung}
            </p>

            {/* Punkte */}
            <ul className="flex flex-col gap-3">
              {item.punkte.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <div className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#00C9A7]" />
                  <span className="text-[0.9rem] font-light text-white/60">{p}</span>
                </li>
              ))}
            </ul>
            <CTAButton label="Gruppentraining anfragen" href="/kontakt"/>
          </div>

          {/* Rundes Bild */}
          <div className={`flex ${isEven ? "justify-center md:justify-end" : "justify-center md:justify-start"}`}>
            <div className="relative">
              {/* Türkiser Akzentring */}
              <div className="absolute inset-0 rounded-full border border-[#00C9A7]/20 scale-110" />
              {/* Zweiter Ring */}
              <div className="absolute inset-0 rounded-full border border-[#00C9A7]/10 scale-125" />
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border border-white/5 md:h-[360px] md:w-[360px]">
                <Image
                  src={item.bild}
                  alt={item.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function Leistungen() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">

      {/* ── Header ── */}
      <section className="px-5 pt-28 pb-16 md:px-12 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-[#00C9A7]" />
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#00C9A7]">
              Leistungen
            </span>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h1
              className="leading-[0.92] tracking-tight text-white"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3.5rem, 14vw, 7rem)" }}
            >
              Was wir<br />
              <span className="text-[#00C9A7]">anbieten.</span>
            </h1>
            <p className="text-[0.95rem] font-light leading-relaxed text-white/40 md:max-w-xs">
              Drei Formate. Ein Ziel —<br />
              deine maximale athletische Leistung.
            </p>
          </div>
        </div>
      </section>

      {/* ── Leistungen ── */}
      {leistungen.map((item, i) => (
        <div key={item.id}>
          <div className="px-5 md:px-12">
            <div className="mx-auto max-w-6xl border-t border-white/5" />
          </div>
          <LeistungSection item={item} index={i} />
        </div>
      ))}

      {/* ── Vereinsbereich ── */}
      <div className="px-5 md:px-12">
        <div className="mx-auto max-w-6xl border-t border-white/5" />
      </div>

      <section className="px-5 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-6xl">

          <div className="mb-14">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#00C9A7]" />
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#00C9A7]">
                Für Vereine
              </span>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2
                className="leading-[0.92] tracking-tight text-white"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 12vw, 5.5rem)" }}
              >
                Athletik für<br />
                <span className="text-[#00C9A7]">deinen Verein.</span>
              </h2>
              <p className="text-[0.95rem] font-light leading-relaxed text-white/40 md:max-w-xs">
                Langfristige Kooperationen mit Vereinen im Nachwuchs- und Leistungsbereich.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-14">
            {vereinsvorteile.map((v) => (
              <div
                key={v.label}
                className="relative flex flex-col gap-5 rounded-2xl border border-white/5 bg-[#111] p-7 overflow-hidden"
              >
                <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-gradient-to-b from-[#00C9A7] to-transparent" />
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#00C9A7]/30 text-[#00C9A7]">
                  {v.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-2">{v.label}</p>
                  <p className="text-[0.85rem] font-light leading-relaxed text-white/40">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <CTAButton label="Vereinsanfrage stellen" href="/kontakt" />

        </div>
      </section>

      {/* ── CTA ── */}
      <div className="px-5 md:px-12">
        <div className="mx-auto max-w-6xl border-t border-white/5" />
      </div>

      <LastConversion />

    </main>
  );
}