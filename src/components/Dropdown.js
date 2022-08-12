import { useState } from "react";
import DropdownList from "./DropdownList";

export default function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <div className={`dropdown-wrapper ${isOpen ? "open" : null}`}>
        <button
          className="btn"
          aria-controls="dropdown-list"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Account settings</span>
          <i className="material-icons">public</i>
        </button>
        <DropdownList />
      </div>
    </div>
  );
}
