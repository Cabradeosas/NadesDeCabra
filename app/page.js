import { sql } from "@vercel/postgres";
import Link from "next/link";
import GrenadeGrid from "@/components/GrenadeGrid";

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
        <Link href="/admin" className="add-btn">
          + AÑADIR
        </Link>
      </header>

      <GrenadeGrid initialUtilities={utilities} />
    </main>
  );
}
