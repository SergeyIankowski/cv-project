import {FC} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {UpdateProjectForm} from "../UpdateProjectFrom";
import {UpdatedProject} from "@/models/UpdatedProject.type";

interface UpdateProjectModal {
  projectData: UpdatedProject;
}

export const UpdateProjectModal: FC<UpdateProjectModal> = ({projectData}) => {
  return (
    <ModalTemplate buttonName="Update Project">
      <UpdateProjectForm data={projectData} />
    </ModalTemplate>
  );
};
