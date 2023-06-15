import React from 'react';

import '../../public/scss/components/buttons/button.scss';


export default function ButtonConnexion(
    props: {
        onClick?: any,
        text: string,
        type?: any,
        className: string,
        id?: string
    }
) {
    const defaultClassName = "buttonComponent"
    const combinedClassName = `${defaultClassName} ${props.className || ""}`

    return (
        <button onClick={props.onClick} type={props.type} className={combinedClassName} id={props.id}>{props.text}</button>
    );
}