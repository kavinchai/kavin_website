import React from "react";
import "../css/Hero.css";

const Hero = () => {
  const one = <h1>hi, my name is</h1>;
  const two = <h2 className="big-heading">kavin chaisawangwong</h2>;
  const three = <h3 className="big-heading">i build things</h3>;
  const four = (
    <>
      <p>
        I'm a computer engineer and economist venturing into the world of
        software development. I'm currently working as a software engineering
        intern at{" "}
        <a href="https://bushelpowered.com/" target="_blank" rel="noreferrer">
          Bushel
        </a>
        .
      </p>
    </>
  );
  const items = [one, two, three, four];
  return (
    <>
      <div className="heroContainer">
        <div className="heroTextContainer">
          <div className="heroText">
            <div className="heroText1">about me</div>
            <div className="heroText2"></div>
            <div className="heroText3">
              <p>
                Hi! My name is Kavin Chaisawangwong. I am a senior at Virginia
                Tech majoring in computer engineering and economics. I enjoy
                experimenting with new technologies and exploring ways to
                practically integrate them into my life. My passion for software
                was discovered during my first internship where I was introduced
                to HTML, Javascript, and CSS.
              </p>
              <p>
                As a computer engineer, my interests include embedded systems,
                web development, and digital interfacing. My learning is best
                facilitated by experiences that offer multiple avenues of
                practical applications.
              </p>
            </div>
          </div>
          <div className="heroImg"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
