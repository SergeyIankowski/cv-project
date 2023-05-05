import {FC} from "react";
import {Outlet} from "react-router-dom";
import {ProfilePageLayout} from "@/components/containers/ProfilePageLayout/ProfilePageLayout";

export const Profile: FC = () => {
  return (
    <ProfilePageLayout>
      <Outlet />
    </ProfilePageLayout>
  );
};
