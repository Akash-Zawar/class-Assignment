import { useState, useEffect } from "react";
import ChildV1 from "./2.childV1";
import ChildV2 from "./3.childV2";
import ChildV4 from "../TimerComponent/timerComponent";

const ParentDay15 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle((prevState) => !prevState)}>
        Toggle Component
      </button>

      {toggle ? <ChildV1 /> : <ChildV4 />}
    </div>
  );
};

export default ParentDay15;
