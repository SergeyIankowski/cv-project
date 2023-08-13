import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {CookiesProvider} from "react-cookie";
import {ApolloAppProvider} from "@/hoc/ApolloAppProvider";
import {ToastsProvider} from "@/hoc/ToastsProvider";
import {AppRouter} from "./AppRouter";
import "./scss/main.scss";

import "@/services/i18n";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <CookiesProvider>
      <ToastsProvider>
        <ApolloAppProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </ApolloAppProvider>
      </ToastsProvider>
    </CookiesProvider>
  </StrictMode>
);
