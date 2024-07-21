import React from "react";
import { getTranslations } from "next-intl/server";
import { GiSettingsKnobs } from "react-icons/gi";
import FilterWrapper from "./FilterWrapper";

const FilterModal = async ({ filters }) => {
  const t = await getTranslations("CategoryAndFilter");

  return (
    <div>
      <button
        type="button"
        className="btn"
        data-bs-toggle="modal"
        data-bs-target="#filterModal"
      >
        <GiSettingsKnobs />
      </button>

      <div
        className="modal fade"
        id="filterModal"
        tabIndex="-1"
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5 fw-bold" id="filterModalLabel">
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
              <div className="col-12 flex-wrap align-content-between">
                <div className="d-flex flex-column">
                  <div className="d-flex list-group list-group-flush">
                    <FilterWrapper filters={filters} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
