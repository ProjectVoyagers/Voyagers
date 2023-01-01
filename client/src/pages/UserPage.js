import { BrowserRouter, Route, Switch, Redirect, Navigate, Routes } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "../components/userProfile/css/animate.min.css";
// import "../components/userProfile/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
// import "../components/userProfile/css/demo.css";
// import "../@fortawesome/fontawesome-free/css/all.min.css";

import UserLayout from "../components/userProfile/User.js";
import Navbar from "../components/navbar/Navbar";


const User = () => {
    return (
        <>
            <Navbar />
            <UserLayout />
        </>
    )
};

export default User;
