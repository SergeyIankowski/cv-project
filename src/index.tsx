import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {CookiesProvider} from "react-cookie";
import {ApolloAppProvider} from "@/hoc/ApolloAppProvider";
import {ToastsProvider} from "@/hoc/ToastsProvider";
import {AppRouter} from "./AppRouter";
import "./scss/main.scss";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <CookiesProvider>
    <ToastsProvider>
      <ApolloAppProvider>
        <BrowserRouter>
          <ModalContextTemplateProvider>
            <AppRouter />
          </ModalContextTemplateProvider>
        </BrowserRouter>
      </ApolloAppProvider>
    </ToastsProvider>
  </CookiesProvider>
);
