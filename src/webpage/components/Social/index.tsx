import React from "react";

export default function Social() {
  return (
    <div className="home_social">
      <a
        href="https://www.instagram.com"
        className="home_social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.dribbble.com"
        className="home_social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i className="uil uil-dribbble"></i>
      </a>

      <a
        href="https://www.github.com/Niltonsf"
        className="home_social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
}
