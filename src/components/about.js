import React from 'react';
import background from '../background.gif';


function About() {
  return(
    <div>
      <img src={background} alt="animation of the buses of downtown Providence, RI"/>
      <div className="jumbotron">
        <h1>Aubrey Bachant</h1>
        <p>
          I am a programmer and web developer passionate about working with and analyzing
          data to find solutions for civic and social problems. I am particularly interested in applying those skills to help better understand
          and improve transit, urban planning, and language.
        </p>
      </div>
   </div>
  )
}

export default About
