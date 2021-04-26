import React, { useState,useEffect } from "react";
import "./Profile.css";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import TwitterIcon from '@material-ui/icons/Twitter';
import {Link,useParams} from 'react-router-dom'
import { Button } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";


import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import './UserProfile.css'

function Profile() {

  const [data,setData] = useState()
   const [openComment, setOpenComment] = useState(false);
   const [userProfile, setUserProfile] = useState()
   const {userid} = useParams()
  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = userProfile?.email.split("@");


 const FollowClick=(e)=>{
    e.preventDefault()
    fetch(`http://localhost:5000/follow`,{
      method:'put',
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer '+localStorage.getItem('token')
        },
        body: JSON.stringify({
          id:userid
        })
      
    }) .then(res=> res.json())
        .then(result=> console.log('result in follow API',result))
  }

 const UnFollowClick=(e)=>{
    e.preventDefault()
    fetch(`http://localhost:5000/unfollow`,{
      method:'put',
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer '+localStorage.getItem('token')
        },
        body: JSON.stringify({
          id:userid
        })
      
    }) .then(res=> res.json())
        .then(result=> console.log('result in Unfollow API',result))
  }

useEffect(()=>{
      fetch(`http://localhost:5000/user/${userid}`, {
        method:'get',
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer '+localStorage.getItem('token')
        }
      }).then(res=> res.json())
      .then(data=> {
        console.log('data in userProfile',data)
        setData(data.post)
        setUserProfile(data.user)
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
          <h3>{userProfile?.name}</h3>
          <p>1 Tweet </p>
        </div>
      </div>
      <div className="dpCover">
        {/* <div className="coverImage" /> */}
        <div className="dpSection">
          <div className="leftsSection">
            <div>
              <img
                className="imgSectionModal"
                src={
                  userProfile
                    ? userProfile.pic
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
              <h4> {userProfile?.name} </h4>
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
                {userProfile?.followers.length} follower{" "}
              </p>
              <p> {userProfile?.following.length} following </p>

            </div>
            <div> 
            {user.following.includes(userid)? (
                <Button
              variant="contained"
              className="followButton"
              onClick={(e)=>UnFollowClick(e)}
            >
              UnFollow
            </Button>
            ) : (
                  <Button
              variant="contained"
              className="followButton"
              onClick={(e)=>FollowClick(e)}
            >
              Follow
            </Button>

            )}

          
            
            </div>
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
    


     
    </div>
  );
}

export default Profile;
