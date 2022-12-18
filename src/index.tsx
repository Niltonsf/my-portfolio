import React from "react";
import ReactDOM from "react-dom/client";
import MainExperience from "./experience/main";
import MainWebpage from "./webpage/main";
import "./index.css";
import "./font.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <MainExperience />
    {/* <MainWebpage /> */}
  </React.StrictMode>
);
