export const metadata = {
  title: "Impressum | Peterfy Performance",
  description: "Impressum mit allen rechtlich erforderlichen Angaben.",
  alternates: {
    canonical: "/impressum",
  },
};

export default function Impressum() {
  return (
    <main className="bg-[#0a0a0a] px-5 py-24 text-white md:px-12 md:py-36">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-[#00C9A7]" />
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#00C9A7]">
              Rechtliches
            </span>
          </div>

          <h1
            className="leading-[0.92] tracking-tight text-white"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3rem, 13vw, 6rem)",
            }}
          >
            Impressum
          </h1>
        </div>

        <div className="space-y-14">
          <section className="space-y-5">
            <h2
              className="leading-[0.95] tracking-tight text-white"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2rem, 7vw, 3rem)",
              }}
            >
              Angaben gemäß <span className="text-[#00C9A7]">§ 5 TMG</span>
            </h2>

            <div className="space-y-5 text-[1rem] font-light leading-[1.85] text-white/60">
              <p>
                Nicolas Peterfy
                <br />
                Peterfy Performance
                <br />
                [Straße + Hausnummer]
                <br />
                [PLZ Ort]
                <br />
                Deutschland
              </p>

              <p>
                <span className="text-white">Kontakt</span>
                <br />
                Telefon: [Deine Telefonnummer]
                <br />
                E-Mail: [Deine E-Mail-Adresse]
              </p>

              <p>
                <span className="text-white">Umsatzsteuer</span>
                <br />
                Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
              </p>

              <p>
                <span className="text-white">Berufsbezeichnung</span>
                <br />
                Athletiktrainer / Personal Trainer
                <br />
                Verliehen in: Deutschland
              </p>

              <p>
                <span className="text-white">
                  Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                </span>
                <br />
                Nicolas Peterfy
                <br />
                [Adresse wie oben]
              </p>
            </div>
          </section>

          <section className="space-y-5 border-t border-white/5 pt-10">
            <h2
              className="leading-[0.95] tracking-tight text-white"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2rem, 7vw, 3rem)",
              }}
            >
              Haftung für <span className="text-[#00C9A7]">Inhalte</span>
            </h2>

            <p className="max-w-3xl text-[1rem] font-light leading-[1.85] text-white/60">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen.
            </p>
          </section>

          <section className="space-y-5 border-t border-white/5 pt-10">
            <h2
              className="leading-[0.95] tracking-tight text-white"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2rem, 7vw, 3rem)",
              }}
            >
              Haftung für <span className="text-[#00C9A7]">Links</span>
            </h2>

            <p className="max-w-3xl text-[1rem] font-light leading-[1.85] text-white/60">
              Unsere Website enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </section>

          <section className="space-y-5 border-t border-white/5 pt-10">
            <h2
              className="leading-[0.95] tracking-tight text-white"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2rem, 7vw, 3rem)",
              }}
            >
              Urheber<span className="text-[#00C9A7]">recht</span>
            </h2>

            <p className="max-w-3xl text-[1rem] font-light leading-[1.85] text-white/60">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung und Verwertung außerhalb der Grenzen
              des Urheberrechtes bedürfen der schriftlichen Zustimmung.
            </p>
          </section>

          <section className="space-y-5 border-t border-white/5 pt-10">
            <h2
              className="leading-[0.95] tracking-tight text-white"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2rem, 7vw, 3rem)",
              }}
            >
              Streit<span className="text-[#00C9A7]">schlichtung</span>
            </h2>

            <div className="space-y-5 max-w-3xl text-[1rem] font-light leading-[1.85] text-white/60">
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4 transition hover:text-[#00C9A7]"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>

              <p>
                Wir sind nicht verpflichtet und nicht bereit, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}