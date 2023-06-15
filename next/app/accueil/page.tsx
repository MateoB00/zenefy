'use client'

import * as React from 'react';

import Header from '../../components/header/header'
import FirstBlocAccueil from './first_bloc';
import SecondBlocAccueil from './second_bloc';
import ThirdBlocAccueil from './third_bloc';
import Footer from '../../components/footer/footer'

export default async function Page() {

    return (
        <>
            <Header />
            <FirstBlocAccueil />
            <SecondBlocAccueil />
            <ThirdBlocAccueil />
            <Footer />
        </>
    )
}