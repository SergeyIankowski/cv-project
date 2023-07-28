import {ModalTemplate} from "@view/ModalTemplate";
import {EmployeeAddingForm} from "@/pages/Employees/EmployeeAddingForm";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {useTranslation} from "react-i18next";

export const NewEmployeeModal = () => {
  const {t} = useTranslation();
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName={t("createEmployee")}>
        <EmployeeAddingForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
