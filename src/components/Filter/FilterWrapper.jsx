"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import ColorPicker from "./ColorPicker";
import SizePicker from "./SizePicker";
import CategoryPicker from "./CategoryPicker";
import DressPicker from "./DressPicker";
import PriceSlider from "./PriceSlider";
import { DetailsDivider } from "@/styles/GlobalStyled";
import { HeroButton } from "@/components/Hero/Styled";
import { useTranslations } from "next-intl";

const FilterWrapper = ({ filters }) => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("CategoryAndFilter");

  const [sliderOneValue, setSliderOneValue] = useState(50);
  const [sliderTwoValue, setSliderTwoValue] = useState(200);
  const minGap = 0;
  const sliderMaxValue = 250;

  const handleFilterChange = (type, value) => {
    const query = new URLSearchParams(window.location.search);
    let filterValues = query.get(type) ? query.get(type).split(",") : [];
    value = value.toLowerCase();

    if (filterValues.includes(value)) {
      filterValues = filterValues.filter(
        (filterValue) => filterValue !== value
      );
    } else {
      filterValues.push(value);
    }

    if (filterValues.length > 0) {
      query.set(type, filterValues.join(","));
    } else {
      query.delete(type);
    }

    query.delete("page");
    router.push(`?${query.toString()}`);
  };

  const applyFilter = () => {
    router.push(
      `${pathname}?price_gte=${sliderOneValue}&price_lte=${sliderTwoValue}`
    );
  };

  const clearFilters = () => {
    setSliderOneValue(50);
    setSliderTwoValue(200);

    const query = new URLSearchParams(window.location.search);
    query.delete("categories");
    query.delete("colors");
    query.delete("sizes");
    query.delete("dressStyles");
    query.delete("price_gte");
    query.delete("price_lte");
    query.delete("sortOption");

    router.push(`?${query.toString()}`);
  };

  return (
    <>
      <CategoryPicker
        selectedItems={filters.categories}
        onFilterChange={(value) => handleFilterChange("categories", value)}
      />
      <DetailsDivider />
      <PriceSlider
        sliderOneValue={sliderOneValue}
        sliderTwoValue={sliderTwoValue}
        setSliderOneValue={setSliderOneValue}
        setSliderTwoValue={setSliderTwoValue}
        minGap={minGap}
        sliderMaxValue={sliderMaxValue}
      />
      <DetailsDivider />
      <ColorPicker
        selectedColors={filters.colors}
        onFilterChange={(value) => handleFilterChange("colors", value)}
      />
      <DetailsDivider />
      <SizePicker
        selectedSizes={filters.sizes}
        onFilterChange={(value) => handleFilterChange("sizes", value)}
      />
      <DetailsDivider />
      <DressPicker />
      <HeroButton
        onClick={applyFilter}
        style={{ fontSize: 14, padding: "12px 24px", marginTop: 24 }}
      >
        {t("ApplyFilter")}
      </HeroButton>
      <HeroButton
        onClick={clearFilters}
        style={{ fontSize: 14, padding: "12px 24px", marginTop: 10 }}
      >
        {t("ClearFilter")}
      </HeroButton>
    </>
  );
};

export default FilterWrapper;
