'use client';

function getYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

export default function GrenadeModal({ utility, onClose }) {
    if (!utility) return null;

    const videoId = getYouTubeId(utility.video_url);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>CERRAR</button>

                <div className="video-container">
                    {videoId ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title={utility.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <div style={{ padding: '2rem', textAlign: 'center' }}>
                            URL de video no válida
                        </div>
                    )}
                </div>

                <div className="modal-details">
                    <h2>{utility.title}</h2>
                    <div className="card-meta" style={{ margin: '1rem 0' }}>
                        <span>{utility.map} - {utility.site}</span>
                        <span>{utility.side}</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                        {utility.description}
                    </p>
                    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <span className="tag">Click: {utility.mouse_click}</span>
                        <span className="tag">Postura: {utility.stance}</span>
                        <span className="tag">Movimiento: {utility.movement}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
