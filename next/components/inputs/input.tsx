import * as React from 'react';

export default function InputConnexion(
    props: {
        className: any,
        type: string | undefined;
        name: string | undefined;
        value: string | undefined;
        placeHolder: string | undefined;
        onChange: any
    }
) {
    return (
        <input
            className={props.className}
            type={props.type}
            name={props.name}
            value={props.value}
            placeholder={props.placeHolder}
            onChange={props.onChange}
        />
    );
}