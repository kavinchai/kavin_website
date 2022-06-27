import "../css/App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Hero from "./Hero";
import Exp from "./Exp";
import SideNav from "./SideNav";
import Project from "./Project";
import NotSupported from "./NotSupported";
const App = () => {
  const [validSize, setValidSize] = useState();

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 555) {
      setValidSize(true);
    }
    setValidSize(false);
  }, []);

  return (
    <>
      {validSize === true ? (
        <div className="appContainer">
          <Navbar />
          <SideNav />
          {/* <Hero /> */}
          <About />
          <Exp />
          <Project />
        </div>
      ) : (
        <NotSupported />
      )}
    </>
  );
};

export default App;
