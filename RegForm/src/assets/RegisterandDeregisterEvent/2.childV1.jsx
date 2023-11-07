import { useEffect, useState } from "react";

const ChildV1 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Child V1 Mounting");

    return () => {
      console.log("ChildV1 unmounting");
    };
  }, []);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    console.log("Counter: ", counter);

    return () => {
      console.log("Counter Cleanup");
    };
  }, [counter]);

  return (
    <div>
      <p
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        I am Child V1 Component {counter}
      </p>
      <p>time:{seconds}</p>
    </div>
  );
};

export default ChildV1;
