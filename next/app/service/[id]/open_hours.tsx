import React from 'react';

import '../../../public/scss/components/api/open_hours.scss';


export default function OpenHours({ companyInfos }) {
    const [googleCompanyInfos, setGoogleCompanyInfos] = React.useState(companyInfos)

    return (
        <div className="opening_hours">
            <h3>Horaires d'ouverture</h3>
            <p>Actuellement : {(googleCompanyInfos.open_now === true) ? ' Ouvert' : ' Fermé'}</p>
            {<ol>
                {googleCompanyInfos.open_periods && googleCompanyInfos.open_periods.map((hour, index) => (
                    <li key={index}>{hour}</li>
                ))}
            </ol>
            }
        </div>
    );
}

// export const getMapWithInfos = async (centerMap) => {
//     if (centerMap.lat === 0 && centerMap.lng === 0) return null

//     // const placeId = await (await getPlaceId({ centerMap })).placeId;

//     const infosCompany = await (await getInformationsCompany({ placeId: "ChIJrYVK6iNv5kcRLNWGZ0kwfzs" }))

//     return {
//         infosCompany: infosCompany
//     };
// }

// export const getPlaceId = async ({ center }: { center: { lat: number, lng: number } }) => {
//     const query = await fetch(
//         `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${encodeURIComponent(
//             center.lat
//         )},${encodeURIComponent(
//             center.lng
//         )}&radius=500&keyword=${encodeURIComponent(
//             'Causette'
//         )}&key=AIzaSyDNiq_jkEbil4b5Lpl3U5Hp0ZoKifbQiNM`
//     )

//     const data = await query.json();
//     let place_id = data.results[0].place_id

//     return {
//         placeId: place_id
//     };
// }


// export const getInformationsCompany = async ({ placeId }: { placeId: string }) => {
//     const query = await fetch(
//         `https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Crating%2Copening_hours&place_id=${encodeURIComponent(
//             placeId
//         )}&key=AIzaSyDNiq_jkEbil4b5Lpl3U5Hp0ZoKifbQiNM`
//     )

//     const data = await query.json();
//     let infosCompany = data.result

//     return {
//         open_now: infosCompany.opening_hours.open_now,
//         open_periods: infosCompany.opening_hours.weekday_text,
//         rating: infosCompany.rating
//     };
// }


// export const getInformationsCompany = (centerMap) => {
//     return fetch(
//         `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${encodeURIComponent(
//             centerMap.lat
//         )},${encodeURIComponent(
//             centerMap.lng
//         )}&radius=500&keyword=${encodeURIComponent(
//             'Causette'
//         )}&key=AIzaSyDNiq_jkEbil4b5Lpl3U5Hp0ZoKifbQiNM`
//     ).then(responseApi => {
//         return responseApi.json();
//     }).then(place_id_data => {
//         let place_id = place_id_data.results[0].place_id;

//         return fetch(
//             `https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Crating%2Copening_hours&place_id=${encodeURIComponent(
//                 place_id
//             )}&key=AIzaSyDNiq_jkEbil4b5Lpl3U5Hp0ZoKifbQiNM`
//         )
//     }).then(responseInfos => {
//         return responseInfos.json()
//     }).then(infos_data => {
//         let infosCompany = infos_data.result

//         return {
//             open_now: infosCompany.opening_hours.open_now,
//             open_periods: infosCompany.opening_hours.weekday_text,
//             rating: infosCompany.rating
//         };
//     })
// }