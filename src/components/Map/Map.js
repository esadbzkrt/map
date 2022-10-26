import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {Navigate} from "react-router-dom";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: '900px',
  height: '500px'
};

const center = {
  lat: 39.933365,
  lng: 32.859741
};


function Map(props) {
  return (
      localStorage.getItem('user') ?
      <LoadScript
          googleMapsApiKey= {apiKey}
      >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11}

        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
        :
           <Navigate to="/" />
  )
}

export default React.memo(Map)