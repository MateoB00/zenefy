import React from 'react';

import '../../../public/scss/pages/service/second_bloc/second_bloc.scss';
import '../../../public/scss/pages/service/second_bloc/second_bloc_responsive.scss';

import BlocPrestations from '../../../components/bloc/bloc_prestations'

export default function SecondBlocService() {

    return (
        <section className="secondBloc">
            <div className='prestations'>
                <h1>Choix de la prestation</h1>
                <BlocPrestations />
            </div>
        </section>
    );
}