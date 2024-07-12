//* ilk hali
// const SizePicker = ({ sizes }) => {
//   return (
//     <div className="d-flex flex-row flex-wrap w-100">
//       {sizes.map((size, index) => (
//         <button
//           key={index}
//           className="rounded-pill me-1 mb-3"
//           style={{
//             maxWidth: 96,
//             height: 39,
//             backgroundColor: "#F0F0F0",
//             cursor: "pointer",
//             padding: "10px",
//             color: "#000",
//           }}
//         >
//           <h6 style={{ fontSize: 14 }}>{size.trim()}</h6>
//         </button>
//       ))}
//     </div>
//   );
// };

"use client";
import React from "react";

const SizePicker = ({ selectedSizes, onFilterChange = "" }) => {
  const sizes = ["Small", "Medium", "Large"];

  return (
    <div>
      {sizes.map((size) => (
        <label key={size} className="size-picker">
          <input
            type="radio"
            name="size"
            checked={selectedSizes === size}
            onChange={() => onFilterChange(size)}
          />
          {size}
        </label>
      ))}
    </div>
  );
};

export default SizePicker;
