import {lazy} from "react";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import {Pages} from "@/models/Pages";
import {Page404} from "@/pages/Page404/Page404";
import {SignInForm} from "@containers/SignInForm/SignInForm";
import {Authentication} from "@/pages/Authentication/Authentication";
import {SignUpForm} from "@containers/SignUpForm/SignUpForm";
import {AuthRedirect} from "@containers/AuthRedirect/AuthRedirect";
import {Main} from "@/pages/Main/Main";

const Employees = lazy(() =>
  import("@/pages/Employees/Employees").then(module => ({
    default: module.Employees,
  }))
);

const Profile = lazy(() =>
  import("@/pages/Profile").then(module => ({default: module.Profile}))
);
const ProfileInfo = lazy(() =>
  import("@/pages/Profile/ProfileInfo").then(module => ({
    default: module.ProfileInfo,
  }))
);
const ProfileSkills = lazy(() =>
  import("@/pages/Profile/ProfileSkills").then(module => ({
    default: module.ProfileSkills,
  }))
);
const ProfileLanguages = lazy(() =>
  import("@/pages/Profile/ProfileLanguages").then(module => ({
    default: module.ProfileLanguages,
  }))
);
const CvsAccordion = lazy(() =>
  import("@/pages/Profile/CvsAccordion").then(module => ({
    default: module.CvsAccordion,
  }))
);

const Projects = lazy(() =>
  import("@/pages/Projects").then(module => ({default: module.Projects}))
);
const ProjectDetails = lazy(() =>
  import("@/pages/Projects/ProjectDetails").then(module => ({
    default: module.ProjectDetails,
  }))
);

const Positions = lazy(() =>
  import("@/pages/Positions/").then(module => ({default: module.Positions}))
);

const Cvs = lazy(() =>
  import("@/pages/Cvs").then(module => ({default: module.Cvs}))
);
const CvProfile = lazy(() =>
  import("@/pages/CvProfile").then(module => ({default: module.CvProfile}))
);
const CvDetails = lazy(() =>
  import("@/pages/CvProfile/CvDetails").then(module => ({
    default: module.CvDetails,
  }))
);
const CvProjects = lazy(() =>
  import("@/pages/CvProfile/CvProjects").then(module => ({
    default: module.CvProjects,
  }))
);
const CvPreview = lazy(() =>
  import("@/pages/CvProfile/CvPreview").then(module => ({
    default: module.CvPreview,
  }))
);

const Departments = lazy(() =>
  import("@/pages/Departments").then(module => ({default: module.Departments}))
);

const Skills = lazy(() =>
  import("@/pages/Skills").then(module => ({default: module.Skills}))
);

const Languages = lazy(() =>
  import("@/pages/Languages").then(module => ({default: module.Languages}))
);

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
            <Route path={Pages.main.languages} element={<ProfileLanguages />} />
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
