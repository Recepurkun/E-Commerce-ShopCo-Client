import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavbarSearch } from "./Styled";
import { getProducts } from "@/services/api";
import ProductList from "@/containers/Products/ProductList";
import { useTranslations } from "next-intl";

const SearchingProductModal = ({ show, setShow }) => {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const t = useTranslations("Navbar");

  const handleClose = () => {
    setShow(false);
    setQuery("");
    setFilteredProducts([]);
  };

  const handleFilterChange = (e) => setQuery(e.target.value);

  const fetchFilteredData = async () => {
    if (query.length >= 3) {
      const products = await getProducts();
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  useEffect(() => {
    fetchFilteredData();
  }, [query]);

  const renderProductContent = () => {
    let response;
    if (query.length < 3) {
      response = <p className="text-center mt-4 mb-2">{t("Must")}</p>;
    } else if (filteredProducts.length == 0) {
      response = <p className="text-center mt-4 mb-2">{t("CantFind")}</p>;
    } else {
      response = (
        <div className="text-start">
          <h6 className="ms-3 my-4 fw-bold">{t("Result")}</h6>
          <ProductList products={filteredProducts} showAll={true} />
        </div>
      );
    }
    return response;
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {t("SearchProduct")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NavbarSearch
            className="form-control me-2"
            type="search"
            placeholder={t("SearchProduct")}
            aria-label="Search"
            onChange={(e) => handleFilterChange(e)}
          />
          {renderProductContent()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            {t("CloseBtn")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SearchingProductModal;
