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
            breakpoints={{
                1100: { slidesPerView: 3, spaceBetween: 100 },
                800: { slidesPerView: 2, spaceBetween: 100 },
                550: { slidesPerView: 2, spaceBetween: 50 },
                0: { slidesPerView: 1 }
            }}
        >
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
                        author='Pauline'
                        category='Yoga'
                        text="Nos salariés sont davantage productifs depuis qu'on opte pour la solution Zenefy, je recommande !"
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
                        author='Marie'
                        category='Coiffure'
                        text="Encore une fois, nous remercions Zenefy d'avoir permis à nos employés de réserver des activités de coiffure à un prix réduit."
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
                        author='Sophie'
                        category='Manucure'
                        text="Le personnel est extrêmement professionnel et attentionné, offrant un service de haute qualité."
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
                        author='Eric'
                        category='Coiffure'
                        text="Le résultat de l'impact sur nos salariés a dépassé nos attentes. Merci Zenefy"
                    />
                </div>
            </SwiperSlide>
        </Swiper>

    );
}