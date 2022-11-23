import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Destination1 from "../../Assets/Destination1.png";
import Destination2 from "../../Assets/Destination2.png";
import Destination3 from "../../Assets/Destination3.png";
import Destination4 from "../../Assets/Destination4.png";
import Destination5 from "../../Assets/Destination5.png";
import Destination6 from "../../Assets/Destination6.png";
import info1 from "../../Assets/info1.png";
import info2 from "../../Assets/info2.png";
import info3 from "../../Assets/info3.png";
import { NavLink } from "react-router-dom";

export default function TravelPackages() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "get",
        url: "http://localhost:5000/fetchAllPackages",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        responseType: "json",
      })
        .then((response) => {
          setData(response.data.data);
          console.log(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  // const packages = [
  //   "The Weekend Break",
  //   "The Package Holiday",
  //   "The Group Tour",
  //   "Family Trips",
  // ];

  // const [active, setActive] = useState(1);
  return (
    <Section id="TravelPackages">
      <div className="title">
        <h2 style={{ "margin-top": "4rem" }}>Travel Packages</h2>
      </div>
      {/* <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div> */}
      <div className="destinations">
        {data.map((destination) => {
          return (
            <NavLink
              to={{
                pathname: "/travelPkgDesc",
              }}
              state={{
                title: destination.title,
                subTitle: destination.subTitle,
                image: destination.image,
                cost: destination.cost,
                duration: destination.duration,
              }}
            >
              <div className="destination">
                <img src={destination.image} alt="" />
                <h3>{destination.title}</h3>
                <p>{destination.subTitle}</p>
                <div className="info">
                  <div className="services">
                    <img src={info1} alt="" />
                    <img src={info2} alt="" />
                    <img src={info3} alt="" />
                  </div>
                  <h4>{"BDT " + destination.cost}</h4>
                </div>
                <div className="distance">
                  <span></span>
                  <span>{destination.duration}</span>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </Section>
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
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin-top: 4rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(-0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
