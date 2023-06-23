import React from 'react';

import '../../../public/scss/pages/accueil/review.scss';

export default function ReviewSlideAccueil(
    props: {
        className?: string
        author?: string
        category?: string
        text?: string
    }
) {
    return (
        <div className="review">
            <p className="text">
                {props.text}
            </p>
            <p className='author'>
                {props.author}
            </p>
            <p className='category'>
                {props.category}
            </p>
        </div>
    );
}