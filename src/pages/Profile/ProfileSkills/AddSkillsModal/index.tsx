import {FC} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {UpdateSkillsForm} from "@/pages/Profile/ProfileSkills/UpdateSkillsForm";

export const AddSkillsModal: FC = () => {
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName="Add Skill">
        <UpdateSkillsForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
