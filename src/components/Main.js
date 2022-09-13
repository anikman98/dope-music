import React, { useState } from 'react'
import ReactPlayer from "react-player";
import '../css/main.css';

const Main = () => {
    const [playing, setPlaying] = useState(false);
  return (
    <div className="container">
        <ReactPlayer
            className="player"
            url={"https://youtu.be/jfKfPfyJRdk"} 
            width={"400px"}
            height={"200px"}
            playing={playing}
        />
    </div>
  )
}

export default Main
