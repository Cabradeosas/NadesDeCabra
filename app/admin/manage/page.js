import { sql } from "@vercel/postgres";
import Link from "next/link";
import { deleteUtility } from "../actions";

export default async function ManagePage() {
    let utilities = [];
    try {
        const { rows } = await sql`SELECT * FROM utilities ORDER BY map, side, site`;
        utilities = rows;
    } catch (error) {
        console.error("Database Error:", error);
    }

    return (
        <main className="admin-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ color: 'var(--accent-primary)' }}>GESTIONAR UTILIDADES</h1>
                <Link href="/admin" className="add-btn">
                    + NUEVA
                </Link>
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
