import {FC, ReactNode, useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import {PageLayout} from "@view/PageLayout/PageLayout";
import {Pages} from "@/models/Pages";
import {BreadCrumbsData} from "@/models/BreadCrumbsData.type";
import {ProfileTabs} from "@containers/ProfileTabs/ProfileTabs";
import {useUserQuery} from "@/graphql/hooks/useUserQuery";
import {BreadCrumb} from "@/models/BreadCrumb.type";
import GroupIcon from "@mui/icons-material/Group";
import {capitalize} from "@mui/material";

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
  const {id} = useParams();
  const {pathname} = useLocation();

  const {loadUserInfo, calledUserData, loadingUserData, userData} =
    useUserQuery();
  const [breadCrumbsData, setBreadCrumbsData] = useState(breadCrumbs);
  useEffect(() => {
    loadUserInfo(id!);
  }, []);
  useEffect(() => {
    if (loadingUserData) return;
    if (calledUserData && userData) {
      const firstName = userData.user.profile.first_name;
      const lastName = userData.user.profile.last_name;
      const tabName = pathname.split("/").slice(-1).toString();

      const newBreadCrumbName: BreadCrumb = {
        text: `${firstName} ${lastName}`,
        icon: <GroupIcon />,
      };
      const newBreadCrumbTab: BreadCrumb = {
        text: capitalize(tabName),
      };

      const preparedBreadCrumbChain = [
        ...breadCrumbs,
        newBreadCrumbName,
        newBreadCrumbTab,
      ];
      setBreadCrumbsData(preparedBreadCrumbChain);
    }
  }, [loadingUserData, userData, calledUserData, pathname]);
  return (
    <PageLayout linksData={breadCrumbsData}>
      <ProfileTabs />
      {children}
    </PageLayout>
  );
};
