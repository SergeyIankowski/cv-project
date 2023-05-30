import {BreadCrumb} from "@/models/BreadCrumb.type";
import {capitalize} from "@mui/material";
import {ReactNode} from "react";

export const createBreadCrumb: (
  text: string,
  path: string,
  icon?: ReactNode
) => BreadCrumb = (text, path, icon) => {
  return {
    text: capitalize(text),
    path,
    icon,
  };
};
