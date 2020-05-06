import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/">
            <div className="navbar-brand">
              <img src="favicon.ico" alt="favicon"></img>
            </div>
          </Link>
        </div>
        <ul className="nav">
          <Link to="/resume">
            <li className="nav-item nav-link">Resume</li>
          </Link>
          <Link to="/projects">
            <li className="nav-item nav-link">Projects</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
