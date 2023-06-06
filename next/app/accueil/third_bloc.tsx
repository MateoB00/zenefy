import React from 'react';

import ReviewSlideAccueil from '../../components/pages/accueil/review'
import SlideThirdBloc from '../../components/sliders/accueil/slider_third_bloc';


import '../../public/scss/pages/accueil/third_bloc.scss';

export default function ThirdBlock() {

    return (
        <section className="third_bloc">
            <h3 className="title">Avis</h3>
            <SlideThirdBloc />
            <p className="you">Nos clients nous, et pourquoi pas vous ?</p>
        </section>
    );
}