import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {Pages} from "@/models/Pages";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={Pages.main} />
      <Route path={Pages.login} />
      <Route path={Pages.employees} />
    </Routes>
  );
};
