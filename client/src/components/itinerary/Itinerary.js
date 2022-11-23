import { useEffect, useState } from "react";
import "./itinerary.css";
// import axios from "axios";
import {useLocation} from 'react-router-dom';

const Itinerary = (props) => {
  const [city, setCities] = useState([]);
  const location = useLocation();
  const { state } = location;
  const {list} = state;

  useEffect(() => {
    const getPins = async () => {
      try {
        // const res = await axios({
        //   method: "GET",
        //   url: "http://localhost:5000/getCities",
        //   headers: {
        //     "Content-Type": "application/x-www-form-urlencoded",
        //   },
        // });
        // console.log(res.data.data);
        setCities(list);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, [list]);

  return (
    <>
      <section className="white-stripe arrow">
        <div className="container">
          <h3>Destinations</h3>
        </div>
      </section>
      <section className="timeline1">
        <div className="container">
          {city.map((c, index) => (
            <div className="row">
              <a href="">
                <div className={ (index+1) % 2 !== 0 ? "country-block col-sm-6" : "country-block reverse col-sm-6 col-sm-push-6"}>
                  <i className="jp"></i>
                  {c.title}
                </div>
              </a>
              <div className={(index+1) % 2 !== 0 ? "date-block col-sm-6" : "date-block reverse col-sm-6 col-sm-pull-6"}>
                <div>11 April - 28 April</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Itinerary;
