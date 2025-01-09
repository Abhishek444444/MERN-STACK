import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">MySite</div>
        <ul className="nav-links">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/explore"}>
            <li>Explore</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
