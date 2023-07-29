import {FC, useCallback, useContext} from "react";
import {useTranslation} from "react-i18next";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";
import {LanguagesTableData} from "@/models/TableDataTypes";
import {useDeleteLanguageMutation} from "@/graphql/hooks/useDeleteLanguageMutation";
import {AuthInfoService} from "@/services/AuthInfoService";
import {ModalTemplateContext} from "@/components/view/ModalTemplate/ModalTemplateContext";

interface LanguagesRowControlMenuProps {
  id: LanguagesTableData["id"];
}

export const LanguagesRowControlMenu: FC<LanguagesRowControlMenuProps> = ({
  id,
}) => {
  const {deleteLanguage} = useDeleteLanguageMutation();
  const {openModal: openUpdateModal} = useContext(ModalTemplateContext);
  const {t} = useTranslation();
  const data: TableRowControls = [
    {
      text: t("update"),
      icon: "",
      clickCallback: useCallback(() => {
        openUpdateModal();
      }, []),
      disabled: AuthInfoService.isNotAdmin(),
    },
    {
      text: t("delete"),
      icon: "",
      clickCallback: useCallback(async () => {
        await deleteLanguage(id);
      }, []),
      disabled: AuthInfoService.isNotAdmin(),
    },
  ];
  return <RowControlMenuTemplate controlsData={data} />;
};
