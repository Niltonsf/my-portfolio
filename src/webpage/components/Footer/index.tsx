import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer_title">Nilton</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com"
            className="footer_social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; NiltonSF. All rights reserved
        </span>
      </div>
    </footer>
  );
}
