"use client";

import { useState } from "react";
import SearchingProductModal from "./SearchingProductModal";
import { NavbarSearch } from "./Styled";
import { useTranslations } from "next-intl";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const t = useTranslations("Navbar");

  return (
    <>
      <div style={{ position: "relative", width: "100%", marginRight: "15px" }}>
        <NavbarSearch
          className="form-control me-2"
          type="search"
          placeholder={t("SearchProduct")}
          aria-label="Search"
          onClick={handleShow}
        />
        <FaSearch
          style={{
            position: "absolute",
            top: "50%",
            left: "20px",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={handleShow}
        />
      </div>

      <SearchingProductModal show={show} setShow={setShow} />
    </>
  );
};

export default Search;
