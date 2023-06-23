// @ts-nocheck

import * as React from 'react';

import '../../public/scss/components/footer/footer.scss';

import Link from '../links/link';
import Image from '../images/image';


export default function Footer({ logoColor }) {

    return (
        <footer className="footer"
        // style="background-color: #0E1C41;"
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
                            <a href='/inscription'>Inscription</a>
                        </li>
                        <li>
                            <a href='/connexion'>Connexion</a>
                        </li>
                        <li>
                            <a href='/profil'>Mon compte</a>
                        </li>
                        <li>
                            Contactez-nous
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
        </footer>
    )
}