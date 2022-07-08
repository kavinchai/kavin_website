import "../css/App.css";
import React, { useEffect, useState } from "react";
// import NotSupported from "./NotSupported";

import Navbar from "./default/Navbar";
import About from "./default/About";
import Exp from "./default/Exp";
import SideNav from "./default/SideNav";
import Project from "./default/Project";
import Tech from "./default/Tech";
import MobileAbout from "./mobile/MobileAbout";
import MobileTech from "./mobile/MobileTech";
import MobileExp from "./mobile/MobileExp";
import MobileProject from "./mobile/MobileProject";

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
