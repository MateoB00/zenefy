'use client'

import * as React from 'react';

import Button from '../../components/buttons/button'
import Input from '../../components/inputs/input'

import '../../public/scss/pages/profil/user/profilContent.scss';
import '../../public/scss/pages/profil/user/profilContentResponsive.scss';

export default function ProfilUserContent() {
    const [showInfos, setShowInfos] = React.useState(false)
    const [showFavorites, setShowFavorites] = React.useState(false)
    const [showReservations, setShowReservations] = React.useState(false)
    const [showProfil, setShowProfil] = React.useState(true)

    const [email, setEmail] = React.useState('')
    const [numPhone, setNumPhone] = React.useState('')

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
                    onClick={() => {
                        setShowInfos(false);
                        setShowProfil(true);
                    }}
                />
            </div>
        )
    }

    if (showProfil) {
        return (
            <div className="profilContentButtons">
                <h1>Mon compte</h1>
                <div className='credit'>
                    <span>60€</span>
                </div>
                <div className='buttons'>
                    <Button
                        text='Mes Informations'
                        className=''
                        onClick={() => {
                            setShowInfos(true);
                        }}
                    />
                    <Button
                        text='Mes Favoris'
                        className=''
                    />
                    <Button
                        text='Mes Réservations'
                        className=''
                    />
                    <Button
                        text='Contact'
                        className=''
                    />
                </div>
            </div>
        )
    }
}