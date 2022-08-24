import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Header } from './components/header/Header';
import { Dashboard } from './containers/dashboard/Dashboard';
import { FilmDetail } from './containers/filmDetail/FilmDetail';
import { Profile } from './containers/profile/Profile';
import { routes } from './routes';

import './App.css';



function App() {
  return (
    <Router>
      <Header />
      {/* <body> */}
        <Switch>
          <Route path={routes.dashboard} component={Dashboard} />
          <Route path={routes.filmDetail} component={FilmDetail} />
          <Route path={routes.profile} component={Profile} />
        </Switch>
      {/* </body> */}
    </Router>
  );
}

export default App;
