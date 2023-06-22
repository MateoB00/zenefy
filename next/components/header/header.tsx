// @ts-nocheck

import * as React from 'react';
import cookieCutter from 'cookie-cutter';

import { NextResponse } from 'next/server';

import '../../public/scss/components/header/header.scss';
import '../../public/scss/components/header/header_responsive.scss';

import LinkAccueil from '../links/link';
import Image from '../images/image';
import Input from '../inputs/input';
import { authLogout, getMe } from '../../api/user'


export default function Header({ logoColor }) {
    const [userData, setUserData] = React.useState()
    const [modoClient, setModoClient] = React.useState(false)
    const [modoPartner, setModoPartner] = React.useState(false)

    const [showBurgerMenu, setShowBurgerMenu] = React.useState(false)
    const [showZenefyBurgerMenu, setZenefyShowBurgerMenu] = React.useState(false)

    const [selectedCategory, setSelectedCategory] = React.useState('');
    const [selectedLieu, setSelectedLieu] = React.useState('')

    const [logoUrl, setLogoUrl] = React.useState('/images/logo_blanc.png')


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



    const handleLogoutSubmit = async (res: NextResponse) => {
        await authLogout(res)
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

    const handleRedirectionServices = async () => {
        window.location.href = `/recherche?city=${selectedLieu}&category=${selectedCategory}`;
    }
    return (
        <div className="header">
            <div className="menu">
                
<LinkAccueil
href='/'
>
                <Image
                className='logo'
                src={logoColor ? '/images/logo.png' : '/images/logo_blanc.png'}
                alt='Logo'
                width={120}
                height={120}
                loading={'lazy'}
            /> 
                </LinkAccueil>
                <div className="mid_side">
                    <select name="category" id="category" className="activite" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="">Types d&apos;activités</option>
                        <option value="coiffure">Coiffure</option>
                        <option value="yoga">Yoga</option>
                        <option value="massage">Massage</option>
                        <option value="musculation">Musculation</option>
                        <option value="spa">Spa</option>
                        <option value="manucure">Manucure</option>
                    </select>
                    <Input
                        type='text'
                        className='lieu'
                        value={selectedLieu}
                        onChange={(e) => setSelectedLieu(e.target.value)}
                        placeHolder='Ville'
                    />
                    <LinkAccueil
                        className='search'
                        // href='/recherche'
                        onClick={handleRedirectionServices}
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
                    <LinkAccueil
href='/'
>
                <Image
                className='logo'
                src={logoColor ? '/images/logo.png' : '/images/logo_blanc.png'}
                alt='Logo'
                width={120}
                height={120}
                loading={'lazy'}
            /> 
                </LinkAccueil>
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
                    <select name="pets" id="pet-select" className="activite" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value=""><p>Types d&apos;activités</p></option>
                        <option value="coiffure"><p>Coiffure</p></option>
                        <option value="yoga"><p>Yoga</p></option>
                        <option value="massage"><p>Massage</p></option>
                        <option value="musculation"><p>Musculation</p></option>
                        <option value="spa"><p>Spa</p></option>
                        <option value="manucure"><p>Manucure</p></option>
                    </select>
                    <Input
                        type='text'
                        className='lieu'
                        value={selectedLieu}
                        onChange={(e) => setSelectedLieu(e.target.value)}
                        placeHolder='Ville'
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
                                        href='/inscription'
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