import * as React from 'react';

import '../../public/scss/components/header/header.scss';

import LinkAccueil from '../links/link';

export default function Header(
    props: {

    }
) {

    // Pour la bulle si elle met du temps à charger regarder la doc  https://nextjs.org/docs/pages/api-reference/components/image
    // const imageLoader = ({ src, width, quality }) => {
    //     return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
    //   };

    const handleMenuButtonClick = () => {
        const menuButton = document.getElementById("menuButton");
        const popUpMenu = document.querySelector('.popUpMenu');
        const popUpZenefy = document.querySelector('.popUpZenefy')
        if (menuButton && popUpMenu) {
            menuButton.classList.toggle('is-active');
            popUpMenu.classList.toggle('popUpMenuBlock');
            //Pour que le second menu qui s'affiche disparait si on appuie sur la croix du menu burger
            if (!popUpMenu.classList.contains('popUpMenuBlock') && popUpZenefy) {

                popUpZenefy.classList.remove('popUpZenefyBlock')
            }
        }
    }

    const handleZenefyMenuButtonClick = () => {
        const zenefyMenuButton = document.getElementById("zenefyMenuButton")
        const popUpZenefy = document.querySelector('.popUpZenefy')
        if (zenefyMenuButton && popUpZenefy) {
            popUpZenefy.classList.toggle('popUpZenefyBlock')
        }

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
                    <div className="search">
                        <LinkAccueil
                            href='/recherche'
                        >
                            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                        </LinkAccueil>
                    </div>
                </div>
                <div className="right_side">
                    <LinkAccueil
                        href='#'
                        className='menu-button'
                        id='menuButton'
                        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                            e.preventDefault();
                            handleMenuButtonClick();
                        }}
                    >
                        <span className="burger-icon"></span>
                    </LinkAccueil>
                </div>
            </div>
            <div className="popUpMenu">
                <p className="item_1">
                    <LinkAccueil
                        href='#'
                        text='Inscription'
                        className=''
                        id=''
                    >
                    </LinkAccueil>
                </p>
                <p className="item_2">
                    <LinkAccueil
                        href='/connexion'
                        text='Connexion'
                        className=''
                        id=''
                    >
                    </LinkAccueil>
                </p>
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
            </div>
            <div className="popUpZenefy">
                <p className="item_1">
                    <LinkAccueil
                        href='#'
                        text='Partenaire'
                        className=''
                        id=''
                    >
                    </LinkAccueil>
                </p>
                <p className="item_2">
                    <LinkAccueil
                        href='#'
                        text='Client'
                        className=''
                        id=''
                    >
                    </LinkAccueil>
                </p>
                <p className="item_3">
                    <LinkAccueil
                        href='#'
                        text='Zenefy PRO'
                        className=''
                        id=''
                    >
                    </LinkAccueil>
                </p>
                <p className="item_3">
                    <LinkAccueil
                        href='#'
                        text='A propos'
                        className=''
                        id=''
                    >
                    </LinkAccueil>
                </p>
            </div>
        </div>
    )
}