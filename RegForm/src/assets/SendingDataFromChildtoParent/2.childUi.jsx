const ChildInput = ({ onValChange }) => {
    return (
      <>
        <input
          type="text"
          placeholder="Enter your car name"
          /* onChange={(e) => onValChange(e.target.value)} */
  
          onChange={(e) => onValChange(e.target.value.toUpperCase())}
          onBlur={(e) => {
            console.log("e:", e.target.value);
          }}
        />
      </>
    );
  };
  
  export default ChildInput;