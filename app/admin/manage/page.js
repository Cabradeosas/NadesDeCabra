import { sql } from "@vercel/postgres";
import Link from "next/link";
import { deleteUtility } from "../actions";

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ManagePage() {
    let utilities = [];
    let pendingCount = 0;

    try {
        const { rows } = await sql`SELECT * FROM utilities ORDER BY map, side, site`;
        utilities = rows;
    } catch (error) {
        console.error("Database Error:", error);
    }

    try {
        const { rows } = await sql`SELECT COUNT(*) as count FROM communityutils`;
        pendingCount = parseInt(rows[0].count);
    } catch (error) {
        console.error("Community Utils Count Error:", error);
    }

    return (
        <main className="admin-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h1 style={{ color: 'var(--accent-primary)' }}>GESTIONAR UTILIDADES</h1>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Link href="/admin/review" className="btn-edit">
                        REVISAR ({pendingCount})
                    </Link>
                    <Link href="/admin" className="add-btn">
                        + NUEVA
                    </Link>
                </div>
            </div>

            <div className="utilities-table">
                {utilities.length === 0 ? (
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '2rem' }}>
                        No hay utilidades registradas
                    </p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>TÍTULO</th>
                                <th>MAPA</th>
                                <th>BANDO</th>
                                <th>SITE</th>
                                <th>TIPO</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {utilities.map((utility) => (
                                <tr key={utility.id}>
                                    <td>{utility.title}</td>
                                    <td>{utility.map}</td>
                                    <td>{utility.side}</td>
                                    <td>{utility.site}</td>
                                    <td><span className="tag">{utility.type}</span></td>
                                    <td className="actions-cell">
                                        <Link href={`/admin/edit/${utility.id}`} className="btn-edit">
                                            EDITAR
                                        </Link>
                                        <form action={deleteUtility.bind(null, utility.id)} style={{ display: 'inline' }}>
                                            <button type="submit" className="btn-delete">
                                                ELIMINAR
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </main>
    );
}
