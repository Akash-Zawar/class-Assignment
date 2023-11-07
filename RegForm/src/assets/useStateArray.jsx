import { useState } from "react";

const ArrayMap = () => {
  const [names, setNames] = useState([
    "Rahul",
    "Mahesh",
    "Mukesh",
    "Pankaj",
    "Roopesh",
    "Vansh",
  ]);

  return (
    <div>
      <ol>
        {names.map((currentName, index) => {
          return <li key={index}>{currentName}</li>;
        })}
      </ol>
    </div>
  );
};

export default ArrayMap;
