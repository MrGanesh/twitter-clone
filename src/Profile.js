import React, { useState } from "react";
import "./Profile.css";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import TwitterIcon from '@material-ui/icons/Twitter';

function Profile() {
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [image, setImage] = useState()
  const useStyles = makeStyles(theme => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      position: "absolute",
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: '10px'
    }
  }));

  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user.email.split("@");


  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="profile">
      <div className="headerSection">
        <IconButton>
          <KeyboardBackspaceIcon />
        </IconButton>
        <div>
          <h3>{user?.name}</h3>
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
                src={
                  user
                    ? user.pic
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-3PEkg0txBy4laXIQVTSKLHXxZfKv2GhRYDHK4nKoHdXpV-x&s"
                }
              />
            </div>
            <div
              style={{
                "align-items": "center",
                display: '"flex',
                margin: "5px"
              }}
            >
              <h4> {user?.name} </h4>
              <p> @{userEmail ? userEmail[0] : ""}</p>
            </div>

            <div
              style={{
                "align-items": "center",
                display: "flex",
                margin: "10px 10px 10px 5px"
              }}
            >
              <DateRangeIcon style={{ "padding-right": "0px" }} />{" "}
              <p>Joined October 2017</p>
            </div>

            <div
              style={{
                "align-items": "center",
                display: "flex",
                margin: "10px"
              }}
            >
              <p
                style={{
                  "margin-right": "10px"
                }}
              >
                {" "}
                {user.followers.length} follower{" "}
              </p>
              <p> {user.following.length} following </p>
            </div>
          </div>
          <div className="rightSection">
            <Button
              variant="contained"
              className="profileButton"
              onClick={handleOpen}
            >
              Set up profile
            </Button>
          </div>
        </div>
      </div>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
        <div className="twitterIcon">
            <TwitterIcon />
        </div>
       
          <h2 style={{margin: '10px 0px 10px 0px'}}>Pick a profile picture</h2>
          <p style={{margin: '10px 0px 10px 0px'}}>
           Have a favorite selfie? Upload it now.
          </p>

          <div class="image-upload">
            <label for="file-input"> 
            {console.log("image >> ", image)}
              <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqD5qczXVLXW420t8DmaCVx8r_3-ohwona0tJygDLg0E4OrpX&s" />
            </label>

            <input id="file-input" type="file"  onChange={e => setImage(e.target.files[0]) } />
          </div>
          <div className="changeImgBtn">
              <Button
              variant="contained"
              className="profileButton"
              
            >
            submit
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Profile;
