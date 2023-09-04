import React, { useState } from "react";
import "./style.css";

function Dropdown() {
  const [isactive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isactive)}>
        Choose One
        <span className="fas fa-caret-down"></span>
      </div>
      {isactive && (
        <div className="dropdown-content">
          <div className="dropdown-item">React</div>
          <div className="dropdown-item">Vue</div>
        </div>
      )}
    </div>
  );
}
export default Dropdown;
