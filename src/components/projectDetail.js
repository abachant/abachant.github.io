import React from 'react';
import content from './projectContent.jsx';

function ProjectDetail ({match}) {
    
    // Get respective project content from projectContent.jsx by matching project url with Link url
    const project = content.find(object => {
        return object.url === match.params.url;
    })
    return <div className="page-content">{project.html}</div>

}

export default ProjectDetail