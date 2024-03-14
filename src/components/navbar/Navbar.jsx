import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="Navbar">
      <div className="header-inner">
        <div className="container">
          <div className="logo" id="logo">
            <a className="logo-link" href="/portfolio">Lee JuYoung</a>
          </div>
          <nav className="nav">
            <Link className="nav-link" activeClass="active" to="about" spy={true} smooth={true} duration={500}>About &nbsp;| &nbsp;</Link>
            <Link className="nav-link" activeClass="active" to="skills" spy={true} smooth={true} duration={500}>Skills &nbsp;| &nbsp;</Link>
            <Link className="nav-link" activeClass="active" to="projects" spy={true} smooth={true} duration={500}>Projects</Link>
          </nav>
        </div>
      </div>
    </header>
  )
};

export default Navbar