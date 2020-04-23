import React from 'react';

function getDate() {
  const date = new Date();
  return date.getFullYear();
}

function Footer() {
  return(
  <footer className="global-footer">©{getDate()} Aubrey Bachant</footer>
  )
}

export default Footer
