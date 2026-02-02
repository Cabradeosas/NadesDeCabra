import { sql } from "@vercel/postgres";
import { updateUtility } from "../../actions";
import { notFound } from "next/navigation";

export default async function EditPage({ params }) {
    const { id } = await params;

    let utility = null;
    try {
        const { rows } = await sql`SELECT * FROM utilities WHERE id = ${id}`;
        utility = rows[0];
    } catch (error) {
        console.error("Database Error:", error);
    }

    if (!utility) {
        notFound();
    }

    return (
        <main className="admin-container">
            <h1 style={{ color: 'var(--accent-primary)', marginBottom: '2rem' }}>EDITAR UTILIDAD</h1>

            <form action={updateUtility.bind(null, id)}>
                <div className="form-group">
                    <label>Título (ej: Mirage Window Cross Smoke)</label>
                    <input name="title" className="form-input" defaultValue={utility.title} required />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                        <label>Mapa</label>
                        <select name="map" className="form-select" defaultValue={utility.map} required>
                            <option value="Mirage">Mirage</option>
                            <option value="Inferno">Inferno</option>
                            <option value="Ancient">Ancient</option>
                            <option value="Anubis">Anubis</option>
                            <option value="Nuke">Nuke</option>
                            <option value="Vertigo">Vertigo</option>
                            <option value="Dust2">Dust2</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Bando</label>
                        <select name="side" className="form-select" defaultValue={utility.side} required>
                            <option value="T">T</option>
                            <option value="CT">CT</option>
                        </select>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                        <label>Site (ej: A, B, Mid)</label>
                        <input name="site" className="form-input" defaultValue={utility.site} required />
                    </div>
                    <div className="form-group">
                        <label>Tipo</label>
                        <select name="type" className="form-select" defaultValue={utility.type} required>
                            <option value="Smoke">Smoke</option>
                            <option value="Flash">Flash</option>
                            <option value="Molotov">Molotov</option>
                            <option value="HE">HE</option>
                        </select>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                        <label>Click Mouse</label>
                        <select name="mouse_click" className="form-select" defaultValue={utility.mouse_click}>
                            <option value="Left">Left</option>
                            <option value="Right">Right</option>
                            <option value="Both">Both</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Postura</label>
                        <select name="stance" className="form-select" defaultValue={utility.stance}>
                            <option value="Standing">Standing</option>
                            <option value="Crouched">Crouched</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Movimiento</label>
                        <select name="movement" className="form-select" defaultValue={utility.movement} required>
                            <option value="Standing">Standing</option>
                            <option value="Jumpthrow">Jumpthrow</option>
                            <option value="WJumpthrow">WJumpthrow</option>
                            <option value="Shift + w">Shift + w</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label>URL de YouTube</label>
                    <input name="video_url" className="form-input" type="url" defaultValue={utility.video_url} placeholder="https://www.youtube.com/watch?v=..." required />
                </div>

                <div className="form-group">
                    <label>Descripción / Instrucciones</label>
                    <textarea name="description" className="form-textarea" rows="4" defaultValue={utility.description}></textarea>
                </div>

                <button type="submit" className="submit-btn">ACTUALIZAR UTILIDAD</button>
            </form>
        </main>
    );
}
