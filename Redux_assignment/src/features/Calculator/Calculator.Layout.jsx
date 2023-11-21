import { useState } from "react";
import { add, subtract, multiply, divide, reset } from "./Calculator.Slice";
import { useDispatch, useSelector } from "react-redux";
import "./calculator.css";

const Calculator = () => {
  const [number, setNumber] = useState("");
  const calculatorState = useSelector((state) => state.Calculator);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Calculator Page</h1>
      <input
        type="number"
        placeholder="Enter number to compute"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="input"
      />
      <br />
      <div className="calculatorButtons">
        <button onClick={() => dispatch(add(number))}>Add</button>
        <button onClick={() => dispatch(subtract(number))}>Subtract</button>
        <button onClick={() => dispatch(multiply(number))}>Multiply</button>
        <button onClick={() => dispatch(divide(number))}>Divide</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => setNumber("")}>Clear</button>
      </div>

      <p>Result: {calculatorState.value}</p>
    </div>
  );
};

export default Calculator;
