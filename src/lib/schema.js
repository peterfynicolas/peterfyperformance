// lib/schema.js

const BASE_URL = "https://www.peterfy-performance.de";
const OWN_EMAIL = "info@peterfy-performance.de";

// ─────────────────────────────────────────────
// LocalBusiness + Person → app/layout.jsx
// ─────────────────────────────────────────────
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  name: "Peterfy Performance",
  description: "Professionelles Athletiktraining und Personal Coaching in München.",
  url: BASE_URL,    
  email: OWN_EMAIL,
  sameAs: [
    "https://www.instagram.com/PLACEHOLDER",
  ],
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nicolas Peterfy",
  jobTitle: "Athletiktrainer & Personal Coach",
  url: BASE_URL,
  email: OWN_EMAIL,
  sameAs: [
    "https://www.instagram.com/n_peterfy", // ✏️
  ],
};

// ─────────────────────────────────────────────
// Services → leistungen/page.jsx
// ─────────────────────────────────────────────
export const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "1:1 Personal Training München",
    description: "Individuelles 1:1 Athletiktraining - maßgeschneidert auf deine Stärken, Schwächen und Ziele.",
    provider: { "@type": "LocalBusiness", name: "Peterfy Performance", url: BASE_URL },
    areaServed: { "@type": "City", name: "München" },
    url: `${BASE_URL}/leistungen`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Gruppentraining Athletik München",
    description: "Athletiktraining in Gruppen von 4-12 Athleten - strukturiert, intensiv, teamorientiert.",
    provider: { "@type": "LocalBusiness", name: "Peterfy Performance", url: BASE_URL },
    areaServed: { "@type": "City", name: "München" },
    url: `${BASE_URL}/leistungen`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Athletik Camps München",
    description: "Intensive Trainingsblöcke im Kraftraum und auf dem Platz - für maximale Entwicklung in kurzer Zeit.",
    provider: { "@type": "LocalBusiness", name: "Peterfy Performance", url: BASE_URL },
    areaServed: { "@type": "City", name: "München" },
    url: `${BASE_URL}/leistungen`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Athletik für deinen Verein",
    description: "Langfristige Kooperationen mit Vereinen im Nachwuchs- und Leistungsbereich.",
    provider: { "@type": "LocalBusiness", name: "Peterfy Performance", url: BASE_URL },
    areaServed: { "@type": "City", name: "München" },
    url: `${BASE_URL}/leistungen`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fit an der frischen Luft",
    description: "Hol dir die Extraportion Motivation unter freiem Himmel. Egal, ob du an deinen Zielen arbeiten oder dich in der Gruppe auspowern willst — ich begleite dich dabei.",
    provider: { "@type": "LocalBusiness", name: "Peterfy Performance", url: BASE_URL },
    areaServed: { "@type": "City", name: "München" },
    url: `${BASE_URL}/leistungen`,
  },
];