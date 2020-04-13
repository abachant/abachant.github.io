import React from 'react';


class ProjectThumbnail extends React.Component {
    render() {
        return(
            <div class="thumbnail col-md-4">
                <div>
                    <img src="logo192.png" alt="thumbnail" />
                </div>
                <div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );      
    }
}

export default ProjectThumbnail
