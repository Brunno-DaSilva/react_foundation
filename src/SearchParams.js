import React from "react";

const SearchParams = () => {
  const location = "Dallas, TX";

  return (
    <div className="search-params">
      <h1>Search-params</h1>

      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
