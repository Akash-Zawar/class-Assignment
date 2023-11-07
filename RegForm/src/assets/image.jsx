import { useState } from "react";
import image from "./ssrvc.jpg";
import styles from "./imgCol.module.css";
const ChangeColor = () =>{
    const [imgCol, setImgCol] = useState(false);
    const inversion = () =>{
        setImgCol(!imgCol);
    }

    const [myTextColor,setMyTextColor] = useState(false);
    const changeTextColor = () =>{
        setMyTextColor(!myTextColor);
    }

    const [counter,setCounter]=useState(10);

    const incrementCounter = ()=>{
        if(counter<100){
            setCounter(counter+2);
        }
    }

    const decrementCounter = () =>{
        if(counter>0){
            setCounter(counter-2);
        }
    }
   
    const color = myTextColor?styles.pinkcolor:styles.orangecolor;
    const imgClass= imgCol?styles.orignal:styles.inverted;

    return (
        <div>
            <img src={image} alt="asd" width="500px" height="500px" className={imgClass} />
            <button onClick={inversion}>Inversion button</button>
            <p className={color}>Aradhana Dasa</p>
            <button onClick={changeTextColor}>Invert Text Color</button>

            <p>counter: {counter}</p>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>

        </div>
    )
}




export default ChangeColor;

