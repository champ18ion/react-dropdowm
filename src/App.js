import React from 'react';
import Dropdown from './Dropdown';
import './style.css';

function App() {
  const items = ['Chun lo mujhe ', ' ya mujhko chuno', 'chun lo mujhe fark kya hai','jo chun lo janu','guru tumko manu','chalo ye bhi vaada ha'];

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
