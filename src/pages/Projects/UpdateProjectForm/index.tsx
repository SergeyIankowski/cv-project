import {FC, useContext} from "react";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import {ModalLayout} from "@view/MuiPagesStyles";
import {ProjectFormFields} from "@/models/FormFieldsTypes";
import {useUpdateProject} from "@/graphql/hooks/useUpdateProject";
import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {convertProjectDataForSend} from "@/utils/convertProjectDataForSend";
import {PROJECT_FORM_KEYS} from "@/models/FormKeysNames";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";

interface UpdateProjectFormProps {
  data: ProjectFormFields;
}

export const UpdateProjectForm: FC<UpdateProjectFormProps> = ({data}) => {
  const {id} = useParams();
  const {updateProject} = useUpdateProject();
  const {closeModal} = useContext(ModalTemplateContext);
  const {control, handleSubmit} = useForm<ProjectFormFields>({
    defaultValues: {
      [PROJECT_FORM_KEYS.name]: data.name,
      [PROJECT_FORM_KEYS.internal_name]: data.internal_name,
      [PROJECT_FORM_KEYS.description]: data.description,
      [PROJECT_FORM_KEYS.domain]: data.domain,
      [PROJECT_FORM_KEYS.start_date]: data.start_date,
      [PROJECT_FORM_KEYS.end_date]: data.end_date,
      [PROJECT_FORM_KEYS.team_size]: data.team_size,
    },
  });
  const onSubmit = (project: ProjectFormFields) => {
    const dataForSend = convertProjectDataForSend(project);
    updateProject(id!, dataForSend);
    closeModal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input<ProjectFormFields>
          control={control}
          type="text"
          id="name"
          label="Name"
          name="name"
        />
        <Input<ProjectFormFields>
          control={control}
          type="text"
          id="internal_name"
          label="Internal Name"
          name="internal_name"
        />
        <Input<ProjectFormFields>
          control={control}
          type="text"
          id="description"
          multiline
          label="Description"
          name="description"
        />
        <Input<ProjectFormFields>
          control={control}
          type="text"
          id="domain"
          label="Domain"
          name="domain"
        />
        <Input<ProjectFormFields>
          control={control}
          type="date"
          id="start_date"
          label="Start Date"
          name="start_date"
        />
        <Input<ProjectFormFields>
          control={control}
          type="date"
          id="end_date"
          label="End Date"
          name="end_date"
        />
        <Input<ProjectFormFields>
          control={control}
          type="number"
          id="team_size"
          label="Team Size"
          name="team_size"
        />
        <Button variant="contained" color="error" size="small" type="submit">
          Update
        </Button>
      </Box>
    </form>
  );
};
