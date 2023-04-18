import React from "react";
import {createRoot} from "react-dom/client";
import {Signup} from "./pages/Signup/Signup";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Signup />
  </React.StrictMode>
);
