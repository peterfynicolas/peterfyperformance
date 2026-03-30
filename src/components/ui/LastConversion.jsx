import CTAButton from "./CTAButton";

export default function LastConversion() {
  return (
    <section className="bg-[#0a0a0a] border-t border-white/5 px-5 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

        {/* Text */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-8 bg-[#00C9A7]" />
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#00C9A7]">
              Nächster Schritt
            </span>
          </div>

          <h2
            className="leading-[0.92] tracking-tight text-white"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.8rem, 10vw, 5.5rem)" }}
          >
            Bereit für dein<br />
            <span className="text-[#00C9A7]">nächstes Level?</span>
          </h2>

          <p className="text-[0.95rem] font-light leading-relaxed text-white/40 max-w-sm">
            Ein Gespräch reicht — kein Vertrag, keine Verpflichtung. Nur du und dein Ziel.
          </p>
        </div>

        {/* CTA */}
        <CTAButton label="Jetzt starten" href="/kontakt" />

      </div>
    </section>
  );
}