'use client'

import * as React from 'react';

import Button from '../../../components/buttons/button'
import Input from '../../../components/inputs/input'

import '../../../public/scss/pages/service/calendar/calendar.scss';
import '../../../public/scss/pages/profil/entreprise/profilContent.scss';
import '../../../public/scss/pages/profil/entreprise/profilContentResponsive.scss';

export default function ProfilEntrepriseContent() {
    const [showSalaries, setShowSalaries] = React.useState(false)
    const [showAddSalarie, setShowAddSalarie] = React.useState(false)
    const [showInfos, setShowInfos] = React.useState(false)
    const [showProfil, setShowProfil] = React.useState(true)

    const handleBackClick = () => {
        setShowAddSalarie(false)
        setShowSalaries(false)
        setShowInfos(false)
    }

    if (showSalaries) {
        return (
            <div className="calendarReactUserSide">
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

    if (showAddSalarie) {
        return (
            <div className="profilContentInfos">
                <h1>Informations du salarié</h1>
                <div className='credit'>
                    <span>60€</span>
                </div>
                <div className='infos'>
                    <form action="" className="formInfos">
                        <p>E-mail professionel</p>
                        <Input
                            placeHolder='test'
                            className='inputForm' />
                        <p>Nom</p>

                        <Input
                            placeHolder='test'
                            className='inputForm'
                        />
                        <p>Prénom</p>

                        <Input
                            placeHolder='test'
                            className='inputForm'
                        />
                        <p>Numéro de téléphone</p>

                        <Input
                            placeHolder='test'
                            className='inputForm'
                        />
                        <p>Adresse postale</p>

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
                <h1>Mes Informations</h1>
                <div className='credit'>
                    <span>60€</span>
                </div>
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
                <h1>Zenefy PRO | Entreprise</h1>
                <div className='buttons'>
                    <Button
                        text='Vos salariés'
                        className=''
                        onClick={() => {
                            setShowSalaries(true);
                        }}
                    />
                    <Button
                        text='Ajouter un salarié/abonnement'
                        className=''
                        onClick={() => {
                            setShowAddSalarie(true);
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