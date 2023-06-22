import {FC, useCallback} from "react";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";
import {useNavigate} from "react-router-dom";
import {FetchedProject} from "@/models/FetchedProject";
import {AuthInfoService} from "@/services/AuthInfoService";
import {useDeleteProjectMutation} from "@/graphql/hooks/useDeleteProjectMutation";

interface ProjectsRowControlProps {
  id: FetchedProject["id"];
}

export const ProjectsRowControl: FC<ProjectsRowControlProps> = ({id}) => {
  const navigate = useNavigate();
  const {deleteProject} = useDeleteProjectMutation();
  const data: TableRowControls = [
    {
      text: "Project",
      icon: "",
      clickCallback: useCallback(() => {
        navigate(String(id));
      }, []),
      disabled: false,
    },
    {
      text: "Delete Project",
      icon: "",
      clickCallback: useCallback(() => {
        deleteProject(id);
      }, []),
      disabled: !AuthInfoService.isAdmin(),
    },
  ];
  return <RowControlMenuTemplate controlsData={data} />;
};
