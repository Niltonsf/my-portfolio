import React from "react";
import { useMediaQuery } from "usehooks-ts";
import BackendSkills from "../../components/SkillsFrontBack/Backend";
import FrontendSkills from "../../components/SkillsFrontBack/Frontend";
import "./index.css";
import { SkillsContainer } from "./styles";

export default function Skills() {
  const largeDevices = useMediaQuery("(max-width: 992px)");
  const smallMediumDevices = useMediaQuery("(max-width: 576px)");

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <SkillsContainer
        largeDevices={largeDevices}
        smallMediumDevices={smallMediumDevices}
      >
        <FrontendSkills />
        <BackendSkills />
      </SkillsContainer>
    </section>
  );
}
