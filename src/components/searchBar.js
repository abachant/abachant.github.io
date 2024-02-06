import React, { useState } from "react";

function SearchBar(props) {
  const [searchText, setSearchText] = useState("");
  const handleSearchTextChange = (e) => setSearchText(e.target.value);

  return (
    <form>
      <label>
        Search:
        <input
          type="text"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </label>
    </form>
  );
}

export default SearchBar;
