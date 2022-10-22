import * as React from 'react';
import Map, {Marker} from 'react-map-gl';
import {FaMapMarkerAlt} from 'react-icons/fa'
import "./CityMap.css"
import 'mapbox-gl/dist/mapbox-gl.css';

const CityMap = () => {
  const [viewport, setViewport] = React.useState({
    width: "100vw",
    height: "100vh",
    latitude: 21.4285,
    longitude: 91.9702,
    zoom: 12,
  });
  return (
    <div>
      <Map
        initialViewState={{
          ...viewport
        }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(viewport) => setViewport(viewport)}
        style={{width: "50vw", height: "100vh", paddingRight: "55rem"}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        attributionControl={false}
      >
        <Marker longitude={91.9702} latitude={21.4285}>
          <FaMapMarkerAlt size={30} color={'red'}/>
      </Marker>
      </Map>
    </div>
  );
}

export default CityMap;