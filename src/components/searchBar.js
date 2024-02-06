import React, { useState } from "react";

function SearchBar(props) {
  const [searchText, setSearchText] = useState("");
  const handleSearchTextChange = (e) => setSearchText(e.target.value);

  return (
    <form className="search-bar-container">
      <input
        placeholder="Search technologies, frameworks etc."
        className="search-bar-input"
        type="text"
        value={searchText}
        onChange={handleSearchTextChange}
      />
    </form>
  );
}

export default SearchBar;
