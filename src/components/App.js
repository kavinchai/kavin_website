import "../css/App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Exp from "./Exp";
import SideNav from "./SideNav";
import Project from "./Project";
import NotSupported from "./NotSupported";
import Tech from "./Tech";
import MobileAbout from "./MobileAbout";
import MobileTech from "./MobileTech";
import MobileExp from "./MobileExp";
import MobileProject from "./MobileProject";

const App = () => {
  const [validSize, setValidSize] = useState();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // console.log(window.innerWidth);
    if (window.innerWidth > 555) {
      setValidSize(true);
    } else {
      setValidSize(false);
    }
  }, [width]);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <>
      {validSize ? (
        <div className="appContainer">
          <Navbar />
          <SideNav />
          <About />
          <Tech />
          <Exp />
          <Project />
        </div>
      ) : (
        <div className="mobileContainer">
          <MobileAbout />
          <MobileTech />
          <MobileExp />
          <MobileProject />
        </div>
      )}
    </>
  );
};

export default App;
