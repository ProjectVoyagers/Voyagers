import { useEffect, useState } from "react";
import "./itinerary.css";
import axios from "axios";

const Itinerary = (props) => {
  const [city, setCities] = useState([]);

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: "http://localhost:5000/getCities",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        // console.log(res.data.data);
        setCities(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  return (
    <>
      <section className="white-stripe arrow">
        <div className="container">
          <h3>Destinations</h3>
        </div>
      </section>
      <section className="timeline">
        <div className="container">
          {city.map((c, index) => (
            <div className="row">
              <a href="http://asia.vasilis-tsirimokos.com/japan.html">
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
