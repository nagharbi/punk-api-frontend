import React from "react";

export default function Sort(props) {
  const handlechange = (event) => {
    props.onSort(event.target.name, event.target.value);
  };

  return (
    <div className="border rounded me-4 p-3 text-bg-light">
      <span className="fs-6 mt-3">Beer name</span>
      <div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="name"
            value="desc"
            id="name_desc"
            onChange={handlechange}
          />
          <label className="form-check-label" htmlFor="name_desc">
            Desc
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="name"
            value="asc"
            id="name_asc"
            onChange={handlechange}
          />
          <label className="form-check-label" htmlFor="name_asc">
            Asc
          </label>
        </div>
      </div>
    </div>
  );
}
