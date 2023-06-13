import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {BreadCrumbsData} from "@/models/BreadCrumbsData.type";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import {Pages} from "@/models/Pages";
import {createBreadCrumb} from "@/utils/createBreadCrumb";
import {useUserData} from "./useUserData";

const rootBreadCrumbs: BreadCrumbsData = [
  {
    text: "Home",
    path: `${Pages.main.root}${Pages.main.employees}`,
    icon: <HomeIcon fontSize="small" />,
  },
];

export const useBreadCrumbs: () => BreadCrumbsData = () => {
  const {id} = useParams();
  const {loadProfileInfo, called, userData, loadingUserData} = useUserData(id!);
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

        if (isNumber && !called) {
          loadProfileInfo(Number(textName));
        }

        if (isNumber && called && !loadingUserData) {
          const firstName = userData.profile.first_name;
          const lastName = userData.profile.last_name;
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
  }, [called, loadingUserData, userData, pathname]);
  return breadCrumbs;
};
