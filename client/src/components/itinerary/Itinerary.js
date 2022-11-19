import "./itinerary.css"

const Itinerary = (props) => {
  return (
    <>
      <section className="white-stripe arrow">
        <div className="container">
          <h3>Destinations</h3>
        </div>
      </section>
      <section className="timeline">
        <div className="container">
          <div className="row">
            <a href="http://asia.vasilis-tsirimokos.com/japan.html">
              <div className="country-block col-sm-6">
                <i className="jp"></i>
                Japan
              </div>
            </a>
            <div className="date-block col-sm-6">
              <div>11 April - 28 April</div>
            </div>
          </div>
          <div className="row">
            <a href="http://asia.vasilis-tsirimokos.com/vietnam.html">
              <div className="country-block reverse col-sm-6 col-sm-push-6">
                <i className="vt"></i>
                Vietnam
              </div>
            </a>
            <div className="date-block reverse col-sm-6 col-sm-pull-6">
              <div>28 April - 20 May</div>
            </div>
          </div>
          <div className="row">
            <a href="http://asia.vasilis-tsirimokos.com/cambodia.html">
              <div className="country-block cb col-sm-6">
                <i className="cb"></i>
                Cambodia
              </div>
            </a>
            <div className="date-block col-sm-6">
              <div>20 May - 29 May</div>
            </div>
          </div>
          <div className="row">
            <a href="http://asia.vasilis-tsirimokos.com/thailand.html">
              <div className="country-block reverse col-sm-6 col-sm-push-6">
                <i className="th"></i>
                Thailand
              </div>
            </a>
            <div className="date-block reverse col-sm-6 col-sm-pull-6">
              <div>29 May - 19 June</div>
            </div>
          </div>
          <div className="row">
            <a href="http://asia.vasilis-tsirimokos.com/malaysia.html">
              <div className="country-block col-sm-6">
                <i className="ml"></i>
                Malaysia
              </div>
            </a>
            <div className="date-block col-sm-6">
              <div>19 June - 3 July</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Itinerary;