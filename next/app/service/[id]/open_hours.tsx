// @ts-nocheck

import React from 'react';

import '../../../public/scss/components/api/open_hours.scss';


export default function OpenHours({ companyInfos }) {
    const [googleCompanyInfos, setGoogleCompanyInfos] = React.useState(companyInfos)

    return (
        <div className="opening_hours">
            <h3>Horaires d&apos;ouverture</h3>

            {
                googleCompanyInfos && googleCompanyInfos.open_now ?
                    <p>Actuellement : {(googleCompanyInfos.open_now === true) ? ' Ouvert' : ' Fermé'}</p>
                    : <p>Actuellement : Aucune information</p>

            }
            {
                googleCompanyInfos && googleCompanyInfos.open_periods ?
                    <ol>
                        {googleCompanyInfos.open_periods && googleCompanyInfos.open_periods.map((hour, index) => (
                            <li key={index}>{hour}</li>
                        ))}
                    </ol> : <ol>Aucune information sur les horaires</ol>
            }
        </div>
    );
}