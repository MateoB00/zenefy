import React from 'react';

import ImagePage from '../../images/image'

import '../../../public/scss/pages/accueil/slider_second_bloc.scss';

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
        >
            <SwiperSlide>
                <ImagePage
                    className=''
                    src={'/images/accueil/partenaire_1.png'}
                    alt='partenaire'
                    width={350}
                    height={250}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </SwiperSlide>
            <SwiperSlide>
                <ImagePage
                    className=''
                    src={'/images/accueil/partenaire_2.png'}
                    alt='partenaire'
                    width={350}
                    height={250}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </SwiperSlide>
            <SwiperSlide>
                <ImagePage
                    className=''
                    src={'/images/accueil/partenaire_3.png'}
                    alt='partenaire'
                    width={350}
                    height={250}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </SwiperSlide>
            <SwiperSlide>
                <ImagePage
                    className=''
                    src={'/images/accueil/partenaire_4.png'}
                    alt='partenaire'
                    width={350}
                    height={250}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </SwiperSlide>
            <SwiperSlide>
                <ImagePage
                    className=''
                    src={'/images/accueil/partenaire_5.png'}
                    alt='partenaire'
                    width={350}
                    height={250}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </SwiperSlide>
            <SwiperSlide>
                <ImagePage
                    className=''
                    src={'/images/accueil/partenaire_6.png'}
                    alt='partenaire'
                    width={350}
                    height={250}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </SwiperSlide>
        </Swiper>

    );
}