"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    // Hier z.B. Google Analytics initialisieren
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
    // Kein Tracking wird geladen
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-teal-500 px-6 py-5 md:flex md:items-center md:justify-between gap-6">
      <p className="text-white text-sm mb-4 md:mb-0">
        Diese Website verwendet Cookies, um die Nutzererfahrung zu verbessern.
        Mit der Nutzung der Website stimmst du der Verwendung von Cookies gemäß
        unserer{" "}
        <Link href="/datenschutz" className="text-teal-400 underline hover:text-teal-300">
          Datenschutzerklärung
        </Link>{" "}
        zu.
      </p>

      <div className="flex gap-3 flex-shrink-0">
        <button
          onClick={decline}
          className="border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white transition-colors px-5 py-2 rounded-full text-sm"
        >
          Ablehnen
        </button>
        <button
          onClick={accept}
          className="bg-teal-500 hover:bg-teal-400 transition-colors text-white px-5 py-2 rounded-full text-sm"
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
}