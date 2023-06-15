'use client'

import * as React from 'react';

import '../../public/scss/pages/recherche/ligne.scss';
import '../../public/scss/pages/recherche/ligne_responsive.scss';

export default function Lignes() {

    const prestations = [
        'Prestation 1', 'Prestation 2', 'Prestation 3', 'Prestation 4',
        'Prestation 5', 'Prestation 6', 'Prestation 7', 'Prestation 8'
    ];

    return (
        <div className="grid">
            {prestations.map((prestation: any, index: number) => (
                <div className='prestation' key={index}>
                    {prestation}
                </div>
            ))}
        </div>
    )
}