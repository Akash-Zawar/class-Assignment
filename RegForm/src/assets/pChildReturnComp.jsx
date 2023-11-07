const PrintData  = (props)=>{
    console.log(props);
    return(
        <p style={{ border: "1px solid silver", padding: 12, width:"80px" }}>Name: {props.name}</p>

    )
}

export default PrintData;