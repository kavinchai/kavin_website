import React from "react";
import "../css/ProjectCard.css";

const ProjectCard = ({ proj: { title, desc, tech } }) => {
  return (
    <a className="projectCardContainer">
      <div className="projHeader">{title}</div>
      <div className="projBody"></div>
      <div className="projFooter"></div>
    </a>
  );
};

export default ProjectCard;
