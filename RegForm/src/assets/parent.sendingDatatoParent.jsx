import  { useState } from 'react';
import ChildComponent from './child.sendingDatatoParent';

function ParentComponent() {

  const [dataFromChildComp, setDataFromChildComp] = useState(null);

  const receiveDataFromChildComp = (data) => {
    setDataFromChildComp(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child Component: {dataFromChildComp}</p>
      <ChildComponent sendDataToParent={receiveDataFromChildComp} />
    </div>
  );
}

export default ParentComponent;
