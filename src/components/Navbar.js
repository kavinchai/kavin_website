import React, { useState } from "react";
import "../css/Navbar.css";
const Navbar = () => {
  const [myName, setMyName] = useState(true);
  const scrollTo = (string) => {
    const section = document.querySelector(string);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="navBarContainer">
      <div className="navBar">
        <div
          className="firstName nameMark"
          onClick={() => setMyName((prev) => !prev)}
        >
          {myName === true ? "kavin" : "กวิน"}
        </div>
        <div
          className="lastName nameMark"
          onClick={() => setMyName((prev) => !prev)}
        >
          {myName === true ? "chai" : "ฉายสว่างวงศ์"}
        </div>
        <div className="navMenu">
          <button
            className="navBtn"
            onClick={() => scrollTo(".aboutComponent")}
          >
            about
          </button>
          <button className="navBtn" onClick={() => scrollTo(".expComponent")}>
            experience
          </button>
          <button
            className="navBtn"
            onClick={() => scrollTo(".projectComponent")}
          >
            projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
