import React from 'react';

import ImagePage from '../../images/image'
import Link from '../../../components/links/link'

import '../../../public/scss/pages/accueil/slider_first_bloc.scss';
import '../../../public/scss/pages/accueil/slider_first_bloc_responsive.scss';

//SWIPERJS : https://swiperjs.com/
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SlideFirstBloc() {

    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={100}
            style={{ height: "200px" }}
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
                <Link href="/recherche?category=coiffure">
                    <p>Coiffure</p>
                    <ImagePage
                        className='image_slide'
                        src={'/images/accueil/categorie_coiffure.png'}
                        alt='coiffure'
                        width={250}
                        height={250}
                    />
                </Link>
            </SwiperSlide>

            <SwiperSlide>
                <Link href="/recherche?category=Yoga">
                    <p>Yoga</p>

                    <ImagePage
                        className='image_slide'
                        src={'/images/accueil/categorie_yoga.png'}
                        alt='yoga'
                        width={250}
                        height={250}
                    />
                </Link>
            </SwiperSlide>

            <SwiperSlide>
                <Link href="/recherche?category=Massage">
                    <p>Massage</p>
                    <ImagePage
                        className='image_slide'
                        src={'/images/accueil/categorie_massage.png'}
                        alt='massage'
                        width={250}
                        height={250}
                    />
                </Link>
            </SwiperSlide>

            <SwiperSlide>
                <Link href="/recherche?category=Musculation">
                    <p>Musculation</p>
                    <ImagePage
                        className='image_slide'
                        src={'/images/accueil/categorie_musculation.png'}
                        alt='musculation'
                        width={250}
                        height={250}
                    />
                </Link>
            </SwiperSlide>

            <SwiperSlide>
                <Link href="/recherche?category=Spa">
                    <p>SPA</p>
                    <ImagePage
                        className='image_slide'
                        src={'/images/accueil/categorie_spa.png'}
                        alt='spa'
                        width={250}
                        height={250}
                    />
                </Link>
            </SwiperSlide>

            <SwiperSlide>
                <Link href="/recherche?category=Manucure">
                    <p>Manucure</p>
                    <ImagePage
                        className='image_slide'
                        src={'/images/accueil/categorie_manucure.png'}
                        alt='manucure'
                        width={250}
                        height={250}
                    />
                </Link>
            </SwiperSlide>
        </Swiper>
    );
}