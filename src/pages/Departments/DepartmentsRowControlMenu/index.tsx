import {FC, useCallback, useContext} from "react";
import {useTranslation} from "react-i18next";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";
import {Department} from "@/graphql/interfaces/Department.interface";
import {useDeleteDepartment} from "@/graphql/hooks/useDeleteDepartment";
import {AuthInfoService} from "@/services/AuthInfoService";
import {ModalTemplateContext} from "@/components/view/ModalTemplate/ModalTemplateContext";

interface DepartmentsRowControlProps {
  id: Department["id"];
}

export const DepartmentsRowControl: FC<DepartmentsRowControlProps> = ({id}) => {
  const {deleteDepartment} = useDeleteDepartment();
  const {openModal} = useContext(ModalTemplateContext);
  const {t} = useTranslation();
  const data: TableRowControls = [
    {
      text: t("update"),
      icon: "",
      clickCallback: useCallback(() => {
        openModal();
      }, []),
      disabled: AuthInfoService.isNotAdmin(),
    },
    {
      text: t("delete"),
      icon: "",
      clickCallback: useCallback(() => {
        deleteDepartment(id);
      }, []),
      disabled: AuthInfoService.isNotAdmin(),
    },
  ];

  return <RowControlMenuTemplate controlsData={data} />;
};
