import React from 'react';


function Resume() {
  return(
    <div className="page-content" id="resume">
        <div>
            <h1>AUBREY LYNN BACHANT</h1>
            <h4><a href="mailto:aubreybachant@gmail.com">aubreybachant@gmail.com</a> | 774-400-8759 | <a href="https://www.linkedin.com/in/aubrey-bachant-36bb77115/">LinkedIn</a> | <a href="https://github.com/abachant">GitHub</a></h4>
            <h4>Waltham, Massachusetts <small>(willing to relocate)</small></h4>
        </div>
        <hr />
        <div>
            <h3>Skills</h3>
            <ul>
                <li>Python</li>
                <ul>
                    <li>Pandas</li>
                    <li>Jupyter Notebook</li>
                    <li>Matplotlib</li>
                    <li>Plotly</li>
                </ul>
                <li>JavaScript</li>
                <ul>
                    <li>React</li>
                    <li>jQuery</li>
                    <li>Jest</li>
                </ul>
                <li>Firebase</li>
                <li>SQL</li>
                <li>Git/GitHub</li>
                <li>Bash</li>
                <li>HTML</li>
                <li>CSS</li>
                <ul>
                    <li>Bootstrap</li>
                    <li>SASS</li>
                    <li>BEM</li>
                </ul>
                <li>Tulip App Builder</li>
                <li>Windows Office(Word, Excel, Powerpoint)</li>
                <li>SketchUp CAD Software</li>
                <li>French(intermediate)</li>
                <li>Reception</li>
                <li>Construction/Carpentry/Metalworking</li>
            </ul>
            <h3>Projects</h3>
                <div className="resume-subsection">
                <h4>In Progress</h4>
                <h5><a href="https://github.com/abachant/Lane-Claim">Lane Claim</a></h5>
                    <ul>
                        <li>Lane Claim is a progressive web app designed for tracking and reporting bikelane hazards, primarily cars</li>
                        <li>It is built in React, styled with SCSS and Bootstrap, and uses Jest for unit testing</li>
                        <li>It uses Firebase <a href="https://firebase.google.com/products/realtime-database/">Realtime Database</a> and <a href="https://firebase.google.com/products/storage/">Storage</a> for its data</li>
                    </ul>
                <h4>Complete</h4>
                <p>See <a href="projects">Projects page</a></p>
                </div>
            <h3>Experience</h3>
                <div className="resume-subsection">
                <h4><a href="https://www.dentsplysirona.com/en-us">Dentsply Sirona</a>, Waltham, MA</h4>
                <h5>Production Technician II: (October 2018—Current)</h5>
                    <ul>
                        <li>Used LEAN principles to verify, manufacture, and ship dental implants</li>
                        <li>Created and implemented 5S auditing application on own volition</li>
                        <li>Tulip App Administrator</li>
                    </ul>
                <h4><a href="https://dashride.com">Dashride</a>, New York, NY</h4>
                <h5>Front End Developer Intern: (June 2018—August 2018 )</h5>
                    <ul>
                        <li>Worked on redesign of ride booking tool in jQuery</li>
                        <li>Worked together with a team of other developers</li>
                        <li>Used RESTful APIs and Unit Testing</li>
                    </ul>
                <h4><a href="http://billbachantbuilders.com/">Bachant Builders</a>, Wareham, MA</h4>
                <h5>Foreman/Carpenter: (April 2009—November 2013 / November 2016—January 2018)</h5>
                    <ul>
                        <li>Used SketchUp to design blueprints for mapping building dimensions</li>
                        <li>Had experience doing finish carpentry and installing cabinets</li>
                        <li>Duties included carpentry/woodworking, automotive repair, masonry, metalworking</li>
                    </ul>
                <h4><a href="https://www.facebook.com/Animal-Associates-1455735024727937/">Animal Associates</a>, Dartmouth, MA</h4>
                <h5>Office Manager/Head Receptionist: (July 2015—November 2016)</h5>
                    <ul>
                        <li>In charge of billing, operating the front office, and opening and closing the business each day</li>
                        <li>Promoted from Head Receptionist to Office Manager in 5 months</li>
                        <li>Volunteered at “Hearts 4 Paws” animal shelter once a week</li>
                    </ul>
                <h4><a href="https://bachantsgunshop.com/">Bachant Gun Shop</a>, Lakeville, MA</h4>
                <h5>Gunsmith: (October 2014—July 2015)</h5>
                    <ul>
                        <li>Designed parts for fabrication using SketchUp CAD software</li>
                        <li>Cleaned, fixed, and listed firearms for sale on various online platforms</li>
                        <li>Found creative solutions to mechanical problems without clear instructions</li>
                    </ul>
                </div>
            <h3>Education</h3>
                <h4>Bristol Community College, Fall River, MA (2015—)</h4>
                <ul>
                    <li>General Studies</li>
                </ul>
                <h4>Apponequet Regional High School, Lakeville, MA (2009—2013)</h4>
                <ul>
                    <li>Advance Placement and Honors courses</li>
                </ul>
        </div>
        <hr />
        <div>
            <a href="https://docs.google.com/document/d/1d9vJS8ZktSJLMsFDTyhtcAKI29qBRL1bIK5-GjqzBpE/edit?usp=sharing">View Resume on Google Docs</a>
            <br />
            <a href="pictures/Garrett-Bachant-Resume.pdf" download>Download Resume as PDF</a>
        </div>   
    </div>
  )
}

export default Resume
