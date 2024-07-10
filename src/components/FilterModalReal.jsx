import { DetailsDivider } from "@/styles/GlobalStyled";
import { getTranslations } from "next-intl/server";
import { FaAngleRight } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import RangeSliderWithLabel from "./RangeSliderWithLabel";

const FilterModalReal = async () => {
  const t = await getTranslations("CategoryAndFilter");

  const colors = [
    "green",
    "red",
    "yellow",
    "orange",
    " magenta",
    "blue",
    "purple",
    "pink",
    "white",
    "black",
  ];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    " Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];
  return (
    <div>
      <button
        type="button"
        className="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <GiSettingsKnobs />
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5 fw-bold" id="exampleModalLabel">
                {t("Filters")}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
                  {t("Shorts")}
                  <FaAngleRight className="ms-3" />
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
              <DetailsDivider />
              <RangeSliderWithLabel />
              <DetailsDivider />
              <>
                <h5 className="fw-bolder mb-3_5">{t("Colors")}</h5>
                <div className="d-flex flex-row flex-wrap w-100">
                  {colors.map((renk) => (
                    <p
                      className="rounded-pill me-2 mb-3"
                      style={{
                        width: 30,
                        height: 30,
                        backgroundColor: `${renk}`,
                        border: `1px solid black`,
                        cursor: "pointer",
                      }}
                    ></p>
                  ))}
                </div>
              </>
              <DetailsDivider />
              <div>
                <h5 className="fw-bold mb-3_5">{t("Sizes")}</h5>
                <div className="d-flex flex-row flex-wrap w-100">
                  {sizes.map((boy) => (
                    <button
                      className="rounded-pill me-1 mb-3"
                      style={{
                        maxWidth: 96,
                        height: 39,
                        backgroundColor: "#F0F0F0",
                        cursor: "pointer",
                        padding: "10px",
                        color: "#000",
                      }}
                    >
                      <h6 style={{ fontSize: 14 }}>{boy}</h6>
                    </button>
                  ))}
                </div>
              </div>
              <DetailsDivider />
              <div className="d-flex list-group list-group-flush">
                <h5 className="fw-bold mb-3_5">{t("DressStyle")}</h5>
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0"
                  aria-current="true"
                >
                  {t("Casual")} <FaAngleRight className="ms-3" />
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0"
                >
                  {t("Formal")}
                  <FaAngleRight className="ms-3" />
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0"
                >
                  {t("Party")} <FaAngleRight className="ms-3" />
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0"
                >
                  {t("Gym")} <FaAngleRight className="ms-3" />
                </a>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                className="btn mt-4 w-100"
                style={{
                  borderRadius: 62,
                  backgroundColor: "#000",
                  color: "#fff",
                  fontSize: 14,
                }}
              >
                <h6 className="py-2">{t("ApplyFilter")}</h6>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModalReal;
