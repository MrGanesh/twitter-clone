import React from "react";
import "./Profile.css";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import DateRangeIcon from "@material-ui/icons/DateRange";
function Profile() {
  return (
    <div className="profile">
      <div className="headerSection">
        <IconButton>
          <KeyboardBackspaceIcon />
        </IconButton> 
        <div>
        <h3>Ganesh Kulkarni</h3>
        <p>1 Tweet </p>
        </div>
      </div>
      <div className="dpCover">
        <div className="coverImage" />
        <div className="dpSection">
          <div className="leftSection">
            <div>
              <img
                className="imgSection"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-3PEkg0txBy4laXIQVTSKLHXxZfKv2GhRYDHK4nKoHdXpV-x&s"
              />
            </div>
            <div  style={{
                "align-items": "center",
                'display': '"flex',
                'margin': "5px"
              }}>
              <h4> Ganesh Kulkarni </h4>
              <p> @ganeshkulkarni689</p>
            </div>

            <div
              style={{
                "align-items": "center",
                'display': "flex",
                'margin': '10px 10px 10px 5px'
              }}
            >
              <DateRangeIcon style={{'padding-right': '0px'}} /> <p>Joined October 2017</p>
            </div>

            <div  style={{
                "align-items": "center",
                'display': "flex",
                'margin': "10px",
                
              }}>

                <p style={{
               
                'margin-right': "10px",
                
              }}>  1 follower </p>
                <p>  2 following </p>
                  
            </div>

          </div>
          <div className="rightSection">
            <Button variant="contained" className="profileButton">
              Set up profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
