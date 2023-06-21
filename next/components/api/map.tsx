// @ts-nocheck

import { useMemo, useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import '../../public/scss/components/api/map.scss';

interface MapPageProps {
    centerMapData: {
        lat: any;
        lng: any;
    },
}

export default function MapPage({ centerMap }) {
    const [center, setCenterMap] = useState(centerMap)

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCg_qHEXEyLoqWuiR4wlyAios07ZmJh_Ic"
    })

    // if (centerMap.lat === null || centerMap.lng === null) return <div>Not found ...</div>;
    if (!isLoaded) return <div>Loading ...</div>;
    return <Map centerMapData={centerMap} />

}

function Map({ centerMapData }: MapPageProps) {
    return (
        <GoogleMap
            zoom={15}
            center={centerMapData}
            mapContainerClassName='map-container'
            options={{
                disableDefaultUI: true,
            }}
        >
            <Marker position={centerMapData} />
        </GoogleMap>
    );
}