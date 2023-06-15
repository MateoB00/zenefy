import React from 'react';

import SlideFirstBloc from '../../../components/sliders/service/slider_first_bloc';
import ButtonConnexion from '../../../components/buttons/button';

import '../../../public/scss/pages/service/first_bloc/first_bloc.scss';
import '../../../public/scss/pages/service/first_bloc/first_bloc_responsive.scss';

export default function FirstBlocService({ onToggleDispo }) {

    const handleDispoClick = () => {
        onToggleDispo()
    }

    return (
        <section className="firstBloc">
            <div className='infos'>
                <div className='coordonnees'>
                    <h1>Coiffure style</h1>
                    <p className='address'>4 rue Neifudshqj 75009 Paris</p>
                    <p className='review'><a href="#blocReview">Voir les avis</a></p>
                    <ButtonConnexion
                        text='Voir les disponibilités'
                        className='buttonRDV'
                        onClick={handleDispoClick}
                    />
                </div>
                <SlideFirstBloc />
            </div>
        </section>
    );
}