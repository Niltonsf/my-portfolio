import { useMediaQuery } from "usehooks-ts";
import QualificationData from "../../components/QualificationData";
import "./index.css";
import { QualificationContainer, QualificationSections } from "./styles";

export default function Qualification() {
  const largeDevices = useMediaQuery("(max-width: 992px)");
  const mediumDevices = useMediaQuery("(max-width: 768px)");
  const smallMediumDevices = useMediaQuery("(max-width: 576px)");

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <QualificationContainer
        largeDevices={largeDevices}
        mediumDevices={mediumDevices}
      >
        <div className="qualification_tabs">
          <div className="qualification_button button--flex">
            <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
            Experience
          </div>
        </div>

        <QualificationSections smallMediumDevices={smallMediumDevices}>
          <div className="qualification_content qualification_content-active">
            <QualificationData
              left={true}
              title={"Midlevel React Native Developer"}
              location={"Curitiba/Brazil as 100% remote"}
              company={"Univision"}
              companyWebsite={"https://univision.net.br/"}
              state={"Employee"}
              calendar={"dezember 2022 - Present"}
            />

            <QualificationData
              title={"Junior Full Stack Developer"}
              location={"London/England as 100% remote"}
              company={"Crowdform"}
              companyWebsite={"https://crowdform.studio/"}
              state={"Freelancer"}
              calendar={"october 2021 - dezember 2022"}
            />

            <QualificationData
              left={true}
              title={"Computer Engineer Internship"}
              location={"Curitiba/Brazil as 50% remote and 50% physical"}
              company={"Alta Rail Technology"}
              companyWebsite={"https://alta-rt.com/pt-br/"}
              state={"Employee"}
              calendar={"april 2021 - october 2021"}
            />
          </div>
        </QualificationSections>
      </QualificationContainer>
    </section>
  );
}
