import { useEffect, useState } from 'react';
import '../../../public/scss/pages/service/third_bloc/third_bloc.scss';
import '../../../public/scss/pages/service/third_bloc/third_bloc_responsive.scss';

import MapPage from '../../../components/api/map'
import OpenHours from './open_hours'

export default function ThirdBlocService() {
    // const centerMap = await (await getCenterMap()).centerMap

    return (
        <section className="thirdBloc">
            <div className='localisation'>
                <h2>Nous localiser</h2>

                <div className='bloc_infos'>
                    <MapPage />
                    <OpenHours />
                </div>
            </div>
        </section>
    );
}

// export const getCenterMap = async () => {
//     const address = 'Paris';

//     const query = await fetch(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//             address
//         )}&key=AIzaSyCg_qHEXEyLoqWuiR4wlyAios07ZmJh_Ic`
//     );
//     const data = await query.json();

//     if (!data.results[0]) {
//         return {
//             centerMap: {
//                 lat: null,
//                 lng: null
//             }
//         }
//     }

//     const { lat, lng } = data.results[0].geometry.location || {};
//     const center = { lat, lng };

//     return {
//         centerMap: center
//     };
// }