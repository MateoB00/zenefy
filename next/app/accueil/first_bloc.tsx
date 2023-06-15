import React from 'react';

import ImagePage from '../../components/images/image'
import SlideFirstBloc from '../../components/sliders/accueil/slider_first_bloc';

import '../../public/scss/pages/accueil/first_bloc/first_bloc.scss';
import '../../public/scss/pages/accueil/first_bloc/first_bloc_responsive.scss';

export default function FirstBlocAccueil() {

    return (
        <section className="firstBloc">
            <ImagePage
                className='firstImage'
                src={'/images/accueil/image_1.png'}
                alt='firstImage'
                width={500}
                height={500}
                loading={'lazy'}
            />
            <div className='bloc'>
                <h1 className='title'>Prenez soin de vos équipes.</h1>
                <p>
                    <span className='zenefy'>ZENEFY</span> c’est la solution clé pour toutes les entreprises qui cherchent à améliorer le bien-être de leurs salariés.
                </p>
                <p>
                    Pour des équipes soudées, dynamiques et engagées ! Grâce à notre réseau de prestataire, augmenter la productivité de vos équipes n’a jamais été aussi simple. Pour des équipes soudées, dynamiques et engagées ! Grâce à notre réseau de prestataire, augmenter la productivité de vos équipes n’a jamais été aussi simple.
                </p>
                <SlideFirstBloc />
            </div>
            <ImagePage
                className='secondImage'
                src={'/images/accueil/image_2.png'}
                alt='firstImage'
                width={500}
                height={500}
                loading={'lazy'}
            />

        </section>
    );
}