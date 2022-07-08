import React from "react";
import "../css/MobileProjectCard.css";
import { VscLinkExternal, VscFileCode } from "react-icons/vsc";

const MobileProjectCard = ({ proj: { title, desc, link, tech } }) => {
  return (
    <a
      className="projCardComponent"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div className="mobileProjCardHeader">
        <div className="mobileProjCardHeaderSection">
          <VscFileCode className="mobileProjCardIcon1" />
          <VscLinkExternal className="mobileProjCardIcon2" />
        </div>
      </div>
      <div className="mobileProjCardBody">
        <div className="mobileProjCardTitle">{title}</div>
        <div className="mobileProjCardDesc">{desc}</div>
      </div>
      <div className="mobileProjCardFooter">
        <div className="mobileProjCardTech">
          {tech.map((key, index) => (
            <div key={index} className={`techUsed techUsed${index + 1}`}>
              {key}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};

export default MobileProjectCard;
