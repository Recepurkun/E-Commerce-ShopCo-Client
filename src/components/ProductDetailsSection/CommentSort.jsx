import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { ReviewButton } from "./Styled";

const CommentSort = ({ sortOption, setSortOption }) => {
  const t = useTranslations("ProductComment");

  return (
    <div className="dropdown-center m-2 d-none d-md-flex">
      <ReviewButton
        className="dropdown-toggle btn bg-secondary-subtle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ color: "inherit" }}
      >
        {t("Sort")}
      </ReviewButton>
      <ul className="dropdown-menu">
        <li>
          <Link
            className={`dropdown-item ${
              sortOption === "latest" ? "active" : ""
            }`}
            scroll={false}
            href="#"
            onClick={() => setSortOption("latest")}
          >
            {t("Latest")}
          </Link>
        </li>
        <li>
          <Link
            className={`dropdown-item ${
              sortOption === "oldest" ? "active" : ""
            }`}
            href="#"
            onClick={() => setSortOption("oldest")}
            scroll={false}
          >
            {t("Oldest")}
          </Link>
        </li>
        <li>
          <Link
            className={`dropdown-item ${
              sortOption === "highest" ? "active" : ""
            }`}
            href="#"
            onClick={() => setSortOption("highest")}
            scroll={false}
          >
            {t("RatingHigh")}
          </Link>
        </li>
        <li>
          <Link
            className={`dropdown-item ${
              sortOption === "lowest" ? "active" : ""
            }`}
            href="#"
            onClick={() => setSortOption("lowest")}
            scroll={false}
          >
            {t("RatingLow")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CommentSort;
