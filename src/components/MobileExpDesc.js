import React from "react";
import "../css/MobileExpDesc.css";

const MobileExpDesc = ({
  data: { title, company, location, duration, url, text },
}) => {
  return (
    <div className="mobileExpDescComponent">
      <div className="mobileExpDescHeader">
        <div className="mobileExpDescHeaderSec1">
          <div className="mobileExpDescTitle">{title}</div>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mobileExpDescCompany"
          >{`${company}`}</a>
        </div>
        <div className="mobileExpDescHeaderSec2">
          <div className="mobileExpDescDuration">{duration}</div>
          <div className="mobileExpDescLocation">{location}</div>
        </div>
      </div>
      <div className="mobileExpDescBody">
        <ul className="mobileExpDescUnorderedList">
          {text?.map((key) => (
            <li key={key} className="mobileExpDescList">
              {key}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileExpDesc;
