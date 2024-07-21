"use client";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import styles from "./PriceFilter.module.css";

const PriceSlider = ({
  sliderOneValue,
  sliderTwoValue,
  setSliderOneValue,
  setSliderTwoValue,
  minGap,
  sliderMaxValue,
}) => {
  const t = useTranslations("CategoryAndFilter");
  const sliderTrackRef = useRef(null);

  useEffect(() => {
    fillColor();
  }, [sliderOneValue, sliderTwoValue]);

  const slideOne = (e) => {
    let value = parseInt(e.target.value);
    if (sliderTwoValue - value <= minGap) {
      value = sliderTwoValue - minGap;
    }
    setSliderOneValue(value);
  };

  const slideTwo = (e) => {
    let value = parseInt(e.target.value);
    if (value - sliderOneValue <= minGap) {
      value = sliderOneValue + minGap;
    }
    setSliderTwoValue(value);
  };

  const fillColor = () => {
    const percent1 = (sliderOneValue / sliderMaxValue) * 100;
    const percent2 = (sliderTwoValue / sliderMaxValue) * 100;
    if (sliderTrackRef.current) {
      sliderTrackRef.current.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, rgb(52, 58, 64) ${percent1}%, rgb(52, 58, 64) ${percent2}%, #dadae5 ${percent2}%)`;
    }
  };

  return (
    <div className={`${styles.wrapper}`}>
      <h6 htmlFor="colorRange" className="form-label fw-bolder mb-3">
        {t("Price")}
      </h6>
      <>
        <div className={styles.sliderTrack} ref={sliderTrackRef}></div>
        <input
          type="range"
          min="0"
          max={sliderMaxValue}
          value={sliderOneValue}
          onInput={slideOne}
          className={styles.slider}
        />
        <input
          type="range"
          min="0"
          max={sliderMaxValue}
          value={sliderTwoValue}
          onInput={slideTwo}
          className={styles.slider}
        />
      </>
      <div className={`d-flex justify-content-between mt-6_5 w-100`}>
        <span id="range1">${sliderOneValue}</span>
        <span id="range2">${sliderTwoValue}</span>
      </div>
    </div>
  );
};

export default PriceSlider;
