import {FC, useCallback} from "react";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";

export const ProjectsRowControl: FC = () => {
  const data: TableRowControls = [
    {
      text: "Project",
      icon: "",
      clickCallback: useCallback(() => {}, []),
    },
    {
      text: "Delete Project",
      icon: "",
      clickCallback: useCallback(() => {}, []),
    },
  ];
  return <RowControlMenuTemplate controlsData={data} />;
};
