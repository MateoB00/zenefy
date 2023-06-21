// @ts-nocheck

import React from 'react';

import SlideFirstBloc from '../../../components/sliders/service/slider_first_bloc';
import ButtonConnexion from '../../../components/buttons/button';

import '../../../public/scss/pages/service/first_bloc/first_bloc.scss';
import '../../../public/scss/pages/service/first_bloc/first_bloc_responsive.scss';

export default function FirstBlocService({ onToggleDispo, companyInfos }) {
    const handleDispoClick = () => {
        onToggleDispo()
    }
    ///fdfqdsf
    return (
        <section className="firstBloc">
            <div className='infos'>
                <div className='coordonnees'>
                    <h1>{companyInfos.name}</h1>
                    <p className='address'>{companyInfos.address.slice(0, 15)}, {companyInfos.code_postal} {companyInfos.city}</p>
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