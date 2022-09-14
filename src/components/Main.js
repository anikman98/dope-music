import React, { useState } from 'react'
import ReactPlayer from "react-player";
import '../css/main.css';



const Main = () => {
    const [playing, setPlaying] = useState(false);

    const handleClick = () => {
        setPlaying(!playing);
    }

  return (
    <div className="container">
        <div className={playing ? 'main-button main-button-play' : 'main-button' } onClick={handleClick}></div>
        <div className={playing ? 'action action-pause' : 'action action-play'} onClick={handleClick}></div>
        <ReactPlayer
            className="player"
            url={"https://youtu.be/jfKfPfyJRdk"} 
            width={"0px"}
            height={"0px"}
            playing={playing}
        />
    </div>
  )
}

export default Main
