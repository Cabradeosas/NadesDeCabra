'use client';

import { useState } from 'react';
import GrenadeModal from '@/components/GrenadeModal';

export default function ReviewTable({ submissions, approveCommunityUtility, deleteCommunityUtility }) {
    const [previewUtility, setPreviewUtility] = useState(null);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>TÍTULO</th>
                        <th>MAPA</th>
                        <th>BANDO</th>
                        <th>SITE</th>
                        <th>TIPO</th>
                        <th>FECHA</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {submissions.map((submission) => (
                        <tr key={submission.id}>
                            <td>{submission.title}</td>
                            <td>{submission.map}</td>
                            <td>{submission.side}</td>
                            <td>{submission.site}</td>
                            <td><span className="tag">{submission.type}</span></td>
                            <td style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                                {new Date(submission.submitted_at).toLocaleDateString('es-ES')}
                            </td>
                            <td className="actions-cell">
                                <button
                                    onClick={() => setPreviewUtility(submission)}
                                    className="btn-preview"
                                    type="button"
                                >
                                    VER
                                </button>
                                <form action={approveCommunityUtility.bind(null, submission.id)} style={{ display: 'inline' }}>
                                    <button type="submit" className="btn-approve">
                                        APROBAR
                                    </button>
                                </form>
                                <form action={deleteCommunityUtility.bind(null, submission.id)} style={{ display: 'inline' }}>
                                    <button type="submit" className="btn-delete">
                                        RECHAZAR
                                    </button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {previewUtility && (
                <GrenadeModal
                    utility={previewUtility}
                    onClose={() => setPreviewUtility(null)}
                />
            )}
        </>
    );
}
