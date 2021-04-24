import React from 'react'
import './Profile.css'
import {Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
function Profile(){
    return(
      <div className="profile">
          <div className="headerSection">
               <IconButton>
                    <KeyboardBackspaceIcon />
               </IconButton>
                <h3>Ganesh Kulkarni</h3>
          </div>
      </div>
    )
}

export default Profile