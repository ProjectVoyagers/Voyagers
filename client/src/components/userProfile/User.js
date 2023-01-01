import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

import UserWrapper from "./layouts/UserWrapper.js";


const User = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/user" render={(props) => <UserWrapper {...props} />} />
      <Navigate from="/" to="/user/userProfile" />
    </Routes>
  </BrowserRouter>
  )
};

export default User;