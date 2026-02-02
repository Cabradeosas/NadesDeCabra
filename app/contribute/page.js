import { Suspense } from 'react';
import { submitCommunityUtility } from '../admin/actions';
import ContributeForm from './ContributeForm';

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
