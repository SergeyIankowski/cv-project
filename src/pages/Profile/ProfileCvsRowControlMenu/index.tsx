import {FC, useCallback} from "react";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";
import {CvData} from "@/models/CvData";

interface ProfileCvsRowControlMenuProps {
  id: CvData["id"];
}

export const ProfileCvsRowControlMenu: FC<ProfileCvsRowControlMenuProps> = ({
  id,
}) => {
  const data: TableRowControls = [
    {
      text: "Update CV",
      icon: "",
      clickCallback: useCallback(() => {}, []),
      disabled: true,
    },
    {
      text: "Unassign CV",
      icon: "",
      clickCallback: useCallback(() => {}, []),
      disabled: true,
    },
  ];
  return <RowControlMenuTemplate controlsData={data} />;
};
