import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./AppRouter";
import "./scss/main.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
