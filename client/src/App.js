import React from "react";
import Login from "./components/auth/login/login";
import Register from "./components/auth/signup/Register";
import LandingPage from "./pages/landingPage";
import TravelPkgDesc from "./components/travel_pkg_desc/travel_pkg_desc.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/ShopPage.js";
import CityMap from "./components/map/cityMap";

import Checkout from "./components/checkout//Checkout";
import AllCities from "./pages/AllCities";
import Packages from "./pages/TravelPackages";
import Itinerary from "./components/itinerary/Itinerary";
import Posts from "./components/blog/Posts";
import Thanks from "./components/cart/Thanks";
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
        <Route exact path="/cart" element={<Checkout />}>
        </Route>
        <Route path="/cities" element={<AllCities />}>
        </Route>
        <Route exact path="/city" element={<CityMap />}>
        </Route>
        <Route exact path="/itinerary" element={<Itinerary />}>
        </Route>
        <Route exact path="/blogs" element={<Posts />}>
        </Route>
        <Route exact path="/thanks" element={<Thanks/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
