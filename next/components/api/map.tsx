import { useMemo, useState } from 'react';

import '../../public/scss/components/api/map.scss';

interface MapPageProps {
    centerMapData: {
        lat: any;
        lng: any;
    },
}

export default function MapPage() {
    // const [centerMap, setCenterMap] = useState(centerMapData)

    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey: "AIzaSyCg_qHEXEyLoqWuiR4wlyAios07ZmJh_Ic"
    // })

    // if (centerMap.lat === null || centerMap.lng === null) return <div>Not found ...</div>;
    // if (!isLoaded) return <div>Loading ...</div>;
    // return <Map centerMapData={centerMap} />
    return (
        <div className="map-container">
            <p>Test</p>
        </div>
    );
}

// function Map({ centerMapData }: MapPageProps) {
//     return (
//         <GoogleMap
//             zoom={15}
//             center={centerMapData}
//             mapContainerClassName='map-container'
//             options={{
//                 disableDefaultUI: true,
//                 zoomControl: true,
//                 zoomControlOptions: {
//                     position: window.google.maps.ControlPosition.RIGHT_TOP,
//                 },
//             }}
//         >
//             <Marker position={centerMapData} />
//         </GoogleMap>
//     );
// }