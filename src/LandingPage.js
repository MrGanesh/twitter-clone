import React from "react";
import TextField from "@material-ui/core/TextField";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "@material-ui/core/Button";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="landingPageRight" />

      <div className="landingPageLeft">
        <TwitterIcon />
        <h1> Happening now </h1>
        <h4>Join Twitter today. </h4>

        <Button variant="contained" className="signupButton">
          Sign up
        </Button>
        <Button variant="contained" className="loginButton">
          Log in
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
