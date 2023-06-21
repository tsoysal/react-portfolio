import React from "react";
import logo from "../images/logo.png";
import welcomeimage from "../images/welcome-image.png";
import "../styles/welcome.css";

/* Navigation Menu */
function Navbar() {
  return (
    <nav className="nav-bar">
      <img draggable="false" src={logo} alt="Tahaberk SOYSAL" />
      <ul className="nav-bar-list">
        <li>
          <a href="#welcomepage">Introduction</a>
        </li>
        <li>
          <a href="#projects-section">Projects</a>
        </li>
        <li>
          <a href="#about-section">About</a>
        </li>
        <li>
          <a href="#contacts-section">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

/* Welcome Page */
function Welcome() {
  return (
    <div id="welcomepage" className="container">
      <Navbar />
      <main>
        <div className="text-content">
          <h1>
            I Develop
            <br />
            Web Applications.
          </h1>
          <p>
            Hi there! My name is Tahaberk.<br /> I'm a self-taught front-end
            developer based in Turkey.
          </p>
        </div>
        <img draggable="false" src={welcomeimage} alt="Front-end Developer" />
      </main>
      <a href="#projects-section">
        <span className="cta">
          Explore my projects{" "}
          <i
            className="fa-solid fa-arrow-down-long"
            style={{ color: "#ffffff" }}
          ></i>
        </span>
      </a>
    </div>
  );
}

export default Welcome;
