import React, { useState } from "react";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import "./Sidebar.css";
import { Link, useHistory } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import AddPhotoAlternateOutlinedIcon from "@material-ui/icons/AddPhotoAlternateOutlined";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function Sidebar() {
  const history = useHistory()
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user.email.split("@");
  const useStyles = makeStyles(theme => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      height: '135px',
      width: '-webkit-fill-available',
      maxWidth: '300px',
      // padding: '16px 32px 24px',
      position: 'fixed',
      boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)',
      borderRadius: '10px',
      backgroundColor: '#fff',
      bottom: '25%',
      left: '5%',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column'
    }
  }));

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    // const top = 50 + rand();
    // const left = 50 + rand();
    // return {
    //   top: `${top}%`,
    //   left: `${left}%`,
    //   transform: `translate(-${top}%, -${left}%)`
    // };
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div className="sidebar">
      <Link to="/">
        <TwitterIcon />
      </Link>
      <Link to="/">
        {" "}
        <IconButton>
          {" "}
          <HomeIcon /> Home{" "}
        </IconButton>{" "}
      </Link>
      <Link to="/profile">
        {" "}
        <IconButton>
          {" "}
          <PermIdentityOutlinedIcon />
          Profile{" "}
        </IconButton>
      </Link>
      <Link to="/subpost">
        <IconButton>
          {" "}
          <AddPhotoAlternateOutlinedIcon /> Explore  Followers{" "}
        </IconButton>
      </Link>
      <Link to="/follow">
        <IconButton>
          {" "}
          <NotificationsActiveOutlinedIcon /> Followers{" "}
        </IconButton>
      </Link>
      <Link to="/following">
        <IconButton>
          {" "}
          <EmailOutlinedIcon />
        Following{" "}
        </IconButton>
      </Link>
      <IconButton>
        {" "}
        <AppsOutlinedIcon />
        More{" "}
      </IconButton>

      <Button variant="contained" className="tweetButton" onClick={(e) => {
        e.preventDefault();
        history.push('/')
      }}>
        {" "}
        Tweet
      </Button>

      <div className="logOutSection" onClick={handleOpen}>
        <div>
          <img className="imgSection" src={user?.pic} />
        </div>
        <div>
          <h6> {user ? user.name : ""} </h6>
          <p> @{userEmail ? userEmail[0] : ""}</p>
        </div>
      </div>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <div className="logOutSectionModal">
            <div>
              <img className="imgSection" src={user?.pic} />
            </div>
            <div>
              <h6> {user ? user.name : ""} </h6>
              <p> @{userEmail ? userEmail[0] : ""}</p>
            </div>
          </div>
          <div className="logOutBtnModal" onClick={(e) => {
            e.preventDefault()
            localStorage.clear()
          }}>
            <p style={{ margin: '10px 0px 10px 0px', fontSize: '16px', width: '100%' }}> Logout @{userEmail ? userEmail[0] : ""}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Sidebar;
