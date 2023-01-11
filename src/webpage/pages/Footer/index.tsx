import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer_title">Nilton Antônio Schumacher Filho</h1>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/niltonsf_"
            className="footer_social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/nilton-ant%C3%B4nio-schumacher-filho-0ab77b183/"
            className="footer_social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://www.github.com/Niltonsf"
            className="footer_social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; NiltonSf. All rights reserved
        </span>
      </div>
    </footer>
  );
}
