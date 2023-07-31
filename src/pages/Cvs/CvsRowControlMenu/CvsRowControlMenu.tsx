import {FC, useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";
import {Pages} from "@/models/Pages";
import {useDeleteCvMutation} from "@/graphql/hooks/useDeleteCvMutation";
import {AuthInfoService} from "@/services/AuthInfoService";
import {CvTableData} from "@/models/TableDataTypes";

interface CvsRowControlMenuProps {
  row: CvTableData;
}

export const CvsRowControlMenu: FC<CvsRowControlMenuProps> = ({row}) => {
  const navigate = useNavigate();
  const {deleteCv} = useDeleteCvMutation();
  const {t} = useTranslation();
  const data: TableRowControls = [
    {
      text: t("cv"),
      icon: "",
      clickCallback: useCallback(() => {
        navigate(`${row.id}/${Pages.main.details}`);
      }, []),
      disabled: false,
    },
    {
      text: t("delete"),
      icon: "",
      clickCallback: useCallback(() => {
        deleteCv(row.id);
      }, []),
      disabled:
        AuthInfoService.isNotAdmin() &&
        !AuthInfoService.isAuthorizedUserByEmail(row.userEmail),
    },
  ];
  return <RowControlMenuTemplate controlsData={data} />;
};
