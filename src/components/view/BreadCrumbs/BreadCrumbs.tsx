import {FC} from "react";
import {BreadCrumbsStyle} from "../MuiPagesStyles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {BreadCrumbItem} from "@view/BreadCrumbItem/BreadCrumbItem";
import {useBreadCrumbs} from "@/hooks/useBreadCrumbs";

export const BreadCrumbs: FC = () => {
  const breadCrumbs = useBreadCrumbs();
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      sx={BreadCrumbsStyle}
    >
      {breadCrumbs.map(data => (
        <BreadCrumbItem
          path={data.path}
          text={data.text}
          icon={data.icon}
          key={data.text}
        />
      ))}
    </Breadcrumbs>
  );
};
