import PropTypes from "prop-types";

export default function DropdownItem({ item, isSelected, onClick }) {
  return (
    <li className={isSelected ? "active" : null}>
      <a href={"#" + item.split(" ").join("")} onClick={onClick}>
        {item}
      </a>
    </li>
  );
}

DropdownItem.propTypes = {
  item: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
