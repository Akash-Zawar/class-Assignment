import { useState } from "react";
import PrintData from "./pChildReturnComp";

const TakeInput = () =>{
    const [name,setName] = useState("");
    const handleNameChange = (e)=>{setName(e.target.value)};

    return (
        <div>
            <p>Enter Name</p>
            <input type="text" value={name} onChange={handleNameChange} />
           
            <PrintData name={name}/>
        </div>
    )
}
export default TakeInput;