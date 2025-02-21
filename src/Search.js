import React, { useState } from "react";
import SearchButton from "./component/SearchButton";
const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(event) {
    const newsearchInput = event.target.value;
    setSearchInput(newsearchInput);
  }
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            className="form-group search-box"
            onSubmit={event => {
              event.preventDefault();
              search(searchInput);
              setSearchInput("");
            }}
          >
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                onChange={handleSearchInput}
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
              />
              {/* <button className="btn btn-primary">Search</button> */}
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
