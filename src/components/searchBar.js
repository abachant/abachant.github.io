import React from "react";

function SearchBar({ searchProjects, searchText, setSearchText }) {
  const handleSearchTextChange = (e) => {
    const normalizedSearchText = e.target.value.toLowerCase();
    setSearchText(e.target.value);
    searchProjects(normalizedSearchText);
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
