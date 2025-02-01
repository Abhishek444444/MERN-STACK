import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

const Header = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <span className="logo-icon">✈️</span>
        <h1>Travelers</h1>
      </div>

      {/* Navigation Links */}
      <nav className="nav">
        <Link
          to="/"
          className={`nav-link ${hovered === "home" ? "hovered" : ""}`}
          onMouseEnter={() => setHovered("home")}
          onMouseLeave={() => setHovered(null)}
        >
          Home
        </Link>
        <Link
          to="/destinations"
          className={`nav-link ${hovered === "destinations" ? "hovered" : ""}`}
          onMouseEnter={() => setHovered("destinations")}
          onMouseLeave={() => setHovered(null)}
        >
          Destinations
        </Link>
        <Link
          to="/booking"
          className={`nav-link ${hovered === "booking" ? "hovered" : ""}`}
          onMouseEnter={() => setHovered("booking")}
          onMouseLeave={() => setHovered(null)}
        >
          Booking
        </Link>
      </nav>

      {/* Login & Signup Buttons */}
      <div className="auth-buttons">
        <Link to="/login" className="btn login-btn">Login</Link>
        <Link to="/signup" className="btn signup-btn">Signup</Link>
      </div>
    </header>
  );
};

export default Header;
