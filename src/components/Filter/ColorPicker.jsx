"use client";
import { FaAngleUp, FaCheck } from "react-icons/fa";
import { useTranslations } from "next-intl";

const ColorPicker = ({ selectedColors, onFilterChange = "" }) => {
  const t = useTranslations("CategoryAndFilter");
  const colors = [
    "green",
    "red",
    "yellow",
    "orange",
    "DeepSkyBlue",
    "blue",
    "purple",
    "pink",
    "white",
    "black",
  ];

  const handleItemClick = (color) => {
    onFilterChange(color);
  };

  return (
    <div className="d-flex flex-row flex-wrap">
      <div className="d-flex flex-row justify-content-between align-items-center w-100">
        <h6 htmlFor="colorRange" className="form-label fw-bolder">
          {t("Colors")}
        </h6>
        <FaAngleUp className="ms-3 opacity-50" />
      </div>
      {colors.map((color) => (
        <div
          key={color}
          className="list-group-item rounded-pill my-2 d-flex align-items-center justify-content-center"
          onClick={() => handleItemClick(color)}
          style={{
            width: 35,
            height: 35,
            backgroundColor: color,
            border: "1px solid black",
            cursor: "pointer",
            marginRight: 1,
            position: "relative",
          }}
        >
          {selectedColors.includes(color) && (
            <FaCheck color="#fff" style={{ position: "absolute" }} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
