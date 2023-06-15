'use client'

import * as React from 'react';
import '../../public/scss/pages/connexion/connexion.scss';
import '../../public/scss/pages/connexion/connexion_responsive_1.scss';
import InputConnexion from '../../components/inputs/input';
import ButtonConnexion from '../../components/buttons/button';


export default function Page() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);

    const [tokenClient, setTokenClient] = React.useState("");
    const [showFormClient, setShowFormClient] = React.useState(false)

    const [tokenPartenaire, setTokenPartenaire] = React.useState("");
    const [showFormPartenaire, setShowFormPartenaire] = React.useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //Logique back api
        const login = { email, password };
        console.log(login)
    }

    if (showFormClient) {
        return (
            <div className="connexion">
                <div className="box m-auto">
                    <h1 className='text-center'>ZENEFY</h1>
                    <form onSubmit={handleSubmit} className="form">
                        <InputConnexion
                            className="test"
                            type="text"
                            name="token_client"
                            placeHolder="Clé"
                            value={tokenClient}
                            onChange={
                                (e: { target: { value: React.SetStateAction<string>; }; }) => setTokenClient(e.target.value)}
                        />
                        <ButtonConnexion
                            className="test"
                            type='submit'
                            text="Connexion"
                            onClick=""
                        />
                    </form>
                    <div className="footer">
                        <ButtonConnexion
                            className="buttonGold"
                            type='submit'
                            text="Partenaire"
                            onClick={() => {
                                setShowFormClient(true);
                                setShowFormClient(false);
                            }}
                        />
                        <ButtonConnexion
                            className=""
                            type='submit'
                            text="Utilisateur"
                            onClick={() => {
                                setShowFormClient(false);
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }

    if (showFormPartenaire) {
        return (
            <div className="connexion">
                <div className="box m-auto">
                    <h1 className='text-center'>ZENEFY</h1>
                    <form onSubmit={handleSubmit} className="form">
                        <InputConnexion
                            className="test"
                            type="text"
                            name="token_partenaire"
                            placeHolder="Clé"
                            value={tokenPartenaire}
                            onChange={
                                (e: { target: { value: React.SetStateAction<string>; }; }) => setTokenPartenaire(e.target.value)}
                        />
                        <ButtonConnexion
                            className="test"
                            type='submit'
                            text="Connexion"
                            onClick=""
                        />
                    </form>
                    <div className="footer">
                        <ButtonConnexion
                            className="buttonGold"
                            type='submit'
                            text="Client"
                            onClick={() => {
                                setShowFormPartenaire(true);
                                setShowFormPartenaire(false);
                            }}
                        />
                        <ButtonConnexion
                            className=""
                            type='submit'
                            text="Utilisateur"
                            onClick={() => {
                                setShowFormPartenaire(false);
                            }}
                        />
                    </div>
                </div>
            </div>
        )
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
                        value={email}
                        onChange={
                            (e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
                    />

                    <InputConnexion
                        className="test"
                        type="password"
                        name="password"
                        placeHolder="Password"
                        value={password}
                        onChange={
                            (e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                    />
                    <ButtonConnexion
                        className="test"
                        type='submit'
                        text="Connexion"
                        onClick=""
                    />
                </form>
                <div className="footer">
                    <ButtonConnexion
                        className="buttonGold"
                        type='submit'
                        text="Partenaire"
                        onClick={() => {
                            setShowFormPartenaire(true);
                        }}
                    />
                    <ButtonConnexion
                        className="buttonGold"
                        type='submit'
                        text="Client"
                        onClick={() => {
                            setShowFormClient(true);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}