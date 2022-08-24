import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import About from "./components/About";
import Display from "./components/Display";

const RouteTree = function (props) {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<About />} />
      <Route
        path="/app"
        element={
          <Display
            url={props.url}
            isCorrect={props.isCorrect}
            setIsCorrect={props.setIsCorrect}
            handleClick={props.handleClick}
            timeSignature={props.timeSignature}
          />
        }
      />
    </Routes>
  );
};

export default RouteTree;
