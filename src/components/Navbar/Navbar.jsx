"use client";
import "./style.css";
import { ShopCoTitle } from "./Styled";
import { CgProfile } from "react-icons/cg";
import { SlBasket } from "react-icons/sl";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslations } from "next-intl";
import ThemeToggleButton from "../ThemeToggleButton";
import { usePathname } from "next/navigation";
import Search from "./Search";
import { useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const activeUrl = usePathname();
  const activeLang = activeUrl.split("/")[1];

  const activeUser = useSelector((state) => state.user.currentUserEmail);
  const allCartItems = useSelector((state) => state.cart.cartItems);
  const currentUserCartItems = allCartItems.filter(
    (urun) => urun.userEmail === activeUser
  );
  const totalItemsInCart = currentUserCartItems.length;

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

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
        <Link href="/" className="navbar-brand pt-0 me-5">
          <ShopCoTitle>{t("SiteName")}</ShopCoTitle>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 w-75">
            <li className="nav-item dropdown fw-bolder me-3">
              <Link
                className="nav-link px-0 py-3 dropdown-toggle d-flex align-items-center"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h6>{t("Shop")}</h6>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    href={`/${activeLang}/category/casual`}
                  >
                    Casual
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href={`/${activeLang}/category/gym`}
                  >
                    Gym
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href={`/${activeLang}/category/party`}
                  >
                    Party
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href={`/${activeLang}/category/formal`}
                  >
                    Formal
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item me-3">
              <Link
                className="nav-link px-0 py-3"
                aria-current="page"
                href="#TopSelling"
              >
                <h6> {t("OnSale")}</h6>
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link px-0 py-3" href="#newArrivals">
                <h6>{t("NewArrivals")}</h6>
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link px-0 py-3" href="#brands">
                <h6>{t("Brands")}</h6>
              </Link>
            </li>
          </ul>
          <form className="d-flex w-100 justify-content-end" role="search">
            <Search />
          </form>
          <div className="d-flex align-items-center gap-2 mt-2 mt-md-0">
            {isClient && (
              <Link
                className="fw-bold me-1 position-relative"
                href={`/${activeLang}/cart`}
                aria-label="Go to cart"
                data-tooltip-content={
                  !activeUser
                    ? t("TooltipHasNoActiveUser")
                    : t("TooltipHasActiveUser")
                }
                data-tooltip-id="cartTooltip"
                data-tooltip-place="bottom"
                onClick={(e) => {
                  if (!activeUser) {
                    e.preventDefault();
                  }
                }}
              >
                <SlBasket size={25} />
                {totalItemsInCart > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItemsInCart}
                    <span className="visually-hidden">
                      products in the cart
                    </span>
                  </span>
                )}
                {!activeUser && (
                  <Tooltip
                    id="cartTooltip"
                    className="bg-danger mt-3 rounded-3"
                  />
                )}
              </Link>
            )}
            {activeUser ? (
              <Link
                className="fw-bold me-1"
                href={`/${activeLang}/user`}
                aria-label="Go to user"
              >
                <CgProfile size={25} />
              </Link>
            ) : (
              <Link
                className="fw-bold me-1"
                href={`/${activeLang}/signup`}
                aria-label="Go to signup"
              >
                <CgProfile size={25} />
              </Link>
            )}
            <LanguageSwitcher />
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
