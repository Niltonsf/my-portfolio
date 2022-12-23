import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./font.css";
import MainExperience from "./experience/main";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import MainWebpage from "./webpage/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainExperience />,
  },
  {
    path: "/static",
    element: <MainWebpage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
