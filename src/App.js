import React from 'react';
import Dropdown from './Dropdown';
import './style.css';

function App() {
  const items = ['option 1 ','optiion 2','option 3 '];

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
