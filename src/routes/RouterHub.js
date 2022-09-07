import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Dashboard } from "../containers/dashboard/Dashboard";
import { FilmDetail } from "../containers/filmDetail/FilmDetail";
import { Landing } from "../containers/landing/Landing";
import { Profile } from "../containers/profile/Profile";
import { isAuthenticated } from "../utility/Utility";
import { routes } from "./routes";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => isAuthenticated() ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />}
        />
    );
}

export const RouterHub = () => {
    return (
        <Switch>
            <div className="content">
                <Route exact path={routes.landing} component={Landing} />
                <PrivateRoute path={routes.dashboard} component={Dashboard} />
                <PrivateRoute path={routes.filmDetail} component={FilmDetail} />
                <PrivateRoute path={routes.profile} component={Profile} />
            </div>
        </Switch>
    )
}