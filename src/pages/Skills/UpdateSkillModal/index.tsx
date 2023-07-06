import {FC, ReactNode} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {Skill} from "@/graphql/interfaces/Skill.interface";
import {UpdateSkillForm} from "../UpdateSkillForm";

interface UpdateSkillModalProps {
  id: Skill["id"];
  name: Skill["name"];
  children: ReactNode;
}

export const UpdateSkillModal: FC<UpdateSkillModalProps> = ({
  id,
  name,
  children,
}) => {
  return (
    <ModalContextTemplateProvider>
      {children}
      <ModalTemplate>
        <UpdateSkillForm id={id} name={name} />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
