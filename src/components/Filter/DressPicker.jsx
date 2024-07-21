"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleRight, FaAngleUp } from "react-icons/fa";
import { useTranslations } from "next-intl";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

const DressPicker = () => {
  const t = useTranslations("CategoryAndFilter");
  const items = ["casual", "formal", "party", "gym"];
  const pathname = usePathname();
  const changedPathname = pathname.split("/", 3).join("/");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const savedItem = localStorage.getItem("selectedDressStyle");
    if (savedItem) {
      setSelectedItem(savedItem);
    }
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    localStorage.setItem("selectedDressStyle", item);
  };

  return (
    <div className="d-flex flex-row flex-wrap">
      <div className="d-flex flex-row justify-content-between align-items-center w-100">
        <h6 htmlFor="colorRange" className="form-label fw-bolder">
          {t("DressStyle")}
        </h6>
        <FaAngleUp className="me-1 opacity-50" />
      </div>
      <ul className="list-group w-100">
        {items.map((item) => (
          <li
            key={item}
            className={`list-group-item d-flex align-items-center justify-content-between border-0 px-2 rounded-3 ${
              selectedItem === item ? "bg-body-secondary" : ""
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => handleItemClick(item)}
          >
            <Link href={`${changedPathname}/${item}`}>
              {capitalizeFirstLetter(item)}
            </Link>
            <FaAngleRight className="ms-3 opacity-50" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DressPicker;
