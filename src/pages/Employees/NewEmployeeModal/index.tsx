import {ModalTemplate} from "@view/ModalTemplate";
import {EmployeeAddingForm} from "@/pages/Employees/EmployeeAddingForm";

export const NewEmployeeModal = () => {
  return (
    <ModalTemplate buttonName="Create Employee">
      <EmployeeAddingForm />
    </ModalTemplate>
  );
};
