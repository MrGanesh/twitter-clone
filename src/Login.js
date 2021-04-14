import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState()
  const [password, setPassword] = useState('')
  return( 

    <div className='login'>
    <Link to="/">
    <TwitterIcon />
    </Link>
    <h1> Login to Twitter </h1>
      <TextField id="outlined-basic" label="Phone, email or username" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <TextField id="outlined-basic" type="password" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" > Log in </Button> 
      <Link to="/signup">
      <h4>Don't have an account? </h4>
      </Link>
    </div>



  )   
}

export default Login;
