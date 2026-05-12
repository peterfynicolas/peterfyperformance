import LastConversion from "@/components/ui/LastConversion";
import Testimonials from "@/components/ui/Testimonials2";

export const metadata = {
  title: "Erfahrungen & Ergebnisse | Athletiktraining Wirkung & Feedback",
  description:
    "Erfahrungen aus dem Athletiktraining: Feedback von Sportlern und Teams zu Leistung, Schnelligkeit und Verletzungsprävention.",

  keywords:
    "Athletiktraining Erfahrungen, Personal Trainer Bewertungen Sport, Athletiktrainer Feedback, Performance Training Ergebnisse, Sportler Testimonials Training, Coaching Erfahrungen Sport",

  openGraph: {
    title: "Erfahrungen im Athletiktraining | Ergebnisse & Feedback",
    description:
      "Echte Ergebnisse aus dem Athletiktraining - Feedback von Sportlern und Einblicke in die Entwicklung.",
    url: "https://www.peterfy-performance.de/erfahrungen",
    siteName: "Peterfy Performance",
    type: "website",
    locale: "de_DE",
    images: ["/og-image-erfahrungen.jpg"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Erfahrungen | Athletiktraining Ergebnisse",
    description:
      "Sieh, welche Ergebnisse Athleten mit strukturiertem Training erreichen.",
    images: ["/og-image-erfahrungen.jpg"],
  },

  alternates: {
    canonical: "/erfahrungen",
  },
};

export default function Erfahrungen() {
  return (
    <>
      <Testimonials />
      <LastConversion />
    </>
  );
}