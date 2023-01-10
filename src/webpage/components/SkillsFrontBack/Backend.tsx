import React from "react";
import { useMediaQuery } from "usehooks-ts";
import {
  SkillsBox,
  SkillsContent,
  SkillsName,
} from "../../pages/Skills/styles";

export default function BackendSkills() {
  const smallMediumDevices = useMediaQuery("(max-width: 576px)");
  const smallDevices = useMediaQuery("(max-width: 350px)");

  return (
    <SkillsContent smallMediumDevices={smallMediumDevices}>
      <h3 className="skills_title">Backend Developer</h3>

      <SkillsBox smallDevices={smallDevices}>
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <SkillsName smallDevices={smallDevices}>NodeJS</SkillsName>
              <span className="skills_level">Advanced</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <SkillsName smallDevices={smallDevices}>Firebase</SkillsName>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <SkillsName smallDevices={smallDevices}>SQL</SkillsName>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <SkillsName smallDevices={smallDevices}>Python</SkillsName>
              <span className="skills_level">Basic</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <SkillsName smallDevices={smallDevices}>NestJS</SkillsName>
              <span className="skills_level">Advanced</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <SkillsName smallDevices={smallDevices}>NoSQL</SkillsName>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
      </SkillsBox>
    </SkillsContent>
  );
}
