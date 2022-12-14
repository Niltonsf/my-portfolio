export default function QualificationData({
  left,
  title,
  subtitle,
  calendar,
}: any) {
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
