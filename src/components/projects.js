import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProjectThumbnail from "./projectThumbnail.js";
import SearchBar from "./searchBar.js";
import projectContent from "./projectContent.jsx";

function Projects(props) {
  const [visibleProjects, setVisibleProjects] = useState([]);
  // Create a <ProjectThumbnail /> for each object in the state
  const createThumbnails = () => {
    return projectContent.map((object) => (
      <Link
        to={`/projects/${object.url}`}
        className="col-lg-4 col-md-6 thumbnail"
      >
        <ProjectThumbnail
          title={object.title}
          description={object.description}
          imageSrc={object.imageSrc}
          imageAlt={object.imageAlt}
        />
      </Link>
    ));
  };

  // Filter relevant project indices to state
  const searchProjects = (textToSearch) => {
    let relevantProjects = [];
    for (let i = 0; i < projectContent.length; i++) {
      if (projectContent[i].technology.includes(textToSearch)) {
        relevantProjects.push(i);
      }
    }
    setVisibleProjects(relevantProjects);
  };

  return (
    <div className="container-fluid thumbnail-container page-content">
      <SearchBar searchProjects={searchProjects} />
      {createThumbnails()}
    </div>
  );
}

export default Projects;
