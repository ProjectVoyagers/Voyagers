import {useState, useEffect} from 'react';
import axios from 'axios';
import "./CityList.css";
import {NavLink } from "react-router-dom";
import styled from "styled-components";
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
        <Section>
        <div className="title">
        <h2 style={{"margin-top": "4rem"}}>Destinations</h2>
      </div>
          <div className='destinations'>        
            {allCities.map(city => (
              <NavLink to={{
                pathname: "/city"}} state={{countryName: city.Name, countryId: city._id, latitude: city._lat, longtitude: city._long}}>
                  <div className='destination'>
                    <button className='custom-btn btn-3'>
                    <span>{city.Name}</span></button> 
                </div>
              </NavLink>
            ))}
          </div>
        </Section>
        </>
    );
}
const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1rem;
    margin-top: 1rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      // background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        // transform: translateX(-0.4rem) translateY(-1rem);
        // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
export default CityList;

