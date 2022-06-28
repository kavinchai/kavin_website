import React from "react";
import "../css/Project.css";
import projectsJson from "../content/projects.json";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="projectContainer">
      <div className="projectList">
        <div className="projectHeader">projects</div>
        <div className="projectBody">
          {projectsJson.data.map((projInfo, index) => (
            <ProjectCard key={index} proj={projInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
