import {useState, useEffect} from 'react';
import Map, {Marker, Popup, NavigationControl} from 'react-map-gl';
import {FaMapMarkerAlt} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'
import 'mapbox-gl/dist/mapbox-gl.css';
import "./CityMap.css"
import axios from 'axios';
import country from "../../Assets/Destination2.png";
import { useLocation } from "react-router-dom";
import {useNavigate } from "react-router-dom";

const CityMap = (props) => {
  const location = useLocation();
  const { state } = location;
  const [pins, setPins] = useState([]);
  const [showPopup, setShowPopup] = useState(null);
  const {countryName,countryImage, countryId, latitude, longtitude} = state;
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  
  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longtitude,
    zoom: 6,
  });

  const addCity = (item) => {
    if(list.indexOf(item) !== -1) return;
    setList([...list, item]);
  }


  const postItinerary = () => {
    // e.preventDefault()
    console.log(list);
    try{
      // await axios({
      //   method: 'POST',
      //   url: 'http://localhost:5000/addCities',
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   data: {
      //     list: list 
      //   }
      // })
      navigate('/itinerary',{state:{list: list}});
    } catch(err){
      console.log(err);
    }
  } 
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
    
      <div className="tile_map">
        <div className='left_side'>
            <div className="tile_map is-6 is-parent">
              <article className="tile_map is-child box">
              <div className="contain_map">
                <img src={countryImage} alt="Avatar" className="img" />
                <div className="layover">{countryName}</div>
              </div>
              
              {pins.map(p => (
                  <>
                  <div className="columns_map is-multiline is-mobile">
                    <div className="column_map is-one-quarter">
                    <p className="title_map" onClick={() => handleMarkerClick(p._id, p.lat, p.longt)} style={{cursor: "pointer"}} value={p.title}>{p.title}</p>
                    </div>
                    <div className="column_map is-one-quarter">
                    </div>
                    <div className="column_map is-one-quarter">
                    </div>
                    <div className="column_map is-one-quarter">
                    <button className="btn_map" onClick={() => {
                      addCity(p)
                    } 
                      
                      }>
                        Save
                        </button>
                    </div>
                  </div>
                  
                  <p className="subtitle_map" value={p.rating}>{p.rating} stars</p>
                  <span className="tag_map is-black mx-1">Historial Landmark</span>
                  <span className="tag_map is-black mx-1">Sights and Landmark</span>
                  <span className="tag_map is-black mb-4">Historic Sights</span>
                  <div className="content_map">
                      <p value={p.descr}>{p.descr}</p>
                  </div>
                  <hr />
                  </>
              ))}
                  <button className="btn_map" onClick={() => postItinerary()}>
                      Go to itinerary
                  </button>        
              </article>
          </div>
          </div>
            <div className="tile_map is-parent">
              <article className="tile_map is-child">
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
                          <div className="card_map">
                            <div className='label_map'> <label>Place</label></div>                            
                            <h4 className="place">{p.title}</h4>
                            <div className='label_map'> <label>Review</label></div>                            
                            <p className="desc">{p.descr.substring(0, 25)}...</p>
                            <div className='label_map'><label>Rating</label> </div>
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