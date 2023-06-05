import * as React from 'react';

import '../../public/scss/components/header/header.scss';

import LinkAccueil from './../../components/links/link';


export default function Header() {

    // Pour la bulle si elle met du temps à charger regarder la doc  https://nextjs.org/docs/pages/api-reference/components/image
    // const imageLoader = ({ src, width, quality }) => {
    //     return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
    //   };

    const handleMenuButtonClick = () => {
        const menuButton = document.getElementById("menuButton");
        if (menuButton) {
            menuButton.classList.toggle('is-active');
        }
    }

    return (
        <div className="header">
            <div className="menu">
                <h1>ZENEFY</h1>
                <div className="mid_side">
                <LinkAccueil 
                        href='#'
                        className='activite color_primary'
                        text='Types d&apos;activités'
                        /> 
                <LinkAccueil 
                        href='#'
                        className='lieu color_primary'
                        text='Renseignez un lieu'
                        /> 
                <div className="search">
                    <i className="fa-solid fa-magnifying-glass fa-lg"></i>
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
        </div>
    )
}