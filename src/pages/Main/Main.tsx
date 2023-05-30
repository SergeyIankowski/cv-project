import {FC} from "react";
import {Outlet} from "react-router-dom";
import {PageLayout} from "@/components/view/PageLayout/PageLayout";

export const Main: FC = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};
