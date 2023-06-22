import {FC, useCallback} from "react";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";
import {useNavigate} from "react-router-dom";
import {FetchedProject} from "@/models/FetchedProject";

interface ProjectsRowControlProps {
  id: FetchedProject["id"];
}

export const ProjectsRowControl: FC<ProjectsRowControlProps> = ({id}) => {
  const navigate = useNavigate();
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
      clickCallback: useCallback(() => {}, []),
      disabled: true,
    },
  ];
  return <RowControlMenuTemplate controlsData={data} />;
};
