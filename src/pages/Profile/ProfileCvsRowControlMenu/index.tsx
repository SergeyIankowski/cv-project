import {FC, useCallback} from "react";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";
import {CvData} from "@/models/CvData";
import {useParams} from "react-router-dom";
import {AuthInfoService} from "@/services/AuthInfoService";
import {useUnbindCvMutation} from "@/graphql/hooks/useUnbindCvMutation";

interface ProfileCvsRowControlMenuProps {
  cvId: CvData["id"];
}

export const ProfileCvsRowControlMenu: FC<ProfileCvsRowControlMenuProps> = ({
  cvId,
}) => {
  const {id} = useParams();
  const {unbindCv} = useUnbindCvMutation();
  const data: TableRowControls = [
    {
      text: "Update CV",
      icon: "",
      clickCallback: useCallback(() => {}, []),
      disabled: !(
        AuthInfoService.isAdmin() || AuthInfoService.isAuthorizedUser(id!)
      ),
    },
    {
      text: "Unassign CV",
      icon: "",
      clickCallback: useCallback(() => unbindCv(cvId), []),
      disabled: !(
        AuthInfoService.isAdmin() || AuthInfoService.isAuthorizedUser(id!)
      ),
    },
  ];
  return <RowControlMenuTemplate controlsData={data} />;
};
