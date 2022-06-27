import React from "react";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <div className="navBarContainer">
      <div className="navBar">
        <div className="firstName">kavin</div>
        <div className="lastName">chai</div>
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
