'use client'

import * as React from 'react';

import '../../public/scss/components/header/header_blue.scss';
import '../../public/scss/components/footer/footer_blue.scss';

import '../../public/scss/pages/recherche/recherche.scss';

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Lignes from './lignes'

export default function Page() {

    return (
        <>
            <Header logoColor={false} />
            <div className='recherche'>
                <Lignes />
            </div>
            <Footer logoColor={false} />
        </>
    )
}