import React from 'react';

import ImagePage from '../../images/image'

import '../../../public/scss/pages/accueil/slider_second_bloc.scss';
import '../../../public/scss/pages/accueil/slider_second_bloc_responsive.scss';

//SWIPERJS : https://swiperjs.com/
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


export default function SlideFirstBloc() {

    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={100}
            style={{ height: "400px" }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            breakpoints={{
                1600: { slidesPerView: 4, spaceBetween: 100 },
                1000: { slidesPerView: 3, spaceBetween: 100 },
                325: { slidesPerView: 2, spaceBetween: 30 },
                0: { slidesPerView: 1 },
            }}
        >
            <SwiperSlide>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/partenaire_1.png'}
                    alt='partenaire'
                    width={350}
                    height={250}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/partenaire_2.png'}
                    alt='partenaire'
                    width={350}
                    height={250}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/partenaire_3.png'}
                    alt='partenaire'
                    width={350}
                    height={250}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/partenaire_4.png'}
                    alt='partenaire'
                    width={350}
                    height={250}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/partenaire_5.png'}
                    alt='partenaire'
                    width={350}
                    height={250}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ImagePage
                    className='image_slide'
                    src={'/images/accueil/partenaire_6.png'}
                    alt='partenaire'
                    width={350}
                    height={250}
                />
            </SwiperSlide>
        </Swiper>

    );
}