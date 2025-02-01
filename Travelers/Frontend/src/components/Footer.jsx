import React from "react";
import "./Footer.css"; // Import external CSS

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h2 className="footer-title">Contact Us</h2>

          <div className="footer-info">
            <p>📍 Sector-19, Akurdi, Pune - 411002</p>
            <p>📞 +91-9637479291</p>
            <p>📧 travelers@abc.com</p>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <p className="footer-text">
        Copyright &copy; 2025 All Rights Reserved. | Designed by *Abhishek Kaware*
      </p>
    </footer>
  );
}