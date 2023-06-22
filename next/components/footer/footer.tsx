import * as React from 'react';

import '../../public/scss/components/footer/footer.scss';

import Link from '../links/link';


export default function Footer() {

    return (
        <footer className="footer"
        // style="background-color: #0E1C41;"
        >
            <div className="footer_mobile footer_normal">
                <div className="footer_mobile">
                    <h1 className="fs-4 text-center">ZENEFY</h1>
                    <ul className="list_footer">
                        <li>NOS ACTIVITES
                        </li>
                        <li>
                            <Link
                                href='/nos_nouveautes'
                                text='NOS NOUVEAUTES'
                            />
                        </li>
                        <li>
                            A PROPOS
                        </li>
                        <li>
                            <a href="/zenefy_pro">ZENEFY PRO</a>
                        </li>
                    </ul>
                </div>
                <div className="footer_mobile">
                    <h1 className="fs-4 text-center">Mon compte</h1>
                    <ul className="list_footer">
                        <li>
                        <a href='/inscription'>INSCRIPTION</a>
                        </li>
                        <li>
                        <a href='/connexion'>CONNEXION</a>
                        </li>
                        <li>
                            <a href='/profil'>MON COMPTE</a>
                        </li>
                        <li>
                            CONTACTEZ-NOUS
                        </li>
                    </ul>
                </div>
                <div className="footer_mobile">
                    <h1 className="fs-4 text-center">Autres</h1>
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