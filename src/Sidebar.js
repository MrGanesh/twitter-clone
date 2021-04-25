import React from 'react'
import {Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';

function Sidebar(){
   const user = JSON.parse(localStorage.getItem("user"));
    return(
      <div className="sidebar">
            <Link to="/">
          <TwitterIcon />
          </Link>
          <Link to="/">   <IconButton> <HomeIcon/> Home </IconButton> </Link>
            <IconButton> <AddPhotoAlternateOutlinedIcon/> Explore </IconButton>
            <IconButton> <NotificationsActiveOutlinedIcon/> Notification </IconButton>
            <IconButton> <EmailOutlinedIcon/>Messages </IconButton>
          <Link to="/profile">  <IconButton> <PermIdentityOutlinedIcon/>Profile </IconButton></Link>
            <IconButton> <AppsOutlinedIcon/>More </IconButton>
            <Button variant="contained" className="tweetButton" > Tweet</Button> 

            <div className="logOutSection">
                <div>
                  <img className="imgSection" src={user?.pic} />
                </div>
                <div>
                <h6> Ganesh Kulkarni </h6>
               <p> @ganeshkulkarni </p>
                </div>
            </div>
      </div>
    )
}

export default Sidebar