import React from "react";
import { useMediaQuery } from "usehooks-ts";
import { AboutBox, AboutInfo } from "../../pages/About/styles";

export default function Info() {
  const largeDevices = useMediaQuery("(max-width: 992px)");
  const smallMediumDevices = useMediaQuery("(max-width: 576px)");
  const smallDevices = useMediaQuery("(max-width: 350px)");

  return (
    <AboutInfo
      largeDevices={largeDevices}
      smallMediumDevices={smallMediumDevices}
      smallDevices={smallDevices}
    >
      <AboutBox largeDevices={largeDevices}>
        <i className="bx bx-award about_icon"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">2+ Years Working</span>
      </AboutBox>

      <AboutBox largeDevices={largeDevices}>
        <i className="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">12+ Projects</span>
      </AboutBox>

      <AboutBox largeDevices={largeDevices}>
        <i className="bx bx-support about_icon"></i>
        <h3 className="about_title">Available</h3>
        <span className="about_subtitle">12/7</span>
      </AboutBox>
    </AboutInfo>
  );
}
