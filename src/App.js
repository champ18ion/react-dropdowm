import React from 'react';
import Dropdown from './Dropdown';
import './style.css';

function App() {
  const items = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="app-container">
      <h1 className="app-header"> Dropdown Component</h1>
      <div className="dropdown-wrapper">
        <Dropdown items={items} />
      </div>
    </div>
  );
}

export default App;
