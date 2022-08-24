import Player from "./Player";
import Game from "./Game";

export default function Display(props) {
  return (
    <div className="display-container">
      <Player url={props.url} />
      <Game
        timeSignature={props.timeSignature}
        isCorrect={props.isCorrect}
        setIsCorrect={props.setIsCorrect}
        handleClick={props.handleClick}
        color={props.color}
      />
    </div>
  );
}
