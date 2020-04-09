import React from 'react';


class ProjectThumbnail extends React.Component {
    render() {
        return(
            <div class="col-md-4">
                <div class="thumbnail">
                    <a href="">
                        <div>
                            <img src="logo192.png" alt="thumbnail" />
                        </div>
                        <div>
                            <h3>{this.props.title}</h3>
                            <p>{this.props.description}</p>
                        </div>
                    </a>
                </div>
            </div>
        );
            
    }
}

export default ProjectThumbnail
