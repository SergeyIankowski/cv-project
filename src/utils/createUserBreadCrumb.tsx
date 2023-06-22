import GroupIcon from "@mui/icons-material/Group";
import {FetchedUser} from "@/models/FetchedUser.type";
import {createBreadCrumb} from "./createBreadCrumb";

export const createUserBreadCrumb = (
  userData: FetchedUser,
  absolutePathForCrumb: string
) => {
  const fullName = userData.profile.full_name;
  const email = userData.email;
  const initials = fullName ? fullName : email;
  const crumb = createBreadCrumb(initials, absolutePathForCrumb, <GroupIcon />);
  return crumb;
};
