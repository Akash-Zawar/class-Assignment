import { useState } from "react";

const Calculator = () =>{
 const [num1,setNum1] = useState(0);
 const [num2,setNum2] = useState(0);
 const [addResult,setAddResult] = useState(0);
 const [multiplyResult, setMultiplyResult] = useState(0);
 const [divResult,setDivResult] = useState(0);
 const [subResult,setSubResult] = useState(0);
 const [sqOf1,setSqOf1] = useState(0);
 const [sqOf2,setSqOf2] = useState(0);

 
 const handleNumChange1 = (e) => {
    setNum1(Number(e.target.value));
 }
 const handleNumChange2 = (e) =>{
    setNum2(Number(e.target.value));
 }

 const addition = () =>{
    setAddResult(num1+num2);
 }

 const multiply = () =>{
    setMultiplyResult(num1*num2);
 }

 const division = () =>{
    setDivResult(num1/num2);
 }

 const subtract = () =>{
    setSubResult(num1-num2);
 }

 const squareOfNum = () =>{
    setSqOf1(num1**2);
    setSqOf2(num2**2);
 }

 return (
    <div>
        <p>Number1</p>
        <input type="text" value={num1} onChange={handleNumChange1} placeholder="enter num 1" />
        <p>Number2</p>
        <input type="text" value={num2} onChange={handleNumChange2} placeholder="enter num 2" />

        <button onClick={addition}>Addition</button>
        <button onClick={multiply}>Multiply</button>
        <button onClick={division}>Division</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={squareOfNum}>Square</button>

        <p>Addition: {addResult}</p>
        <p>Multiply: {multiplyResult}</p>
        <p>Division: {divResult}</p>
        <p>Subtract: {subResult}</p>
        <p>Square Of Num1: {sqOf1} & Square Of Num2: {sqOf2}</p>
    </div>
 )

}

export default Calculator