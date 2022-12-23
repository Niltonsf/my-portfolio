import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./font.css";
import MainWebpage from "./webpage/main";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <MainWebpage />
  </React.StrictMode>
);
