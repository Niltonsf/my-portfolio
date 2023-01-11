import React from "react";
import { useMediaQuery } from "usehooks-ts";
import {
  SkillsBox,
  SkillsContent,
  SkillsName,
} from "../../pages/Skills/styles";

export default function FrontendSkills() {
  const smallMediumDevices = useMediaQuery("(max-width: 576px)");
  const smallDevices = useMediaQuery("(max-width: 350px)");

  return (
    <SkillsContent smallMediumDevices={smallMediumDevices}>
      <h3 className="skills_title">Frontend Developer</h3>

      <SkillsBox smallDevices={smallDevices}>
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <SkillsName smallDevices={smallDevices}>HTML</SkillsName>
              <span className="skills_level">Advanced</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <SkillsName smallDevices={smallDevices}>CSS</SkillsName>
              <span className="skills_level">Advanced</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <SkillsName smallDevices={smallDevices}>JavaScript</SkillsName>
              <span className="skills_level">Advanced</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <SkillsName smallDevices={smallDevices}>Typescript</SkillsName>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <SkillsName smallDevices={smallDevices}>React</SkillsName>
              <span className="skills_level">Advanced</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <SkillsName smallDevices={smallDevices}>React Native</SkillsName>
              <span className="skills_level">Advanced</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <SkillsName smallDevices={smallDevices}>Git</SkillsName>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
        </div>
      </SkillsBox>
    </SkillsContent>
  );
}
