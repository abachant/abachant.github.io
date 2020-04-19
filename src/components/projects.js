import React from 'react';
import { Link } from 'react-router-dom';

import ProjectThumbnail from './projectThumbnail.js';


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectThumbnails: [
        {
          title: "Project 1 ",
          id: "1",
          url: "Project-1",
          description: "Blah blah blah good project thbh",
          imageSrc: "logo192.png",
          imageAlt: "thumbnail",
        },
        {
          title: "Project 2 ",
          id: "2",
          url: "Project-2",
          description: "Blah blah ggblah good project thbh",
          imageSrc: "logo192.png",
          imageAlt: "thumbnail",
        },
        {
          title: "Project 3 ",
          id: "3",
          url: "Project-3",
          description: "Blah blah sdfgblah good project thbh",
          imageSrc: "logo192.png",
          imageAlt: "thumbnail",
        },
        {
          title: "Project 4 ",
          id: "4",
          url: "Project-4",
          description: "Blah blah blah ggsdfgood project thbh",
          imageSrc: "logo192.png",
          imageAlt: "thumbnail",
        },
        {
          title: "Project 5 ",
          id: "5",
          url: "Project-5",
          description: "Blah blagsdfgh blah good project thbh",
          imageSrc: "logo192.png",
          imageAlt: "thumbnail",
        },
        {
          title: "Project 6 ",
          id: "6",
          url: "Project-6",
          description: "Blah blah sdfgsdfblah good project thbh",
          imageSrc: "logo192.png",
          imageAlt: "thumbnail",
        }
      ]
    };
  };

  // Create a <ProjectThumbnail /> for each object in the state
  createThumbnails() {
    return this.state.projectThumbnails.map(object => <Link to={`/projects/${object.url}`}><ProjectThumbnail title={object.title} description={object.description} imageSrc={object.imageSrc} imageAlt={object.imageAlt}/></Link>)
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
