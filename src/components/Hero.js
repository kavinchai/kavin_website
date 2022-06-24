import React from "react";
import textBody from "../textBody";
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
      <div className="heroPage">
        <div className="heroTextContainer">
          <>
            {items.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </>
        </div>
      </div>
    </>
  );
};

export default Hero;
