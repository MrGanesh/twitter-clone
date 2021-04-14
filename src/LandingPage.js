import React from "react";
import TextField from "@material-ui/core/TextField";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "@material-ui/core/Button";
import "./LandingPage.css";
import {Link, useHistory} from 'react-router-dom'
function LandingPage() {
  const history = useHistory()

  // const toLogin = () => {
  //   console.log('button pressed')
  //   history.push('/login')
  // }
  // const toLogin = () => {
  //   console.log('button pressed')
  //   history.push('/login')
  // }
  return (
    <div className="landingPage">
      <div className="landingPageRight" />

      <div className="landingPageLeft">
        <TwitterIcon />
        <h1> Happening now </h1>
        <h4>Join Twitter today. </h4>

        <Link to="signup">
        <Button variant="contained" className="signupButton">
          Sign up
        </Button>
        </Link>

        <Link to="/login">
        <Button variant="contained" className="loginButton">
          Log in
        </Button>
       </Link>
      </div>
    </div>
  );
}

export default LandingPage;
