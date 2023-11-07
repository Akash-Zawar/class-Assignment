import { useState } from "react";
import ChildUi from "./childUi";


const ParentUI = () =>{
    const [showMessage, setShowMessage] = useState(false);

  const onToggle = () => {
    //setShowMessage((val) => !val);
    setShowMessage(!showMessage);
  };
    return(
        <>
        {showMessage?"I am hidden":"I am Visible"};
        <ChildUi onToggle = {onToggle}/>

        </>
    )
};

export default ParentUI;