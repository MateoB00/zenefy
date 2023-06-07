import * as React from 'react';

import '../../public/scss/components/footer/footer.scss';

import LinkAccueil from '../links/link';


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
                            NOS NOUVEAUTES
                        </li>
                        <li>
                            A PROPOS
                        </li>
                        <li>
                            ZENEFY PRO
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="fs-4 text-center">Mon compte</h1>
                    <ul className="list_footer">
                        <li>
                            INSCRIPTION
                        </li>
                        <li>
                            CONNEXION
                        </li>
                        <li>
                            MON COMPTE
                        </li>
                        <li>
                            CONTACTEZ-NOUS
                        </li>
                    </ul>
                </div>
                <div className="my-auto">
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