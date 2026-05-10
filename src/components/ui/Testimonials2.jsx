"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Nicolas hat mich nach meinem Kreuzbandriss sehr gut beim Wiederaufbau unterstützt. Mit viel Fachwissen, Geduld und gezieltem Training hat er mich sicher zurück zur alten Form gebracht. Danke dir!",
    name: "Simon W.",
    sport: "Fußball · Landesliga",
    initial: "S",
    duration: "6 Monate",
  },
  {
    id: 2,
    quote:
      "Das Athletiktraining hat mein Spiel komplett verändert. Schneller, explosiver, ausdauernder — das Camp war ein echter Gamechanger für mich.",
    name: "Julia S.",
    sport: "Handball · Landesliga",
    initial: "J",
    duration: "8 Monate",
  },
  {
    id: 3,
    quote:
      "Die individuelle Betreuung im 1:1 Training ist auf einem anderen Level. Peterfy versteht es, Schwächen gezielt in Stärken umzuwandeln.",
    name: "Tobias K.",
    sport: "Basketball · Regionalliga",
    initial: "T",
    duration: "1 Jahr",
  },
  {
    id: 4,
    quote:
      "Professionell, motivierend und effektiv. Ich empfehle Peterfy Performance jedem Athleten, der den nächsten Schritt gehen will.",
    name: "Lena M.",
    sport: "Leichtathletik · Landesebene",
    initial: "L",
    duration: "4 Monate",
  },
  {
    id: 5,
    quote:
      "Unser Verein arbeitet seit einem Jahr zusammen — die Verletzungsrate ist gesunken und die Leistungskurve zeigt klar nach oben.",
    name: "SC Viktoria",
    sport: "Vereinskooperation · U19",
    initial: "V",
    duration: "12 Monate",
  },
  {
    id: 6,
    quote:
      "Ich habe viele Trainer ausprobiert — keiner hat so präzise auf meine Schwachstellen gezeigt und mir konkrete Werkzeuge gegeben.",
    name: "David P.",
    sport: "Tennis · Bezirksliga",
    initial: "D",
    duration: "5 Monate",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 von 5 Sternen">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3 h-3 fill-[#3fbf8d]" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <article className="relative flex flex-col gap-5 rounded-2xl border border-white/5 bg-[#111] p-7 overflow-hidden h-full">
      <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-gradient-to-b from-[#3fbf8d] to-transparent" />

      <Stars />

      <p className="text-[0.95rem] leading-[1.75] text-white/70 flex-1">
        „{item.quote}"
      </p>

      <div className="flex items-center gap-3">
        <div
          aria-label={item.name}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3fbf8d] to-[#007a65] text-lg font-bold text-black"
        >
          {item.initial}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white">{item.name}</p>
          <p className="text-xs tracking-wide text-[#3fbf8d]">{item.sport}</p>
        </div>
        <span className="text-[0.65rem] uppercase tracking-widest text-white/20">
          {item.duration}
        </span>
      </div>
    </article>
  );
}

function MobileSlideshow() {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  const onTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    setTouchStart(null);
  };

  return (
    <div className="md:hidden">
      <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} className="mb-6">
        <TestimonialCard item={testimonials[active]} />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* Dots */}
        <div className="flex gap-2 items-center">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                width: i === active ? "20px" : "6px",
                height: "6px",
                borderRadius: "9999px",
                background: i === active ? "#3fbf8d" : "rgba(255,255,255,0.15)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Zurück"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#111] text-white/50 transition-colors hover:border-[#3fbf8d] hover:text-[#3fbf8d]"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Weiter"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#111] text-white/50 transition-colors hover:border-[#3fbf8d] hover:text-[#3fbf8d]"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#0a0a0a] px-5 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-16">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-[#3fbf8d]" />
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#3fbf8d]">
              Testimonials
            </span>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2
              className="leading-[0.92] tracking-tight text-white"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 13vw, 6rem)" }}
            >
              Was Athleten<br />
              <span className="text-[#3fbf8d]">über uns sagen.</span>
            </h2>
            <p className="text-[0.95rem] font-light leading-relaxed text-white/40 md:max-w-xs">
              Keine Hochglanz-Versprechen —<br />
              nur echte Stimmen von echten Athleten.
            </p>
          </div>
        </div>

        {/* Mobile Slideshow */}
        <MobileSlideshow />

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        {/* Pull quote */}
        <div className="mt-20 border-t border-white/5 pt-16">
          <p
            className="leading-tight text-white max-w-3xl"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
          >
            „Built by science. Proven in performance.“ —{" "}
            <span className="text-[#3fbf8d]">sie kommen, um besser zu werden.</span>"
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3fbf8d] to-[#007a65] text-xl font-bold text-black">
              P
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Peterfy</p>
              <p className="text-xs tracking-wide text-[#3fbf8d]">
                Head Coach · Peterfy Performance
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}