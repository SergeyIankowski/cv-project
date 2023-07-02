import {FC} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {UpdateProjectForm} from "../UpdateProjectFrom";
import {ProjectFormFields} from "@/models/FormFieldsTypes";
import {ModalContextTemplateProvider} from "@/components/view/ModalTemplate/ModalTemplateContext";

interface UpdateProjectModal {
  projectData: ProjectFormFields;
}

export const UpdateProjectModal: FC<UpdateProjectModal> = ({projectData}) => {
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName="Update Project">
        <UpdateProjectForm data={projectData} />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
