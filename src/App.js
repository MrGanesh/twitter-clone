import React, { useState } from "react";
import "./style.css";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Signup from "./Signup";
import Home from "./Home";
import Sidebar from "./Sidebar";
import RightBar from "./RightBar"
export default function App() {
  const [user, setUser] = useState(true);
  return (
    <>
      {user ? (
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
              <Route exact path="/home">
                <Home />
              
              </Route>

            </Switch>
            <RightBar />
          </Router>
        </div>
      )}
    </>
  );
}
