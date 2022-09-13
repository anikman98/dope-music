import React, { useState } from 'react'
import ReactPlayer from "react-player";
import '../css/main.css';
import play from '../resource/play-button.svg';
import pause from '../resource/pause-button.svg';


const Main = () => {
    const [playing, setPlaying] = useState(false);

    const handleClick = () => {
        setPlaying(!playing);
    }

  return (
    <div className="container">
        <button
            className='main-button'
            onClick={handleClick}>{
            playing 
            ? "pause"
            : "play"
        }</button>
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
