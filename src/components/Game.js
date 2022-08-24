import React from "react";

export default function Game(props) {
  
  return (
    <div className="game-container">
      <div className="options">
        <button
          onClick={props.handleClick}
          className="button"
          value="4/4"
          
        >
          4/4
        </button>

        <button
          onClick={props.handleClick}
          className="button"
          value="3/4"
     
        >
          3/4
        </button>

        <button
          onClick={props.handleClick}
          className="button"
          value="6/8"
     
        >
          6/8
        </button>

        <button
          onClick={props.handleClick}
          className="button"
          value="5/4"
        
        >
          5/4
        </button>
      </div>
    </div>
  );
}
