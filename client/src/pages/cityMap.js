import {useState, useEffect} from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import {FaMapMarkerAlt} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'
import 'mapbox-gl/dist/mapbox-gl.css';
import "./CityMap.css"
import axios from 'axios';

const CityMap = () => {
  const [pins, setPins] = useState([]);
  const [showPopup, setShowPopup] = useState(true);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 21.4285,
    longitude: 91.9702,
    zoom: 8,
  });

  useEffect(() => {
    const getPins = async() => {
      try{
        const res = await axios({
          method: 'get',
          url: 'http://localhost:5000/pins',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        console.log(res.data.data)
        setPins(res.data.data);
      } catch(err){
        console.log(err);
      }
    }
    getPins();
  },[])

  return (
    <div>
      <Map
        initialViewState={{
          ...viewport
        }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(viewport) => setViewport(viewport)}
        style={{width: "50vw", height: "100vh", left: "50%"}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        attributionControl={false}
      >
        {pins.map(p=>(
        <>
          <Marker longitude={p.longt} latitude={p.lat}>
            <FaMapMarkerAlt size={30} color={'slateblue'}/>
          </Marker>
          <Popup longitude={p.longt} latitude={p.lat}
            anchor="left"
            closeButton={false}
            closeOnClick={true}
            onClose={() => setShowPopup(!showPopup)}>
            <div className="card">
                  <label>Place</label>
                  <h4 className="place">{p.title}</h4>
                  <label>Review</label>
                  <p className="desc">{p.descr}</p>
                  <label>Rating</label>
                  <div className="stars">
                    {Array(p.rating).fill(<AiOutlineStar className="star" />)}
                  </div>
            </div>
          </Popup>
        </>
      ))}
      </Map>
    </div>
  );
}

export default CityMap;