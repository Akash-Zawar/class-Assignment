import {useState} from 'react';

function ChildComponent({ open, onClose, name, onNameChange }) {
    // const [name1,setName1] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted name: ${name}`);
    
    onClose();   
  };


  return (
    <div>
        <div className={`dialog ${open ? 'open' : ''}`}>
      <div className="dialog-content">
        <h2>Child Component</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={onNameChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    <div>

    </div>
    </div>
    
  );
}

export default ChildComponent;
