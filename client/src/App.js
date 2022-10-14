import React from "react";
import Login from "./components/auth/login/login";
import Register from "./components/auth/signup/Register";
import LandingPage from "./pages/landingPage";
import TravelPackages from "./components/travel_packages/travel_packages";
// import  Shop  from "./components/shop/Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./components/shop/Shop";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const AppContext = React.createContext();

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}>
        </Route>
        <Route exact path="/login" element={<Login/>}>
        </Route>
        <Route path="/register" element={<Register/>}>
        </Route>
        <Route path="/travelPackages" element={<TravelPackages/>}>
        </Route>
        {/* <Route exact path="/shop" element={<Shop/>}>
        </Route> */}
        <Route path="/Shop" element={<Shop/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
