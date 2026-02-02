import { sql } from "@vercel/postgres";
import { notFound } from "next/navigation";
import EditCommunityForm from "./EditCommunityForm";

export default async function EditCommunityPage({ params }) {
    const { id } = await params;

    let utility = null;
    try {
        const { rows } = await sql`SELECT * FROM communityutils WHERE id = ${id}`;
        utility = rows[0];
    } catch (error) {
        console.error("Database Error:", error);
    }

    if (!utility) {
        notFound();
    }

    return (
        <main className="admin-container">
            <h1 style={{ color: 'var(--accent-primary)', marginBottom: '2rem' }}>EDITAR CONTRIBUCIÓN</h1>
            <EditCommunityForm utility={utility} />
        </main>
    );
}
