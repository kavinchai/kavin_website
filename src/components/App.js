import "../css/App.css";
import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Hero from "./Hero";
import Exp from "./Exp";
import SideNav from "./SideNav";

const App = () => {
  return (
    <div className="appContainer">
      <Navbar />
      <SideNav />
      {/* <Hero /> */}
      <About />
      <Exp />
      {/* <Work /> */}
    </div>
  );
};

export default App;
