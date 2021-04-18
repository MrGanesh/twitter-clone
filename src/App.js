import React from "react";
import "./style.css";
import Login from './Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import Signup from './Signup'
import Home from './Home'
export default function App() {
  return (
    <div>
        <Router>
          
            <Switch>
                <Route exact path="/">
                   <LandingPage/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/signup">
                    <Signup/>
                </Route>
                <Route exact path="/home">
                    <Home/>
                </Route>
            </Switch>
        </Router>
       
    </div>
  );
}
