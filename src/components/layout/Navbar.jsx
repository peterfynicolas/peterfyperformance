"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import InstagramLogo from '../ui/InstagramLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/ueber-mich", label: "Über mich" },
    { href: "/leistungen", label: "Leistungen" },
    { href: "/erfahrungen", label: "Erfahrungen" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const linkClass = (href) =>
    `text-sm uppercase tracking-[0.15em] transition-colors ${
      pathname === href ? "text-[#3fbf8d]" : "text-white/70 hover:text-white"
    }`;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-white/5 px-6 py-4">
        <div className="container relative mx-auto flex items-center justify-between md:justify-center">

          {/* Logo */}
          <Link href="/" className="md:absolute md:left-0">
            <span
              className="text-xl tracking-tight text-white hover:text-[#3fbf8d] transition-colors"
              style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
            >
              Peterfy{" "}
              <span className="text-[#3fbf8d]">Performance</span>
            </span>
          </Link>

          {/* Burger Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white/70 hover:text-white transition-colors focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass(link.href)}
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://instagram.com/n_peterfy"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-white/50 transition-colors hover:text-[#3fbf8d] md:block"
              aria-label="Instagram"
            >
              <InstagramLogo size={22} />
            </a>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#0a0a0a] border-l border-white/5 z-50 md:hidden
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end px-6 pt-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/50 hover:text-white transition-colors"
            aria-label="Menü schließen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col items-center justify-center gap-10 flex-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition-colors ${
                  pathname === link.href ? "text-[#3fbf8d]" : "text-white/70 hover:text-white"
                }`}
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(2rem, 8vw, 2.5rem)",
                  letterSpacing: "0.08em",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Instagram */}
        <div className="flex justify-center pb-10">
          <a
            href="https://instagram.com/n_peterfy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-[#3fbf8d] transition-colors"
            aria-label="Instagram"
          >
            <InstagramLogo size={28} />
          </a>
        </div>
      </div>
    </>
  );
}