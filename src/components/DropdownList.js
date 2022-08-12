import { useState } from "react";
import DropdownItem from "./DropdownItem";

const MENU_TITLES = [
  "Profile Information",
  "Change Password",
  "Become PRO",
  "Help",
  "Log Out",
];

export default function DropdownList() {
  const [selected, setSelected] = useState(0);

  const handleClick = (evt) => {
    setSelected(evt.target.innerText);
  };

  return (
    <ul className="dropdown" id="dropdown-list">
      {MENU_TITLES.map((item, n) => {
        return (
          <DropdownItem
            key={n}
            item={item}
            isSelected={item === selected}
            onClick={handleClick}
          />
        );
      })}
    </ul>
  );
}
