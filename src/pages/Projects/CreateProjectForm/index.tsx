import {FC, useContext} from "react";
import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import dayjs from "dayjs";

import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";
import {ModalLayout} from "@view/MuiPagesStyles";
import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {SelectWithControl} from "@containers/SelectWithControl";
import {useCreateProjectMutation} from "@/graphql/hooks/useCreateProjectMutation";
import {useSkillsQuery} from "@/graphql/hooks/useSkillsQuery";
import {ProjectFormFields} from "@/models/FormFieldsTypes";
import {PROJECT_FORM_KEYS} from "@/models/FormKeysNames";
import {FIELDS_VALIDATION_MESSAGES} from "@/models/fieldsValidationMessages";
import {convertProjectDataForSend} from "@/utils/convertProjectDataForSend";
import {findNameByID} from "@/utils/findNameByID";
import {Skill} from "@/graphql/interfaces/Skill.interface";

export const CreateProjectForm: FC = () => {
  const {createProject} = useCreateProjectMutation();
  const {skills} = useSkillsQuery();
  const {closeModal} = useContext(ModalTemplateContext);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ProjectFormFields>({
    defaultValues: {
      [PROJECT_FORM_KEYS.start_date]: dayjs(),
      [PROJECT_FORM_KEYS.end_date]: dayjs(),
    },
  });
  const onSubmit = (project: ProjectFormFields) => {
    const dataForSend = convertProjectDataForSend(project);
    createProject(dataForSend);
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
          rules={{required: true}}
          error={Boolean(errors.name)}
          helperText={errors.name && FIELDS_VALIDATION_MESSAGES.emptyField}
        />
        <Input<ProjectFormFields>
          control={control}
          type="text"
          id="internal_name"
          label="Internal Name"
          name="internal_name"
          rules={{required: true}}
          error={Boolean(errors.name)}
          helperText={
            errors.internal_name && FIELDS_VALIDATION_MESSAGES.emptyField
          }
        />
        <Input<ProjectFormFields>
          control={control}
          type="text"
          id="description"
          label="Description"
          name="description"
          multiline
          rules={{required: true}}
          error={Boolean(errors.name)}
          helperText={
            errors.description && FIELDS_VALIDATION_MESSAGES.emptyField
          }
        />
        <Input<ProjectFormFields>
          control={control}
          type="text"
          id="domain"
          label="Domain"
          name="domain"
          rules={{required: true}}
          error={Boolean(errors.name)}
          helperText={errors.domain && FIELDS_VALIDATION_MESSAGES.emptyField}
        />
        <Input<ProjectFormFields>
          control={control}
          type="date"
          id="start_date"
          label="Start Date"
          name="start_date"
          required
        />
        <Input<ProjectFormFields>
          control={control}
          type="date"
          id="end_date"
          label="End Date"
          name="end_date"
          required
        />
        <Input<ProjectFormFields>
          control={control}
          type="number"
          id="team_size"
          label="Team Size"
          name="team_size"
          rules={{required: true}}
          error={Boolean(errors.name)}
          helperText={errors.team_size && FIELDS_VALIDATION_MESSAGES.emptyField}
        />
        <SelectWithControl<ProjectFormFields, Skill["id"][]>
          name="skillsIds"
          label="Skills"
          control={control}
          defaultValue={[]}
          renderValue={selected => (
            <Box sx={{display: "flex", flexWrap: "wrap", gap: 0.5}}>
              {selected.map(value => (
                <Chip key={value} label={findNameByID(skills, value)} />
              ))}
            </Box>
          )}
          required
        >
          {skills.map(skill => (
            <MenuItem key={skill.id} value={skill.id}>
              {skill.name}
            </MenuItem>
          ))}
        </SelectWithControl>
        <Button variant="contained" color="error" size="small" type="submit">
          Create
        </Button>
      </Box>
    </form>
  );
};
