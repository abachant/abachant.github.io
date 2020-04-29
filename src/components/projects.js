import React from 'react';
import { Link } from 'react-router-dom';

import ProjectThumbnail from './projectThumbnail.js';


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectThumbnails: [
        {
          title: "This Site",
          id: "1",
          url: "abachant-github-pages",
          description: "A custom website built from scratch",
          imageSrc: "logo192.png",
          imageAlt: "thumbnail",
        },
        {
          title: "RIPTA Dashboard",
          id: "2",
          url: "RIPTA-dashboard",
          description: "Realtime dashboard using RIPTA's API",
          imageSrc: require("../pictures/ripta-dashboard.png"),
          imageAlt: "thumbnail",
        },
        {
          title: "OSMnx Grid Analysis",
          id: "3",
          url: "osmnx-grids",
          description: "Using OSMnx to analyze the grids of New York City",
          imageSrc: require("../pictures/osmnx_nyc_crop.png"),
          imageAlt: "thumbnail",
        },
        {
          title: "Rhyme Scheme Analysis",
          id: "4",
          url: "rhyme-scheme",
          description: "A Jupyter Notebook for analyzing stylistic habits of songwriters",
          imageSrc: require("../pictures/rhyme_ratio_violin_thumbnail.png"),
          imageAlt: "thumbnail",
        }
      ]
    };
  };

  // Create a <ProjectThumbnail /> for each object in the state
  createThumbnails() {
    return this.state.projectThumbnails.reverse().map(object => <Link to={`/projects/${object.url}`} className="col-lg-4"><ProjectThumbnail title={object.title} description={object.description} imageSrc={object.imageSrc} imageAlt={object.imageAlt}/></Link>)
  }

  render(){
    return(
      <div className="container-fluid thumbnail-container">
        {this.createThumbnails()}
      </div>
    );
  }
}

export default Projects
