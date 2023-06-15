import React from 'react';

import '../../public/scss/components/buttons/button.scss';
import '../../public/scss/components/bloc/bloc_prestations.scss';

import ButtonConnexion from '../buttons/button';
import Input from '../inputs/input';


export default function BlocPrestations(

) {

    const prestations = {
        1: {
            name: 'prestation 1',
            temps: '30 min',
            prix: '10 €'
        },
        2: {
            name: 'prestation 2',
            temps: '30 min',
            prix: '10 €'
        },
        3: {
            name: 'prestation 3',
            temps: '30 min',
            prix: '10 €'
        },
        4: {
            name: 'prestation 4',
            temps: '30 min',
            prix: '10 €'
        }
    };

    return (
        <div className="bloc_prestations">
            {Object.values(prestations).map((prestation: any, index: number) => (
                <div className='prestation' key={index}>
                    <p>{prestation.name}</p>
                    <div className='infos'>
                        <p>{prestation.temps}</p>
                        <p>{prestation.prix}</p>
                        <Input
                            type="datetime-local"
                            // text='Choisir'
                            className='choice'
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}