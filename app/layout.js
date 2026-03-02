import { Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

export const metadata = {
  title: "Nades de Cabra | Lineups CS2 - Mirage, Inferno, Ancient & más",
  description: "La mejor biblioteca de humos, flashes y molotovs para CS2. Guías rápidas de lineups para ganar tus Premier y Faceit.",
  keywords: "CS2, Lineups, Counter-Strike 2, Humos Mirage, Granadas CS2, Nades de Cabra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={rajdhani.className}>
        {children}
      </body>
    </html>
  );
}
