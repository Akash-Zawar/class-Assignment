import { useState } from "react";

const Magic = () =>{
    const [isChecked1, setIsChecked1] = useState("");
    const [isChecked2, setIsChecked2] = useState("");
    const [isChecked3, setIsChecked3] = useState("");
    const [isChecked4, setIsChecked4] = useState("");
    const inputChange=()=>{
        setIsChecked1(!isChecked1);
    }
    const inputChange2=()=>{
        setIsChecked2(!isChecked2);
    }
    const inputChange3=()=>{
        setIsChecked3(!isChecked3);
    }
    const inputChange4=()=>{
        setIsChecked4(!isChecked4);
    }
    return (
        <div>
          <input type="checkbox" checked={isChecked1} onChange={inputChange}  />Red 
          <input type="checkbox" checked={isChecked2} onChange={inputChange2} /> Green
          <input type="checkbox" checked={isChecked3} onChange={inputChange3}  /> Purple 
          <input type="checkbox" checked={isChecked4} onChange={inputChange4}  /> Pink
       
        
        <p>you have selected {isChecked1?"Red":""}</p>
        <p>you have selected {isChecked1?"Red":""}& {isChecked2?"Green":""}</p>
        <p>you have selected {isChecked1?"Red":""}, {isChecked2?"Green":""} & {isChecked3?"Purple":""}</p>
        <p>you have selected {isChecked1?"Red":""}, {isChecked2?"Green":""} , {isChecked3?"Purple":""} & {isChecked4?"Pink":""}</p>

        </div>

    )
}

export default Magic;