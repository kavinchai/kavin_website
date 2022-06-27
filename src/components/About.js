import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";
const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutTextContainer">
        <div className="aboutText">
          <div className="aboutText1">about me</div>
          <div className="aboutText2"></div>
          <div className="aboutText3">
            <p>
              Hi! My name is{" "}
              <mark className="highlight">Kavin Chaisawangwong</mark>. I am a
              senior at Virginia Tech majoring in computer engineering and
              economics. My interests include{" "}
              <mark className="highlight">embedded systems</mark>,{" "}
              <mark className="highlight">web development</mark>, and{" "}
              <mark className="highlight">digital interfacing</mark>.
            </p>
            <p>
              I enjoy experimenting with new technologies and exploring ways to
              practically integrate them into my life. My most recent projects
              include the{" "}
              <a
                href="https://github.com/sabaenzo/PCBLayoutToSTEP"
                target="_blank"
                className="aboutLink"
              >
                NASA Additive Manufacturing Application
              </a>
              , a{" "}
              <a
                href="https://github.com/kavinchai/pokedex_frontend"
                target="_blank"
                className="aboutLink"
              >
                front-end
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/kavinchai/pokedex_backend"
                target="_blank"
                className="aboutLink"
              >
                back-end
              </a>{" "}
              pokédex, and this personal website!
            </p>
          </div>
        </div>
        <div className="aboutImg"></div>
      </div>
    </div>
  );
};

export default About;
