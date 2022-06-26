import React from "react";
import "../css/ExpDesc.css";
const ExpDesc = ({
  data: { date, title, company, location, range, url, text },
}) => {
  return (
    <div className="descContainer">
      <div className="descHeader">
        <div className="headSec1">
          <div className="descTitle">{title}</div>
          <div className="descCompany">{`@${company}`}</div>
        </div>
        <div className="headSec2">
          <div className="descRange">{range}</div>
        </div>
      </div>
      <div className="descBody">
        <ul className="descUl">
          {text?.map((key) => (
            <li key={key} className="descLi">
              {key}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpDesc;
