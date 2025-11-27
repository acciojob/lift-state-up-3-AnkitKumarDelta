import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const[selectedOption, setSelectedOption] = useState("");

  function handleOption(val){
    setSelectedOption(val);
  }

  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <ChildComponent1 onclick = {handleOption}/>
        <ChildComponent2 onclick = {handleOption}/>
        <span>Selected Option: {selectedOption}</span>
    </div>
  )
}

export default App