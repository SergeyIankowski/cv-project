import {FC, useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";
import {Cv} from "@/graphql/interfaces/Cv.interface";
import {Pages} from "@/models/Pages";
import {useDeleteCvMutation} from "@/graphql/hooks/useDeleteCvMutation";
import {AuthInfoService} from "@/services/AuthInfoService";

interface CvsRowControlMenuProps {
  id: Cv["id"];
}

export const CvsRowControlMenu: FC<CvsRowControlMenuProps> = ({id}) => {
  const navigate = useNavigate();
  const {deleteCv} = useDeleteCvMutation();
  const data: TableRowControls = [
    {
      text: "CV",
      icon: "",
      clickCallback: useCallback(() => {
        navigate(`${id}/${Pages.main.details}`);
      }, []),
      disabled: false,
    },
    {
      text: "Delete CV",
      icon: "",
      clickCallback: useCallback(() => {
        deleteCv(id);
      }, []),
      disabled: AuthInfoService.isNotAdmin(),
    },
  ];
  return <RowControlMenuTemplate controlsData={data} />;
};
