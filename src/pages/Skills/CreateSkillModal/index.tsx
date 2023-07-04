import {FC} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {CreateSkillForm} from "@/pages/Skills/CreateSkillForm";

export const CreateSkillModal: FC = () => {
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName="Create Skill">
        <CreateSkillForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
