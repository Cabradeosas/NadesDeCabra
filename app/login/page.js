'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/admin/actions';

export default function LoginPage() {
    const [errorMessage, dispatch, isPending] = useActionState(
        authenticate,
        undefined
    );

    return (
        <main className="admin-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)', width: '100%', maxWidth: '400px' }}>
                <h1 style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem', textAlign: 'center' }}>ACCESO ADMIN</h1>

                <form action={dispatch}>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input
                            name="password"
                            type="password"
                            className="form-input"
                            required
                        />
                    </div>

                    {errorMessage && (
                        <div style={{ color: '#ff4444', marginBottom: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>
                            {errorMessage}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={isPending}
                    >
                        {isPending ? 'ENTRANDO...' : 'ENTRAR'}
                    </button>
                </form>
            </div>
        </main>
    );
}
