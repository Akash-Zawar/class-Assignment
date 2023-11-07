import { useEffect, useMemo, useState } from "react";

const CodeFlowV1 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const newVal = useMemo(() => {
    console.log("UseMemo with counter", counter);
    return counter + 1;
  }, [counter]);

  useEffect(() => {
    console.log("UseEffect with counter: ", counter);
  }, [counter]);

  console.log("Direct counter: ", counter, newVal);

  return (
    <div>
      <p onClick={() => setCounter((val) => val + 1)}>Counter1: {counter}</p>
      <p onClick={() => setCounter2((val) => val + 1)}>Counter2: {counter2}</p>
    </div>
  );
};

export default CodeFlowV1;
