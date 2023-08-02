import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {UpdateSkillsForm} from "@/pages/Profile/ProfileSkills/UpdateSkillsForm";

export const AddSkillsModal: FC = () => {
  const {t} = useTranslation();
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName={t("addSkill")}>
        <UpdateSkillsForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
