import React, { useState,useEffect } from "react";
import "./Home.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

function Home() {
  const [textBody, setTextBody] = useState();
  const [image, setImage] = useState();
  const [url, setUrl] = useState();
  const [data, setData] = useState();

  useEffect(()=> {
     fetch("http://localhost:5000/allpost", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token")
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setData(data.posts)
        });
  }, [])


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

  const postDetails = (e) => {
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
        console.log('url', data.url)
        setUrl(data.url);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="home">
      <div className="postSection">
        <h3>Home</h3>

        <div className="textSection">
          <div>
            <img
              className="imgSection"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2l_gilSBHxWe8fCq98Oiw83hqHwhtgY1w17tDde3QWisyvJI&s"
            />
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
      {
        data?.map(item => (
                 <div className="textSection">
          <div>
            <img
              className="imgsSection"
              src={item.postedBy.pic}
            />
          </div>
          <div>
            <div className="userDetail">
              <h5>{item.postedBy.name}</h5>
              {/* <p>@{item.postedBy.email.remove('@')}</p> */}
              <p>17 apr</p>
            </div>
            <div  style={{height: "auto",
    padding: "10px"}}>
             {item.body}
            </div>
             
            {item.pic && 
             <div>
              <img width="100px" height="100px"
              src={item.pic}
            />  
            </div>
            }
           
            <div className="actionIcons">
              <IconButton>
                <ModeCommentOutlinedIcon />
              </IconButton>
              <IconButton>
                <RepeatIcon />
              </IconButton>
              <IconButton>
                <FavoriteBorderOutlinedIcon />
              </IconButton>
              <IconButton>
                <CloudDownloadIcon />
              </IconButton>
            </div>
          </div>
        </div>
        ))
      }

      </div>
    </div>
  );
}

export default Home;
