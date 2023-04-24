import {PageLayout} from "@/components/view/PageLayout/PageLayout";
import {BreadCrumbsData} from "@/models/BreadCrumbsData.type";
import HomeIcon from "@mui/icons-material/Home";
import {Pages} from "@/models/Pages";
import {FC} from "react";

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
