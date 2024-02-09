import React, { useState } from "react";
import projectContent from "./projectContent";

function SearchBar(props) {
  const [searchText, setSearchText] = useState("");
  let relevantProjects = [];
  const searchProjects = (textToSearch) => {
    relevantProjects = projectContent.filter((project) =>
      project.technology.includes(textToSearch),
    );
  };
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
