import React from "react";
import "./main.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";

export default function MainWebpage() {
  return (
    // className="max_height"
    <div>
      <Header />

      <div className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
      </div>
    </div>
  );
}
