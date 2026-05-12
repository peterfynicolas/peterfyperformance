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
    url: "https://www.peterfy-performance/leistungen",
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
    bild: "/images/kraft-einzeltraining.avif",
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
    bild: "/images/kraft-camp-gruppe.avif",
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
    bild: "/images/training-athletik-intensiv-camps-muenchen.avif",
    alt: "Athletik Camp Training",
  },
];

const vereinsvorteile = [
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

const parkAngebote = [
  {
    label: "1:1 Personal Training",
    desc: "Individuell auf dich zugeschnitten — dein Ziel, dein Tempo, volle Aufmerksamkeit.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Gruppentraining",
    desc: "Gemeinsam auspowern mit Gleichgesinnten — Motivation inklusive.",
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
    label: "Hundefreundlich",
    desc: "Dein vierbeiniger Partner ist herzlich willkommen und darf gerne dabei sein.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
        <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.96-1.45-2.344-2.5" />
        <path d="M8 14v.5" /><path d="M16 14v.5" />
        <path d="M11.25 16.25h1.5L12 17l-.75-.75z" />
        <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
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
              <div className="h-[2px] w-8 bg-[#3fbf8d]" />
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#3fbf8d]">
                {item.label}
              </span>
            </div>

            <div>
              <h2
                className="leading-[0.92] tracking-tight text-white"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 12vw, 5.5rem)" }}
              >
                {item.headline}<br />
                <span className="text-[#3fbf8d]">{item.label}.</span>
              </h2>
              <p className="mt-4 text-[0.95rem] font-light leading-relaxed text-white/40">
                {item.sub}
              </p>
            </div>

            <p className="text-[1rem] font-light leading-[1.85] text-white/60">
              {item.beschreibung}
            </p>

            <ul className="flex flex-col gap-3">
              {item.punkte.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <div className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#3fbf8d]" />
                  <span className="text-[0.9rem] font-light text-white/60">{p}</span>
                </li>
              ))}
            </ul>
            {/* Desktop: Button im Text-Block */}
            <div className="hidden md:block">
              <CTAButton label="Training anfragen" href="/kontakt" />
            </div>
          </div>

          {/* Rundes Bild + Mobile Button darunter */}
          <div className={`flex flex-col items-center gap-14 ${isEven ? "md:items-end" : "md:items-start"}`}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full border border-[#3fbf8d]/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-[#3fbf8d]/10 scale-125" />
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border border-white/5 md:h-[360px] md:w-[360px]">
                <Image
                  src={item.bild}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 300px, 360px"
                  priority={index === 0}
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
            </div>
            {/* Mobile: Button unter dem Bild */}
            <div className="md:hidden w-full flex justify-center">
              <CTAButton label="Training anfragen" href="/kontakt" />
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
            <div className="h-[2px] w-8 bg-[#3fbf8d]" />
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#3fbf8d]">
              Individuelles Training für jedes Ziel
            </span>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h1
              className="leading-[0.92] tracking-tight text-white"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3.5rem, 14vw, 7rem)" }}
            >
              Trainings /<br />
              <span className="text-[#3fbf8d]">Leistungen.</span>
            </h1>
            <p className="text-[0.95rem] font-light leading-relaxed text-white/40 md:max-w-xs">
              Unsere Formate. Ein Ziel —<br />
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
        <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2 md:gap-24 items-center">

          {/* Text + Cards */}
          <div className="flex flex-col gap-10">
            <div className="mb-4">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-[#3fbf8d]" />
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#3fbf8d]">
                  Für Vereine
                </span>
              </div>
              <h2
                className="leading-[0.92] tracking-tight text-white mb-4"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 12vw, 5.5rem)" }}
              >
                Athletik für<br />
                <span className="text-[#3fbf8d]">deinen Verein.</span>
              </h2>
              <p className="text-[0.95rem] font-light leading-relaxed text-white/40">
                Langfristige Kooperationen mit Vereinen im Nachwuchs- und Leistungsbereich.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-6">
              {vereinsvorteile.map((v) => (
                <div
                  key={v.label}
                  className="relative flex flex-col gap-5 rounded-2xl border border-white/5 bg-[#111] p-7 overflow-hidden"
                >
                  <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-gradient-to-b from-[#3fbf8d] to-transparent" />
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3fbf8d]/30 text-[#3fbf8d]">
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

          {/* Rundes Bild */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border border-[#3fbf8d]/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-[#3fbf8d]/10 scale-125" />
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border border-white/5 md:h-[360px] md:w-[360px]">
                <Image
                  src="/images/training-athletik-fuer-vereine.avif"
                  alt="Athletiktraining für Vereine"
                  fill
                  sizes="(max-width: 768px) 300px, 360px"
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Park Training ── */}
      <div className="px-5 md:px-12">
        <div className="mx-auto max-w-6xl border-t border-white/5" />
      </div>

      <section className="px-5 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2 md:gap-24 items-center">

          {/* Text */}
          <div className="flex flex-col gap-10">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-[#3fbf8d]" />
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#3fbf8d]">
                  Training im Freien
                </span>
              </div>
              <h2
                className="leading-[0.92] tracking-tight text-white mb-6"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.5rem, 10vw, 5rem)" }}
              >
                Fit an der<br />
                <span className="text-[#3fbf8d]">frischen Luft.</span>
              </h2>
              <p className="text-[1rem] font-light leading-[1.85] text-white/60">
                Hol dir die Extraportion Motivation unter freiem Himmel. Egal, ob du an deinen Zielen arbeiten oder dich in der Gruppe auspowern willst — ich begleite dich dabei.
              </p>
            </div>

            {/* Angebote */}
            <div className="flex flex-col gap-4">
              {parkAngebote.map((a) => (
                <div
                  key={a.label}
                  className="relative flex items-start gap-5 rounded-2xl border border-white/5 bg-[#111] p-6 overflow-hidden"
                >
                  <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-gradient-to-b from-[#3fbf8d] to-transparent" />
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#3fbf8d]/30 text-[#3fbf8d]">
                    {a.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{a.label}</p>
                    <p className="text-[0.85rem] font-light leading-relaxed text-white/40">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <CTAButton label="Park Training anfragen" href="/kontakt" />
          </div>

          {/* Visuelles Element */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Dekorativer Hintergrundkreis */}
              <div className="absolute inset-0 rounded-full bg-[#3fbf8d]/5 scale-110" />
              <div className="absolute inset-0 rounded-full border border-[#3fbf8d]/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-[#3fbf8d]/10 scale-125" />
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border border-white/5 md:h-[360px] md:w-[360px]">
                <Image
                  src="/images/training-fit-an-frischen-luft.avif"
                  alt="Training im Park — Fit an der frischen Luft"
                  fill
                  sizes="(max-width: 768px) 300px, 360px"
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl border border-[#3fbf8d]/20 bg-[#111] px-4 py-3">
                <svg className="w-4 h-4 text-[#3fbf8d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="text-[0.75rem] font-semibold text-white/70">Hundefreundlich</span>
              </div>
            </div>
          </div>

        </div>
      </section>
      <div className="px-5 md:px-12">
        <div className="mx-auto max-w-6xl border-t border-white/5" />
      </div>

      <section className="px-5 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-6xl">

          <div className="mb-16">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#3fbf8d]" />
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#3fbf8d]">
                Unsere Standorte
              </span>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2
                className="leading-[0.92] tracking-tight text-white"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 12vw, 5.5rem)" }}
              >
                Wo wir<br />
                <span className="text-[#3fbf8d]">trainieren.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Standort 1",
                ort: "PRIME TIME fitness",
                beschreibung: "DUMMY-TEXT-LALA",
                href: "https://maps.app.goo.gl/tiBGCfeQ4TN3j5kX6",
              },
              {
                label: "Standort 2",
                ort: "Physio am Viktualienmarkt",
                beschreibung: "DUMMY-TEXT-LALA",
                href: "https://maps.app.goo.gl/udCDp783Ex7Vofgp9",
              },
              {
                label: "Standort 3",
                ort: "CrossFit Munich",
                beschreibung: "DUMMY-TEXT-LALA",
                href: "https://maps.google.com",
              },
              {
                label: "Standort 4",
                ort: "Online",
                beschreibung: "DUMMY-TEXT-LALA",
                href: "https://maps.google.com",
              },
            ].map((s, i) => (
              <div key={s.label} className="flex flex-col items-center text-center gap-6">

                {/* Kreis-Bild 
                <div className="relative">
                  <div className="absolute inset-0 rounded-full border border-[#3fbf8d]/20 scale-110" />
                  <div className="absolute inset-0 rounded-full border border-[#3fbf8d]/10 scale-125" />
                  <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border border-white/5 bg-[#111]">
                    <Image
                      src={`/images/standort-dummy-${i + 1}.avif`}
                      alt={s.label}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-full"
                    />
                  </div>
                </div>
                */}
                {/* Text */}
                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#3fbf8d]">
                    {s.label}
                  </span>
                  <h3
                    className="text-white leading-tight"
                    style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(1.6rem, 5vw, 2rem)" }}
                  >
                    {s.ort}
                  </h3>
                  {/*
                  <p className="text-[0.85rem] font-light leading-relaxed text-white/40">
                    {s.beschreibung}
                  </p>
                  */}
                </div>

                {/* Link */}
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.8rem] font-light text-[#3fbf8d] hover:text-white transition-colors duration-200"
                >
                  <span>Standort ansehen</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>

              </div>
            ))}
          </div>

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