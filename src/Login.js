import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import {useDataLayerValue} from './DataLayer'

function Login() {
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState()
  const [password, setPassword] = useState('')
  const userData = JSON.parse(localStorage.getItem('user'))
  const [{user}, dispatch] = useDataLayerValue()
 
    const signin = e => {
    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("Data in sign in", data);
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        dispatch({
          type:'SET_USER',
          user:data.user
        })
       history.push("/");
      });
  };

  return( 

    <div className='login'>
    <Link to="/">
    <TwitterIcon />
    </Link>
    <h1> Login to Twitter </h1>
      <TextField id="outlined-basic" label="Phone, email or username" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <TextField id="outlined-basic" type="password" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" onClick={(e)=> signin(e)}> Log in </Button> 
      <Link to="/signup">
      <h4>Don't have an account? </h4>
      </Link>
    </div>



  )   
}

export default Login;
