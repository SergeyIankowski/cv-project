import {FC, useCallback} from "react";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";

export const CvsRowControlMenu: FC = () => {
  const data: TableRowControls = [
    {
      text: "CV",
      icon: "",
      clickCallback: useCallback(() => {}, []),
      disabled: true,
    },
    {
      text: "Delete CV",
      icon: "",
      clickCallback: useCallback(() => {}, []),
      disabled: true,
    },
  ];
  return <RowControlMenuTemplate controlsData={data} />;
};
