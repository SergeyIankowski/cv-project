import {FC} from "react";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import {ModalLayout} from "@view/MuiPagesStyles";
import {UpdateProjectFormFields} from "@/models/UpdateProjectFormFields.type";
import {useUpdateProject} from "@/graphql/hooks/useUpdateProject";
import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {convertProjectDataForSend} from "@/utils/convertProjectDataForSend";
import {ProjectFormKeys} from "@/models/projectFormKeys";

interface UpdateProjectFormProps {
  data: UpdateProjectFormFields;
}

export const UpdateProjectForm: FC<UpdateProjectFormProps> = ({data}) => {
  const {id} = useParams();
  const {updateProject} = useUpdateProject();
  const {control, handleSubmit} = useForm<UpdateProjectFormFields>({
    defaultValues: {
      [ProjectFormKeys.name]: data.name,
      [ProjectFormKeys.internal_name]: data.internal_name,
      [ProjectFormKeys.description]: data.description,
      [ProjectFormKeys.domain]: data.domain,
      [ProjectFormKeys.start_date]: data.start_date,
      [ProjectFormKeys.end_date]: data.end_date,
      [ProjectFormKeys.team_size]: data.team_size,
    },
  });
  const onSubmit = (project: UpdateProjectFormFields) => {
    const dataForSend = convertProjectDataForSend(project);
    updateProject(id!, dataForSend);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input<UpdateProjectFormFields>
          control={control}
          type="text"
          id="name"
          label="Name"
          name="name"
        />
        <Input<UpdateProjectFormFields>
          control={control}
          type="text"
          id="internal_name"
          label="Internal Name"
          name="internal_name"
        />
        <Input<UpdateProjectFormFields>
          control={control}
          type="text"
          id="description"
          label="Description"
          name="description"
        />
        <Input<UpdateProjectFormFields>
          control={control}
          type="text"
          id="domain"
          label="Domain"
          name="domain"
        />
        <Input<UpdateProjectFormFields>
          control={control}
          type="date"
          id="start_date"
          label="Start Date"
          name="start_date"
        />
        <Input<UpdateProjectFormFields>
          control={control}
          type="date"
          id="end_date"
          label="End Date"
          name="end_date"
        />
        <Input<UpdateProjectFormFields>
          control={control}
          type="text"
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
