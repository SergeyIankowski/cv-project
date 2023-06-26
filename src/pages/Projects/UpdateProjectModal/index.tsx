import {FC} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {UpdateProjectForm} from "../UpdateProjectFrom";
import {UpdateProjectFormFields} from "@/models/FormFieldsTypes/UpdateProjectFormFields.type";

interface UpdateProjectModal {
  projectData: UpdateProjectFormFields;
}

export const UpdateProjectModal: FC<UpdateProjectModal> = ({projectData}) => {
  return (
    <ModalTemplate buttonName="Update Project">
      <UpdateProjectForm data={projectData} />
    </ModalTemplate>
  );
};
