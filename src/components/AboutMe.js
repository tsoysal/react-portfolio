import React from "react";
import '../styles/aboutme.css'
import aboutmeimg from "../images/about-me-image.png";

function AboutMe() {
  return (
    <div id="about-section" className="container">

      <h2 className="section-heading">&lt;h1&gt;About Me&lt;/h1&gt;</h2>
      <h2 className="section-heading">&lt;!-- More info about me --&gt;</h2>

      <section className="aboutme-section">
        <div className="info-text">
          <h4>Who Am I</h4>

          <p>
            My name is Tahaberk Soysal. I live in Turkey and i am a self-taught
            front-end developer.
          </p>

          <p>
            I’ve started my coding journey in 2018. I’ve learned the programming
            basics with C++ and then i have decided to develop web applications
            after years.
          </p>

          <p>
            I am currently developing projects and looking for a open position
            for my career.
          </p>
        </div>

        <figure>
          <img src={aboutmeimg} alt="whoami" />
        </figure>

      </section>

    </div>
  );
}

export default AboutMe;
