import { Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

const siteUrl = "https://csnades.cabradeosas.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nades de Cabra | Lineups CS2 - Humos, Flashes y Molotovs",
    template: "%s | Nades de Cabra",
  },
  description:
    "La mejor biblioteca gratis de granadas para CS2. Lineups de humos, flashes y molotovs para Mirage, Inferno, Ancient, Anubis, Nuke, Vertigo y Dust2. Aprende nades para subir en Premier y Faceit.",
  keywords: [
    "CS2",
    "Counter-Strike 2",
    "lineups CS2",
    "humos CS2",
    "nades CS2",
    "flashes CS2",
    "molotovs CS2",
    "granadas CS2",
    "Mirage smokes",
    "Inferno smokes",
    "Ancient CS2",
    "Anubis CS2",
    "Nuke CS2",
    "Vertigo CS2",
    "Dust2 CS2",
    "Nades de Cabra",
    "trucos CS2",
    "guías CS2",
    "Premier CS2",
    "Faceit CS2",
  ],
  authors: [{ name: "Nades de Cabra", url: siteUrl }],
  creator: "Nades de Cabra",
  publisher: "Nades de Cabra",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Nades de Cabra",
    title: "Nades de Cabra | Lineups CS2 - Humos, Flashes y Molotovs",
    description:
      "La mejor biblioteca gratis de granadas para CS2. Lineups de humos, flashes y molotovs para todos los mapas competitivos.",
    images: [
      {
        url: "/logosite.ico",
        width: 512,
        height: 512,
        alt: "Nades de Cabra - Biblioteca de Lineups CS2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nades de Cabra | Lineups CS2",
    description:
      "Biblioteca gratis de granadas para CS2. Humos, flashes y molotovs para todos los mapas competitivos.",
    images: ["/logosite.ico"],
  },
  icons: {
    icon: [
      { url: "/logosite.ico", sizes: "any" },
    ],
    shortcut: "/logosite.ico",
    apple: "/logosite.ico",
  },
  alternates: {
    canonical: siteUrl,
  },
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
