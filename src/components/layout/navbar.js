import React from 'react';

function Navbar() {
  return(
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="index.html">AB</a>
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
