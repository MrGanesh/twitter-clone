import React from "react";
import "./style.css";
import Login from './Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './LandingPage'
export default function App() {
  return (
    <div>
        <Router>
          
            <Switch>
                <Route expact path="/">
                   <LandingPage/>
                </Route>
                <Route expact path="/login">
                    <Login/>
                </Route>
            </Switch>
        </Router>
       
    </div>
  );
}
