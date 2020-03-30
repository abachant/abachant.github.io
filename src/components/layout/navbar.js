import React from 'react';

function Navbar() {
  return(
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="index.html">GB</a>
        </div>
        <ul className="nav navbar-nav">
          <li><a href="about.html">About</a></li>
          <li><a href="projects.html">Projects</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
