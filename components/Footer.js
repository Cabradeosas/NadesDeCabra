import Link from "next/link";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                {/* Brand */}
                <div className="footer-brand">
                    <div className="footer-logo">NADES DE CABRA</div>
                    <div className="footer-tagline">CS2 TACTICAL LIBRARY</div>
                    <p className="footer-desc">
                        Proyecto independiente de la comunidad. Biblioteca gratuita de
                        lineups y utilidades para Counter-Strike 2.
                    </p>
                    <div className="footer-disclaimer">
                        No afiliado a Valve Corporation. CS2 y Steam son marcas registradas de Valve.
                    </div>
                </div>

                {/* Contact */}
                <div className="footer-col">
                    <div className="footer-col-title">CONTACTO</div>
                    <a
                        href="mailto:info.csnades@cabradeosas.com"
                        className="footer-link"
                    >
                        <span className="footer-link-icon">✉️</span>
                        info.csnades@cabradeosas.com
                    </a>
                    <a
                        href="https://steamcommunity.com/id/cabradeosas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <span className="footer-link-icon">🎮</span>
                        Steam: cabradeosas
                    </a>
                </div>

                {/* Legal */}
                <div className="footer-col">
                    <div className="footer-col-title">LEGAL</div>
                    <Link href="/aviso-legal" className="footer-link">
                        <span className="footer-link-icon">📋</span>
                        Aviso Legal
                    </Link>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <span>© {new Date().getFullYear()} Nades de Cabra · Proyecto Comunitario</span>
                <Link href="/aviso-legal" className="footer-bottom-link">
                    Aviso Legal
                </Link>
            </div>
        </footer>
    );
}
