'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InfoModal() {
    const [open, setOpen] = useState(false);

    // Bloquear el scroll del body cuando el modal está abierto
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [open]);

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
                    className="info-fullscreen-overlay"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="info-modal-title"
                >
                    {/* Header fijo */}
                    <div className="info-fs-header">
                        <div className="info-fs-header-inner">
                            <div>
                                <div className="info-fs-logo">NADES DE CABRA</div>
                                <div className="info-fs-subtitle">CS2 TACTICAL LIBRARY • PROYECTO COMUNITARIO</div>
                            </div>
                            <button
                                className="info-fs-close"
                                onClick={() => setOpen(false)}
                                aria-label="Cerrar"
                            >
                                ✕ CERRAR
                            </button>
                        </div>
                    </div>

                    {/* Contenido scrollable */}
                    <div className="info-fs-body">

                        {/* Sección Hero */}
                        <section className="info-fs-section">
                            <h1 id="info-modal-title" className="info-fs-main-title">
                                ¿Qué es Nades de Cabra?
                            </h1>
                            <p className="info-fs-lead">
                                <strong>Nades de Cabra</strong> es una biblioteca táctica <strong>gratuita y comunitaria</strong> de granadas para{' '}
                                <strong>Counter-Strike 2 (CS2)</strong>. Aquí encontrarás lineups detallados de{' '}
                                <strong>humos, flashes, molotovs y HEs</strong> para todos los mapas del pool competitivo,
                                creados y compartidos por jugadores como tú.
                            </p>
                        </section>

                        {/* Tipos de granadas */}
                        <section className="info-fs-section">
                            <h2 className="info-fs-section-title">📦 Tipos de utilidades</h2>
                            <div className="info-features-grid">
                                <div className="info-feature-card">
                                    <div className="info-feature-icon">💨</div>
                                    <div>
                                        <div className="info-feature-title">Humos (Smokes)</div>
                                        <div className="info-feature-desc">Bloquea líneas de visión clave para ejecutar sitios o retakear con ventaja táctica.</div>
                                    </div>
                                </div>
                                <div className="info-feature-card">
                                    <div className="info-feature-icon">⚡</div>
                                    <div>
                                        <div className="info-feature-title">Flashes</div>
                                        <div className="info-feature-desc">Ciega a los rivales para entrar con ventaja a sitios o cubrir rotaciones rápidas.</div>
                                    </div>
                                </div>
                                <div className="info-feature-card">
                                    <div className="info-feature-icon">🔥</div>
                                    <div>
                                        <div className="info-feature-title">Molotovs</div>
                                        <div className="info-feature-desc">Controla zonas, limpia rincones y daña a rivales ocultos negándoles posiciones.</div>
                                    </div>
                                </div>
                                <div className="info-feature-card">
                                    <div className="info-feature-icon">💥</div>
                                    <div>
                                        <div className="info-feature-title">HE Grenades</div>
                                        <div className="info-feature-desc">Acumula daño sobre posiciones predecibles para debilitar antes del enfrentamiento.</div>
                                    </div>
                                </div>
                                <div className="info-feature-card">
                                    <div className="info-feature-icon">🗺️</div>
                                    <div>
                                        <div className="info-feature-title">Todos los mapas</div>
                                        <div className="info-feature-desc">Mirage, Inferno, Ancient, Anubis, Nuke, Vertigo y Dust2 — el pool competitivo completo.</div>
                                    </div>
                                </div>
                                <div className="info-feature-card">
                                    <div className="info-feature-icon">🎯</div>
                                    <div>
                                        <div className="info-feature-title">T y CT Side</div>
                                        <div className="info-feature-desc">Lineups organizados por bando para que encuentres exactamente lo que necesitas.</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Proyecto comunitario — sección principal */}
                        <section className="info-fs-section info-community-section">
                            <div className="info-community-badge">🐐 PROYECTO COMUNITARIO</div>
                            <h2 className="info-fs-section-title" style={{ color: 'white' }}>
                                Un repositorio creado por la comunidad, para la comunidad
                            </h2>
                            <p className="info-community-text">
                                Nades de Cabra no es solo una web de consulta — es un <strong>repositorio vivo</strong> donde
                                cualquier jugador puede aportar sus propios lineups. Cada nade que subes pasa por revisión
                                y, si es válida, se publica para que miles de jugadores puedan aprovecharla.
                            </p>
                            <div className="info-community-pillars">
                                <div className="info-pillar">
                                    <div className="info-pillar-icon">📤</div>
                                    <div className="info-pillar-title">Sube tus lineups</div>
                                    <div className="info-pillar-desc">Comparte las nades que usas en tus partidas de Premier o Faceit a través de vídeos de YouTube.</div>
                                </div>
                                <div className="info-pillar">
                                    <div className="info-pillar-icon">🔍</div>
                                    <div className="info-pillar-title">Revisión de calidad</div>
                                    <div className="info-pillar-desc">Cada aporte es revisado antes de publicarse, garantizando que solo entran nades que realmente funcionan.</div>
                                </div>
                                <div className="info-pillar">
                                    <div className="info-pillar-icon">📚</div>
                                    <div className="info-pillar-title">Repositorio en crecimiento</div>
                                    <div className="info-pillar-desc">La biblioteca se expande constantemente. Cuantos más contribuyan, más completa se vuelve para todos.</div>
                                </div>
                                <div className="info-pillar">
                                    <div className="info-pillar-icon">🆓</div>
                                    <div className="info-pillar-title">100% gratuito</div>
                                    <div className="info-pillar-desc">Sin suscripciones, sin anuncios molestos, sin muros de pago. El conocimiento táctico es para todos.</div>
                                </div>
                            </div>
                        </section>

                        {/* Cómo usar */}
                        <section className="info-fs-section">
                            <h2 className="info-fs-section-title">⚙️ ¿Cómo usar la biblioteca?</h2>
                            <ol className="info-steps">
                                <li>Filtra por <strong>mapa</strong>, <strong>tipo de granada</strong> o <strong>bando</strong> (T/CT) usando la barra de filtros.</li>
                                <li>Haz clic en cualquier card para abrir el <strong>vídeo explicativo</strong> con el lineup completo.</li>
                                <li>Aprende el posicionamiento exacto, el tipo de lanzamiento y los movimientos necesarios.</li>
                                <li>Practica en servidor offline o workshop antes de usarlo en competitivo.</li>
                            </ol>
                        </section>

                        {/* CTA */}
                        <section className="info-fs-section info-fs-cta-section">
                            <div className="info-fs-cta-box">
                                <div className="info-fs-cta-emoji">🐐</div>
                                <h2 className="info-fs-cta-title">¿Tienes un lineup brutal?</h2>
                                <p className="info-fs-cta-desc">
                                    Contribuye con tus propias nades y ayuda a construir el mayor repositorio de
                                    lineups en español para CS2. Cada aporte hace la comunidad más fuerte.
                                </p>
                                <Link
                                    href="/contribute"
                                    className="info-fs-cta-btn"
                                    onClick={() => setOpen(false)}
                                >
                                    📤 CONTRIBUIR AHORA
                                </Link>
                            </div>
                        </section>

                    </div>
                </div>
            )}
        </>
    );
}
