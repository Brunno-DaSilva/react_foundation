import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  // The first part is always the current state the second part is the update

  const [location, setLocation] = useState("Dallas, TX");
  const [animal, setAnimal] = useState("dog");

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
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            //Fixing accessability Issue
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map((data, i) => (
              <option key={i} value={data}>
                {data}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
