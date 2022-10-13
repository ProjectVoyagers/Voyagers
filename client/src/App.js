import React from "react";
import Login from "./components/auth/login/login";
import Register from "./components/auth/signup/Register";
import LandingPage from "./pages/landingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
