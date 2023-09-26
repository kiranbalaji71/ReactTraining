import React, { useEffect, useState } from "react";
import SearchObject from "./components/searchobject";
import SearchBar from "./components/searchbar";
import Sample from "./components/sample.json";
import GenreFilter from "./components/genrefilter";
import "./App.css";

function App() {
  const [list, setList] = useState(Sample);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    if (genre) {
      setList(
        Sample.filter(
          (object) =>
            object.Title.toLowerCase().includes(search.toLowerCase()) &&
            object.Genre.includes(genre)
        )
      );
    } else {
      setList(
        Sample.filter((object) =>
          object.Title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, genre]);

  return (
    <div className="container">
      <div className="navbar">
        <h1>Movies Search</h1>
        <nav>
          <GenreFilter genreChange={setGenre} />
          <SearchBar searchChange={setSearch} />
        </nav>
      </div>
      <SearchObject list={list} />
    </div>
  );
}

export default App;
