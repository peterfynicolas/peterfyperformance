import Image from "next/image";
import InstagramLogo from "@/components/ui/InstagramLogo";
import LastConversion from "@/components/ui/LastConversion";
import AutomaticGalerie from "@/components/ui/AutomaticGalerie";
import Testimonials from "@/components/ui/Testimonials2";
import Divider from "@/components/ui/Divider";
import WarumPeterfy from "@/components/ui/WarumPeterfy";
import CTAButton from "@/components/ui/CTAButton";

export const metadata = {
  title: "Athletiktrainer für Performance & Prävention | Individuelles Training",
  description:
    "Individuelles Athletiktraining für mehr Leistung, Schnelligkeit und Verletzungsprävention. Für Sportler & Teams - strukturiert, effektiv und zielorientiert.",

  keywords:
    "Athletiktrainer, Athletiktraining Deutschland, Personal Trainer Sport, Schnelligkeitstraining, Krafttraining Sportler, Verletzungsprävention Training, Return to Sport Coaching, Performance Training",

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://www.deine-domain.de"),

  openGraph: {
    title: "Athletiktraining für maximale Leistung & weniger Verletzungen",
    description:
      "Strukturiertes Athletiktraining für Sportler und Teams - mehr Leistung, bessere Belastbarkeit und nachhaltige Entwicklung.",
    url: "https://www.deine-domain.de/",
    siteName: "Dein Name Athletiktraining",
    type: "website",
    locale: "de_DE",
    images: ["/og-image.jpg"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Athletiktrainer für Performance & Prävention",
    description:
      "Mehr Leistung, weniger Verletzungen - mit strukturiertem Athletiktraining.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "/",
  },
};


export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
        <Image
          src="/images/hero_image_version_0001.avif"
          alt="Athlet beim Sprint"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <h1
              className="leading-[0.92] tracking-tight text-white"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3.5rem, 14vw, 8rem)" }}
            >
              Maximiere deine<br />
              <span className="text-[#3fbf8d]">Performance.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-zinc-200 sm:text-lg lg:text-2xl">
              Individuelles Athletiktraining für ambitionierte Sportler, die
              mehr erreichen wollen.
            </p>

            <div className="mt-8 sm:mt-10">
              <CTAButton
                label="Jetzt starten"
                href="/kontakt"
                variant="filled"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0a0a0a] px-5 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-6xl grid items-center gap-16 md:grid-cols-2 md:gap-20">
  
          {/* Linke Seite */}
          <div className="order-2 md:order-1 flex flex-col gap-8">
  
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#00C9A7]" />
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#00C9A7]">
                Über mich
              </span>
            </div>

            <h2
              className="leading-[0.92] tracking-tight text-white"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 13vw, 6rem)" }}
            >
              NICOLAS PETERFY<br />
              
            </h2>
  
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
  
            <CTAButton label="MEHR ÜBER MICH" href="/ueber-mich"/>
          </div>
  
          {/* Rechte Seite */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Türkiser Akzent hinter dem Bild */}
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-[#00C9A7]/20" />
              <Image
                src="/images/athletik-trainer-beispiel.avif"
                alt="Athlet beim Sprint"
                sizes="(max-width: 640px) 260px, 280px"
                width={280}
                height={420}
                className="rounded-2xl object-cover w-[260px] sm:w-[280px] h-auto"
              />
            </div>
          </div>
  
        </div>
      </section>
      <WarumPeterfy />
      <section className="bg-[#0a0a0a] border-t border-white/5 px-5 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-6xl">
  
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-8 bg-[#00C9A7]" />
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#00C9A7]">
                Training
              </span>
            </div>
            <h2
              className="leading-[0.92] tracking-tight text-white"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 13vw, 6rem)" }}
            >
              Training<br />
              <span className="text-[#00C9A7]">Überblick.</span>
            </h2>
          </div>
  
          {/* Content */}
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
  
            {/* Text + CTA */}
            <div className="flex flex-col gap-8 flex-1">
              <p className="text-[1rem] font-light leading-[1.85] text-white/60 max-w-lg">
                Bei Peterfy Performance bekommst du kein Standardprogramm, sondern
                Training, das auf dich zugeschnitten ist. Mit klarer Struktur,
                messbaren Fortschritten und maximalem Fokus auf deine Ziele.
              </p>
  
              <CTAButton label="Mehr über Leistungen" href="/leistungen" />
            </div>
  
            {/* Bild / Video Placeholder */}
            <div className="flex-1 w-full aspect-video rounded-2xl bg-[#111] border border-white/5 overflow-hidden relative">
            <Image
                src="/images/besp-leistungen.avif"
                alt="Athlet beim Sprint"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <Divider/>
      <Testimonials />
      <Divider/>
      <AutomaticGalerie />
      <LastConversion />
    </>
  );
}
