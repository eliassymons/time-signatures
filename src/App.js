import "./App.css";

import Header from "./components/Header";
import React from "react";
import data from "./data";
import { BrowserRouter } from "react-router-dom";
import RouteTree from "./RouteTree";


function App() {
  const [index, setIndex] = React.useState("");
  const [isCorrect, setIsCorrect] = React.useState(0);
 

  console.log(isCorrect);

  const handleClick = function (e) {
    e.preventDefault();
    if (e.target.value === index.timeSignature) {
      e.target.className = "btn-green";
      setTimeout(() => {
        e.target.className = "button"
      }, 2000);
      
      setIsCorrect(() => {
        return isCorrect + 1;
      });
    } else{
      e.target.className = "btn-red";
      setTimeout(() => {
        e.target.className = "button"
      }, 2000);
    }
  };

  React.useEffect(() => {
    const randomNumber = Math.floor(Math.random() * data.length);
    setIndex(() => data[randomNumber]);
  }, [isCorrect]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RouteTree
          url={index.url}
          isCorrect={isCorrect}
          setIsCorrect={setIsCorrect}
          handleClick={handleClick}
          timeSignature={index.timeSignature}
          
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
