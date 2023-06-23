// @ts-nocheck

import * as React from 'react';

import '../../public/scss/components/footer/footer.scss';
import '../../public/scss/components/contact/contact.scss';

import Link from '../links/link';
import Image from '../images/image';

import ConnexionPage from '../../app/connexion/connexion'


export default function Footer({ logoColor }) {

    const [showConnexion, setShowConnexion] = React.useState(false)
    const [showContact, setShowContact] = React.useState(false)

    const handleContactForm = async () => {
        window.location.href('/')
    }

    return (
        <footer className="footer"
        >
            <div className="footer_mobile footer_normal">
                <div className="footer_mobile">
                    <Link href="/"><Image
                        className='logo'
                        src={logoColor ? '/images/logo.png' : '/images/logo_blanc.png'}
                        alt='Logo'
                        width={120}
                        height={120}
                        loading={'lazy'}
                    /></Link>
                    <ul className="list_footer">
                        <li>Nos activités
                        </li>
                        <li>
                            <Link
                                href='/nos_nouveautes'
                                text='Nos nouveautés'
                            />
                        </li>
                        <li>
                            A propos
                        </li>
                        <li>
                            <a href="/zenefy_pro">Zenefy PRO</a>
                        </li>
                    </ul>
                </div>
                <div className="footer_mobile">
                    <h1 className="fs-4 text-center">MON COMPTE</h1>
                    <ul className="list_footer">
                        <li>
                            <a onClick={() => {
                                setShowConnexion(true)
                            }}>Inscription</a>
                        </li>
                        <li>
                            <a onClick={() => {
                                setShowConnexion(true)
                            }}>Connexion</a>
                        </li>
                        <li>
                            <a href='/profil'>Mon compte</a>
                        </li>
                        <li>
                            <a onClick={() => {
                                setShowContact(true)
                            }}>
                                Contactez-nous</a>
                        </li>
                    </ul>
                </div>
                <div className="footer_mobile">
                    <h1 className="fs-4 text-center">AUTRES</h1>
                    <ul className="list_footer">
                        <li>Préférences cookies
                        </li>
                        <li>
                            Conditions d&apos;utilisation
                        </li>
                        <li>
                            F.A.Q
                        </li>
                    </ul>
                </div>
            </div>
            {
                showConnexion ? <ConnexionPage showIt={showConnexion}></ConnexionPage> : null
            }
            {
                showContact ? <div className="pop_up">
                    <button className="close_button fw-bold"
                        onClick={() => {
                            setShowContact(false)
                        }}>✕</button>
                    <h1 className="text-center my-5">Contactez-nous</h1>
                    <form onSubmit={handleContactForm}>
                        <div className="inputs_popup mx-auto gap-3">
                            <input name="nom" className="input_pop_up" type="text" placeholder="NOM"
                                onChange={
                                    (e: { target: { value: React.SetStateAction<string>; }; }) => setLastName(e.target.value)}></input>
                            <input name="prenom" className="input_pop_up" type="text" placeholder="PRENOM" onChange={
                                (e: { target: { value: React.SetStateAction<string>; }; }) => setFirstName(e.target.value)}></input>
                            <input name="email_popup" className="input_pop_up" type="text" placeholder="ADRESSE MAIL" onChange={
                                (e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}></input>
                            <input name="num_tel" className="input_pop_up" type="text" placeholder="NUMERO DE TELEPHONE"
                                onChange={
                                    (e: { target: { value: React.SetStateAction<string>; }; }) => setNumPhone(e.target.value)}></input>
                            <input name="sujet" className="input_pop_up" type="text" placeholder="SUJET"
                                onChange={
                                    (e: { target: { value: React.SetStateAction<string>; }; }) => setSubject(e.target.value)}></input>

                        </div>
                        <div className="input_popup_message">
                            <input name="message" className="input_pop_up" type="text" placeholder="MESSAGE"></input>
                            <button type="submit" className="button_pop_up fw-bold">Envoyez</button>
                        </div>
                    </form>
                </div> : null
            }
        </footer>
    )
}