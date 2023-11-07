import { useRef, useState } from "react";

const RefExample = () => {
  const inputRef = useRef(null);
  const imgRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  let isActiveMode = false;
  const handleSubmit = () => {
    //console.log(imgRef.current);
    const currentImgElem = document.getElementById("ankit");
    console.log("currentImgElem: ", currentImgElem.src);
    setInterval(() => {
      if (isActiveMode) {
        document.title = "(10) Unread Messages";
      } else {
        document.title = "Open to see messages";
      }

      isActiveMode = !isActiveMode;
    }, 2000);
  };

  console.log("Re-Render");
  return (
    <div>
      <p>Hello </p>
      <input type="text" placeholder="Start search here" ref={inputRef} />
      <img
        ref={imgRef}
        id="ankit"
        src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
        height={100}
        width={100}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default RefExample;
