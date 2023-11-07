import { useEffect } from "react";

const ChildV4 = () => {
  useEffect(() => {
    // console.log("child mounted", Date.now());
    let mountTime = new Date();

    window.onbeforeunload = function (e) {
      console.log("E: ", e);
      const unMountTime = new Date();
      const elapsedTime = unMountTime - mountTime;
      localStorage.setItem(new Date().getTime(), elapsedTime);
      console.log(`child unmounted at ${unMountTime - mountTime} millisecond`);
    };

    return () => {
      const unMountTime = new Date();
      const elapsedTime = unMountTime - mountTime;
      localStorage.setItem(new Date().getTime(), elapsedTime);
      console.log(`child unmounted at ${unMountTime - mountTime} millisecond`);
    };
  }, []);
  return <p>I am child with current counter:</p>;
};

export default ChildV4;
