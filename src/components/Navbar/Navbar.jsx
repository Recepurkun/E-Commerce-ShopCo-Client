import "./style.css";
import { NavbarSearch, ShopCoTitle } from "./Styled";
import { CgProfile } from "react-icons/cg";
import { SlBasket } from "react-icons/sl";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslations } from "next-intl";
import ThemeToggleButton from "../ThemeToggleButton";

const Navbar = () => {
  const t = useTranslations("Navbar");
  return (
    <nav className="navbar navbar-expand-lg mt-4">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link href="/" className="navbar-brand me-5">
          <ShopCoTitle>{t("SiteName")}</ShopCoTitle>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 w-75">
            <li className="nav-item dropdown fw-bolder me-3">
              <a
                className="nav-link px-0 py-3 dropdown-toggle d-flex align-items-center"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h6>{t("Shop")}</h6>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    #
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    #
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    #
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link px-0 py-3" aria-current="page" href="#">
                <h6> {t("OnSale")}</h6>
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link px-0 py-3" href="#">
                <h6>{t("NewArrivals")}</h6>
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link px-0 py-3" href="#">
                <h6>{t("Brands")}</h6>
              </a>
            </li>
          </ul>
          <form className="d-flex w-100 justify-content-end" role="search">
            <NavbarSearch
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="d-flex ms-2 align-items-center">
          <a className="navbar-brand fw-bold" href="#">
            <SlBasket />
          </a>
          <a className="navbar-brand" href="#">
            <CgProfile />
          </a>
          <LanguageSwitcher />
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
