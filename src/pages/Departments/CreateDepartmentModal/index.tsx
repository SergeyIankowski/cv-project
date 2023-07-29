import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {CreateDepartmentForm} from "@/pages/Departments/CreateDepartmentForm";

export const CreateDepartmentModal: FC = () => {
  const {t} = useTranslation();
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName={t("createDepartment")}>
        <CreateDepartmentForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
