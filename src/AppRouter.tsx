import {Pages} from "@/models/Pages";
import {Page404} from "@/pages/Page404/Page404";
import {Signup} from "./pages/Signup/Signup";
import {Route, Routes} from "react-router-dom";
import {Employees} from "./pages/Employees/Employees";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={Pages.main} element={<Employees />} />
      <Route path={Pages.login} element={<Signup />} />
      <Route path={Pages.employees} element={<Employees />} />
      <Route path={Pages.notFound} element={<Page404 />} />
    </Routes>
  );
};
