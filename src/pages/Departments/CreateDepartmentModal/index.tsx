import {FC} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {CreateDepartmentForm} from "@/pages/Departments/CreateDepartmentForm";

export const CreateDepartmentModal: FC = () => {
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName="Create Department">
        <CreateDepartmentForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
