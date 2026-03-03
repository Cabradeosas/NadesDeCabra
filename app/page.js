import { sql } from "@vercel/postgres";
import Link from "next/link";
import GrenadeGrid from "@/components/GrenadeGrid";
import InfoModal from "@/components/InfoModal";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Nades de Cabra | Biblioteca de Lineups CS2",
  description:
    "Explora cientos de lineups de granadas para CS2 completamente gratis. Humos, flashes y molotovs para Mirage, Inferno, Ancient, Anubis, Nuke, Vertigo y Dust2. Mejora tu juego en Premier y Faceit.",
  openGraph: {
    title: "Nades de Cabra | Biblioteca de Lineups CS2",
    description:
      "Explora cientos de lineups de granadas para CS2 completamente gratis. Humos, flashes y molotovs para todos los mapas competitivos.",
    url: "https://csnades.cabradeosas.com",
  },
  alternates: {
    canonical: "https://csnades.cabradeosas.com",
  },
};

export default async function HomePage() {
  let utilities = [];
  try {
    const { rows } = await sql`SELECT * FROM utilities ORDER BY id DESC`;
    utilities = rows;
  } catch (error) {
    console.error("Database Error:", error);
  }

  return (
    <main className="container">
      <header className="header">
        <div>
          <div className="logo">Nades de Cabra</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>CS2 TACTICAL LIBRARY</div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <InfoModal />
          <Link href="/contribute" className="btn-contribute">
            CONTRIBUIR
          </Link>
          <Link href="/admin" className="add-btn">
            + AÑADIR
          </Link>
        </div>
      </header>

      <GrenadeGrid initialUtilities={utilities} />
      <Footer />
    </main>
  );
}
