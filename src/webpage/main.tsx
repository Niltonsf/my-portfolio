import React from "react";
import "./main.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

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
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
