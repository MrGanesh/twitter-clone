import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "@material-ui/core/Button";
import "./Signup.css";
import { Link, useHistory } from "react-router-dom";

function Signup() {
  const history = useHistory()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState();
  const [password, setPassword] = useState("");

  const signup = e => {
    fetch("http://localhost:5000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        pic,
        password
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("Data in signup", data);
        history.push("/login");
      });
  };

  return (
    <div className="signup">
      <Link to="/">
        <TwitterIcon />
      </Link>
      <h1> Create your account </h1>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        type="text"
        label="Profile Pic"
        variant="outlined"
        value={pic}
        onChange={e => setPic(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        type="password"
        label="Password"
        variant="outlined"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={e => signup(e)}>
        {" "}
        Sign up{" "}
      </Button>
      <Link to="/login">
        <h4>Already have an account? </h4>
      </Link>
    </div>
  );
}

export default Signup;
