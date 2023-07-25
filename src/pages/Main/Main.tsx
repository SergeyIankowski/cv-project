import {FC, Suspense} from "react";
import {Outlet} from "react-router-dom";
import {PageLayout} from "@view/PageLayout/PageLayout";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";

export const Main: FC = () => {
  return (
    <PageLayout>
      <Suspense fallback={<ProgressSpinner />}>
        <Outlet />
      </Suspense>
    </PageLayout>
  );
};
