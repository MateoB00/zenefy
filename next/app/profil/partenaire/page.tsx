'use client'

import * as React from 'react';

import '../../../public/scss/components/header/header_blue.scss';
import '../../../public/scss/components/footer/footer_blue.scss';

import ProfilPartnerContent from './profilPartnerContent'

import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'

export default function Page() {

    return (
        <>
            <Header logoColor={false}/>
            <ProfilPartnerContent />
            <Footer />
        </>
    )
}