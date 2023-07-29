import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ModalTemplate} from "@view/ModalTemplate";
import {UpdateProjectForm} from "@/pages/Projects/UpdateProjectForm";
import {ProjectFormFields} from "@/models/FormFieldsTypes";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";

interface UpdateProjectModal {
  projectData: ProjectFormFields;
}

export const UpdateProjectModal: FC<UpdateProjectModal> = ({projectData}) => {
  const {t} = useTranslation();
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName={t("updateProject")}>
        <UpdateProjectForm data={projectData} />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
