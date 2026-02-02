'use client';

import { useState } from 'react';
import GrenadeModal from './GrenadeModal';

const MAPS = ['Mirage', 'Inferno', 'Ancient', 'Anubis', 'Nuke', 'Vertigo', 'Dust2'];
const SIDES = ['T', 'CT'];

export default function GrenadeGrid({ initialUtilities }) {
    const [filterMap, setFilterMap] = useState('Mirage');
    const [filterSide, setFilterSide] = useState('T');
    const [selectedUtility, setSelectedUtility] = useState(null);

    const filtered = initialUtilities.filter(u =>
        u.map.toLowerCase() === filterMap.toLowerCase() &&
        u.side.toUpperCase() === filterSide.toUpperCase()
    );

    return (
        <>
            <section className="filters">
                <div className="map-filters">
                    {MAPS.map(map => (
                        <button
                            key={map}
                            className={`filter-btn ${filterMap === map ? 'active' : ''}`}
                            onClick={() => setFilterMap(map)}
                        >
                            {map}
                        </button>
                    ))}
                </div>

                <div className="side-toggle">
                    {SIDES.map(side => (
                        <button
                            key={side}
                            className={`filter-btn ${filterSide === side ? 'active' : ''}`}
                            onClick={() => setFilterSide(side)}
                        >
                            {side}
                        </button>
                    ))}
                </div>
            </section>

            <div className="grid">
                {filtered.map(utility => (
                    <div
                        key={utility.id}
                        className="card"
                        onClick={() => setSelectedUtility(utility)}
                    >
                        <div className="card-content">
                            <div className="card-title">{utility.title}</div>
                            <div className="card-meta">
                                <span>{utility.site}</span>
                                <span className="tag">{utility.type}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filtered.length === 0 && (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                    No se encontraron granadas para {filterMap} ({filterSide})
                </div>
            )}

            {selectedUtility && (
                <GrenadeModal
                    utility={selectedUtility}
                    onClose={() => setSelectedUtility(null)}
                />
            )}
        </>
    );
}
