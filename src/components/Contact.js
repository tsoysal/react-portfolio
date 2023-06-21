import React from "react";
import contacting from "../images/contact-me-image.png";
import "../styles/contact.css";

function Contact() {
  return (
    <div id="contacts-section" className="container">
      <h2 className="section-heading">&lt;h2&gt;Contact Me&lt;/h2&gt;</h2>
      <div className="sections-container">
        <div className="section-info">
          <p>
            Do not hesitate to contact me through the form here or by direct
            email on berksysl.g@gmail.com regardless of the subject.
          </p>
          <img src={contacting} alt="contact me" />
        </div>
        <form action="https://formsubmit.co/berksysl.g@gmail.com" method="post">
          <label>
            Who are you?
            <input type="text" name="name" placeholder="Tahaberk Soysal" />
          </label>
          <label>
            What's your e-mail?
            <input type="email" name="mail" placeholder="berksysl.g@gmail.com" required />
          </label>
          <label>
            What's your message?
            <textarea name="Message" rows={4} cols={50} placeholder="Let's work together..." required />
          </label>
          <input type="submit" value="Send" />
        </form>
      </div>
      <footer>
        <ul>
          <li>
            <a href="https://github.com/berksysl" target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://twitter.com/berksysl_" target="_blank" rel="noreferrer">Twitter</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tahaberk-soysal" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
        </ul>
        <span>© 2023 - 2023 www.tahaberksoysal.com - All Rights Reserved.</span>
      </footer>
    </div>
  );
}

export default Contact;
