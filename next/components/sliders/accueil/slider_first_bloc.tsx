import React from 'react';

import ImagePage from '../../images/image'

import '../../../public/scss/pages/accueil/slider_first_bloc.scss';
import '../../../public/scss/pages/accueil/slider_first_bloc_responsive.scss';

//SWIPERJS : https://swiperjs.com/
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SlideFirstBloc() {

    return (
        <Swiper
            // navigation
            // pagination={{ clickable: true }}
            effect="coverflow"
            coverflowEffect={{
                rotate: 100,
            }}
            slidesPerView={2}
            centeredSlides
            style={{ height: "400px" }}
            // modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <p>Coiffure</p>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/categorie_coiffure.png'}
                    alt='coiffure'
                    width={350}
                    height={250}
                />
            </SwiperSlide>

            <SwiperSlide>
                <p>Yoga</p>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/categorie_yoga.png'}
                    alt='yoga'
                    width={350}
                    height={250}
                />
            </SwiperSlide>

            <SwiperSlide>
                <p>Massage</p>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/categorie_massage.png'}
                    alt='massage'
                    width={350}
                    height={250}
                />
            </SwiperSlide>

            <SwiperSlide>
                <p>Musculation</p>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/categorie_musculation.png'}
                    alt='musculation'
                    width={350}
                    height={250}
                />
            </SwiperSlide>

            <SwiperSlide>
                <p>SPA</p>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/categorie_spa.png'}
                    alt='spa'
                    width={350}
                    height={250}
                />
            </SwiperSlide>

            <SwiperSlide>
                <p>Manucure</p>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/categorie_manucure.png'}
                    alt='manucure'
                    width={350}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    height={250}
                />
            </SwiperSlide>
        </Swiper>
    );
}