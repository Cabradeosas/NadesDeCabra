'use client';

import { useState } from 'react';

export default function InfoModal() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                id="info-btn"
                className="btn-info"
                onClick={() => setOpen(true)}
                aria-label="¿Qué es Nades de Cabra?"
                title="¿Qué es esto?"
            >
                ¿QUÉ ES ESTO?
            </button>

            {open && (
                <div
                    className="modal-overlay"
                    onClick={(e) => e.target === e.currentTarget && setOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="info-modal-title"
                >
                    <div className="info-modal-content">
                        <button
                            className="close-btn"
                            onClick={() => setOpen(false)}
                            aria-label="Cerrar"
                        >
                            ✕ CERRAR
                        </button>

                        <div className="info-modal-header">
                            <div className="info-modal-logo">NADES DE CABRA</div>
                            <div className="info-modal-subtitle">CS2 TACTICAL LIBRARY</div>
                        </div>

                        <div className="info-modal-body">
                            <h1 id="info-modal-title" className="info-section-title">
                                ¿Qué es Nades de Cabra?
                            </h1>
                            <p className="info-text">
                                <strong>Nades de Cabra</strong> es una biblioteca táctica gratuita de granadas para
                                <strong> Counter-Strike 2 (CS2)</strong>. Aquí encontrarás lineups detallados de{' '}
                                <strong>humos, flashes, molotovs y HEs</strong> para todos los mapas del pool competitivo.
                            </p>

                            <div className="info-features">
                                <div className="info-feature-card">
                                    <div className="info-feature-icon">💨</div>
                                    <div>
                                        <div className="info-feature-title">Humos (Smokes)</div>
                                        <div className="info-feature-desc">Bloquea líneas de visión clave para ejecutar sitios o retake con ventaja.</div>
                                    </div>
                                </div>
                                <div className="info-feature-card">
                                    <div className="info-feature-icon">⚡</div>
                                    <div>
                                        <div className="info-feature-title">Flashes</div>
                                        <div className="info-feature-desc">Cega a los rivales para entrar con ventaja a sitios o cubrir rotaciones.</div>
                                    </div>
                                </div>
                                <div className="info-feature-card">
                                    <div className="info-feature-icon">🔥</div>
                                    <div>
                                        <div className="info-feature-title">Molotovs & HEs</div>
                                        <div className="info-feature-desc">Controla zonas, limpia rincones y acumula daño sobre los enemigos ocultos.</div>
                                    </div>
                                </div>
                                <div className="info-feature-card">
                                    <div className="info-feature-icon">🗺️</div>
                                    <div>
                                        <div className="info-feature-title">Todos los mapas</div>
                                        <div className="info-feature-desc">Mirage, Inferno, Ancient, Anubis, Nuke, Vertigo y Dust2 cubiertos.</div>
                                    </div>
                                </div>
                            </div>

                            <h2 className="info-section-title" style={{ marginTop: '1.5rem' }}>
                                ¿Cómo funciona?
                            </h2>
                            <ol className="info-steps">
                                <li>Filtra por <strong>mapa</strong>, <strong>tipo de granada</strong> o <strong>bando</strong> (T/CT).</li>
                                <li>Haz clic en cualquier lineup para ver el <strong>vídeo explicativo</strong>.</li>
                                <li>Aprende el posicionamiento, el tipo de tiro y los movimientos necesarios.</li>
                                <li>¿Tienes un lineup propio? <strong>¡Contribuye!</strong> Será revisado y añadido a la biblioteca.</li>
                            </ol>

                            <p className="info-cta-text">
                                La comunidad crece contigo. Cada lineup compartido es un jugador más que sube de rango. 🐐
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
