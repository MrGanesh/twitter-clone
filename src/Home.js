import React,{useState} from "react";
import "./Home.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

function Home() {
  const [textBody, setTextBody] = useState()
  const [image, setImage] = useState()
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
            <TextField id="standard-basic" value={textBody} onChange={(e)=> setTextBody(e.target.value)}  label="What's happening?" />
            <TextField id="standard-basic" type="file" value={image} onChange={(e)=>setImage(e.target.files[0])} />
            <div className="submitButton">
              <Button variant="contained" className="subButton">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="post">
        <div className="textSection">
          <div>
            <img
              className="imgsSection"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsrooDvPyhvh7TyDfBlXOibVHH24mRHjF4ROSn7uYkb5M655lABodxBes"
            />
          </div>
          <div>
            <div className="userDetail">
              <h5>Narendra Modi</h5>
              <p>@narendramodi</p>
              <p>17 apr</p>
            </div>
            <div>
              भाजपा के वरिष्ठ नेता और पूर्व केंद्रीय राज्य मंत्री बची सिंह रावत
              जी के निधन से बहुत दुख पहुंचा है। उनका पूरा जीवन जनहित और देशहित
              में समर्पित रहा। शोक की इस घड़ी में उनके परिजनों और शुभचिंतकों के
              प्रति मैं अपनी गहरी संवेदना व्यक्त करता हूं। ओम शांति!
            </div>
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
        <div className="textSection">
          <div>
            <img
              className="imgsSection"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsrooDvPyhvh7TyDfBlXOibVHH24mRHjF4ROSn7uYkb5M655lABodxBes"
            />
          </div>
          <div>
            <div className="userDetail">
              <h5>Narendra Modi</h5>
              <p>@narendramodi</p>
              <p>17 apr</p>
            </div>
            <div>
              भाजपा के वरिष्ठ नेता और पूर्व केंद्रीय राज्य मंत्री बची सिंह रावत
              जी के निधन से बहुत दुख पहुंचा है। उनका पूरा जीवन जनहित और देशहित
              में समर्पित रहा। शोक की इस घड़ी में उनके परिजनों और शुभचिंतकों के
              प्रति मैं अपनी गहरी संवेदना व्यक्त करता हूं। ओम शांति!
            </div>
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
        <div className="textSection">
          <div>
            <img
              className="imgsSection"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsrooDvPyhvh7TyDfBlXOibVHH24mRHjF4ROSn7uYkb5M655lABodxBes"
            />
          </div>
          <div>
            <div className="userDetail">
              <h5>Narendra Modi</h5>
              <p>@narendramodi</p>
              <p>17 apr</p>
            </div>
            <div>
              भाजपा के वरिष्ठ नेता और पूर्व केंद्रीय राज्य मंत्री बची सिंह रावत
              जी के निधन से बहुत दुख पहुंचा है। उनका पूरा जीवन जनहित और देशहित
              में समर्पित रहा। शोक की इस घड़ी में उनके परिजनों और शुभचिंतकों के
              प्रति मैं अपनी गहरी संवेदना व्यक्त करता हूं। ओम शांति!
            </div>
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
        <div className="textSection">
          <div>
            <img
              className="imgsSection"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsrooDvPyhvh7TyDfBlXOibVHH24mRHjF4ROSn7uYkb5M655lABodxBes"
            />
          </div>
          <div>
            <div className="userDetail">
              <h5>Narendra Modi</h5>
              <p>@narendramodi</p>
              <p>17 apr</p>
            </div>
            <div>
              भाजपा के वरिष्ठ नेता और पूर्व केंद्रीय राज्य मंत्री बची सिंह रावत
              जी के निधन से बहुत दुख पहुंचा है। उनका पूरा जीवन जनहित और देशहित
              में समर्पित रहा। शोक की इस घड़ी में उनके परिजनों और शुभचिंतकों के
              प्रति मैं अपनी गहरी संवेदना व्यक्त करता हूं। ओम शांति!
            </div>
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
      </div>
    </div>
  );
}

export default Home;
