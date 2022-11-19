import {useState, useEffect} from 'react';
import Map, {Marker, Popup, NavigationControl} from 'react-map-gl';
import {FaMapMarkerAlt} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'
import 'mapbox-gl/dist/mapbox-gl.css';
import "./CityMap.css"
import axios from 'axios';
import country from "../../Assets/Destination2.png";
import { useLocation } from "react-router-dom";

const CityMap = (props) => {
  const location = useLocation();
  const { state } = location;
  const [pins, setPins] = useState([]);
  const [showPopup, setShowPopup] = useState(null);
  const {countryName, countryId, latitude, longtitude} = state;

  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longtitude,
    zoom: 6,
  });
  

  const handleMarkerClick = (id, lat, long) => {
    setShowPopup(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };
  
  useEffect(() => {
    const getPins = async() => {
        try{
          const res = await axios({
            method: 'POST',
            url: 'http://localhost:5000/pins',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: {
              id: countryId
            }
          })
          console.log(res.data.data)
          setPins(res.data.data);
        } catch(err){
          console.log(err);
        }
      }
    getPins();
    },[countryId])

  return (
    <>
          <div class="tile">
            <div class="tile is-6 is-parent">
              <article class="tile is-child box">
              <div class="contain">
                <img src={country} alt="Avatar" class="img" />
                <div class="layover">{countryName}</div>
              </div>
              {pins.map(p => (
                  <>
                  <div class="columns is-multiline is-mobile">
                    <div class="column is-one-quarter">
                    <p class="title" onClick={() => handleMarkerClick(p._id, p.lat, p.longt)} style={{cursor: "pointer"}}>{p.title}</p>
                    </div>
                    <div class="column is-one-quarter">
                    </div>
                    <div class="column is-one-quarter">
                    </div>
                    <div class="column is-one-quarter">
                    <button class="btn">Save</button>
                    </div>
                  </div>
                  
                  <p class="subtitle">{p.rating} stars</p>
                  <span class="tag is-black mx-1">Historial Landmark</span>
                  <span class="tag is-black mx-1">Sights and Landmarks</span>
                  <span class="tag is-black mb-4">Historic Sights</span>
                  <div class="content">
                      <p>{p.descr}</p>
                  </div>
                  <hr />
                  </>
              ))}     
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child">
              <div>
                <Map
                  initialViewState={{
                    ...viewport
                  }}
                  mapboxAccessToken={process.env.REACT_APP_MAPBOX}
                  onViewportChange={(viewport) => setViewport(viewport)}
                  style={{width: "100vw", height: "100vh", position: "fixed"}}
                  mapStyle="mapbox://styles/mapbox/streets-v9"
                  attributionControl={false}
                >
                  {pins.map((p,index)=>(
                  <>
                    <Marker longitude={p.longt} latitude={p.lat} key={p._id}
                    >
                      <FaMapMarkerAlt 
                        fontSize={viewport.zoom * 7} 
                        color={'slateblue'}
                        cursor="pointer"
                        onClick={() => handleMarkerClick(p._id, p.lat, p.longt)}
                      />  
                    </Marker>
                    {p._id===showPopup && (
                    <Popup
                      key={p._id} 
                      longitude={p.longt} 
                      latitude={p.lat}
                      anchor="left"
                      closeButton={true}
                      closeOnClick={false}
                      >
                      <div className="card">
                            <label>Place</label>
                            <h4 className="place">{p.title}</h4>
                            <label>Review</label>
                            <p className="desc">{p.descr.substring(0,25)}...</p>
                            <label>Rating</label>
                            <div className="stars">
                              {Array(p.rating).fill(<AiOutlineStar className="star" />)}
                            </div>
                      </div>
                    </Popup>
                    )}
                  </>
                ))}
                <NavigationControl position='top-left'/>
                </Map>
              </div>
              </article>
            </div>
          </div>
        </>
    
  );
}

export default CityMap;