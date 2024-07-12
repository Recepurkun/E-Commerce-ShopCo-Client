//* ilk hali
// import { FaAngleRight } from "react-icons/fa";

// const ListGroupComponent = ({ items, t }) => {
//   return (
//     <div className="d-flex list-group list-group-flush">
//       {items.map((item, index) => (
//         <a
//           href="#"
//           key={index}
//           className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0"
//         >
//           {t(item)} <FaAngleRight className="ms-3" />
//         </a>
//       ))}
//     </div>
//   );
// };

// export default ListGroupComponent;

"use client";
import React from "react";

const CategoryPicker = ({ selectedItems, onFilterChange = "" }) => {
  const items = ["T-shirt", "Shorts", "Shirt", "Hoodie", "Jeans"];

  return (
    <div className="list-group">
      {items.map((item) => (
        <label key={item} className="list-group-item">
          <input
            type="checkbox"
            checked={selectedItems.includes(item.toLowerCase())}
            onChange={() => onFilterChange(item)}
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default CategoryPicker;
