import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Links */}
        <div className="flex flex-col md:flex-row gap-4 text-sm text-center md:text-left">
          <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          <Link href="/agb" className="hover:text-white transition-colors">AGB</Link>
        </div>

        {/* Zusatzinfo */}
        <div className="text-xs text-center md:text-right text-gray-500">
          <p>&copy; {new Date().getFullYear()} PP. Alle Rechte vorbehalten.</p>
          <p>Made in Germany</p>
        </div>
      </div>
    </footer>
  );
}