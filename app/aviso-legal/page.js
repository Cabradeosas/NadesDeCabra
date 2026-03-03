import Link from "next/link";

export const metadata = {
    title: "Aviso Legal | Nades de Cabra",
    description:
        "Aviso legal, descargo de responsabilidad, política de cookies y protección de datos de CS Nades - Nades de Cabra.",
    robots: { index: true, follow: true },
    alternates: { canonical: "https://csnades.cabradeosas.com/aviso-legal" },
};

export default function AvisoLegalPage() {
    return (
        <div className="legal-page">
            <header className="legal-header">
                <div className="legal-header-inner">
                    <Link href="/" className="legal-back-btn">
                        ← VOLVER
                    </Link>
                    <div className="legal-header-title">
                        <div className="legal-logo">Nades de Cabra</div>
                        <div className="legal-subtitle">AVISO LEGAL</div>
                    </div>
                </div>
            </header>

            <main className="legal-body">
                <div className="legal-container">

                    {/* Intro */}
                    <div className="legal-intro">
                        <div className="legal-badge">📋 AVISO LEGAL</div>
                        <h1 className="legal-main-title">Información Legal — CS Nades</h1>
                        <p className="legal-lead">
                            Este documento recoge los términos legales de uso de{" "}
                            <strong>csnades.cabradeosas.com</strong>, incluyendo el descargo de
                            responsabilidad de propiedad intelectual, la política de contenidos,
                            el uso de cookies y la protección de datos personales.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section className="legal-section">
                        <h2 className="legal-section-title">
                            <span className="legal-section-num">01</span>
                            Descargo de responsabilidad de Valve (Propiedad Intelectual)
                        </h2>
                        <div className="legal-card">
                            <p>
                                Este sitio web es un proyecto independiente de la comunidad y{" "}
                                <strong>no está afiliado, asociado, autorizado ni respaldado
                                    oficialmente por Valve Corporation</strong>. Counter-Strike, CS2,
                                el logotipo de CS2 y Steam son marcas comerciales o marcas
                                registradas de Valve Corporation.
                            </p>
                            <p>
                                Todo el contenido del juego y los materiales visuales se utilizan
                                con <strong>fines informativos y educativos</strong>.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="legal-section">
                        <h2 className="legal-section-title">
                            <span className="legal-section-num">02</span>
                            Responsabilidad de Contenidos de Usuarios
                        </h2>
                        <div className="legal-card">
                            <p>
                                CS Nades permite a los usuarios compartir utilidades y enlazar
                                vídeos de YouTube. El usuario que publica el contenido{" "}
                                <strong>garantiza que dispone de los derechos necesarios</strong>{" "}
                                para hacerlo.
                            </p>
                            <p>
                                La administración de la web no se hace responsable de las
                                opiniones o contenidos externos subidos por terceros. Si detectas
                                contenido inapropiado o que vulnera derechos de autor, por favor{" "}
                                <a
                                    href="mailto:info.csnades@cabradeosas.com"
                                    className="legal-link"
                                >
                                    contacta con nosotros
                                </a>{" "}
                                para su retirada inmediata.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="legal-section">
                        <h2 className="legal-section-title">
                            <span className="legal-section-num">03</span>
                            Política de Cookies y Terceros (YouTube)
                        </h2>
                        <div className="legal-card">
                            <p>
                                <strong>No utilizamos cookies propias de rastreo.</strong> No
                                obstante, al visualizar vídeos de YouTube insertados en nuestra
                                web, dicha plataforma puede instalar sus propias cookies técnicas
                                y de personalización.
                            </p>
                            <p>
                                Recomendamos consultar la{" "}
                                <a
                                    href="https://policies.google.com/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="legal-link"
                                >
                                    política de privacidad de Google/YouTube
                                </a>{" "}
                                para más información sobre cómo gestionan tus datos.
                            </p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="legal-section">
                        <h2 className="legal-section-title">
                            <span className="legal-section-num">04</span>
                            Protección de Datos y Privacidad (IP)
                        </h2>
                        <div className="legal-card">
                            <p>
                                <strong>
                                    No solicitamos datos personales (nombre, email o registros)
                                </strong>{" "}
                                para navegar por la web. Únicamente registramos la dirección IP
                                de forma técnica y temporal en el momento de subir una utilidad,
                                con el fin exclusivo de garantizar la seguridad del sitio y
                                prevenir ataques de spam.
                            </p>
                            <p>
                                Estos datos <strong>no son cedidos a terceros</strong> ni
                                utilizados con fines comerciales.
                            </p>
                        </div>
                    </section>

                    {/* Contact CTA */}
                    <div className="legal-contact-box">
                        <div className="legal-contact-icon">✉️</div>
                        <h3 className="legal-contact-title">¿Tienes alguna consulta legal?</h3>
                        <p className="legal-contact-desc">
                            Si tienes cualquier duda sobre este aviso legal o necesitas ponerte
                            en contacto con la administración, escríbenos directamente.
                        </p>
                        <a
                            href="mailto:info.csnades@cabradeosas.com"
                            className="legal-contact-btn"
                        >
                            info.csnades@cabradeosas.com
                        </a>
                    </div>

                </div>
            </main>
        </div>
    );
}
