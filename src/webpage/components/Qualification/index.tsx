import React from "react";
import "./index.css";

function QualificationData({ left, title, subtitle, calendar }: any) {
  return (
    <>
      {left ? (
        <div className="qualification_data">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div>
              <h3 className="qualification_title">{title}</h3>
              <span className="qualification_subtitle">{subtitle}</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i>
                {calendar}
              </div>
            </div>
          </div>

          <div>
            <span className="qualification_rounder"></span>
            <span className="qualification_line"></span>
          </div>
        </div>
      ) : (
        <div className="qualification_data">
          <div></div>

          <div>
            <span className="qualification_rounder"></span>
            <span className="qualification_line"></span>
          </div>

          <div>
            <h3 className="qualification_title">{title}</h3>
            <span className="qualification_subtitle">{subtitle}</span>
            <div className="qualification_calendar">
              <i className="uil uil-calendar-alt"></i>
              {calendar}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Qualification() {
  return (
    <div className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className="qualification_button qualification_active button--flex">
            <i className="uil uil-graduation-cap qualification_icon"></i>{" "}
            Education
          </div>

          <div className="qualification_button button--flex">
            <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div className="qualification_content qualification_content-active">
            <QualificationData
              left={true}
              title={"Web Design"}
              subtitle={"Spain - Institute"}
              calendar={"2021 - Present"}
            />

            <QualificationData
              title={"Art Director"}
              subtitle={"Spain - Institute"}
              calendar={"2021 - Present"}
            />

            <QualificationData
              left={true}
              title={"Web Developer"}
              subtitle={"Spain - Institute"}
              calendar={"2021 - 2021"}
            />

            <QualificationData
              title={"UX Design"}
              subtitle={"Spain - Institute"}
              calendar={"2017 - 2018"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
