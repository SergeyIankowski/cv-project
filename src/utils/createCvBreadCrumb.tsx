import RememberMeIcon from "@mui/icons-material/RememberMe";
import {createBreadCrumb} from "./createBreadCrumb";
import {Cv} from "@/graphql/interfaces/Cv.interface";

export const createCvBreadCrumb = (
  cvData: Pick<Cv, "id" | "name" | "description" | "is_template">,
  absolutePathForCrumb: string
) => {
  const fullName = cvData.name;
  const crumb = createBreadCrumb(
    fullName,
    absolutePathForCrumb,
    <RememberMeIcon />
  );
  return crumb;
};
