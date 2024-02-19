import React from "react";

function Resume() {
  return (
    <div className="page-content resume" id="resume">
      <div className="resume__contact-info">
        <h1 className="resume__name">AUBREY LYNN BACHANT</h1>
        <h4 className="resume__contact-details">
          <a
            href="mailto:aubreybachant@gmail.com"
            className="resume__contact-link"
          >
            aubreybachant@gmail.com
          </a>{" "}
          | 774-400-8759 |{" "}
          <a
            href="https://www.linkedin.com/in/aubrey-bachant/"
            className="resume__contact-link"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/abachant"
            className="resume__contact-link"
          >
            GitHub
          </a>
        </h4>
        <h4 className="resume__location">
          Philadelphia, Pennsylvania <small>(willing to relocate)</small>
        </h4>
      </div>
      <hr className="resume__divider" />
      <div className="resume__body">
        <section className="resume__section resume__section--experience">
          <h3 className="resume__section-title">Experience</h3>
          <div className="resume__experience">
            <h4>Software Engineer</h4>
            <h5>
              <a href="https://www.linkedin.com/company/getturnout/">
                Everyspace
              </a>{" "}
              | December 2022 — Current
            </h5>
            <ul>
              <li>
                Designed and developed reusable Vue components to enhance
                appointment creation, including advanced location search and
                addition functionality.
              </li>
              <li>
                Added and maintained RESTful API endpoints to fetch user
                information, improving data accessibility and application
                functionality.
              </li>
              <li>
                Improved API performance by implementing updated Firebase query
                methods, resulting in a 20 requests-per-second increase in
                response time.
              </li>
              <li>
                Increased user engagement metrics by integrating Webhooks with
                Zoom, enabling seamless scheduling and enhancing overall user
                experience.
              </li>
            </ul>
          </div>
          <div className="resume__experience">
            <h4>Software Engineer Contract</h4>
            <h5>
              <a href="https://www.linkedin.com/company/windesco/">Windesco</a>{" "}
              | September 2023 — December 2023
            </h5>
            <ul>
              <li>
                Enhanced the user experience of a wind farm data tracking web
                portal through front-end development, including implementing
                features like subscription handling, icons for issue statuses,
                and data visualization improvements.
              </li>
              <li>
                Successfully resolved complex issues independently, including
                activation/deactivation for users, spinner implementation during
                data updates, and bug fixes, demonstrating self-reliance and
                troubleshooting skills.
              </li>
              <li>
                Engaged in pair programming sessions with other front-end
                developers, contributing to collaborative solutions such as
                adding availability to tables and enhancing user experience with
                loading spinners for recommendations.
              </li>
              <li>
                Improved portal usability and data accuracy by addressing issues
                like handling special characters, resolving bugs, and
                implementing data-related features, enhancing overall portal
                quality.
              </li>
            </ul>
          </div>
          <div className="resume__experience">
            <h4>User Interface Engineer Contract</h4>
            <h5>
              <a href="https://www.linkedin.com/company/roomdex/">Roomdex</a> |
              December 2021 — February 2022
            </h5>
            <ul>
              <li>
                Developed and implemented Angular components to dynamically
                generate forms from objects, enhancing the user interface and
                improving data input efficiency.
              </li>
              <li>
                Maintained rigorous quality standards by achieving and
                sustaining 100% line test coverage for all code, including
                contributions to others' code, to ensure the highest reliability
                and performance.
              </li>
              <li>
                Implemented continuous integration practices to ensure a
                consistently shippable product, facilitating seamless
                development, testing, and deployment processes.
              </li>
            </ul>
          </div>
          <div className="resume__experience">
            <h4>Junior Software Engineer Intern</h4>
            <h5>
              <a href="https://www.linkedin.com/company/getdashride/">
                Dashride
              </a>{" "}
              | June 2021 — December 2021
            </h5>
            <ul>
              <li>
                Developed and implemented reusable React components to enhance
                appointment creation, including searching and adding locations.
              </li>
              <li>
                Designed and implemented new API endpoints to fetch user
                information, improving application functionality and data
                accessibility.
              </li>
              <li>
                Improved overall code quality by increasing unit, functional,
                and integration test coverage by 15%.
              </li>
              <li>
                Collaborated with cross-functional teams using Scrum methodology
                to ensure seamless delivery of features and timely project
                completion.
              </li>
            </ul>
          </div>
        </section>
        <section className="resume__section resume__section--skills">
          <h3 className="resume__section-title">Skills</h3>
          <div className="resume__skills">
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
          </div>
        </section>
        <section className="resume__section resume__section--projects">
          <h3 className="resume__section-title">Projects</h3>
          <div className="resume__projects">
            <p>
              See <a href="projects">Projects page</a>
            </p>
          </div>
        </section>
        <section className="resume__section resume__section--education">
          <h3 className="resume__section-title">Education</h3>
          <div className="resume__education">
            <h4>
              <a href="https://www.hackreactor.com/">Hack Reactor (2021)</a>
            </h4>
            <ul>
              <li>Advanced Software Engineering Immersive Program</li>
              <img
                className="certificate"
                src={require("../pictures/Hack_Reactor_Certificate.png")}
                alt="Hack Reactor Certificate"
              ></img>
            </ul>
          </div>
        </section>
      </div>
      <hr className="resume__divider" />
      <div className="resume__footer">
        <a
          href={
            "https://docs.google.com/document/d/e/2PACX-1vT3UK1DVz-U-tORmu2gMu05lCwjL7nPT19bhaiunvjj0KXjL2K3eYOq-5WS7pgF20jixf-bsDxItaTL/pub"
          }
          className="resume__footer-link"
        >
          View Resume on Google Docs
        </a>
      </div>
    </div>
  );
}

export default Resume;
