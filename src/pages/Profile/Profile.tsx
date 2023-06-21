import {FC} from "react";
import {Outlet} from "react-router-dom";
import {ProfileTabs} from "@containers/ProfileTabs/ProfileTabs";

export const Profile: FC = () => {
  return (
    <>
      <ProfileTabs />
      <Outlet />
    </>
  );
};
