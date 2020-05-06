import React from 'react';

class ProjectThumbnail extends React.Component {
    render() {
        return(
            <div className="img-thumbnail">
                <div className="thumbnail-image-container">
                    <img src={this.props.imageSrc} alt={this.props.thumbnail} className="thumbnail-image"/>
                </div>
                <div className="thumbnail-info-container">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );      
    }
}

export default ProjectThumbnail
