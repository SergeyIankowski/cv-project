import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {CreateSkillForm} from "@/pages/Skills/CreateSkillForm";

export const CreateSkillModal: FC = () => {
  const {t} = useTranslation();
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName={t("createSkill")}>
        <CreateSkillForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
