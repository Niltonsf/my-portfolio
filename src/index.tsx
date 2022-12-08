import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Experience from "./experience/Experience";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const onCreated = (state: {
  gl: { domElement: { style: { position: string; zIndex: number } } };
}) => {
  state.gl.domElement.style.position = "absolute";
  state.gl.domElement.style.zIndex = 99999;
};

root.render(
  <React.StrictMode>
    <Experience onCreated={onCreated} />
  </React.StrictMode>
);
