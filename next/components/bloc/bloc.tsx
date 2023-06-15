import React from 'react';

import '../../public/scss/components/bloc/bloc.scss';

export default function Bloc(
    props: {
        id?: string | undefined;
        text?: string | undefined;
        className?: string | undefined;
    }
) {

    return (
        <div className={props.className} id={props.id}>{
            props.text ? <p>{props.text}</p> : null
        }</div>
    );
}