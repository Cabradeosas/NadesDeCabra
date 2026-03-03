import { Suspense } from 'react';
import { submitCommunityUtility } from '../admin/actions';
import ContributeForm from './ContributeForm';

export const metadata = {
    title: "Contribuir | Añade tus Lineups de CS2",
    description:
        "¿Tienes un lineup de humo, flash o molotov para CS2 que no está en la biblioteca? Compártelo con la comunidad de Nades de Cabra. Todos los aportes son revisados antes de publicarse.",
    openGraph: {
        title: "Contribuir | Nades de Cabra",
        description:
            "Comparte tus lineups de granadas para CS2 con la comunidad. Humos, flashes, molotovs y HEs para todos los mapas.",
        url: "https://csnades.cabradeosas.com/contribute",
    },
    alternates: {
        canonical: "https://csnades.cabradeosas.com/contribute",
    },
};

export default function ContributePage() {
    return (
        <main className="admin-container">
            <h1 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>CONTRIBUIR UTILIDAD</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Comparte tus utilidades con la comunidad. Serán revisadas antes de publicarse.
            </p>

            <Suspense fallback={<div>Cargando...</div>}>
                <ContributeForm submitAction={submitCommunityUtility} />
            </Suspense>
        </main>
    );
}
