import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo-container">
        <div class="logo">
          <div class="segment"></div>
          <div class="segment"></div>
          <div class="segment"></div>
          <div class="segment"></div>
          <div class="segment"></div>
          <div class="segment"></div>
          <div class="segment"></div>
          <div class="segment"></div>
          <div class="segment"></div>
      </div>
      <h3>EthAi</h3></div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#why-us">Why Us</a></li>
          <li><a href="#tokenomics">Tokenomics</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
        </ul>
        <div className="nav-buttons">
          <button className="login-btn">Log in</button>
          <button className="whitepaper-btn">Whitepaper</button>
        </div>
      </nav>
    );
  };

export default Navbar