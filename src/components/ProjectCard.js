import React from "react";
import "../css/ProjectCard.css";
import { VscLinkExternal, VscFileCode } from "react-icons/vsc";

const ProjectCard = ({ proj: { title, desc, link, tech } }) => {
  return (
    <a className="projectCardContainer" href={link} target="_blank">
      <div className="projHeaderContainer">
        <div className="projHeader">
          <VscFileCode className="projCardIcon1" />
          <VscLinkExternal className="projCardIcon2" />
        </div>
      </div>
      <div className="projBody">
        <div className="projTitle">{title}</div>
        <div className="projDesc">{desc}</div>
      </div>
      <div className="projFooter">
        <div className="projTech">
          {tech.map((key, index) => (
            <div className={`techUsed techUsed${index + 1}`}>{key}</div>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
