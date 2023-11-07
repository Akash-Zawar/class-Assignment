import { useState } from 'react';
import './App.css';
import ChildComponent from './ChildComponent';

function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState('');

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={handleOpenDialog}>Open Dialog</button>
      <ChildComponent
        open={openDialog}
        onClose={handleCloseDialog}
        name={name}
        onNameChange={handleNameChange}
      />
      
    </div>
  );
}

export default App;
