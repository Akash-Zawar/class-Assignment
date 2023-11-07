import { useEffect } from "react";

const ChildV2 = () => {
  useEffect(() => {
    console.log("Child V2 Mounting");

    return () => {
      console.log("ChildV2 unmounting");
    };
  }, []);

  return (
    <p style={{ backgroundColor: "red", color: "white" }}>
      I am Child V2 Component
    </p>
  );
};

export default ChildV2;
