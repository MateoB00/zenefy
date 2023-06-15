'use client'

import * as React from 'react';

import '../../../public/scss/pages/service/calendar/calendar.scss';

import '../../../public/scss/components/header/header_blue.scss';
import '../../../public/scss/components/footer/footer_blue.scss';

import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import FirstBlocService from './first_bloc'
import SecondBlocService from './second_bloc'
import ThirdBlocService from './third_bloc'
import FourthBlocService from './fourth_bloc'
import Calendar from '../../../components/calendar/calendar'
import Button from '../../../components/buttons/button'


export default function Page() {
    const [showDispo, setShowDispo] = React.useState(false)
    const toggleDispo = () => {
        setShowDispo(true)
    }

    const handleBackClick = () => {
        setShowDispo(false)
    }

    if (showDispo) {
        return (
            <div className="calendarReactUserSide">
                <Header />
                <Calendar />
                <div className='divForButton'>
                    <Button
                        text='Retour'
                        className='buttonBack'
                        onClick={handleBackClick}
                    />
                </div>
                <Footer />
            </div>
        )
    }
    return (
        <div>
            <Header />
            <FirstBlocService onToggleDispo={toggleDispo} />
            <SecondBlocService />
            <ThirdBlocService />
            <FourthBlocService />
            <Footer />
        </div>
    )
}