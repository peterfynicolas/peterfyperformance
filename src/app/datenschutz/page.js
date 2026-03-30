export default function Datenschutz() {
  return (
    <main className="bg-[#0a0a0a] px-5 py-24 text-white md:px-12 md:py-36">
      <div className="mx-auto max-w-4xl">
        
        {/* Header */}
        <div className="mb-16">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-[#00C9A7]" />
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#00C9A7]">
              Rechtliches
            </span>
          </div>

          <h1
            className="leading-[0.92] tracking-tight"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3rem, 13vw, 6rem)",
            }}
          >
            Datenschutz
          </h1>
        </div>

        <div className="space-y-14 text-white/70 text-[1rem] leading-[1.85] font-light">

          {/* Allgemein */}
          <section className="space-y-5">
            <h2 className="text-white text-2xl font-semibold">
              Allgemeine Hinweise
            </h2>
            <p>
              Der Schutz deiner persönlichen Daten ist uns wichtig. Diese
              Datenschutzerklärung informiert dich darüber, welche Daten wir
              erfassen und wie wir sie verwenden.
            </p>
          </section>

          {/* Verantwortlicher */}
          <section className="space-y-5 border-t border-white/5 pt-10">
            <h2 className="text-white text-2xl font-semibold">
              Verantwortlicher
            </h2>
            <p>
              Nicolas Peterfy<br />
              Peterfy Performance<br />
              [Adresse einfügen]<br />
              E-Mail: [Deine E-Mail]
            </p>
          </section>

          {/* Hosting */}
          <section className="space-y-5 border-t border-white/5 pt-10">
            <h2 className="text-white text-2xl font-semibold">
              Hosting (Vercel)
            </h2>
            <p>
              Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, USA gehostet. Beim Aufruf der Website werden
              automatisch Daten (z. B. IP-Adresse, Browserinformationen)
              erfasst.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse an sicherem und stabilem Betrieb).
            </p>
          </section>

          {/* GitHub */}
          <section className="space-y-5 border-t border-white/5 pt-10">
            <h2 className="text-white text-2xl font-semibold">
              Deployment über GitHub
            </h2>
            <p>
              Der Code dieser Website wird über GitHub Inc., 88 Colin P Kelly
              Jr St, San Francisco, CA, USA verwaltet. Dabei kann es zur
              Verarbeitung technischer Daten kommen.
            </p>
          </section>

          {/* Kontaktformular */}
          <section className="space-y-5 border-t border-white/5 pt-10">
            <h2 className="text-white text-2xl font-semibold">
              Kontaktformular / E-Mail (Resend)
            </h2>
            <p>
              Wenn du uns über das Kontaktformular kontaktierst, werden deine
              Angaben zur Bearbeitung deiner Anfrage gespeichert.
            </p>
            <p>
              Für den Versand nutzen wir den Dienst Resend (Resend Inc., USA).
              Dabei werden die eingegebenen Daten an die Server von Resend
              übertragen.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
              DSGVO (Vertrag / Anfrage).
            </p>
          </section>

          {/* Rechte */}
          <section className="space-y-5 border-t border-white/5 pt-10">
            <h2 className="text-white text-2xl font-semibold">
              Deine Rechte
            </h2>
            <p>
              Du hast jederzeit das Recht auf Auskunft, Berichtigung,
              Löschung oder Einschränkung der Verarbeitung deiner Daten.
            </p>
          </section>

          {/* SSL */}
          <section className="space-y-5 border-t border-white/5 pt-10">
            <h2 className="text-white text-2xl font-semibold">
              SSL-Verschlüsselung
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}