import "../css/App.css";
import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Hero from "./Hero";
import Exp from "./Exp";
import SideNav from "./SideNav";
import Project from "./Project";
const App = () => {
  return (
    <div className="appContainer">
      <Navbar />
      <SideNav />
      {/* <Hero /> */}
      <About />
      <Exp />
      <Project />
    </div>
  );
};

export default App;
