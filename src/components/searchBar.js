import React, { useState } from "react";

function SearchBar(props) {
  const [searchText, setSearchText] = useState("");
  return (
    <form>
      <label>
        Search:
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </label>
    </form>
  );
}

export default SearchBar;