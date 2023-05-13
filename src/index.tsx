import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {CookiesProvider} from "react-cookie";
import {ApolloAppProvider} from "@/hoc/ApolloAppProvider";
import {AppRouter} from "./AppRouter";
import "./scss/main.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <CookiesProvider>
    <ApolloAppProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ApolloAppProvider>
  </CookiesProvider>
);
