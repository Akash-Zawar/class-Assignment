import { useState } from "react";

const Queue = () => {
  const [queue, setQueue] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const enqueue = () => {
    if (queue.length < 10 && inputValue.trim() !== "") {
      setQueue([...queue, inputValue]);
      setInputValue("");
    }
  };

  const dequeue = () => {
    if (queue.length > 0) {
      const updatedQueue = [...queue];
      updatedQueue.shift();
      setQueue(updatedQueue);
    }
  };

  return (
    <div>
      <h1>Queue Example</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter an element"
      />
      <button onClick={enqueue}>Enqueue</button>
      <button onClick={dequeue}>Dequeue</button>
      <p>Queue: {queue.join(", ")}</p>
      <p>Queue Size: {queue.length}</p>
    </div>
  );
};

export default Queue;
