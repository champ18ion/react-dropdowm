import React, { useState } from 'react';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item) => {
    setIsOpen(false);
    // Do something with selected item
    console.log(item);
  };

  return (
    <div className="dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className={isOpen==false?"dropdown-toggle" :"dropdown-toggle open"} type="button">
        Open Dropdown
      </button>
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
