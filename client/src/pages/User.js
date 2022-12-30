import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../components/userProfile/css/animate.min.css";
import "../components/userProfile/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "../components/userProfile/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import UserLayout from "layouts/userProfile.js";


const User = () => {
    return(
        <>
            <Switch>
                <Route path="/user" render={(props) => <UserLayout {...props} />} />
                <Redirect from="/" to="/user/userProfile" />
        </Switch>  
        </>
    )
}
