import {FC, useCallback} from "react";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";
import {LanguagesData} from "@/models/LanguagesData";

interface LanguagesRowControlMenuProps {
  id: LanguagesData["id"];
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
