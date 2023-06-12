import {Pages} from "@/models/Pages";
import {Page404} from "@/pages/Page404/Page404";
import {Navigate, Route, Routes} from "react-router-dom";
import {Employees} from "@/pages/Employees/Employees";
import {Profile} from "@/pages/Profile/Profile";
import {ProfileInfo} from "@containers/ProfileInfo/ProfileInfo";
import {SignInForm} from "@containers/SignInForm/SignInForm";
import {Authentication} from "@/pages/Authentication/Authentication";
import {SignUpForm} from "@containers/SignUpForm/SignUpForm";
import {AuthRedirect} from "@containers/AuthRedirect/AuthRedirect";
import {Main} from "@/pages/Main/Main";
import {Projects} from "@/pages/Projects/Projects";
import {Cvs} from "@/pages/Cvs/Cvs";
import {Positions} from "./pages/Positions";
import {Skills} from "./pages/Skills";
import {Languages} from "@/pages/Languages/Languages";
import {Departments} from "./pages/Departments";

export const AppRouter = () => {
  const pathToEmployees = `${Pages.main.root}${Pages.main.employees}`;
  return (
    <Routes>
      <Route path={Pages.notFound} element={<Page404 />} />
      <Route path={Pages.main.root} element={<Main />}>
        <Route index element={<Navigate to={pathToEmployees} />} />
        <Route path={Pages.main.employees} element={<Employees />} />
        <Route path={Pages.main.projects} element={<Projects />} />
        <Route path={Pages.main.positions} element={<Positions />} />
        <Route path={Pages.main.cvs} element={<Cvs />} />
        <Route path={Pages.main.departments} element={<Departments />} />
        <Route path={Pages.main.skills} element={<Skills />} />
        <Route path={Pages.main.languages} element={<Languages />} />
      </Route>
      <Route path={Pages.info.root} element={<Profile />}>
        <Route index element={<Navigate to={Pages.info.profile} />} />
        <Route path={Pages.info.profile} element={<ProfileInfo />} />
        <Route path={Pages.info.skills} element={<></>} />
        <Route path={Pages.info.languages} element={<></>} />
        <Route path={Pages.info.cvs} element={<></>} />
      </Route>
      <Route />
      <Route
        path={Pages.auth.root}
        element={
          <AuthRedirect>
            <Authentication />
          </AuthRedirect>
        }
      >
        <Route index element={<Navigate to={Pages.auth.login} />} />
        <Route path={Pages.auth.login} element={<SignInForm />} />
        <Route path={Pages.auth.signup} element={<SignUpForm />} />
      </Route>
    </Routes>
  );
};
