import React from "react";
import Login from "./components/auth/login/login";
import Register from "./components/auth/signup/Register";
import LandingPage from "./pages/landingPage";
import TravelPackages from "./components/travel_packages/travel_packages";
import TravelPkgDesc from "./components/travel_pkg_desc/travel_pkg_desc.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./components/shop/Shop";
import CityMap from "./components/map/cityMap";

import Checkout from "./components/checkout//Checkout";
import AllCities from "./pages/AllCities";
import Packages from "./pages/TravelPackages";
//import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";import AllCities from "./pages/AllCities";

export const AppContext = React.createContext();

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />}>
        </Route>
        <Route exact path="/login" element={<Login />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/travelPackages" element={<Packages />}>
        </Route>
        <Route path="/travelPkgDesc" element={<TravelPkgDesc />}>
        </Route>
        <Route exact path="/shop" element={<Shop />}>
        </Route>
        <Route path="/cities" element={<AllCities />}>
        </Route>
        <Route exact path="/city" element={<CityMap />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
