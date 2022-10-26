import React, {useEffect, useState} from 'react'
import {GoogleMap, LoadScript, Marker, Polyline} from '@react-google-maps/api';


const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


const containerStyle = {
    width: '900px',
    height: '500px'
};

const center = {
    lat: 39.933365,
    lng: 32.859741
};


const locations = [
    {
        name: "AOC",
        location: {
            lat: 39.949646,
            lng: 32.80743976222251
        }

    },
    {
        name: "Sıhhiye",
        location: {
            lat: 39.92815978867734,
            lng: 32.85495908634817
        }
    },
    {
        name: "Keçiören Şelalesi",
        location: {
            lat: 39.978538973661294,
            lng: 32.86684477979923
        }
    },
    {
        name: "Kızılay",
        location: {
            lat: 39.920899607105426,
            lng: 32.85401045460547
        }
    }
];

const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    paths: locations.map(item => item.location),
    zIndex: 1
};

function Map(user) {


    return (
        <LoadScript
            className='map'
            googleMapsApiKey={apiKey}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
            >
                <>
                    {locations.map(item => {
                        return (
                            <Marker
                                key={item.name}
                                position={item.location}
                            />
                        )
                    })}
                    <Polyline
                        path={options.paths}
                        options={options}
                    />
                </>
            </GoogleMap>
        </LoadScript>
    )

}


export default React.memo(Map)