import React from 'react';
import ProjectThumbnail from './projectThumbnail.js';


function Projects() {
  return(
    <div className="container-fluid">
      <ProjectThumbnail title="Project 1" description="Project 1 Description"/>
      <ProjectThumbnail title="Project 2" description="Project 2 Description"/>
      <ProjectThumbnail title="Project 3" description="Project 3 Description"/>
      <ProjectThumbnail title="Project 4" description="Project 4 Description"/>
      <ProjectThumbnail title="Project 5" description="Project 5 Description"/>
      <ProjectThumbnail title="Project 6" description="Project 6 Description"/>
   </div>
  )
}

export default Projects
