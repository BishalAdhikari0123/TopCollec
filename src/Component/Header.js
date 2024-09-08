import React from 'react';
import './Header.css'; // Importing CSS

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="TopCollec Logo" />
        <h1>TopCollec</h1>
      </div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/tags">Tags</a>
        <input type="text" placeholder="Search..." className="search" />
      </nav>
    </div>
  );
};

export default Header;
