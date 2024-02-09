import React from "react";
import { Link } from "react-router-dom";

import ProjectThumbnail from "./projectThumbnail.js";
import SearchBar from "./searchBar.js";
import projectContent from "./projectContent.jsx";

function Projects(props) {
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

  return (
    <div className="container-fluid thumbnail-container page-content">
      <SearchBar />
      {createThumbnails()}
    </div>
  );
}

export default Projects;
