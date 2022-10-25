import React, {useEffect} from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {Navigate} from "react-router-dom";
import axios from "axios";

const containerStyle = {
  width: '900px',
  height: '500px'
};

const center = {
  lat: 39.933365,
  lng: 32.859741
};

let locations;


function Map(props) {


    // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
          locations = await axios.get('http://localhost:8000/locations')
              .then(res => {
                  console.log(locations)
              })
              .catch(err => {
                      console.log(err)

                  }
              )
      }
    , [])

  return (
      props.user ?
      <LoadScript
          googleMapsApiKey="AIzaSyDwe7mK3t7whKxxe7871beT6frDf_2bgYg"
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