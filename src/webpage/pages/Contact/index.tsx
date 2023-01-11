import "./index.css";
import { useMediaQuery } from "usehooks-ts";
import { ContactContainer, ContactInfo } from "./styles";

export default function Contact() {
  const largeDevices = useMediaQuery("(max-width: 992px)");
  const mediumDevices = useMediaQuery("(max-width: 768px)");
  const smallMediumDevices = useMediaQuery("(max-width: 576px)");

  return (
    <section className="contact section" id="contact">
      <div className="section__title">Get in touch</div>
      <span className="section__subtitle">Contact Me</span>

      <ContactContainer
        largeDevices={largeDevices}
        mediumDevices={mediumDevices}
      >
        <div className="contact_content">
          <ContactInfo
            mediumDevices={mediumDevices}
            smallMediumDevices={smallMediumDevices}
          >
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>

              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">
                nilton.schumacher.filho@gmail.com
              </span>

              <a
                className="contact_button"
                href="mailto:nilton.schumacher.filho@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            {mediumDevices ? (
              <div style={{ height: 50 }} />
            ) : (
              <div style={{ width: 50 }} />
            )}

            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card-icon"></i>

              <h3 className="contact_card-title">Whatsapp</h3>
              <span className="contact_card-data">+55 41 99161-4400</span>

              <a
                className="contact_button"
                href="https://api.whatsapp.com/send?phone=5541991614400&text=Hello, more information!"
                target="_blank"
                rel="noreferrer"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </ContactInfo>
        </div>

        {/* <div className="contact_content">
          <h3 className="contact_title">Write me your message</h3>

          <ContactForm
            ref={form}
            onSubmit={sendEmail}
            mediumDevices={mediumDevices}
            smallMediumDevices={smallMediumDevices}
          >
            <div className="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact_form-input"
                placeholder="Your name"
              />
            </div>

            <div className="contact_form-div">
              <label className="contact_form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact_form-input"
                placeholder="Your email"
              />
            </div>

            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag">Project</label>
              <textarea
                name="project"
                cols={30}
                rows={10}
                className="contact_form-input"
                placeholder="Your message 😀"
              ></textarea>
            </div>

            <button className="button button--flex" style={{ marginTop: 50 }}>
              {loading ? (
                <div
                  style={{
                    width: 134,
                    height: 24,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress
                    size="small"
                    color="white"
                    style={{ fontSize: 5.5 }}
                  />
                </div>
              ) : (
                <>{result}</>
              )}
            </button>
          </ContactForm>
        </div> */}
      </ContactContainer>
    </section>
  );
}
