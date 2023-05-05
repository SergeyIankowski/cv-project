import {FC, ReactNode} from "react";
import HomeIcon from "@mui/icons-material/Home";
import {PageLayout} from "@view/PageLayout/PageLayout";
import {Pages} from "@/models/Pages";
import {BreadCrumbsData} from "@/models/BreadCrumbsData.type";
import {ProfileTabs} from "@containers/ProfileTabs/ProfileTabs";

interface ProfileLayoutProps {
  children: ReactNode;
}

const breadCrumbs: BreadCrumbsData = [
  {
    text: "Home",
    path: Pages.main,
    icon: <HomeIcon fontSize="small" />,
  },
  {text: "Employees", path: Pages.employees},
];

export const ProfilePageLayout: FC<ProfileLayoutProps> = ({children}) => {
  return (
    <PageLayout linksData={breadCrumbs}>
      <ProfileTabs />
      {children}
    </PageLayout>
  );
};
