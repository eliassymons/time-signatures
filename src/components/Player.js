import React from "react";
import ReactPlayer from "react-player";


export default function Player(props) {
  return (
    <div className="player-container">
      <h3>Select a time signature.</h3>
      <ReactPlayer
        className="react-player"
        url={props.url}
        width="40vw"
        height="40vh"
      />
    </div>
  );
}
