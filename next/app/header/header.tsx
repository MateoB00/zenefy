import * as React from 'react';

import '../../public/scss/components/header/header.scss';


export default function Header() {

    // Pour la bulle si elle met du temps à charger regarder la doc  https://nextjs.org/docs/pages/api-reference/components/image
    // const imageLoader = ({ src, width, quality }) => {
    //     return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
    //   };

    const handleMenuButtonClick = () => {
        const menuButton = document.getElementById("menuButton");
        if (menuButton !== null) {
            menuButton.classList.toggle('is-active');
        }
    }
    return (
        <div className="header">
            <div className="top_side">
                <h1>ZENEFY</h1>
                <div className="menu">
                    <a
                        href="#"
                        className="menu-button"
                        id="menuButton"
                        onClick={(e) => {
                            e.preventDefault();
                            handleMenuButtonClick();
                        }}>
                        <span className="burger-icon"></span>
                    </a>
                </div>
            </div>
        </div >

    )
}