"use client";
import { useTranslations } from "next-intl";

const ProductFAQs = () => {
  const t = useTranslations("FAQS");

  return (
    <div
      className="accordion accordion-flush w-50 border rounded-3 p-3 mx-auto"
      id="accordionFlushForFaQs"
    >
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            {t("FirstQuestion")}
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushForFaQs"
        >
          <div className="accordion-body">{t("FirstAnswer")}</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            {t("SecondQuestion")}
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushForFaQs"
        >
          <div className="accordion-body">{t("SecondAnswer")}</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            {t("ThirtyQuestion")}
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushForFaQs"
        >
          <div className="accordion-body">{t("ThirtyAnswer")}</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            {t("FourthQuestion")}
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushForFaQs"
        >
          <div className="accordion-body">{t("FourthAnswer")}</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive"
          >
            {t("FiftyQuestion")}
          </button>
        </h2>
        <div
          id="flush-collapseFive"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushForFaQs"
        >
          <div className="accordion-body">{t("FiftyAnswer")}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductFAQs;
