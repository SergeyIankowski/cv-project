import React from "react";
import {createRoot} from "react-dom/client";
import {AppRouter} from "./AppRouter";
import "./scss/main.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
