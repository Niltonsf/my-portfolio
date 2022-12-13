import React from "react";
import BakendSkills from "./Backend";
import FrontendSkills from "./Frontend";
import "./index.css";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills_container container grid">
        <FrontendSkills />
        <BakendSkills />
      </div>
    </section>
  );
}
