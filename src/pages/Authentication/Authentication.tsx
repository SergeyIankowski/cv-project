import {AuthPageLayout} from "@containers/AuthPageLayout/AuthPageLayout";
import {FC} from "react";
import {Outlet} from "react-router-dom";

export const Authentication: FC = () => {
  return (
    <AuthPageLayout>
      <Outlet />
    </AuthPageLayout>
  );
};
