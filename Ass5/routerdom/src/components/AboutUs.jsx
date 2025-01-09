import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <header>
        <h1>About Me</h1>
      </header>

      <div className="about">
        <div className="intro">
          <img
            src="https://cdn.pixabay.com/photo/2023/01/23/00/45/cat-7737618_1280.jpg"
            alt="Profile picture"
          />
          <div className="text">
            <h2>Hi, I'm Aryan Borawake</h2>
            <p>
              I'm a passionate web developer with a love for creating intuitive
              and dynamic web experiences. With experience in front-end and
              back-end technologies, I strive to build products that are
              user-friendly and efficient. I enjoy solving problems and
              continuously learning new skills.
            </p>
          </div>
        </div>

        <div className="skills">
          <h3>My Skills</h3>
          <ul>
            <li>HTML5, CSS3, JavaScript</li>
            <li>React</li>
            <li>Node.js, Express</li>
            <li>MongoDB</li>
            <li>Git, GitHub, Version Control</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
