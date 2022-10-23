import {useState, useEffect} from 'react';
import Map, {Marker, Popup, NavigationControl} from 'react-map-gl';
import {FaMapMarkerAlt} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'
import 'mapbox-gl/dist/mapbox-gl.css';
import "./CityMap.css"
import axios from 'axios';

const CityMap = (props,ref) => {
  const [pins, setPins] = useState([]);
  const [showPopup, setShowPopup] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 21.4285,
    longitude: 91.9702,
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
    <>
          <div class="tile">
            <div class="tile is-6 is-parent">
              <article class="tile is-child box">
              {pins.map(p => (
                  <>
                  <p class="title" onClick={() => handleMarkerClick(p._id, p.lat, p.longt)} style={{cursor: "pointer"}}>{p.title}</p>
                  <p class="subtitle">{p.rating} stars</p>
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
                  style={{width: "100vw", height: "100vh"}}
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
                            <p className="desc">{p.descr}</p>
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