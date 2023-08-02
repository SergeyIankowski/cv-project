import {FC, useCallback} from "react";
import {useTranslation} from "react-i18next";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";
import {useNavigate} from "react-router-dom";
import {FetchedProject} from "@/models/FetchedProject.interface";
import {AuthInfoService} from "@/services/AuthInfoService";
import {useDeleteProjectMutation} from "@/graphql/hooks/useDeleteProjectMutation";

interface ProjectsRowControlProps {
  id: FetchedProject["id"];
}

export const ProjectsRowControl: FC<ProjectsRowControlProps> = ({id}) => {
  const navigate = useNavigate();
  const {deleteProject} = useDeleteProjectMutation();
  const {t} = useTranslation();
  const data: TableRowControls = [
    {
      text: t("project"),
      icon: "",
      clickCallback: useCallback(() => {
        navigate(String(id));
      }, []),
      disabled: false,
    },
    {
      text: t("delete"),
      icon: "",
      clickCallback: useCallback(() => {
        deleteProject(id);
      }, []),
      disabled: AuthInfoService.isNotAdmin(),
    },
  ];
  return <RowControlMenuTemplate controlsData={data} />;
};
