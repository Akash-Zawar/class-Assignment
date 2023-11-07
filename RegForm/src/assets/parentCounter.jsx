import { useState } from "react";
import ChildCounter from "./childCounter.jsx";

const ParentCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <ChildCounter uName="Romesh" uCity="Gwalior" counter={counter} />
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      <button onClick={() => setCounter((val) => val - 1)}>Decrement</button>
    </div>
  );
};

export default ParentCounter;

