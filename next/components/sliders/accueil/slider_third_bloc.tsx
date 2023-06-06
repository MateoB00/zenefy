import React from 'react';

import ReviewSlideAccueil from '../../pages/accueil/review'

import '../../../public/scss/pages/accueil/slider_third_bloc.scss';

//SWIPERJS : https://swiperjs.com/
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


export default function SlideThirdBloc(
) {

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={100}
            style={{ height: "280px" }}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
                <div>
                    <ReviewSlideAccueil
                        author='Pauline'
                        category='Yoga'
                    />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                </div>
                <div>
                    <ReviewSlideAccueil
                        author='Marie'
                        category='Coiffure'
                    />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star "></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
                <div>
                    <ReviewSlideAccueil
                        author='Jean'
                        category='Manucure'
                    />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                </div>
                <div>
                    <ReviewSlideAccueil
                        author='Iss'
                        category='Muchinois'
                    />
                </div>
            </SwiperSlide>
        </Swiper>

    );
}