import React from "react";
import "./searchobject.css";

function SearchObject({ list }) {
  if (list.length === 0) {
    return (
      <div className="empty">
        <img
          src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png"
          alt="search"
        />
        <h1>SORRY... No Result Found</h1>
      </div>
    );
  }
  return (
    <div className="box">
      {list.map((object) => (
        <div className="card">
          <img src={object.Poster} alt="" />
          <h4>{object.Title}</h4>
          <p>{object.Year}</p>
        </div>
      ))}
    </div>
  );
}
export default SearchObject;
