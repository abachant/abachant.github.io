import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProjectThumbnail from "./projectThumbnail.js";
import SearchBar from "./searchBar.js";
import projectContent from "./projectContent.jsx";

function Projects(props) {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Create a <ProjectThumbnail /> from an object
  const createThumbnail = (project) => {
    return (
      <Link
        to={`/projects/${project.url}`}
        className="col-lg-4 col-md-6 thumbnail"
        key={project.id}
      >
        <ProjectThumbnail
          title={project.title}
          description={project.description}
          imageSrc={project.imageSrc}
          imageAlt={project.imageAlt}
        />
      </Link>
    );
  };

  // Render a <ProjectThumbnail /> for each object in the state
  const renderThumbnails = () => {
    const thumbnails = [];
    if (searchText) {
      if (visibleProjects.length > 0) {
        visibleProjects.forEach((index) => {
          const visibleProject = projectContent[index];
          thumbnails.push(createThumbnail(visibleProject));
        });
        return thumbnails;
      } else {
        return (
          <div className="thumbnail no-projects-warning">
            No Projects Found
          </div>
        );
      }
    }
    return projectContent.map((project) => createThumbnail(project));
  };

  // Filter project indices relevant to search to state
  const searchProjects = (query) => {
    const normalizedQuery = query.toLowerCase();
    let relevantProjects = [];
    for (let i = 0; i < projectContent.length; i++) {
      if (projectContent[i].technology.includes(normalizedQuery)) {
        relevantProjects.push(i);
      }
    }
    setVisibleProjects(relevantProjects);
  };

  return (
    <div className="container-fluid thumbnail-container page-content">
      <SearchBar
        searchProjects={searchProjects}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      {renderThumbnails()}
    </div>
  );
}

export default Projects;
