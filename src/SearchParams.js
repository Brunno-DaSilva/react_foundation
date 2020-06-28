import React, { useState } from "react";

const SearchParams = () => {
  // The first part is always the current state the second part is the update

  const [location, setLocation] = useState("Dallas, TX");

  return (
    <div className="search-params">
      <h1>Search-params</h1>

      <p>{location}</p>

      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
