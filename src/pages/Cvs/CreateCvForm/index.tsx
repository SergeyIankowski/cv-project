import {FC, useContext} from "react";
import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {ModalLayout} from "@view/MuiPagesStyles";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";
import {CreateCvFormFields} from "@/models/FormFieldsTypes/CreateCvFormFields";
import {FIELDS_VALIDATION_MESSAGES} from "@/models/fieldsValidationMessages";
import {useEmployeesQuery} from "@/graphql/hooks/useEmployeesQuery";
import {User} from "@/graphql/interfaces/User.interface";
import {useSkillsQuery} from "@/graphql/hooks/useSkillsQuery";
import {SelectWithControl} from "@containers/SelectWithControl";

export const CreateCvForm: FC = () => {
  const {closeModal} = useContext(ModalTemplateContext);
  const {skills} = useSkillsQuery();
  const {users} = useEmployeesQuery();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<CreateCvFormFields>({defaultValues: {is_template: false}});

  const onSubmit = async (data: CreateCvFormFields) => {
    console.log(data);
    closeModal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input<CreateCvFormFields>
          control={control}
          type="text"
          id="name"
          label="Name *"
          name="name"
          rules={{required: false}}
          error={Boolean(errors.name)}
          helperText={errors.name && FIELDS_VALIDATION_MESSAGES.emptyField}
        />
        <Input<CreateCvFormFields>
          control={control}
          type="text"
          id="description"
          label="Description *"
          name="description"
          rules={{required: false}}
          error={Boolean(errors.description)}
          helperText={errors.name && FIELDS_VALIDATION_MESSAGES.emptyField}
        />
        <Input<CreateCvFormFields>
          control={control}
          select
          id="userId"
          label="User"
          name="userId"
        >
          {users.map((user: User) => (
            <MenuItem key={user.email} value={user.id}>
              {user.email}
            </MenuItem>
          ))}
        </Input>
        <SelectWithControl<CreateCvFormFields>
          name="skills"
          control={control}
          defaultValue={[]}
          fields={skills}
        />
        <Input<CreateCvFormFields>
          control={control}
          type="checkbox"
          id="is_template"
          label="Template*"
          name="is_template"
        />
        <Button variant="contained" color="error" size="small" type="submit">
          Create Cv
        </Button>
      </Box>
    </form>
  );
};
