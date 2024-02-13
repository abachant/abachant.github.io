import React from "react";

function SearchBar({ searchProjects, searchText, setSearchText }) {
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    searchProjects(e.target.value);
  };
  const handleKeyPressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <form className="search-bar-container">
      <input
        placeholder="Search technologies, frameworks etc."
        className="search-bar-input"
        type="search"
        value={searchText}
        onChange={handleSearchTextChange}
        onKeyPress={handleKeyPressEnter}
      />
    </form>
  );
}

export default SearchBar;
