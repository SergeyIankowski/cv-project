import {FC} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {CreateProjectForm} from "../CreateProjectForm";
import {useTranslation} from "react-i18next";

export const CreateProjectModal: FC = () => {
  const {t} = useTranslation();
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName={t("createProject")}>
        <CreateProjectForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
