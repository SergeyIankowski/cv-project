import {FC, useCallback} from "react";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";
import {LanguagesTableData} from "@/models/TableDataTypes";
import {useDeleteLanguageMutation} from "@/graphql/hooks/useDeleteLanguageMutation";
import {AuthInfoService} from "@/services/AuthInfoService";

interface LanguagesRowControlMenuProps {
  id: LanguagesTableData["id"];
}

export const LanguagesRowControlMenu: FC<LanguagesRowControlMenuProps> = ({
  id,
}) => {
  const {deleteLanguage} = useDeleteLanguageMutation();
  const data: TableRowControls = [
    {
      text: "Update",
      icon: "",
      clickCallback: useCallback(() => {}, []),
      disabled: AuthInfoService.isNotAdmin(),
    },
    {
      text: "Delete",
      icon: "",
      clickCallback: useCallback(async () => {
        await deleteLanguage(id);
      }, []),
      disabled: AuthInfoService.isNotAdmin(),
    },
  ];
  return <RowControlMenuTemplate controlsData={data} />;
};
