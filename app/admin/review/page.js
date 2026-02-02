import { sql } from "@vercel/postgres";
import { approveCommunityUtility, deleteCommunityUtility } from "../actions";

// Force dynamic rendering - no cache
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ReviewPage() {
    let submissions = [];
    try {
        const { rows } = await sql`SELECT * FROM communityutils ORDER BY submitted_at DESC`;
        submissions = rows;
    } catch (error) {
        console.error("Database Error:", error);
    }

    return (
        <main className="admin-container">
            <h1 style={{ color: 'var(--accent-primary)', marginBottom: '2rem' }}>
                REVISAR CONTRIBUCIONES ({submissions.length})
            </h1>

            <div className="utilities-table">
                {submissions.length === 0 ? (
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '2rem' }}>
                        No hay contribuciones pendientes
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
                                <th>FECHA</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submissions.map((submission) => (
                                <tr key={submission.id}>
                                    <td>{submission.title}</td>
                                    <td>{submission.map}</td>
                                    <td>{submission.side}</td>
                                    <td>{submission.site}</td>
                                    <td><span className="tag">{submission.type}</span></td>
                                    <td style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                                        {new Date(submission.submitted_at).toLocaleDateString('es-ES')}
                                    </td>
                                    <td className="actions-cell">
                                        <form action={approveCommunityUtility.bind(null, submission.id)} style={{ display: 'inline' }}>
                                            <button type="submit" className="btn-approve">
                                                APROBAR
                                            </button>
                                        </form>
                                        <form action={deleteCommunityUtility.bind(null, submission.id)} style={{ display: 'inline' }}>
                                            <button type="submit" className="btn-delete">
                                                RECHAZAR
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
