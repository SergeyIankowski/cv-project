import {lazy} from "react";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import {Pages} from "@/models/Pages";
import {Page404} from "@/pages/Page404/Page404";
import {SignInForm} from "@containers/SignInForm/SignInForm";
import {Authentication} from "@/pages/Authentication/Authentication";
import {SignUpForm} from "@containers/SignUpForm/SignUpForm";
import {AuthRedirect} from "@containers/AuthRedirect/AuthRedirect";
import {Main} from "@/pages/Main/Main";

// import {Profile} from "./pages/Profile/Profile";
// import {Employees} from "./pages/Employees/Employees";
// import {ProfileInfo} from "@/pages/Profile/ProfileInfo/ProfileInfo";
// import {Projects} from "@/pages/Projects/Projects";
// import {Cvs} from "@/pages/Cvs/Cvs";
// import {Positions} from "@/pages/Positions/Positions";
// import {Skills} from "@/pages/Skills/Skills";
// import {Languages} from "@/pages/Languages/Languages";
// import {Departments} from "@/pages/Departments/Departments";
// import {CvsAccordion} from "@/pages/Profile/CvsAccordion/CvsAccordion";
// import {ProjectDetails} from "@/pages/Projects/ProjectDetails/ProjectDetails";
// import {CvProfile} from "@/pages/CvProfile/CvProfile";
// import {CvDetails} from "@/pages/CvProfile/CvDetails/CvDetails";
// import {CvProjects} from "@/pages/CvProfile/CvProjects/CvProjects";
// import {CvPreview} from "@/pages/CvProfile/CvPreview/CvPreview";
// import {ProfileSkills} from "@/pages/Profile/ProfileSkills/ProfileSkills";
// import {ProfileLanguages} from "@/pages/Profile/ProfileLanguages/ProfileLanguages";

const Employees = lazy(() => import("@/pages/Employees"));
const Profile = lazy(() => import("@/pages/Profile"));
const ProfileInfo = lazy(() => import("@/pages/Profile/ProfileInfo"));
const ProfileSkills = lazy(() => import("@/pages/Profile/ProfileSkills"));
const ProfileLanguages = lazy(() => import("@/pages/Profile/ProfileLanguages"));
const CvsAccordion = lazy(() => import("@/pages/Profile/CvsAccordion"));
const Projects = lazy(() => import("@/pages/Projects"));
const ProjectDetails = lazy(() => import("@/pages/Projects/ProjectDetails"));
const Positions = lazy(() => import("@/pages/Positions"));
const Cvs = lazy(() => import("@/pages/Cvs"));
const CvProfile = lazy(() => import("@/pages/CvProfile"));
const CvDetails = lazy(() => import("@/pages/CvProfile/CvDetails"));
const CvProjects = lazy(() => import("@/pages/CvProfile/CvProjects"));
const CvPreview = lazy(() => import("@/pages/CvProfile/CvPreview"));
const Departments = lazy(() => import("@/pages/Departments"));
const Skills = lazy(() => import("@/pages/Skills"));
const Languages = lazy(() => import("@/pages/Languages"));

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
