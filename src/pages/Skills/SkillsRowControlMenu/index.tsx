import {FC, useCallback, useContext} from "react";
import {useTranslation} from "react-i18next";
import {Skill} from "@/graphql/interfaces/Skill.interface";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";
import {AuthInfoService} from "@/services/AuthInfoService";
import {ModalTemplateContext} from "@/components/view/ModalTemplate/ModalTemplateContext";
import {useDeleteSkillMutation} from "@/graphql/hooks/useDeleteSkillMutation";

interface SkillsRowControlMenuProps {
  id: Skill["id"];
}

export const SkillsRowControlMenu: FC<SkillsRowControlMenuProps> = ({id}) => {
  const {deleteSkill} = useDeleteSkillMutation();
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
      clickCallback: useCallback(async () => {
        await deleteSkill(id);
      }, []),
      disabled: AuthInfoService.isNotAdmin(),
    },
  ];

  return <RowControlMenuTemplate controlsData={data} />;
};
