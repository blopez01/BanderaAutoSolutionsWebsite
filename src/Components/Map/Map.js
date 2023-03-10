import { React, useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import './Map.css';

function Map() {
    const {isLoaded} =  useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />



    function Map() {
        const center = useMemo(() => ({lat: 29.732230, lng:-99.080620}), []);

        return(
            <>
            <GoogleMap 
                zoom={17} 
                center={center} 
                mapContainerClassName="map-box-content"
                options={{
                    mapTypeControl: false
                }}
            >
                <Marker position={center} />
            </GoogleMap>
            </>
        );
    }
}

export default Map