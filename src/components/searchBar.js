import React, { useMemo, useEffect } from "react";
import debounce from "lodash/debounce";

function SearchBar({ searchProjects, searchText, setSearchText }) {
  const debouncedSearchProjects = useMemo(() => {
    return debounce((query) => searchProjects(query), 200);
    // eslint-disable-next-line
  }, []);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    debouncedSearchProjects(e.target.value);
  };

  const handleKeyPressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    return () => {
      debouncedSearchProjects.cancel();
    };
  }, [debouncedSearchProjects]);

  return (
    <form className="search-bar-container">
      <label htmlFor="search-input" className="visually-hidden">
        Search technologies, frameworks, etc.
      </label>
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
