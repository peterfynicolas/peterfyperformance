import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import { Bebas_Neue, DM_Sans } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm",
});

export default function RootLayout({ children }) {
  return (
    <html lang="de-DE" suppressHydrationWarning>
      <head />
      <body className={`${bebas.variable} ${dm.variable}`}>
        <Navbar />
        <div className="pt-14 md:pt-14">{children}</div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}