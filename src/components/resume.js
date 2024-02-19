import React from 'react';


function Resume() {
    return (
        <div className="page-content" id="resume">
            <div>
                <h1>AUBREY LYNN BACHANT</h1>
                <h4><a href="mailto:aubreybachant@gmail.com">aubreybachant@gmail.com</a> | 774-400-8759 | <a href="https://www.linkedin.com/in/aubrey-bachant/">LinkedIn</a> | <a href="https://github.com/abachant">GitHub</a></h4>
                <h4>Boston, Massachusetts <small>(willing to relocate)</small></h4>
            </div>
            <hr />
            <div>
                <h3>Skills</h3>
                <ul>
                    <li>JavaScript</li>
                    <ul>
                        <li>React</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>Babel</li>
                        <li>jQuery</li>
                        <li>Jest</li>
                        <li>Sequelize</li>
                        <li>ES6</li>
                    </ul>
                    <li>TypeScript</li>
                    <li>Python</li>
                    <ul>
                        <li>Pandas</li>
                        <li>Jupyter Notebook</li>
                        <li>Matplotlib</li>
                        <li>Plotly</li>
                    </ul>
                    <li>SQL</li>
                    <ul>
                        <li>PostgreSQL</li>
                        <li>MariaDB</li>
                        <li>MYSQL</li>
                    </ul>
                    <li>NOSQL</li>
                    <ul>
                        <li>Firebase</li>
                        <li>MongoDB</li>
                    </ul>
                    <li>Git</li>
                    <ul>
                        <li>GitHub</li>
                        <li>GitHub Actions</li>
                    </ul>
                    <li>Bash</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <ul>
                        <li>SASS</li>
                        <li>BEM</li>
                        <li>Bootstrap</li>
                    </ul>
                    <li>Webpack</li>
                    <li>Docker</li>
                    <li>Agile Development</li>
                    <li>Tulip App Builder</li>
                    <li>Windows Office(Word, Excel, Powerpoint)</li>
                    <li>SketchUp CAD Software</li>
                    <li>French(intermediate)</li>
                </ul>
                <h3>Projects</h3>
                <div className="resume-subsection">
                    <h4>In Progress</h4>
                    <h5><a href="https://github.com/abachant/laneclaim">Lane Claim</a></h5>
                    <ul>
                        <li>Lane Claim is a progressive web app designed for tracking and reporting bikelane hazards, primarily cars</li>
                        <li>It is built in TypeScript and React, is styled with SASS, and uses Jest for testing</li>
                        <li>It uses Firebase <a href="https://firebase.google.com/products/realtime-database/">Realtime Database</a> and <a href="https://firebase.google.com/products/storage/">Storage</a> for its data</li>
                    </ul>
                    <h4>Complete</h4>
                    <p>See <a href="projects">Projects page</a></p>
                </div>
                <h3>Experience</h3>
                <div className="resume-subsection">
                    <h4><a href="https://www.linkedin.com/company/getturnout/">Everyspace</a>, New York, NY</h4>
                    <h5>Junior Software Engineer: (June 2021—Current)</h5>
                    <ul>
                        <li>Added new reusable React components for searching and adding locations for appointment creation</li>
                        <li>Added new API endpoints for fetching user information</li>
                        <li>Increased Unit, Functional, and Integration test coverage by 15%</li>
                        <li>Used Scrum development to better collaborate with teammates</li>
                    </ul>
                </div>
                <h3>Education</h3>
                <div className="resume-subsection">
                    <h4><a href="https://www.hackreactor.com/">Hack Reactor (2021)</a></h4>
                    <ul>
                        <li>Advanced Software Engineering Immersive Program</li>
                        <img className="certificate" src={require("../pictures/Hack_Reactor_Certificate.png")} alt="Hack Reactor Certificate"></img>
                    </ul>
                </div>
            </div>
            <hr />
            <div>
                <a href={"https://docs.google.com/document/d/e/2PACX-1vT3UK1DVz-U-tORmu2gMu05lCwjL7nPT19bhaiunvjj0KXjL2K3eYOq-5WS7pgF20jixf-bsDxItaTL/pub"}>View Resume on Google Docs</a>
            </div>
        </div>
    )
}

export default Resume
