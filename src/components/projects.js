import React from 'react';
import ProjectThumbnail from './projectThumbnail.js';


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectThumbnails: [
        {
          title: "Project 1 ",
          description: "Blah blah blah good project thbh",
          imageSrc: "logo192.png",
          imageAlt: "thumbnail",
        },
        {
          title: "Project 2 ",
          description: "Blah blah ggblah good project thbh",
          imageSrc: "logo192.png",
          imageAlt: "thumbnail",
        },
        {
          title: "Project 3 ",
          description: "Blah blah sdfgblah good project thbh",
          imageSrc: "logo192.png",
          imageAlt: "thumbnail",
        },
        {
          title: "Project 4 ",
          description: "Blah blah blah ggsdfgood project thbh",
          imageSrc: "logo192.png",
          imageAlt: "thumbnail",
        },
        {
          title: "Project 5 ",
          description: "Blah blagsdfgh blah good project thbh",
          imageSrc: "logo192.png",
          imageAlt: "thumbnail",
        },
        {
          title: "Project 6 ",
          description: "Blah blah sdfgsdfblah good project thbh",
          imageSrc: "logo192.png",
          imageAlt: "thumbnail",
        }
      ]
    };
  };

  // Create a <ProjectThumbnail /> for each object in the state
  createThumbnails() {
    return this.state.projectThumbnails.map(object => <ProjectThumbnail title={object.title} description={object.description} imageSrc={object.imageSrc} imageAlt={object.imageAlt}/>)
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
