import {FC, useCallback} from "react";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";
import {LanguagesTableData} from "@/models/LanguagesTableData.interface";

interface LanguagesRowControlMenuProps {
  id: LanguagesTableData["id"];
}

export const LanguagesRowControlMenu: FC<LanguagesRowControlMenuProps> = ({
  id,
}) => {
  const data: TableRowControls = [
    {
      text: "Update Language",
      icon: "",
      clickCallback: useCallback(() => {}, []),
      disabled: true,
    },
    {
      text: "Delete Language",
      icon: "",
      clickCallback: useCallback(() => {}, []),
      disabled: true,
    },
  ];
  return <RowControlMenuTemplate controlsData={data} />;
};
