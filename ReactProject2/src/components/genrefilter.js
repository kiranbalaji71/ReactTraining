import React from "react";
import "./genrefilter.css";

function GenreFilter({ genreChange }) {
  const handleGenreChange = (e) => {
    genreChange(e.target.value);
  };
  return (
    <div className="contain">
      <select onChange={handleGenreChange}>
        <option value="">Select a Genre</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Comedy">Comedy</option>
        <option value="Crime">Crime</option>
        <option value="Documentary">Documentary</option>
        <option value="Drama">Drama</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
    </div>
  );
}
export default GenreFilter;
