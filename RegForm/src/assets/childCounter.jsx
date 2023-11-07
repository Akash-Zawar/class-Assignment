const ChildCounter = (myProps) => {
  console.log("myProps: ", myProps);
  return (
    <p style={{ border: "1px solid silver", padding: 12 }}>
      Counter: {myProps.counter}
    </p>
  );
};

export default ChildCounter;
