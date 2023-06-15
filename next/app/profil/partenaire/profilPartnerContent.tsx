'use client'

import * as React from 'react';

import Button from '../../../components/buttons/button'
import Input from '../../../components/inputs/input'
import Calendar from '../../../components/calendar/calendar'

import '../../../public/scss/pages/service/calendar/calendar.scss';
import '../../../public/scss/pages/profil/partenaire/profilContent.scss';
import '../../../public/scss/pages/profil/partenaire/profilContentResponsive.scss';

export default function ProfilEntrepriseContent() {
    const [showServices, setShowServices] = React.useState(false)
    const [showReservations, setShowReservations] = React.useState(false)
    const [showInfos, setShowInfos] = React.useState(false)
    const [showProfil, setShowProfil] = React.useState(true)

    const handleBackClick = () => {
        setShowReservations(false)
        setShowServices(false)
        setShowInfos(false)
    }

    if (showReservations) {
        return (
            <div className="calendarReactUserSide">
                <h1 className="titleReservations">Vos Réservations</h1>
                <Calendar />
                <div className='divForButton'>
                    <Button
                        text='Retour'
                        className='buttonBack'
                        onClick={handleBackClick}
                    />
                </div>
            </div>
        )
    }

    if (showServices) {
        return (
            <div className="profilContentInfos">
                <h1>Vos Services</h1>
                <div className='infos'>
                    <form action="" className="formInfos">
                        <p>E-mail professionel</p>
                        <Input
                            placeHolder='test'
                            className='inputForm'
                            disabled={true} />
                        <p>E-mail personnel</p>

                        <Input
                            placeHolder='test'
                            className='inputForm'
                        />
                        <p>Numéro de téléphone</p>

                        <Input
                            placeHolder='test'
                            className='inputForm'
                        />
                    </form>
                </div>
                <Button
                    text='Retour'
                    className='back'
                    onClick={handleBackClick}
                />
            </div>
        )
    }


    if (showInfos) {
        return (
            <div className="profilContentInfos">
                <h1>Vos Informations</h1>
                <div className='infos'>
                    <form action="" className="formInfos">
                        <p>E-mail professionel</p>
                        <Input
                            placeHolder='test'
                            className='inputForm'
                            disabled={true} />
                        <p>E-mail personnel</p>

                        <Input
                            placeHolder='test'
                            className='inputForm'
                        />
                        <p>Numéro de téléphone</p>

                        <Input
                            placeHolder='test'
                            className='inputForm'
                        />
                    </form>
                </div>
                <Button
                    text='Retour'
                    className='back'
                    onClick={handleBackClick}
                />
            </div>
        )
    }

    if (showProfil) {
        return (
            <div className="profilContentButtons">
                <h1>Zenefy PRO | Partenaire</h1>
                <div className='buttons'>
                    <Button
                        text='Calendrier de réservations'
                        className=''
                        onClick={() => {
                            setShowReservations(true);
                        }}
                    />
                    <Button
                        text='Vos services'
                        className=''
                        onClick={() => {
                            setShowServices(true);
                        }}
                    />
                    <Button
                        text='Vos informations'
                        className=''
                        onClick={() => {
                            setShowInfos(true);
                        }}
                    />
                </div>
            </div>
        )
    }
}