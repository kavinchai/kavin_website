import React, { useEffect, useState } from "react";
import "../../css/mobile/MobileExp.css";
import jobsJson from "../../content/jobs.json";
import MobileExpDesc from "./MobileExpDesc";

const MobileExp = () => {
  const [dispNum, setDispNum] = useState(1);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(jobsJson.data[dispNum - 1]);
  }, [dispNum]);

  return (
    <div className="mobileExpComponent">
      <div className="mobileExpContainer">
        <div className="mobileExpHeaderText1">experience</div>
        <div className="mobileExpHeaderText2">places i've worked</div>
        <div className="mobileExpBody">
          <div className="mobileExpNavContainer">
            {jobsJson.data.map((mobileExpInfo, index) => (
              <button
                key={`${index} ${dispNum}`}
                className={
                  dispNum === index + 1
                    ? `mobileExpNavBtn mobileExpNavBtnActive`
                    : `mobileExpNavBtn`
                }
                onClick={() => {
                  setDispNum(index + 1);
                }}
              >
                {mobileExpInfo.company}
              </button>
            ))}
          </div>
          <MobileExpDesc data={data} />
        </div>
      </div>
    </div>
  );
};

export default MobileExp;
