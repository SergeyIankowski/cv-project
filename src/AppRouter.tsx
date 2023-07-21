import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import {Pages} from "@/models/Pages";
import {Page404} from "@/pages/Page404/Page404";
import {Employees} from "@/pages/Employees/Employees";
import {Profile} from "@/pages/Profile/Profile";
import {ProfileInfo} from "@/pages/Profile/ProfileInfo/ProfileInfo";
import {SignInForm} from "@containers/SignInForm/SignInForm";
import {Authentication} from "@/pages/Authentication/Authentication";
import {SignUpForm} from "@containers/SignUpForm/SignUpForm";
import {AuthRedirect} from "@containers/AuthRedirect/AuthRedirect";
import {Main} from "@/pages/Main/Main";
import {Projects} from "@/pages/Projects/Projects";
import {Cvs} from "@/pages/Cvs/Cvs";
import {Positions} from "@/pages/Positions";
import {Skills} from "@/pages/Skills";
import {Languages} from "@/pages/Languages/Languages";
import {Departments} from "@/pages/Departments";
import {CvsAccordion} from "@/pages/Profile/CvsAccordion";
import {ProjectDetails} from "@/pages/Projects/ProjectDetails";
import {CvProfile} from "@/pages/CvProfile";
import {CvDetails} from "@/pages/CvProfile/CvDetails";
import {CvProjects} from "@/pages/CvProfile/CvProjects";
import {CvPreview} from "@/pages/CvProfile/CvPreview";
import {ProfileSkills} from "@/pages/Profile/ProfileSkills";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={Pages.notFound} element={<Page404 />} />
      <Route path={Pages.main.root} element={<Main />}>
        <Route index element={<Navigate to={Pages.main.employees} />} />
        <Route path={Pages.main.employees} element={<Outlet />}>
          <Route index element={<Employees />} />
          <Route path={Pages.main.id} element={<Profile />}>
            <Route index element={<Navigate to={Pages.main.profile} />} />
            <Route path={Pages.main.profile} element={<ProfileInfo />} />
            <Route path={Pages.main.skills} element={<ProfileSkills />} />
            <Route path={Pages.main.languages} element={<></>} />
            <Route path={Pages.main.cvs} element={<CvsAccordion />} />
          </Route>
        </Route>
        <Route path={Pages.main.projects} element={<Outlet />}>
          <Route index element={<Projects />} />
          <Route path={Pages.main.id} element={<ProjectDetails />} />
        </Route>
        <Route path={Pages.main.positions} element={<Positions />} />
        <Route path={Pages.main.cvs} element={<Outlet />}>
          <Route index element={<Cvs />} />
          <Route path={Pages.main.id} element={<CvProfile />}>
            <Route index element={<Navigate to={Pages.main.details} />} />
            <Route path={Pages.main.details} element={<CvDetails />} />
            <Route path={Pages.main.projects} element={<CvProjects />} />
            <Route path={Pages.main.preview} element={<CvPreview />} />
          </Route>
        </Route>
        <Route path={Pages.main.departments} element={<Departments />} />
        <Route path={Pages.main.skills} element={<Skills />} />
        <Route path={Pages.main.languages} element={<Languages />} />
      </Route>

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
