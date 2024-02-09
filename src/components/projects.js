import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProjectThumbnail from "./projectThumbnail.js";
import SearchBar from "./searchBar.js";
import projectContent from "./projectContent.jsx";

function Projects(props) {
  const [visibleProjects, setVisibleProjects] = useState([]);
  // Create a <ProjectThumbnail /> for each object in the state
  const createThumbnails = () => {
    for (const index in visibleProjects) {
      const project = projectContent[index];
      return (
        <Link
          to={`/projects/${project.url}`}
          className="col-lg-4 col-md-6 thumbnail"
        >
          <ProjectThumbnail
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
          />
        </Link>
      );
    }
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
