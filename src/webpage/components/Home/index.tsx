import React from "react";
import "./index.css";
import Social from "../Social";
import Data from "../Data";
import ScrollDown from "../ScrollDown";

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />
          <div className="home_img"></div>
          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
}
