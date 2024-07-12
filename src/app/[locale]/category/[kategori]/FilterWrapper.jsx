// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";

// import ColorPicker from "./ColorPicker";
// import SizePicker from "./SizePicker";
// import ListGroupComponent from "./ListGroupComponent";
// import { DetailsDivider } from "@/styles/GlobalStyled";

// const FilterWrapper = ({ filters, RangeSliderWithLabel }) => {
//   const router = useRouter();

//   //   const handleFilterChange = (type, value) => {
//   //     const query = new URLSearchParams(window.location.search);
//   //     let filterValues = query.get(type) ? query.get(type).split(",") : [];

//   //     value = value.toLowerCase(); // Seçilen değeri küçük harfe dönüştür

//   //     if (type === "colors") {
//   //       // Yalnızca tek bir renk seçimine izin ver
//   //       filterValues = [value];
//   //     } else if (type === "sizes") {
//   //       // Yalnızca tek bir beden seçimine izin ver
//   //       filterValues = [value];
//   //     } else if (type == "category") {
//   //       filterValues = [value];
//   //     } else {
//   //       if (filterValues.includes(value)) {
//   //         filterValues.splice(filterValues.indexOf(value), 1);
//   //       } else {
//   //         filterValues.push(value);
//   //       }
//   //     }

//   //     if (filterValues.length > 0) {
//   //       query.set(type, filterValues.join(","));
//   //     } else {
//   //       query.delete(type);
//   //     }

//   //     query.delete("page"); // Sayfa numarasını sıfırla
//   //     router.push(`?${query.toString()}`);
//   //   };

//   //   const handleFilterChange = (type, value) => {
//   //     const query = new URLSearchParams(window.location.search);
//   //     let filterValues = query.get(type) ? query.get(type).split(",") : [];

//   //     value = value.toLowerCase(); // Convert the selected value to lowercase

//   //     if (type === "colors" || type === "sizes") {
//   //       // Allow only one selection for colors and sizes
//   //       filterValues = [value];
//   //     } else if (type === "categories") {
//   //       // Handle categories filter separately to ensure single selection
//   //       filterValues = [value];
//   //     } else {
//   //       if (filterValues.includes(value)) {
//   //         filterValues.splice(filterValues.indexOf(value), 1); // Remove if already selected
//   //       } else {
//   //         filterValues.push(value); // Add if not selected
//   //       }
//   //     }

//   //     if (filterValues.length > 0) {
//   //       query.set(type, filterValues.join(","));
//   //     } else {
//   //       query.delete(type);
//   //     }

//   //     query.delete("page"); // Reset pagination if filters change
//   //     router.push(`?${query.toString()}`);
//   //   };

//   const handleFilterChange = (type, value) => {
//     const query = new URLSearchParams(window.location.search);
//     let filterValues = query.get(type) ? query.get(type).split(",") : [];

//     value = value.toLowerCase(); // Convert the selected value to lowercase

//     if (type === "colors" || type === "sizes") {
//       // Allow only one selection for colors and sizes
//       filterValues = [value];
//     } else if (type === "categories") {
//       // Handle categories filter separately to ensure single selection
//       filterValues = [value.toLowerCase()]; // Ensure lowercase comparison
//     } else {
//       if (filterValues.includes(value)) {
//         filterValues.splice(filterValues.indexOf(value), 1); // Remove if already selected
//       } else {
//         filterValues.push(value); // Add if not selected
//       }
//     }

//     if (filterValues.length > 0) {
//       query.set(type, filterValues.join(","));
//     } else {
//       query.delete(type);
//     }

//     query.delete("page"); // Reset pagination if filters change
//     router.push(`?${query.toString()}`);
//   };

//   return (
//     <>
//       <ListGroupComponent
//         selectedItems={filters.categories}
//         onFilterChange={(value) => handleFilterChange("categories", value)}
//       />
//       <DetailsDivider />
//       <RangeSliderWithLabel />
//       <DetailsDivider />
//       <ColorPicker
//         selectedColors={filters.colors}
//         onFilterChange={(value) => handleFilterChange("colors", value)}
//       />
//       <DetailsDivider />
//       <SizePicker
//         selectedSizes={filters.sizes}
//         onFilterChange={(value) => handleFilterChange("sizes", value)}
//       />
//     </>
//   );
// };

// export default FilterWrapper;

"use client";
import React from "react";
import { useRouter } from "next/navigation";

import ColorPicker from "@/utils/ColorPicker";
import SizePicker from "@/utils//SizePicker";
import CategoryPicker from "@/utils/CategoryPicker";
import { DetailsDivider } from "@/styles/GlobalStyled";

const FilterWrapper = ({ filters, RangeSliderWithLabel }) => {
  const router = useRouter();

  const handleFilterChange = (type, value) => {
    const query = new URLSearchParams(window.location.search);
    let filterValues = query.get(type) ? query.get(type).split(",") : [];

    value = value.toLowerCase(); // Seçilen değeri küçük harfe çevir

    if (type === "colors" || type === "sizes") {
      // Renk ve beden için sadece tek seçim izni ver
      filterValues = [value];
    } else if (type === "category") {
      // Kategoriler filtresini ayrı olarak işle, tek seçim izni ver
      filterValues = [value.toLowerCase()]; // Küçük harfe duyarlı karşılaştırma yap
    } else {
      if (filterValues.includes(value)) {
        filterValues.splice(filterValues.indexOf(value), 1); // Zaten seçiliyse kaldır
      } else {
        filterValues.push(value); // Seçili değilse ekle
      }
    }

    if (filterValues.length > 0) {
      query.set(type, filterValues.join(","));
    } else {
      query.delete(type);
    }

    query.delete("page"); // Filtreler değiştiğinde sayfa numarasını sıfırla
    router.push(`?${query.toString()}`);
  };

  return (
    <>
      <CategoryPicker
        selectedItems={filters.categories}
        onFilterChange={(value) => handleFilterChange("categories", value)}
      />
      <DetailsDivider />
      <RangeSliderWithLabel />
      <DetailsDivider />
      <ColorPicker
        selectedColors={filters.colors}
        onFilterChange={(value) => handleFilterChange("colors", value)}
      />
      <DetailsDivider />
      <SizePicker
        selectedSizes={filters.sizes}
        onFilterChange={(value) => handleFilterChange("sizes", value)}
      />
    </>
  );
};

export default FilterWrapper;
