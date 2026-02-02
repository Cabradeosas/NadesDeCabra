import { sql } from "@vercel/postgres";
import { approveCommunityUtility, deleteCommunityUtility } from "../actions";
import ReviewTable from "./ReviewTable";

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
                    <ReviewTable
                        submissions={submissions}
                        approveCommunityUtility={approveCommunityUtility}
                        deleteCommunityUtility={deleteCommunityUtility}
                    />
                )}
            </div>
        </main>
    );
}
