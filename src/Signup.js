import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import './Signup.css'
import {Link} from 'react-router-dom'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState()
  const [password, setPassword] = useState('')

  return( 

    <div className='signup'>
   <Link to="/">
    <TwitterIcon />
    </Link>
    <h1> Create your account </h1>
      <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <TextField id="outlined-basic" type="number" label="Phone" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)}/>
      <TextField id="outlined-basic" type="password" label="Password" variant="outlined"  value={password} onChange={(e) => setPassword(e.target.value)}/>
      <Button variant="contained" > Sign up </Button>
       <Link to="/login">
      <h4>Already have an account? </h4>
      </Link>
    </div>



  )   
}

export default Signup;
