"use client";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const CategoryPicker = ({ selectedItems, onFilterChange }) => {
  const items = ["T-shirt", "Shorts", "Shirt", "Hoodie", "Jeans"];

  const handleItemClick = (item) => {
    onFilterChange(item.toLowerCase());
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item}
          className={`list-group-item d-flex align-items-center justify-content-between border-0 px-2 rounded-3 ${
            selectedItems.includes(item.toLowerCase())
              ? "bg-body-secondary"
              : ""
          }`}
          onClick={() => handleItemClick(item)}
          style={{ cursor: "pointer" }}
        >
          {item} <FaAngleRight className="ms-3 opacity-50" />
        </li>
      ))}
    </ul>
  );
};

export default CategoryPicker;
