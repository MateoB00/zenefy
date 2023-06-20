import * as React from 'react';
import cookieCutter from 'cookie-cutter';

import '../../public/scss/components/header/header.scss';
import '../../public/scss/components/header/header_responsive.scss';

import LinkAccueil from '../links/link';
import { authLogout, getMe } from '../../api/user'


export default function Header() {
    const [userData, setUserData] = React.useState()
    const [modoClient, setModoClient] = React.useState(false)
    const [modoPartner, setModoPartner] = React.useState(false)

    const [showBurgerMenu, setShowBurgerMenu] = React.useState(false)
    const [showZenefyBurgerMenu, setZenefyShowBurgerMenu] = React.useState(false)

    React.useEffect(() => {
        const fetchUserData = async () => {
            const userToken = cookieCutter.get('SESSID')
            const getUserData = await getMe(userToken)

            if (getUserData.statusCode === 401) {
                console.log("Erreur")
                return
            }

            setUserData(getUserData)
            if (getUserData && getUserData['modo_client_company']) setModoClient(true)
            if (getUserData && getUserData['modo_partner_company']) setModoPartner(true)
        }

        fetchUserData()
    }, [])



    const handleLogoutSubmit = async () => {
        await authLogout()
        window.location.href = '/connexion';
    }


    const handleMenuButtonClick = () => {
        const menuButton = document.getElementById("menuButton");
        const menuButtonMobile = document.getElementById("menuButtonMobile");
        if (menuButton) menuButton.classList.toggle('is-active');
        if (menuButtonMobile) menuButtonMobile.classList.toggle('is-active');
        showBurgerMenu === true ? setShowBurgerMenu(false) : setShowBurgerMenu(true)
    }

    const handleZenefyMenuButtonClick = () => {
        showZenefyBurgerMenu === true ? setZenefyShowBurgerMenu(false) : setZenefyShowBurgerMenu(true)
    }

    return (
        <div className="header">
            <div className="menu">
                <h1>
                    <LinkAccueil
                        href='/accueil'
                        text='ZENEFY'
                    />
                </h1>
                <div className="mid_side">
                    <LinkAccueil
                        href='#'
                        className='activite'
                        text='Types d&apos;activités'
                    />
                    <LinkAccueil
                        href='#'
                        className='lieu'
                        text='Renseignez un lieu'
                    />
                    <LinkAccueil
                        className='search'
                        href='/recherche'
                    >
                        <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                    </LinkAccueil>
                </div>
                <div className="right_side"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                        e.preventDefault();
                        handleMenuButtonClick();
                    }}
                >
                    <LinkAccueil
                        href='#'
                        className='menu-button'
                        id='menuButton'
                    >
                        <span className="burger-icon"></span>
                    </LinkAccueil>
                </div>
            </div>

            <div className="menu_mobile">
                <div className="top_side">
                    <h1>
                        <LinkAccueil
                            href='/accueil'
                            text='ZENEFY'
                        />
                    </h1>
                    <div className="right_side">
                        <LinkAccueil
                            href='#'
                            className='menu-button-mobile'
                            id='menuButtonMobile'

                        >
                            <span className="burger-icon"
                                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                                    e.preventDefault();
                                    handleMenuButtonClick();
                                }}></span>
                        </LinkAccueil>
                    </div>
                </div>
                <div className="bot_side">
                    <LinkAccueil
                        href='#'
                        className='activite'
                        text='Types d&apos;activités'
                    />
                    <LinkAccueil
                        href='#'
                        className='lieu'
                        text='Renseignez un lieu'
                    />
                    <LinkAccueil
                        className='search'
                        href='/recherche'
                    >
                        <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                    </LinkAccueil>
                </div>
            </div>

            {
                showBurgerMenu ?
                    <div className="popUpMenuBlock">
                        {
                            userData ? (
                                <><p className="item_1">
                                    <LinkAccueil
                                        href='#'
                                        text='Déconnexion'
                                        className=''
                                        id=''
                                        onClick={() => {
                                            handleLogoutSubmit();
                                        }}
                                    >
                                    </LinkAccueil>
                                </p><p className="item_2">
                                        <LinkAccueil
                                            href='/profil'
                                            text='Mon Profil'
                                            className=''
                                            id=''
                                        >
                                        </LinkAccueil>
                                    </p></>
                            ) : (
                                <><p className="item_1">
                                    <LinkAccueil
                                        href='#'
                                        text='Inscription'
                                        className=''
                                        id=''
                                    >
                                    </LinkAccueil>
                                </p><p className="item_2">
                                        <LinkAccueil
                                            href='/connexion'
                                            text='Connexion'
                                            className=''
                                            id=''
                                        >
                                        </LinkAccueil>
                                    </p></>
                            )
                        }
                        <p className="item_3">
                            <LinkAccueil
                                href='#'
                                text='Zenefy'
                                className=''
                                id='zenefyMenuButton'
                                onMouseOver={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                                    e.preventDefault();
                                    handleZenefyMenuButtonClick();
                                }}
                            >
                            </LinkAccueil>
                        </p>
                        <p className="item_4">
                            <LinkAccueil
                                href='#'
                                text='Apparence'
                                className=''
                                id=''
                            >
                            </LinkAccueil>
                        </p>
                        <p className="item_5">
                            <LinkAccueil
                                href='#'
                                text='Contact'
                                className=''
                                id=''
                            >
                            </LinkAccueil>
                        </p>
                        {
                            showZenefyBurgerMenu ? <div className="popUpZenefyBlock">
                                {
                                    modoPartner === true ? <p className="item_1_zenefy">
                                        <LinkAccueil
                                            href='/profil/partenaire'
                                            text='Partenaire'
                                            className=''
                                            id=''
                                        >
                                        </LinkAccueil>
                                    </p> : ''
                                }

                                {
                                    modoClient === true ? <p className="item_2_zenefy">
                                        <LinkAccueil
                                            href='/profil/entreprise'
                                            text='Entreprise'
                                            className=''
                                            id=''
                                        >
                                        </LinkAccueil>
                                    </p> : ''
                                }

                                <p className="item_3_zenefy">
                                    <LinkAccueil
                                        href='/zenefy_pro'
                                        text='Zenefy PRO'
                                        className=''
                                        id=''
                                    >
                                    </LinkAccueil>
                                </p>
                                <p className="item_4_zenefy">
                                    <LinkAccueil
                                        href='#'
                                        text='A propos'
                                        className=''
                                        id=''
                                    >
                                    </LinkAccueil>
                                </p>
                            </div> : ''
                        }
                    </div> : ''
            }
        </div >
    )
}