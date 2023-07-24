import {FC} from "react";
import {Outlet} from "react-router-dom";
import {CvsTabs} from "@/pages/Cvs/CvsTabs";

export const CvProfile: FC = () => {
  return (
    <>
      <CvsTabs />
      <Outlet />
    </>
  );
};
