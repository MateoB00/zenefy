import React from 'react';

import ImagePage from '../../images/image'

import '../../../public/scss/pages/service/slider_first_bloc.scss';
import '../../../public/scss/pages/service/slider_first_bloc_responsive.scss';

//SWIPERJS : https://swiperjs.com/
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SlideFirstBloc() {

    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/categorie_coiffure.png'}
                    alt='coiffure'
                    width={600}
                    height={600}
                />
            </SwiperSlide>

            <SwiperSlide>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/categorie_yoga.png'}
                    alt='yoga'
                    width={600}
                    height={600}
                />
            </SwiperSlide>

            <SwiperSlide>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/categorie_massage.png'}
                    alt='massage'
                    width={600}
                    height={600}
                />
            </SwiperSlide>

            <SwiperSlide>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/categorie_musculation.png'}
                    alt='musculation'
                    width={600}
                    height={600}
                />
            </SwiperSlide>

            <SwiperSlide>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/categorie_spa.png'}
                    alt='spa'
                    width={600}
                    height={600}
                />
            </SwiperSlide>

            <SwiperSlide>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/categorie_manucure.png'}
                    alt='manucure'
                    width={600}
                    height={600}
                />
            </SwiperSlide>
        </Swiper>
    );
}