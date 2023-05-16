import {Pages} from "@/models/Pages";
import {Page404} from "@/pages/Page404/Page404";
import {Navigate, Route, Routes} from "react-router-dom";
import {Employees} from "@/pages/Employees/Employees";
import {Profile} from "@/pages/Profile/Profile";
import {ProfileForm} from "@containers/ProfileForm/ProfileForm";
import {SignInForm} from "@containers/SignInForm/SignInForm";
import {Authentication} from "@/pages/Authentication/Authentication";
import {SignUpForm} from "@containers/SignUpForm/SignUpForm";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={Pages.main} element={<Navigate to={Pages.employees} />} />
      <Route path={Pages.employees} element={<Employees />} />
      <Route path={Pages.notFound} element={<Page404 />} />
      <Route path={Pages.info.root} element={<Profile />}>
        <Route index element={<Navigate to={Pages.info.profile} />}></Route>
        <Route path={Pages.info.profile} element={<ProfileForm />} />
        <Route path={Pages.info.skills} element={<></>} />
        <Route path={Pages.info.languages} element={<></>} />
        <Route path={Pages.info.cvs} element={<></>} />
      </Route>
      <Route path={Pages.auth.root} element={<Authentication />}>
        <Route index element={<Navigate to={Pages.auth.login} />} />
        <Route path={Pages.auth.login} element={<SignInForm />} />
        <Route path={Pages.auth.signup} element={<SignUpForm />} />
      </Route>
    </Routes>
  );
};
