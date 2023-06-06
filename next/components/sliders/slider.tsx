import React from 'react';

import ImagePage from '../images/image'

import '../../public/scss/pages/accueil/slider_first_bloc.scss';

//SWIPERJS : https://swiperjs.com/
import { Swiper, SwiperSlide, } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SlideFirstBloc(
    props: {
        optionsSwiper?: any
        textTop?: string
        img?: any
        textBot?: string
    }

) {

    return (
        <Swiper {...props.optionsSwiper}>
            <SwiperSlide>
                {props.textTop}
                {props.img}
                {props.textBot}
            </SwiperSlide>

            <SwiperSlide>
                {props.textTop}
                {props.img}
                {props.textBot}
            </SwiperSlide>

            <SwiperSlide>
                {props.textTop}
                {props.img}
                {props.textBot}
            </SwiperSlide>

            <SwiperSlide>
                {props.textTop}
                {props.img}
                {props.textBot}
            </SwiperSlide>

            <SwiperSlide>
                {props.textTop}
                {props.img}
                {props.textBot}
            </SwiperSlide>

            <SwiperSlide>
                {props.textTop}
                {props.img}
                {props.textBot}
            </SwiperSlide>
        </Swiper>
    );
}