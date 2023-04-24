import {FC} from "react";
import HomeIcon from "@mui/icons-material/Home";
import {PageLayout} from "@/components/view/PageLayout/PageLayout";
import {BreadCrumbsData} from "@/models/BreadCrumbsData.type";
import {Pages} from "@/models/Pages";

const breadCrumbs: BreadCrumbsData = [
  {
    text: "Home",
    path: Pages.main,
    icon: <HomeIcon fontSize="small" />,
  },
  {text: "Login", path: Pages.login},
];

export const Employees: FC = () => {
  return <PageLayout linksData={breadCrumbs}>Some Children</PageLayout>;
};
