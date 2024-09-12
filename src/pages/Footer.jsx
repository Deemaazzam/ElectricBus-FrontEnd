import React from 'react';
import './../index.css'; // Ensure this CSS file is created

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2 className="footer-title">About Us</h2>
          <p>
            We are a forward-thinking company dedicated to innovation and excellence. Our mission is to deliver top-quality products and services that make a positive impact.
          </p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#book">Book</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <p>
              Lebanese University -Hadath
          </p>
          <p>
            Email: <a href="#">info@yourcompany.com</a>
          </p>
          <p>
            Phone: <a href="#">+1 234-567-890</a>
          </p>
        </div>
        <div className="footer-section social-media">
          <h2 className="footer-title">Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Campus Ride. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


