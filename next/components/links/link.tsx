import React from 'react';

export default function LinkAccueil(
    props: {
        href?: string,
        text?: string,
        className?: string,
        id?: string,
        onClick?: any
        onMouseOver?: any
        children?: React.ReactNode
    }
) {
    return (
        <a href={props.href} className={props.className} id={props.id} onClick={props.onClick} onMouseOver={props.onMouseOver}>{props.text}{props.children}</a>
    );
}