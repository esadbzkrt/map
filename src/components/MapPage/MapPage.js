import React from 'react';
import Map from '../Map/Map';
import './MapPage.scss'

function MapPage(props) {


    return (
        <div className="container">
            <div className="container-map">
                <Map/>
            </div>
            <div className="container-map-info">




            </div>
        </div>
    );
}

export default MapPage;