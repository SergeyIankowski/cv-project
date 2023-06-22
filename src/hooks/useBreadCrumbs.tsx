import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {BreadCrumbsData} from "@/models/BreadCrumbsData.type";
import HomeIcon from "@mui/icons-material/Home";
import {Pages} from "@/models/Pages";
import {createBreadCrumb} from "@/utils/createBreadCrumb";
import {createUserBreadCrumb} from "@/utils/createUserBreadCrumb";
import {createProjectBreadCrumb} from "@/utils/createProjectBreadCrumb";
import {useProjectQuery} from "@/graphql/hooks/useProjectQuery";
import {splitUrl} from "@/utils/splitUrl";
import {useUserQuery} from "@/graphql/hooks/useUserQuery";

const rootBreadCrumbs: BreadCrumbsData = [
  {
    text: "Home",
    path: `${Pages.main.root}${Pages.main.employees}`,
    icon: <HomeIcon fontSize="small" />,
  },
];

export const useBreadCrumbs: () => BreadCrumbsData = () => {
  const {id} = useParams();
  const {pathname} = useLocation();
  const {loadUserInfo, userData} = useUserQuery();
  const {loadProjectInfo, projectData} = useProjectQuery();
  const [breadCrumbs, setBreadCrumbs] = useState<BreadCrumbsData>([]);

  useEffect(() => {
    const {pageName} = splitUrl(pathname);
    if (pageName === Pages.main.employees && id) {
      loadUserInfo(id!);
    }
    if (pageName === Pages.main.projects && id) {
      loadProjectInfo(id!);
    }
  }, [pathname]);

  useEffect(() => {
    const {pathChunks, pageName} = splitUrl(pathname);
    const crumbs = [...rootBreadCrumbs];

    if (!pathChunks) return;
    pathChunks.forEach((item, index, array) => {
      const textName = item.slice(1);
      const absolutePathForCrumb = array.slice(0, index + 1).join("");
      const isNumber = /^[0-9]+$/.test(textName);

      if (pageName === Pages.main.employees && isNumber && userData) {
        const crumb = createUserBreadCrumb(userData.user, absolutePathForCrumb);
        crumbs.push(crumb);
        return;
      }
      if (pageName === Pages.main.projects && isNumber && projectData) {
        const crumb = createProjectBreadCrumb(
          projectData.project,
          absolutePathForCrumb
        );
        crumbs.push(crumb);
        return;
      }

      const crumb = createBreadCrumb(textName, absolutePathForCrumb);
      crumbs.push(crumb);
    });

    setBreadCrumbs(crumbs);
  }, [userData, projectData]);
  return breadCrumbs;
};
