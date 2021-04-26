import React, { useState } from "react";
import "./style.css";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Signup from "./Signup";
import Home from "./Home";
import Sidebar from "./Sidebar";
import ExploreFollower from "./ExploreFollower";
import Followers from "./Followers";
import RightBar from "./RightBar"
import {useDataLayerValue} from './DataLayer'
import Profile from './Profile'
import UserProfile from './UserProfile'
export default function App() {
  const [{user}, dispatch] = useDataLayerValue();

  const userAvailable = JSON.parse(localStorage.getItem('user'))
  return (
    <>
      {!userAvailable ? (
        <div>
          <Router>
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </Router>
        </div>
      ) : (
        <div className="mainPage">
          <Router>
            <Sidebar />

            <Switch>
              <Route exact path="/">
                <Home />
              
              </Route>
              <Route exact path="/profile">
                <Profile />
              
              </Route>
              <Route exact path="/profile/:userid">
                <UserProfile />
              
              </Route>
              <Route exact path="/subpost">
                <ExploreFollower />
              
              </Route>
              <Route exact path="/follow">
                <Followers />
              
              </Route>

            </Switch>
            <RightBar />
          </Router>
        </div>
      )}
    </>
  );
}
