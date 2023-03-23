import React, { useState } from 'react';

const Dropdown = ({ items }) => {
  // useState hook to manage the state of the dropdown
  const [isOpen, setIsOpen] = useState(false);

  // function to handle the click on an item in the dropdown
  const handleItemClick = (item) => {
    setIsOpen(false);
  };

  // return the dropdown component
  return (
    <div className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* dropdown toggle button */}
      <button className={isOpen ? "dropdown-toggle open" : "dropdown-toggle"} type="button">
        Open Dropdown
      </button>
      {/* dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item) => (
            <li key={item} className="dropdown-item" onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
