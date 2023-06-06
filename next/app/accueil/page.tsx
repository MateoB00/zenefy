'use client'

import * as React from 'react';

import '../../public/scss/pages/accueil/accueil.scss';

import Header from '../../components/header/header'
import FirstBloc from './first_bloc';
import SecondBloc from './second_bloc';
import ThirdBloc from './third_bloc';
import Footer from '../../components/footer/footer'

export default async function Page() {

    return (
        <><Header />
            <FirstBloc />
            <SecondBloc />
            <ThirdBloc />
            <Footer />
        </>
    )
}