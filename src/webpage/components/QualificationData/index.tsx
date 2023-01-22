import { useMediaQuery } from "usehooks-ts";
import { QualificationDataContainer } from "../../pages/Qualification/styles";

export default function QualificationData({
  left,
  title,
  company,
  calendar,
  companyWebsite,
  location,
  state,
  timeWorking,
}: any) {
  const smallDevices = useMediaQuery("(max-width: 350px)");

  return (
    <>
      {left ? (
        <QualificationDataContainer smallDevices={smallDevices}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div>
              <h3 className="qualification_title">{title}</h3>
              <span className="qualification_subtitle">
                Company:{" "}
                <a
                  href={companyWebsite}
                  className="qualification_website"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {company}
                </a>
              </span>
              <span className="qualification_subtitle">
                Location: {location}
              </span>
              <span className="qualification_subtitle">
                Contracted as: {state}
              </span>
              <span className="qualification_subtitle">
                Working hours: {timeWorking}
              </span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i> {calendar}
              </div>
            </div>
          </div>

          <div>
            <span className="qualification_rounder"></span>
            <span className="qualification_line"></span>
          </div>
        </QualificationDataContainer>
      ) : (
        <QualificationDataContainer smallDevices={smallDevices}>
          <div></div>

          <div>
            <span className="qualification_rounder"></span>
            <span className="qualification_line"></span>
          </div>

          <div>
            <h3 className="qualification_title">{title}</h3>
            <span className="qualification_subtitle">
              Company:{" "}
              <a
                href={companyWebsite}
                className="qualification_website"
                target={"_blank"}
                rel="noreferrer"
              >
                {company}
              </a>
            </span>
            <span className="qualification_subtitle">Location: {location}</span>
            <span className="qualification_subtitle">
              Contracted as: {state}
            </span>
            <span className="qualification_subtitle">
              Working hours: {timeWorking}
            </span>
            <div className="qualification_calendar">
              <i className="uil uil-calendar-alt"></i> {calendar}
            </div>
          </div>
        </QualificationDataContainer>
      )}
    </>
  );
}
