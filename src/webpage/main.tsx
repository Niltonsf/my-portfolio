import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";

export default function MainWebpage() {
  return (
    <>
      <Header />

      <div className="main">
        <Home />
      </div>
    </>
  );
}
