import {Pages} from "@/models/Pages";
import {Page404} from "@/pages/Page404/Page404";
import {SignIn} from "@/pages/SignIn/SignIn";
import {Route, Routes} from "react-router-dom";
import {SignUp} from "./pages/SignUp/SignUp";
import {Employees} from "./pages/Employees/Employees";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={Pages.main} element={<Employees />} />
      <Route path={Pages.login} element={<SignIn />} />
      <Route path={Pages.signup} element={<SignUp />} />
      <Route path={Pages.employees} element={<Employees />} />
      <Route path={Pages.notFound} element={<Page404 />} />
    </Routes>
  );
};
