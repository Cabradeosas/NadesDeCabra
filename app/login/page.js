import { signIn } from "@/auth";

export default function LoginPage() {
    return (
        <main className="admin-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)', width: '100%', maxWidth: '400px' }}>
                <h1 style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem', textAlign: 'center' }}>ACCESO ADMIN</h1>

                <form
                    action={async (formData) => {
                        "use server"
                        await signIn("credentials", formData)
                    }}
                >
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input
                            name="password"
                            type="password"
                            className="form-input"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">ENTRAR</button>
                </form>
            </div>
        </main>
    );
}
