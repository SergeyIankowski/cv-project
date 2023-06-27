import {ModalTemplate} from "@view/ModalTemplate";
import {EmployeeAddingForm} from "@/pages/Employees/EmployeeAddingForm";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";

export const NewEmployeeModal = () => {
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName="Create Employee">
        <EmployeeAddingForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
