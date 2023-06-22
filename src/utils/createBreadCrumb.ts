import {BreadCrumb} from "@/models/BreadCrumb.type";
import {ReactNode} from "react";
import {capitalize} from "./capitalize";

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
