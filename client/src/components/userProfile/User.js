import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

import UserLayout from "./layouts/UserWrapper.js";


root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/user" render={(props) => <UserLayout {...props} />} />
      <Navigate from="/" to="/user/userProfile" />
    </Routes>
  </BrowserRouter>
);
