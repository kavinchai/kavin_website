import "../css/App.css";
import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Hero from "./Hero";
import Experience from "./Experience";

const App = () => {
  return (
    <div className="appContainer">
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <About /> */}
      <Experience />
      {/* <Work /> */}
    </div>
  );
};

export default App;
