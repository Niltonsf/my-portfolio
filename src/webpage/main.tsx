import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";

export default function MainWebpage() {
  return (
    <div>
      <Header />

      <div className="main">
        <Home />
        <About />
      </div>
    </div>
  );
}
