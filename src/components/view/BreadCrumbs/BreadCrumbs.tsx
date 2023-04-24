import {FC} from "react";
import {BreadCrumbsStyle} from "../MuiPagesStyles";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {BreadCrumbsData} from "@/models/BreadCrumbsData.type";
import {BreadCrumbItem} from "@view/BreadCrumbItem/BreadCrumbItem";

interface BreadCrumbsProps {
  breadCrumbsLinks: BreadCrumbsData;
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({breadCrumbsLinks}) => {
  return (
    <Container disableGutters={true}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        sx={BreadCrumbsStyle}
      >
        {breadCrumbsLinks.map(data => (
          <BreadCrumbItem
            path={data.path}
            text={data.text}
            icon={data.icon}
            key={data.text}
          />
        ))}
      </Breadcrumbs>
    </Container>
  );
};
