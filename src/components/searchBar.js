import React, { useState } from "react";
import projectContent from "./projectContent";

function SearchBar({ searchProjects }) {
  const [searchText, setSearchText] = useState("");
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    searchProjects(e.target.value);
  };

  return (
    <form className="search-bar-container">
      <input
        placeholder="Search technologies, frameworks etc."
        className="search-bar-input"
        type="search"
        value={searchText}
        onChange={handleSearchTextChange}
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
      />
    </form>
  );
}

export default SearchBar;
