'use client';

import { useSearchParams } from 'next/navigation';

export default function ContributeForm({ submitAction }) {
    const searchParams = useSearchParams();
    const success = searchParams.get('success');

    return (
        <>
            {success && (
                <div style={{
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    color: 'white',
                    padding: '1rem',
                    marginBottom: '2rem',
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                }}>
                    ✓ ¡Utilidad enviada! Será revisada por un administrador.
                </div>
            )}

            <form action={submitAction}>
                <div className="form-group">
                    <label>Título (ej: Mirage Window Cross Smoke)</label>
                    <input name="title" className="form-input" required />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                        <label>Mapa</label>
                        <select name="map" className="form-select" required>
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
                        <select name="side" className="form-select" required>
                            <option value="T">T</option>
                            <option value="CT">CT</option>
                        </select>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                        <label>Site (ej: A, B, Mid)</label>
                        <input name="site" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <label>Tipo</label>
                        <select name="type" className="form-select" required>
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
                        <select name="mouse_click" className="form-select">
                            <option value="Left">Left</option>
                            <option value="Right">Right</option>
                            <option value="Both">Both</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Postura</label>
                        <select name="stance" className="form-select">
                            <option value="Standing">Standing</option>
                            <option value="Crouched">Crouched</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Movimiento</label>
                        <select name="movement" className="form-select" required>
                            <option value="Standing">Standing</option>
                            <option value="Jumpthrow">Jumpthrow</option>
                            <option value="WJumpthrow">WJumpthrow</option>
                            <option value="Shift + w">Shift + w</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label>URL de YouTube</label>
                    <input name="video_url" className="form-input" type="url" placeholder="https://www.youtube.com/watch?v=..." required />
                </div>

                <div className="form-group">
                    <label>Descripción / Instrucciones</label>
                    <textarea name="description" className="form-textarea" rows="4"></textarea>
                </div>

                <button type="submit" className="submit-btn">ENVIAR UTILIDAD</button>
            </form>
        </>
    );
}
