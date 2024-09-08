import React from 'react';
import './Footer.css'; // Importing CSS

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="/path-to-your-logo.png" alt="Footer Logo" />
        <h2>TopCollec</h2>
      </div>
      <p className="footer-description">
        Welcome to TopCollec, where we curate the finest collections on every topic imaginable.
      </p>
    </div>
  );
};

export default Footer;
