import React, { useState } from "react";
import "../css/Navbar.css";
const Navbar = () => {
  const [myName, setMyName] = useState(true);

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
        <ul className="navMenu">
          <li className="navElement">
            <a>about</a>
          </li>
          <li className="navElement">
            <a>experience</a>
          </li>
          <li className="navElement">
            <a>projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
