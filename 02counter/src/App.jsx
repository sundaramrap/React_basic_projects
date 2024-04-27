import { useState } from "react";

import "./App.css";

function App() {
  const [numValue, setNumValue] = useState(20);
  // let numValue = 15;
  let incVal = () => {
    setNumValue(numValue + 1);
  };
  let decVal = () => {
    setNumValue((prevVAlue) => prevVAlue - 1);
  };

  return (
    <>
      <h1>Counter to understand State</h1>
      <h2>Value : {numValue}</h2>
      <button onClick={decVal}>Decrease</button>

      {"  "}
      <button onClick={incVal}>Increase</button>
    </>
  );
}

export default App;
