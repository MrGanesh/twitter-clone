import React from "react";
import TextField from '@material-ui/core/TextField';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import './Login.css'


function Login() {


  return( 

    <div className='login'>
    <TwitterIcon />
    <h1> Login to Twitter </h1>
      <TextField id="outlined-basic" label="Phone, email or username" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <Button variant="contained" > Log in </Button>
    </div>



  )   
}

export default Login;
