
import { useState } from 'react';

function ChildComponent({ sendDataToParent }) {
  
  const [data, setData] = useState('');


  const sendChildDataToParent = () => { 
    sendDataToParent(data);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter data"
      />
      <button onClick={sendChildDataToParent}>Send Data to Parent</button>
    </div>
  );
}

export default ChildComponent;                                                
