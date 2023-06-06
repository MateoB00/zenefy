import React from 'react';

import '../../../public/scss/pages/accueil/review.scss';

export default function ReviewSlideAccueil(
    props: {
        className?: string
        author?: string
        category?: string
    }
) {
    return (
        <div className="review">
            <p className="text">
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
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