import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <span>DRIVE</span> DEALS
      </a>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#cars">Buy Cars</a></li>
        <li><a href="#sell">Sell Your Car</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#sell" className="nav-button">
        Sell Your Car
      </a>
    </nav>
  );
}

export default Navbar;