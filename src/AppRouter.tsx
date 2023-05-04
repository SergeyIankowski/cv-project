import {Pages} from "@/models/Pages";
import {Page404} from "@/pages/Page404/Page404";
import {SignIn} from "@/pages/SignIn/SignIn";
import {Navigate, Route, Routes} from "react-router-dom";
import {SignUp} from "./pages/SignUp/SignUp";
import {Employees} from "./pages/Employees/Employees";
import {Profile} from "./pages/Profile/Profile";
import {ProfileForm} from "./components/containers/ProfileForm/ProfileForm";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={Pages.main} element={<Navigate to={Pages.employees} />} />
      <Route path={Pages.login} element={<SignIn />} />
      <Route path={Pages.signup} element={<SignUp />} />
      <Route path={Pages.employees} element={<Employees />} />
      <Route path={Pages.notFound} element={<Page404 />} />
      <Route path={Pages.info.root} element={<Profile />}>
        <Route index element={<Profile />}></Route>
        <Route path={Pages.info.profile} element={<ProfileForm />} />
        <Route path={Pages.info.skills} element={<></>} />
        <Route path={Pages.info.languages} element={<></>} />
        <Route path={Pages.info.cvs} element={<></>} />
      </Route>
    </Routes>
  );
};
