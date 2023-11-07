import { useState } from "react";

const Counter = () => {
    const [counter,setCounter] = useState(10);
    const handleCounterIncrement=()=>{
        if(counter<100){
            setCounter(counter+2);
        }

    }
    const handleCounterDecrement=()=>{
        if(counter>0){
            setCounter(counter-2);
        }
    }
    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
        </div>
    )
}

export default Counter;