import React from "react";
import "./index.css";
import Works from "./Works";

export default function Projects() {
  return (
    <section className="work section" id="porfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>

      <Works />
    </section>
  );
}
