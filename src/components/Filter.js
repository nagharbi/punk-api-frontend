import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "../utils/utils";

export default function Filter(props) {
  const [filters, setFilters] = useState({});
  const [dateBefore, setDateBefore] = useState(null);
  const [dataAfter, setDataAfter] = useState(null);

  const handleChangeFilter = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handleSearch = () => {
    props.onSearch(filters);
  };

  const handleReset = () => {
    const resetFilters = { ...filters };
    for (const [key, value] of Object.entries(filters)) {
      resetFilters[key] = "";
    }

    setDateBefore(null);
    setDataAfter(null);

    setFilters(resetFilters);
    props.onReset();
  };

  const handleChangeDateBefore = (date) => {
    setDateBefore(date);
    const before = formatDate(date);
    setFilters({
      ...filters,
      brewed_before: before,
    });
  };

  const handleChangeDateAfter = (date) => {
    setDataAfter(date);
    const after = formatDate(date);
    setFilters({
      ...filters,
      brewed_after: after,
    });
  };

  return (
    <>
      <div className="border bg-light p-3 mb-4">
        <div className="row">
          <div className="form-group col-md-3">
            <label htmlFor="beer_name">Beer name</label>
            <input
              type="text"
              className="form-control"
              id="beer_name"
              name="beer_name"
              value={filters.beer_name || ""}
              onChange={handleChangeFilter}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="beer_name">Hops</label>
            <input
              type="text"
              className="form-control"
              id="hops"
              name="hops"
              value={filters.hops || ""}
              onChange={handleChangeFilter}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="abv_gt">ABV greater than</label>
            <input
              type="number"
              min="0"
              className="form-control"
              id="abv_gt"
              name="abv_gt"
              value={filters.abv_gt || ""}
              onChange={handleChangeFilter}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="abv_lt">ABV less than</label>
            <input
              type="number"
              min="0"
              className="form-control"
              id="abv_lt"
              name="abv_lt"
              value={filters.abv_lt || ""}
              onChange={handleChangeFilter}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-3">
            <label htmlFor="ebc_gt">EBC greater than</label>
            <input
              type="number"
              min="0"
              className="form-control"
              id="ebc_gt"
              name="ebc_gt"
              value={filters.ebc_gt || ""}
              onChange={handleChangeFilter}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="ebc_lt">EBC less than</label>
            <input
              type="number"
              min="0"
              className="form-control"
              id="ebc_lt"
              name="ebc_lt"
              value={filters.ebc_lt || ""}
              onChange={handleChangeFilter}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="brewed_before">Brewed before</label>
            <DatePicker
              className="form-control"
              id="brewed_before"
              name="brewed_before"
              showMonthYearPicker
              dateFormat="MM-yyyy"
              selected={dateBefore}
              isClearable
              onChange={handleChangeDateBefore}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="brewed_after">Brewed after</label>
            <DatePicker
              className="form-control"
              id="brewed_after"
              name="brewed_after"
              showMonthYearPicker
              dateFormat="MM-yyyy"
              selected={dataAfter}
              isClearable
              onChange={handleChangeDateAfter}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-1 me-2">
            <button className="btn btn-warning" onClick={handleReset}>
              Reset
            </button>
          </div>
          <div className="col-md-1">
            <button onClick={handleSearch} className="btn btn-dark">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
