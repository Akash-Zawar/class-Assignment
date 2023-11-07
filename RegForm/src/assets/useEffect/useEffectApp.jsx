import { useEffect, useState } from "react"

const SearchEx = () =>{
    const [search, setSearch] = useState("");
    const [counter,setCounter] = useState(0);

    useEffect(()=>{console.log("Component Did Mount")},[]);

    useEffect(()=>{console.log("Search Value: ",search)},[search]);
    useEffect(() => {
        console.log("Counter Val changed: ", counter);
      }, [counter]);

      return(
        <>
        <div>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
        </div>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      <button onClick={() => setCounter((val) => val - 1)}>Decrement</button>
        </>
      )
}

export default SearchEx;