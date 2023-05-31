import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {BreadCrumbsData} from "@/models/BreadCrumbsData.type";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import {Pages} from "@/models/Pages";
import {useUserQuery} from "@/graphql/hooks/useUserQuery";
import {createBreadCrumb} from "@/utils/createBreadCrumb";

const rootBreadCrumbs: BreadCrumbsData = [
  {
    text: "Home",
    path: `${Pages.main.root}${Pages.main.employees}`,
    icon: <HomeIcon fontSize="small" />,
  },
];

export const useBreadCrumbs: () => BreadCrumbsData = () => {
  const {loadUserInfo, calledUserData, userData, loadingUserData} =
    useUserQuery();
  const {pathname} = useLocation();
  const [breadCrumbs, setBreadCrumbs] = useState<BreadCrumbsData>([]);

  useEffect(() => {
    const regExpForSeparating = /\/\w+/g;
    const names = pathname.match(regExpForSeparating);
    const crumbs = [...rootBreadCrumbs];

    if (names) {
      names.forEach((item, index, array) => {
        const textName = item.slice(1);
        const absolutePathForCrumb = array.slice(0, index + 1).join("");
        const isNumber = /^[0-9]+$/.test(textName);

        if (isNumber && !calledUserData) {
          loadUserInfo(Number(textName));
        }

        if (isNumber && calledUserData && !loadingUserData) {
          const firstName = userData.user.profile.first_name;
          const lastName = userData.user.profile.last_name;
          const initials = `${firstName} ${lastName}`;
          const crumb = createBreadCrumb(
            initials,
            absolutePathForCrumb,
            <GroupIcon />
          );
          crumbs.push(crumb);
          return;
        }

        const crumb = createBreadCrumb(textName, absolutePathForCrumb);
        crumbs.push(crumb);
      });

      setBreadCrumbs(crumbs);
    }
  }, [calledUserData, loadingUserData, userData, pathname]);
  return breadCrumbs;
};
