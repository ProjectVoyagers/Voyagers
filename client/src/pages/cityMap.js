import * as React from 'react';
import Map, {Marker} from 'react-map-gl';
import {FaMapMarkerAlt} from 'react-icons/fa'
import "./CityMap.css"

const CityMap = () => {
  return (
    <Map
      initialViewState={{
        longitude: 92.0058,
        latitude: 21.4272,
        zoom: 12
      }}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      style={{width: "50vw", height: "100vh",paddingLeft: "55rem"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      attributionControl={false}
    >
      <Marker longitude={92.0028} latitude={21.4693} scale={20}>
        <FaMapMarkerAlt style={{fontSize: 30}}/>
    </Marker>
    </Map>
    
  );
}

export default CityMap;