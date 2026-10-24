import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <a href="#home" className="footer-logo">
            <span>DRIVE</span> DEALS
          </a>

          <p>
            Your destination for discovering cars, buying
            your next vehicle and selling your current car.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#cars">Buy Cars</a>
          <a href="#sell">Sell Your Car</a>
          <a href="#about">About Us</a>
        </div>

        <div className="footer-links">
          <h3>Contact Us</h3>
          <a href="mailto:yourbusiness@example.com">
            Email Us
          </a>
          <a href="#contact">Car Enquiry</a>
          <a href="#contact">Customer Support</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Drive Deals.
          All rights reserved.
        </p>
        <a href="#home">Back to Top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;