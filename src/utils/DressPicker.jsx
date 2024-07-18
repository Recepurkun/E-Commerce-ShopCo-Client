"use client";
import { FaAngleRight, FaAngleUp } from "react-icons/fa";

const DressPicker = ({ selectedItems, onFilterChange = "" }) => {
  const items = ["Casual", "Formal", "Party", "Gym"];

  const handleItemClick = (item) => {
    onFilterChange(item);
  };
  return (
    <div className="d-flex flex-row flex-wrap">
      <div className="d-flex flex-row justify-content-between align-items-center w-100">
        <h6 htmlFor="colorRange" className="form-label fw-bolder">
          Dress Style
        </h6>
        <FaAngleUp className="me-1 opacity-50" />
      </div>
      <ul className="list-group w-100">
        {items.map((item) => (
          <li
            key={item}
            //   className={`list-group-item d-flex align-items-center justify-content-between border-0 px-1  ${
            //     selectedItems.includes(item.toLowerCase()) ? "bg-warning" : ""
            //   }`}
            className={`list-group-item d-flex align-items-center justify-content-between border-0 px-1`}
            onClick={() => handleItemClick(item)}
            style={{ cursor: "pointer" }}
          >
            {item} <FaAngleRight className="ms-3 opacity-50" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DressPicker;
