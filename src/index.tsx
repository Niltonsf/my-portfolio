import "./index.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import MainExperience from "./experience/main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainWebpage from "./webpage/main";

const root = ReactDOMClient.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  console.log(document.fonts);
  return (
    <Routes>
      <Route path="/" element={<MainExperience />} />
      <Route path="/static" element={<MainWebpage />} />
    </Routes>
  );
};

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
