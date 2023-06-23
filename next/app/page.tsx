'use client'

import * as React from 'react';

import Header from '../components/header/header'
import FirstBlocAccueil from './accueil/first_bloc';
import SecondBlocAccueil from './accueil/second_bloc';
import ThirdBlocAccueil from './accueil/third_bloc';
import Footer from '../components/footer/footer'

export default function Page() {

  return (
    <>
      <Header logoColor={true} />
      <FirstBlocAccueil />
      <SecondBlocAccueil />
      <ThirdBlocAccueil />
      <Footer logoColor={true} />
    </>
  )
}