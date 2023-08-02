import {FC} from "react";
import {BreadCrumbsStyle} from "../MuiPagesStyles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {BreadCrumbItem} from "@view/BreadCrumbItem/BreadCrumbItem";
import {useBreadCrumbs} from "@/hooks/useBreadCrumbs";
import {useTranslation} from "react-i18next";

export const BreadCrumbs: FC = () => {
  const breadCrumbs = useBreadCrumbs();
  const {t} = useTranslation();
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      sx={BreadCrumbsStyle}
    >
      {breadCrumbs.map(data => (
        <BreadCrumbItem
          path={data.path}
          text={t(data.text.toLowerCase())}
          icon={data.icon}
          key={data.text}
        />
      ))}
    </Breadcrumbs>
  );
};
