import React from "react";
import "./searchbar.css";

function SearchBar({ searchChange }) {
  const handleChange = (e) => {
    searchChange(e.target.value);
  };

  return (
    <div className="contain">
      <input
        type="search"
        placeholder="Search for Movies..."
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
