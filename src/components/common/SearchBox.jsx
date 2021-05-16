import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

function SearchBox({ error,  onSubmit, placeholder }) {
  const [data, setData] = useState("");

  function handleChange(e) {
    setData(e.target.value);
  }

  return (
    <div>
      <div className="input-group mb-4">
        <div className="form-outline">
          <input
            id="search-input"
            type="search"
            id="form1"
            className="form-control"
            onChange={(event) => handleChange(event)}
            placeholder={placeholder}
          />
        </div>
        <button
          onClick={() => onSubmit(data)}
          id="search-button"
          type="button"
          className="btn btn-primary"
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
      <ErrorMessage error={error} />
    </div>
  );
}

export default SearchBox;
