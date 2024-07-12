//? ilk hali
// "use client";
// const ColorPicker = ({ colors }) => {
//   return (
//     <div className="d-flex flex-row flex-wrap w-100">
//       {colors.map((color, index) => (
//         <p
//           key={index}
//           className="rounded-pill me-2 mb-3"
//           style={{
//             width: 30,
//             height: 30,
//             backgroundColor: color.trim(),
//             border: `1px solid black`,
//             cursor: "pointer",
//           }}
//         ></p>
//       ))}
//     </div>
//   );
// };

// export default ColorPicker;

"use client";
import React from "react";

const ColorPicker = ({ selectedColors, onFilterChange = "" }) => {
  const colors = ["Green", "Red", "Yellow", "Blue"];

  return (
    <div>
      {colors.map((color) => (
        <label key={color} className="color-picker">
          <input
            type="radio"
            name="color"
            checked={selectedColors.includes(color)}
            onChange={() => onFilterChange(color)}
          />
          {color}
        </label>
      ))}
    </div>
  );
};

export default ColorPicker;
