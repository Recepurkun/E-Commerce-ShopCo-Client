// "use client";

// import React, { useState, useEffect } from "react";
// import { useTranslations } from "next-intl";
// import ProductList from "@/containers/Products/ProductList";
// import { CategoryName, ShowingOf } from "./Styled";
// import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

// const SortProducts = ({ products, defaultSort, activeCategory }) => {
//   const [sortedProducts, setSortedProducts] = useState(products);
//   const [sortOption, setSortOption] = useState(defaultSort);
//   const t = useTranslations("CategoryAndFilter");

//   useEffect(() => {
//     let sorted = [...products];
//     switch (sortOption) {
//       case "Lowest Price":
//         sorted.sort(
//           (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
//         );
//         break;
//       case "Highest Price":
//         sorted.sort(
//           (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
//         );
//         break;
//       case "Rating":
//         sorted.sort((a, b) => b.rating - a.rating);
//         break;
//       case "Stock":
//         sorted.sort((a, b) => b.stock - a.stock);
//         break;
//       case "Most Popular":
//         sorted.sort((a, b) => b.numberOfSales - a.numberOfSales);
//         break;
//       default:
//         break;
//     }
//     setSortedProducts(sorted);
//   }, [sortOption, products]);

//   return (
//     <>
//       <div className="d-flex flex-row justify-content-between align-items-center mb-3 mx-md-3_5">
//         <CategoryName>{capitalizeFirstLetter(activeCategory)}</CategoryName>

//         <div className="d-flex align-items-center w-75 justify-content-end">
//           <ShowingOf className="me-2">{t("Showing")}</ShowingOf>
//           <p className="mx-2 d-md-block">{t("Sort")}</p>
//           <select
//             className="fw-bolder form-select w-25"
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//           >
//             <option value="Most Popular">{t("MostPopular")}</option>
//             <option value="Lowest Price">{t("LowestPrice")}</option>
//             <option value="Highest Price">{t("HighestPrice")}</option>
//             <option value="Rating">{t("Rating")}</option>
//             <option value="Stock">{t("Stock")}</option>
//           </select>
//         </div>
//       </div>

//       <ProductList products={sortedProducts} showAll={true} />
//     </>
//   );
// };

// export default SortProducts;

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { CategoryName, ShowingOf } from "./Styled";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

const SortProducts = ({ defaultSort, activeCategory }) => {
  const router = useRouter();
  const [sortOption, setSortOption] = React.useState(defaultSort);
  const t = useTranslations("CategoryAndFilter");

  const handleSortChange = (event) => {
    const newSortOption = event.target.value;
    setSortOption(newSortOption);
    const query = new URLSearchParams(window.location.search);
    query.set("sortOption", newSortOption);
    router.push(`?${query.toString()}`);
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-between align-items-center mb-3 mx-md-3_5">
        <CategoryName>{capitalizeFirstLetter(activeCategory)}</CategoryName>

        <div className="d-flex align-items-center w-75 justify-content-end">
          <ShowingOf className="me-2">{t("Showing")}</ShowingOf>
          <p className="mx-2 d-md-block">{t("Sort")}</p>
          <select
            className="fw-bolder form-select w-25"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="Most Popular">{t("MostPopular")}</option>
            <option value="Lowest Price">{t("LowestPrice")}</option>
            <option value="Highest Price">{t("HighestPrice")}</option>
            <option value="Rating">{t("Rating")}</option>
            <option value="Stock">{t("Stock")}</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SortProducts;
