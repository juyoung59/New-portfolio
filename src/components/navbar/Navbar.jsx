import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
            <div className="header-inner">
                <div className="container">
                    <div className="logo" id="logo">
                        <a className="logo-link" href="/portfolio">Lee JuYoung</a>
                    </div>
                    <nav className="nav">
                        <a className="nav-link" href="#about">About &nbsp;| &nbsp; </a>
                        <a className="nav-link" href="#skills">Skills &nbsp;| &nbsp;</a>
                        <a className="nav-link" href="#projects">Projects &nbsp;| &nbsp;</a>
                        <a className="nav-link" href="#contact">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
  )
};

export default Navbar