import {FC} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {CreateProjectForm} from "../CreateProjectForm";

export const CreateProjectModal: FC = () => {
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName="Create Project">
        <CreateProjectForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
