import GroupIcon from "@mui/icons-material/Group";
import {BreadCrumb} from "@/models/BreadCrumb.type";
import {FetchedUser} from "@/models/FetchedUser.type";
import {createBreadCrumb} from "./createBreadCrumb";

export const createUserBreadCrumb = (
  isNumber: boolean,
  called: boolean,
  loading: boolean,
  userData: FetchedUser,
  crumbs: BreadCrumb[],
  id: number,
  absolutePathForCrumb: string,
  loadDataCallback: (id: number) => void
) => {
  if (isNumber && !called) {
    loadDataCallback(id);
  }

  if (isNumber && called && !loading && userData) {
    const fullName = userData.profile.full_name;
    const email = userData.email;
    const initials = fullName ? fullName : email;
    const crumb = createBreadCrumb(
      initials,
      absolutePathForCrumb,
      <GroupIcon />
    );
    crumbs.push(crumb);
  }
};
