const gruende = [
  {
    label: "Individuelle Betreuung",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Sportartspezifisches Training",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: "Fokus auf echte Leistungssteigerung",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    label: "Erfahrung im Leistungs- und Nachwuchssport",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
];

export default function WarumPeterfy() {
  return (
    <section className="px-5 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-[#3fbf8d]" />
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#3fbf8d]">
              Warum ich
            </span>
          </div>
          <h2
            className="leading-[0.92] tracking-tight text-white"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 13vw, 6rem)" }}
          >
            Warum Peterfy<br />
            <span className="text-[#3fbf8d]">Performance.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {gruende.map((g) => (
            <div
              key={g.label}
              className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3fbf8d]/30 text-[#3fbf8d]">
                {g.icon}
              </div>
              <p className="text-[0.95rem] font-medium leading-snug text-white">
                {g.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
