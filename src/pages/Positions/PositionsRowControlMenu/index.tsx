import {FC, useCallback, useContext} from "react";
import {useTranslation} from "react-i18next";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";
import {Position} from "@/graphql/interfaces/Position.interface";
import {AuthInfoService} from "@/services/AuthInfoService";
import {ModalTemplateContext} from "@/components/view/ModalTemplate/ModalTemplateContext";
import {useDeletePositionMutation} from "@/graphql/hooks/useDeletePositionMutation";

interface PositionsRowControlProps {
  id: Position["id"];
}

export const PositionsRowControl: FC<PositionsRowControlProps> = ({id}) => {
  const {openModal} = useContext(ModalTemplateContext);
  const {deletePosition} = useDeletePositionMutation();
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
      clickCallback: useCallback(async () => {
        deletePosition(id);
      }, []),
      disabled: AuthInfoService.isNotAdmin(),
    },
  ];
  return <RowControlMenuTemplate controlsData={data} />;
};
