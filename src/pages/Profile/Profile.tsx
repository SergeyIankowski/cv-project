import {FC} from "react";
import {Outlet} from "react-router-dom";
import {ProfileTabs} from "@/pages/Profile/ProfileTabs/ProfileTabs";

export const Profile: FC = () => {
  return (
    <>
      <ProfileTabs />
      <Outlet />
    </>
  );
};
