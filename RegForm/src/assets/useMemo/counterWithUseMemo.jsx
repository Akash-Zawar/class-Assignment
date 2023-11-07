import { useMemo, useState } from "react";

const CounterWithUseMemo = () => {
  const [counter, setCounter] = useState(0);

  const sum = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 10; i++) {
      console.log({ i });
      result += i;
    }

    return result;
  }, []);

  console.log("Re-Render", sum);

  return (
    <div>
      <p>Sum: {sum} </p>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default CounterWithUseMemo;
