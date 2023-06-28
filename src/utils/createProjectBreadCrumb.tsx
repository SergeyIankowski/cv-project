import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import {FetchedProject} from "@/models/FetchedProject.interface";
import {createBreadCrumb} from "./createBreadCrumb";

export const createProjectBreadCrumb = (
  projectData: FetchedProject,
  absolutePathForCrumb: string
) => {
  const fullName = projectData.name;
  const crumb = createBreadCrumb(
    fullName,
    absolutePathForCrumb,
    <FolderCopyIcon />
  );
  return crumb;
};
