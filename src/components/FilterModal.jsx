"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
// import RangeSliderWithLabel from "./RangeSliderWithLabel";
// import DetailsDivider from "./DetailsDivider";
// import MainComponent from "./MainComponent";

const FilterModal = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
  const t = useTranslations("CategoryAndFilter");

  return (
    <div>
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="d-flex justify-content-between">
              <h5 className="fw-bold">{t("Filters")}</h5>
              <Link href={pathname}>
                <button type="button" className="bg-red-500 text-white p-2">
                  Close
                </button>
              </Link>
            </div>
            {/* <DetailsDivider /> */}
            <div className="d-flex list-group list-group-flush">
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0"
                aria-current="true"
              >
                {t("T-shirts")} <FaAngleRight className="ms-3" />
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0"
              >
                {t("Shorts")} <FaAngleRight className="ms-3" />
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0"
              >
                {t("Shirts")} <FaAngleRight className="ms-3" />
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0"
              >
                {t("Hoodie")} <FaAngleRight className="ms-3" />
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0"
              >
                {t("Jeans")} <FaAngleRight className="ms-3" />
              </a>
            </div>
            {/* <DetailsDivider />
            <RangeSliderWithLabel />
            <DetailsDivider /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterModal;
