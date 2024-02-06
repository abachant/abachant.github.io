import React, { useState } from "react";
import projectContent from "./projectContent";

function SearchBar(props) {
  const [searchText, setSearchText] = useState("");
  let relevantProjects = [];
  const searchProjects = (textToSearch) => {
    relevantProjects = projectContent.filter((project) =>
      project.technology.includes(textToSearch),
    );
    console.log("filterdlistg", relevantProjects);
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
        type="text"
        value={searchText}
        onChange={handleSearchTextChange}
      />
    </form>
  );
}

export default SearchBar;
