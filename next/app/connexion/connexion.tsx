// @ts-nocheck
'use client'

import * as React from 'react';
import Router from 'next/router';

import '../../public/scss/pages/connexion/connexion.scss';
import '../../public/scss/pages/connexion/connexion_responsive_1.scss';
import InputConnexion from '../../components/inputs/input';
import ButtonConnexion from '../../components/buttons/button';
import Image from '../../components/images/image';

import { authLogin } from '../../api/user'
import RegistrationPage from '../inscription/inscription'


export default function Page({ showIt }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showRegistration, setShowRegistration] = React.useState(false)


    const [emailRegistration, setEmailRegistration] = React.useState("");
    const [passwordRegistration, setPasswordRegistration] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [numPhone, setNumPhone] = React.useState("");
    const [showRegister, setShowRegister] = React.useState(true)

    const [showConnexion, setShowConnexion] = React.useState(showIt)


    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const response = await authLogin(email, password)
        if (response == 201) window.location.href = '/';
    }

    const handleSubmitRegister = async (event: any) => {
        event.preventDefault();

        const userData = {
            first_name: firstName,
            last_name: lastName,
            address: null,
            password: passwordRegistration,
            num_phone: numPhone,
            email: emailRegistration
        }

        const response = await authRegister(userData)
        if (response == 201) window.location.href = '/profil';
    }

    if (showConnexion) {
        return (
            <section>
                <div className="connexion">
                    <div className="box m-auto">
                        <button class="close_button fw-bold" onClick={() => {
                            setShowConnexion(false)
                        }}>✕</button>
                        <a href="/">
                            <Image
                                className='logo'
                                src={'/images/logo_blanc.png'}
                                alt='Logo'
                                width={120}
                                height={120}
                                loading={'lazy'}
                            /> </a>
                        <form onSubmit={handleSubmit} className="form">
                            <InputConnexion
                                className="test"
                                type="email"
                                name="email"
                                placeHolder="Email"
                                onChange={
                                    (e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
                            />

                            <InputConnexion
                                className="test"
                                type="password"
                                name="password"
                                placeHolder="Mot de passe"
                                onChange={
                                    (e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                            />
                            <ButtonConnexion
                                className="test"
                                type='submit'
                                text="Connexion"
                            />
                            <ButtonConnexion
                                className="test"
                                text="S'incrire"
                                onClick={() => {
                                    setShowRegistration(true)
                                }}
                            />
                        </form>
                        <div className="footer_connexion">
                            <ButtonConnexion
                                className="buttonGold"
                                type='submit'
                                text="Devenir Partenaire / Client"
                                onClick={() => {
                                    window.location.href = '/zenefy_pro'
                                }}
                            />
                        </div>
                    </div>
                </div>
                {
                    showRegistration ?
                        <div className="connexion">
                            <div className="box m-auto">
                                <button class="close_button fw-bold" onClick={() => {
                                    setShowRegistration(false)
                                }}>✕</button>
                                <a href="/"><Image
                                    className='logo'
                                    src='/images/logo_blanc.png'
                                    alt='Logo'
                                    width={120}
                                    height={120}
                                    loading={'lazy'}
                                ></Image></a>

                                <form onSubmit={handleSubmitRegister} className="form">
                                    {
                                        showRegister ?
                                            <>
                                                <InputConnexion
                                                    className="test"
                                                    type="text"
                                                    name="first_name"
                                                    placeHolder="Prénom"
                                                    onChange={
                                                        (e: { target: { value: React.SetStateAction<string>; }; }) => setFirstName(e.target.value)}
                                                />
                                                <InputConnexion
                                                    className="test"
                                                    type="text"
                                                    name="last_name"
                                                    placeHolder="Nom"
                                                    onChange={
                                                        (e: { target: { value: React.SetStateAction<string>; }; }) => setLastName(e.target.value)}
                                                />
                                                <InputConnexion
                                                    className="test"
                                                    type="text"
                                                    name="num_phone"
                                                    placeHolder="Numéro Tel."
                                                    onChange={
                                                        (e: { target: { value: React.SetStateAction<string>; }; }) => setNumPhone(e.target.value)}
                                                />
                                                <ButtonConnexion
                                                    className="test"
                                                    type='submit'
                                                    text="Continuer"
                                                    onClick={() => {
                                                        setShowRegister(false)
                                                    }}
                                                />
                                            </> : <>        <input
                                                className="test"
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                onChange={
                                                    (e: { target: { value: React.SetStateAction<string>; }; }) => setEmailRegistration(e.target.value)}
                                            />
                                                <input
                                                    className="test"
                                                    type="password"
                                                    name="password"
                                                    placeholder="Mot de passe"
                                                    onChange={
                                                        (e: { target: { value: React.SetStateAction<string>; }; }) => setPasswordRegistration(e.target.value)}
                                                />
                                                <ButtonConnexion
                                                    className="test"
                                                    type='submit'
                                                    text="S'inscrire"
                                                />
                                            </>
                                    }
                                    <ButtonConnexion
                                        className="test"
                                        type='submit'
                                        text="Se connecter"
                                        onClick={() => {
                                            setShowRegistration(false)
                                        }}
                                    />
                                </form>

                                <div className="footer_connexion">
                                    <ButtonConnexion
                                        className="buttonGold"
                                        type='submit'
                                        text="Partenaire / Client"
                                        onClick={() => {
                                            window.location.href = '/zenefy_pro'
                                        }}
                                    />
                                </div>
                            </div>
                        </div> : null
                }
            </section>
        );
    }
}