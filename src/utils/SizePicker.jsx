"use client";
import React from "react";
import { FaAngleUp } from "react-icons/fa";

const SizePicker = ({ selectedSizes, onFilterChange = "" }) => {
  const sizes = [
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "xx-large",
    "3x-large",
    "4x-large",
  ];

  const handleItemClick = (size) => {
    onFilterChange(size);
  };

  return (
    <div className="d-flex flex-row flex-wrap">
      <div className="d-flex flex-row justify-content-between align-items-center w-100">
        <h6 htmlFor="sizePicker" className="mb-3 fw-bolder">
          Sizes
        </h6>
        <FaAngleUp className="ms-3 opacity-50" />
      </div>
      {sizes.map((size) => (
        <button
          key={size}
          className={`btn rounded-pill me-1 mb-3 `}
          style={{
            maxWidth: 96,
            height: 39,
            cursor: "pointer",
            padding: "10px",
            backgroundColor: selectedSizes.includes(size.trim())
              ? "#000"
              : "#F0F0F0",
            color: selectedSizes.includes(size.trim()) ? "#fff" : "#000",
          }}
          onClick={() => handleItemClick(size)}
        >
          <h6 style={{ fontSize: 14 }}>{size}</h6>
        </button>
      ))}
    </div>
  );
};

export default SizePicker;
