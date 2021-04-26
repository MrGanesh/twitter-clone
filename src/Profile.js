import React, { useState,useEffect } from "react";
import "./Profile.css";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import TwitterIcon from '@material-ui/icons/Twitter';
import {Link} from 'react-router-dom'

import TextField from "@material-ui/core/TextField";


import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from '@material-ui/icons/ModeComment';

function Profile() {
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [image, setImage] = useState()
  const [data,setData] = useState()
   const [openComment, setOpenComment] = useState(false);
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

 const makeComment = (text,postID) => {
        fetch('http://localhost:5000/comment',{
            method:'put',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem('token')
            },
            body: JSON.stringify({
                postID,
                text,
            })
        }).then(res => res.json())
        .then(result => {
            console.log(result)
          
        }).catch(err =>console.log(err));
        // })
    }

const likePost = id => {
    fetch("http://localhost:5000/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify({
        postID: id
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("data in like post", data);
      });
  };

  const unlikePost = id => {
    fetch("http://localhost:5000/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify({
        postID: id
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("data in like post", data);
      });
  };



  useEffect(()=> {
        if(image){
           const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","saaho-insta")
        
        fetch("https://api.cloudinary.com/v1_1/saaho-insta/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{

            console.log("data in cloudinary",data)

            fetch('http://localhost:5000/updateProfile', {
              method:'put',
              headers :{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
              },
              body: JSON.stringify({
                  pic:data.url
              })
            }).then(res=> res.json())
            .then(data=> {
              console.log("data in upload", data)
                  localStorage.setItem('user', JSON.stringify(data))
            } )
        })


        }
  },[image])

useEffect(()=>{
      fetch('http://localhost:5000/mypost', {
        method:'get',
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer '+localStorage.getItem('token')
        }
      }).then(res=> res.json())
      .then(data=> {setData(data.post)
      console.log('data in mypost',data)
       localStorage.setItem('user', JSON.stringify(data.user))
      })
},[])

  return (
    <div className="profile">
      <div className="headerSection"> 
      <Link to="/">
        <IconButton>
          <KeyboardBackspaceIcon />
        </IconButton>
        </Link>
        <div>
          <h3>{user?.name}</h3>
          <p>1 Tweet </p>
        </div>
      </div>
      <div className="dpCover">
        {/* <div className="coverImage" /> */}
        <div className="dpSection">
          <div className="leftSection">
            <div>
              <img
                className="imgSectionModal"
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
     
         <div className="postSection">
          <h2 style={{ color: 'rgba(29,161,242,1.00)', fontWeight:900, padding:'0px 0px 10px 10px'}}>Tweet</h2>
             {data?.map(item => (
          <div className="textSection">
            <div>
              <img className="imgsSection" src={item.postedBy.pic} />
            </div>
            <div>
              <div className="userDetail">
                <h5>{item.postedBy.name}</h5>
                {/* <p>@{item.postedBy.email.remove('@')}</p> */}
                <p>17 apr</p>
              </div>
              <div style={{ height: "auto", padding: "10px" }}>{item.body}</div>

              {item.pic && (
                <div>
                  <img width="100px" height="100px" src={item.pic} />
                </div>
              )}
              <div className="actionIcons">
               { openComment ? (
                <IconButton onClick={(e)=> { e.preventDefault() 
                setOpenComment(false)}}>
                  <ModeCommentIcon /> {item.comments.length} 
                </IconButton>
               ) : (
                <IconButton  onClick={(e)=> { e.preventDefault() 
                setOpenComment(true)}}>
                  <ModeCommentOutlinedIcon /> {item.comments.length} 
                </IconButton>
               )
            }
               
               
                <IconButton>
                  <RepeatIcon />
                </IconButton>
              
                {item.likes.includes(user._id) ? (
                  <IconButton onClick={() => unlikePost(item._id)}>
                    <FavoriteIcon /> {item.likes.length} 
                  </IconButton>
                ) : (
                  <IconButton onClick={() => likePost(item._id)}>
                    <FavoriteBorderOutlinedIcon /> {item.likes.length} 
                  </IconButton>
                )}

                <IconButton>
                  <CloudDownloadIcon />
                </IconButton>
              </div>
              
               { openComment ? (
                 <>
                 <div>
                 {item.comments.map(record=> {
                  return(
                    <h6 key={item._id}><span><strong>{record.postedBy.name}</strong></span> : {record.text} </h6>
                  )
                })}
                
                </div>
              <form onSubmit={(e) => {
                                e.preventDefault();
                               
                                makeComment(e.target[0].value, item._id)
                             
                            }}
                            
                           style={ item._id && openComment ? { display:'block'} : {display : 'none'} }  >
                    <TextField
                    id="standard-basic"
          
                    label="add comment"
                  />
              </form>
                </>
               ): 
               null
              }
             
            </div>
          </div>
        ))}
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
          {/* <div className="changeImgBtn">
              <Button
              variant="contained"
              className="profileButton"
              
            >
            submit
            </Button>
          </div> */}
        </div>
      </Modal>


     
    </div>
  );
}

export default Profile;
