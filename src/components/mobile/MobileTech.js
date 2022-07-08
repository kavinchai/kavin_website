import React from "react";
import "../../css/mobile/MobileTech.css";
import IMAGES from "../../constants";
const MobileTech = () => {
  return (
    <div className="mobileTechComponent">
      <div className="mobileTechContainer">
        <div className="mobileTechText1">technologies</div>
        <div className="mobileTechText2">tools i've used</div>
        <table className="mobileTechTable">
          <tr>
            <th className="mobileTechR1C1">
              <img
                src={IMAGES.logoDocker}
                className="mobileTechImg mobileTechImg1"
                alt="mobileTechImg1"
              />
            </th>
            <th className="mobileTechR1C2">
              <img
                src={IMAGES.logoSpring}
                className="mobileTechImg mobileTechImg2"
                alt="mobileTechImg2"
              />
            </th>
            <th className="mobileTechR1C3">
              <img
                src={IMAGES.logoLiquibase}
                className="mobileTechImg mobileTechImg3"
                alt="mobileTechImg3"
              />
            </th>
            <th className="mobileTechR1C4">
              <img
                src={IMAGES.logoPython}
                className="mobileTechImg mobileTechImg4"
                alt="mobileTechImg4"
              />
            </th>
            <th className="mobileTechR1C5">
              <img
                src={IMAGES.logoC}
                className="mobileTechImg mobileTechImg5"
                alt="mobileTechImg5"
              />
            </th>
          </tr>
          <tr>
            <th className="mobileTechR2C1">
              <img
                src={IMAGES.logoReact}
                className="mobileTechImg mobileTechImg6"
                alt="mobileTechImg6"
              />
            </th>
            <th className="mobileTechR2C2">
              <img
                src={IMAGES.logoHtml}
                className="mobileTechImg mobileTechImg7"
                alt="mobileTechImg7"
              />
            </th>
            <th className="mobileTechR2C3">
              <img
                src={IMAGES.logoCss}
                className="mobileTechImg mobileTechImg8"
                alt="mobileTechImg8"
              />
            </th>
            <th className="mobileTechR2C4">
              <img
                src={IMAGES.logoJs}
                className="mobileTechImg mobileTechImg9"
                alt="mobileTechImg9"
              />
            </th>
            <th className="mobileTechR2C5">
              <img
                src={IMAGES.logoArduino}
                className="mobileTechImg mobileTechImg10"
                alt="mobileTechImg10"
              />
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MobileTech;
