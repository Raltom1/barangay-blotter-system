import React, { useState } from 'react';
import BlotterForm from './components/BlotterForm';
import BlotterList from './components/BlotterList';
import './App.css';


function App() {
  const [blotters, setBlotters] = useState([]);

  const handleAddBlotter = (newBlotter) => {
    setBlotters([...blotters, newBlotter]);
  };

  return (
    <div>
      <h1>Barangay Blotter System</h1>
      <BlotterForm onAddBlotter={handleAddBlotter} />
      <BlotterList blotters={blotters} />
    </div>
  );
}

export default App;
