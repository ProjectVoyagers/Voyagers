import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./assets/scss/light-bootstrap-dashboard-react.scss";

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