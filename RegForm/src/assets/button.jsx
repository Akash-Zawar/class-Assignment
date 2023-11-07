import { useState } from "react";


const ButtonChange = () =>{
    const [btnActive,setBtnActive]=useState(false);
    const onClicking=()=>{
        setBtnActive(!btnActive);
    }

    return(
        <div>
            <button onClick={onClicking} style={{backgroundColor:btnActive?"orange":"pink"}}>{btnActive?"Click Me":"Clicked"}</button>
            {!btnActive && <p>Button is Clicked</p>}
        </div>
    )
}

export default ButtonChange;