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
    return(
      <div className="sidebar">
            <Link to="/">
          <TwitterIcon />
          </Link>
            <IconButton> <HomeIcon/> Home </IconButton>
            <IconButton> <AddPhotoAlternateOutlinedIcon/> Explore </IconButton>
            <IconButton> <NotificationsActiveOutlinedIcon/> Notification </IconButton>
            <IconButton> <EmailOutlinedIcon/>Messages </IconButton>
            <IconButton> <PermIdentityOutlinedIcon/>Profile </IconButton>
            <IconButton> <AppsOutlinedIcon/>More </IconButton>
            <Button variant="contained" className="tweetButton" > Tweet</Button> 
      </div>
    )
}

export default Sidebar