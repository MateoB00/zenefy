'use client'

import * as React from 'react';
import Router from 'next/router';

import '../../public/scss/pages/connexion/connexion.scss';
import '../../public/scss/pages/connexion/connexion_responsive_1.scss';
import InputConnexion from '../../components/inputs/input';
import ButtonConnexion from '../../components/buttons/button';

import { authLogin } from '../../api/user'
import { NextRequest } from 'next/server';


export default function Page(req, res) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    // const [showPassword, setShowPassword] = React.useState(false);

    // const [tokenClient, setTokenClient] = React.useState("");
    // // const [showFormClient, setShowFormClient] = React.useState(false)
    // 
    // const [tokenPartenaire, setTokenPartenaire] = React.useState("");
    // const [showFormPartenaire, setShowFormPartenaire] = React.useState(false)

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const response = await authLogin(email, password)
        if (response == 201) window.location.href = '/accueil';
    }

    return (
        <div className="connexion">
            <div className="box m-auto">
                <h1 className='text-center'>ZENEFY</h1>
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
                        placeHolder="Password"
                        onChange={
                            (e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                    />
                    <ButtonConnexion
                        className="test"
                        type='submit'
                        text="Connexion"
                    />
                </form>
                <div className="footer">
                    <ButtonConnexion
                        className="buttonGold"
                        type='submit'
                        text="Partenaire"
                    // onClick={() => {
                    //     setShowFormPartenaire(true);
                    // }}
                    />
                    <ButtonConnexion
                        className="buttonGold"
                        type='submit'
                        text="Client"
                    // onClick={() => {
                    //     setShowFormClient(true);
                    // }}
                    />
                </div>
            </div>
        </div>
    );
}