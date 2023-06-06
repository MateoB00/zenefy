import React from 'react';

import ImagePage from '../../components/images/image'
import ButtonConnexion from '../../components/buttons/button';
import SlideSecondBloc from '../../components/sliders/accueil/slider_second_bloc';

import '../../public/scss/pages/accueil/second_bloc.scss';

export default function SecondBloc() {

    return (
        <section className="second_bloc">
            <h2>Ils nous font confiance</h2>
            <SlideSecondBloc />
            <ButtonConnexion
                text="Rejoingez-nous !"
                className="button_join_us"
            />
        </section>
    );
}