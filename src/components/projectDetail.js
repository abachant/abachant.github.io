import React from 'react';
import content from './projectContent.jsx';

function ProjectDetail ({match}) {
    
    // Get respective project content from projectContent.jsx by matching project title with url
    const project = content.find(object => object.title === match.params.title)
 
    return(
        project.html
    );      

}

export default ProjectDetail