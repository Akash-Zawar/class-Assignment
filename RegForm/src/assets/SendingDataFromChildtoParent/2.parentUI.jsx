import { useState } from "react";
import ChildInput from "./2.childUi";


const ParentInput2 = () => {
  const [carName, setCarName] = useState("");

  const onValChange = (val) => {
    console.log(val);
    setCarName(val);
  };

  return (
    <div>
      <p>Car: {carName}</p>
      <ChildInput onValChange={onValChange} />
    </div>
  );
};

export default ParentInput2;