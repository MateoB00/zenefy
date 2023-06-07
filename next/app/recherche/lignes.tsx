'use client'

import * as React from 'react';

import '../../public/scss/pages/recherche/ligne.scss';

export default function Lignes() {

    const prestations = [
        'Prestation 1', 'Prestation 2', 'Prestation 3', 'Prestation 4',
        'Prestation 5', 'Prestation 6', 'Prestation 7', 'Prestation 8'
    ];

    // Fonction qui divise le tableau en plusieurs tableaux de n éléments (ici 4)
    const chunk = (arr: any, size: number) => {
        return arr.reduce((acc: any, cur: any, i: number) => {
            return (i % size) ? acc : [...acc, arr.slice(i, i + size)]
        }, []);
    }

    // Tableaux de prestations divisés par 4
    const groupedPrestations = chunk(prestations, 4);

    return (
        <div className="grid">
            {groupedPrestations.map((prestationsGroup: any, index: number) => (
                <div className={`ligne`} key={index}>
                    {prestationsGroup.map((prestation: any, index: number) => (
                        <div className="prestation" key={index}>
                            {prestation}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}