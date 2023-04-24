import {FC} from "react";
import {NavLink} from "react-router-dom";
import Box from "@mui/material/Box";
import {BreadCrumb} from "@/models/BreadCrumb.type";
import {BreadCrumbLayout} from "./BreadCrumbStyle";
import classes from "./breadCrumb.module.scss";

export const BreadCrumbItem: FC<BreadCrumb> = ({text, path, icon}) => {
  return (
    <Box sx={BreadCrumbLayout}>
      {icon}
      <NavLink className={classes.breadCrumbLink} to={path}>
        {text}
      </NavLink>
    </Box>
  );
};
