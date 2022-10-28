import {useState, useEffect} from 'react';
import axios from 'axios';
import "./CityList.css";
import {NavLink } from "react-router-dom";
const CityList = () => {
    
    const [allCities, setAllCities] = useState([])

    useEffect(() => {
        const getCities = async() => {
            try{
              const res = await axios({
                method: 'get',
                url: 'http://localhost:5000/cities',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
              })
              console.log(res.data.data)
              setAllCities(res.data.data);
            } catch(err){
              console.log(err);
            }
          }
          getCities();
        },[])

    return(
        <>        
            {allCities.map(city => (
                <>
                    <NavLink to={{
                        pathname: "/city"}} state={{countryName: city.Name, countryId: city._id, latitude: city._lat, longtitude: city._long}}>
                    <button className='custom-btn btn-3'>
                    <span>{city.Name}</span></button> 
                    </NavLink>
                </>
            ))}
            
        </>
    );
}
export default CityList;