'use client'

import * as React from 'react';
import Router from 'next/router';
import cookieCutter from 'cookie-cutter';

import '../../public/scss/pages/connexion/connexion.scss';
import '../../public/scss/pages/connexion/connexion_responsive_1.scss';
import InputConnexion from '../../components/inputs/input';
import ButtonConnexion from '../../components/buttons/button';
import Image from '../../components/images/image';

import { authRegister } from '../../api/user'


export default function Page() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [numPhone, setNumPhone] = React.useState("");
    const [showRegister, setShowRegister] = React.useState(true)

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const userData = {
            first_name: firstName,
            last_name: lastName,
            address: null,
            password: password,
            num_phone: numPhone,
            email: email
        }

        const response = await authRegister(userData)
        if (response == 201) window.location.href = '/profil';
    }

    return (
        <div className="connexion">
            <div className="box m-auto">
                <a href="/"><Image
                src='/images/logo_blanc.png'
                alt='Logo'
                width={120}
                height={120}
                loading={'lazy'}
                ></Image></a>
                <form onSubmit={handleSubmit} className="form">
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
                                    name="address"
                                    placeHolder="Adresse"
                                    onChange={
                                        (e: { target: { value: React.SetStateAction<string>; }; }) => setAddress(e.target.value)}
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
                                    (e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
                            />
                                <input
                                    className="test"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={
                                        (e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                                />
                                <ButtonConnexion
                                    className="test"
                                    type='submit'
                                    text="S'inscrire"
                                />
                            </>
                    }
                </form>
                <div className="footer">
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
        </div>
    );
}