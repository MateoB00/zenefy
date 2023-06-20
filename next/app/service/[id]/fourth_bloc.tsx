import * as React from 'react';

import '../../../public/scss/pages/service/fourth_bloc/fourth_bloc.scss';
import '../../../public/scss/pages/service/fourth_bloc/fourth_bloc_responsive.scss';

import ButtonConnexion from '../../../components/buttons/button';

export default function FourthBlocService({ googleCompanyInfos }) {
    const [googleCompany, setGoogleCompany] = React.useState(googleCompanyInfos)
    console.log('googleCompanyInfos')
    console.log(googleCompany)
    console.log('googleCompanyInfos')
    const handleAvisButtonClick = () => {
        const buttonHeaderAvis = document.getElementById("buttonHeaderAvis")
        const contentReviewValueBloc = document.querySelector('.contentReviewValueBloc')
        const contentReview = document.querySelector('.contentReview')
        if (buttonHeaderAvis && contentReview && contentReviewValueBloc) {
            contentReview.classList.toggle('contentReviewBloc')
            contentReviewValueBloc.classList.toggle('contentReviewValue')
        }
    }

    const handleNoteButtonClick = () => {
        const buttonHeaderNote = document.getElementById("buttonHeaderNote")
        const contentReviewValueBloc = document.querySelector('.contentReviewValueBloc')
        const contentReview = document.querySelector('.contentReview')
        if (buttonHeaderNote && contentReview && contentReviewValueBloc) {
            contentReviewValueBloc.classList.remove('contentReviewValue')
            contentReview.classList.remove('contentReviewBloc')
        }
    }

    return (
        <section className="fourthBloc">
            <div className="blocReview" id="blocReview">
                <div className="headerReview">
                    <ButtonConnexion
                        text='Note Global'
                        className='buttonHeaderReview'
                        id='buttonHeaderNote'
                        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                            e.preventDefault();
                            handleNoteButtonClick();
                        }}
                    />
                    <ButtonConnexion
                        text='Avis'
                        className='buttonHeaderReview'
                        id='buttonHeaderAvis'
                        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                            e.preventDefault();
                            handleAvisButtonClick();
                        }}
                    />
                </div>
                <div className="contentReviewValueBloc">
                    <div className="reviewValue">
                        <h3>Zenefy</h3>
                        <p>Note : 4.5/5</p>
                    </div>
                    <div className="reviewValue">
                        <h4>Google</h4>
                        <p>Note : {googleCompany && googleCompany.rating}/5</p>
                    </div>
                </div>

                <div className="contentReview">
                    <div className="review">
                        <h3>Nom : </h3>
                        <p>review</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
