import React from "react";
import "../../css/mobile/MobileProject.css";
import MobileProjectCard from "./MobileProjectCard";
import projectsJson from "../../content/projects.json";

const MobileProject = () => {
  return (
    <div className="mobileProjComponent">
      <div className="mobileProjContainer">
        <div className="mobileProjHeader">
          <div className="mobileProjText1">projects</div>
          <div className="mobileProjText2">things i've made</div>
        </div>
        <div className="mobileProjBody">
          {projectsJson.data.map((projInfo, index) => (
            <MobileProjectCard key={index} proj={projInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileProject;
