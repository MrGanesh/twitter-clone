import React, { useState, useEffect } from "react";
import "./Home.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { useDataLayerValue } from "./DataLayer";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import {Link} from 'react-router-dom'

function Home() {
  const [textBody, setTextBody] = useState();
  const [image, setImage] = useState();
  const [url, setUrl] = useState();
  const [data, setData] = useState();
  const [openComment, setOpenComment] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch("http://localhost:5000/allpost", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data.posts);
      });
  }, []);

  useEffect(() => {
    if (url) {
      fetch("http://localhost:5000/createpost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          body: textBody,
          pic: url
        })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setTextBody("");
        });
    }
  }, [url]);

  const postDetails = e => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "insta-clone");
    data.append(" _name", "saaho-insta");
    fetch("https://api.cloudinary.com/v1_1/saaho-insta/image/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then(data => {
        console.log("url", data.url);
        setUrl(data.url);
      })
      .catch(err => {
        console.log(err);
      });
  };

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

  // const makeComment = (text, postID) => {
  //    fetch("http://localhost:5000/comment",{
  //      method:"put",
  //       headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + localStorage.getItem("token")
  //     },
  //     body:JSON.stringify({
  //       postID,
  //       text
  //     })
  //    }).then(res=> res.json())
  //    .then(data=> {
  //      console.log('data in comment',data)
  //    })
  // }

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

  return (
    <div className="home">
      <div className="postSection">
        <h3>Home</h3>

        <div className="textSection">
          <div>
            <img className="imgSection" src={user?.pic} />
          </div>
          <div style={{ width: "100%" }}>
            <TextField
              id="standard-basic"
              value={textBody}
              onChange={e => setTextBody(e.target.value)}
              label="What's happening?"
            />
            <TextField
              id="standard-basic"
              type="file"
              onChange={e => {
                setImage(e.target.files[0]);
              }}
            />
            <div className="submitButton">
              <Button
                variant="contained"
                className="subButton"
                onClick={e => postDetails(e)}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="post">
        {data?.map(item => (
          <div className="textSection">
            <div>
              <img className="imgsSection" src={item.postedBy.pic} />
            </div>
            <div>
              <div className="userDetail">
                <h5>
                    <Link to={item.postedBy._id !== user._id ? '/profile/'+item.postedBy._id : 'profile'}> 
                        {item.postedBy.name}
                    </Link>
                </h5>
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

export default Home;
