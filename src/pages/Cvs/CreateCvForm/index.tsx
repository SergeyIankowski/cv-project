import {FC, useContext} from "react";
import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {ModalLayout} from "@view/MuiPagesStyles";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";
import {CreateCvFormFields} from "@/models/FormFieldsTypes";
import {FIELDS_VALIDATION_MESSAGES} from "@/models/fieldsValidationMessages";
import {useEmployeesQuery} from "@/graphql/hooks/useEmployeesQuery";
import {User} from "@/graphql/interfaces/User.interface";
import {useCreateCv} from "@/graphql/hooks/useCreateCv";
import {useUserQuery} from "@/graphql/hooks/useUserQuery";
import {addSkillsAndLanguagesToNewCv} from "@/utils/addSkillsAndLanguagesToNewCv";

export const CreateCvForm: FC = () => {
  const {closeModal} = useContext(ModalTemplateContext);
  const {users} = useEmployeesQuery();
  const {loadUserInfo} = useUserQuery();
  const {createCv} = useCreateCv();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<CreateCvFormFields>({
    defaultValues: {
      is_template: false,
    },
  });

  const onSubmit = async (data: CreateCvFormFields) => {
    const res = await loadUserInfo(data.userId!);
    const dataForSend = addSkillsAndLanguagesToNewCv(res.data.user, data);
    await createCv(dataForSend);
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
          rules={{required: true}}
          error={Boolean(errors.name)}
          helperText={errors.name && FIELDS_VALIDATION_MESSAGES.emptyField}
        />
        <Input<CreateCvFormFields>
          control={control}
          type="text"
          id="description"
          label="Description *"
          name="description"
          rules={{required: true}}
          error={Boolean(errors.description)}
          helperText={
            errors.description && FIELDS_VALIDATION_MESSAGES.emptyField
          }
        />
        <Input<CreateCvFormFields>
          control={control}
          select
          id="userId"
          label="User"
          name="userId"
          rules={{required: true}}
          error={Boolean(errors.userId)}
          helperText={errors.userId && FIELDS_VALIDATION_MESSAGES.emptyField}
        >
          {users.map((user: User) => (
            <MenuItem key={user.email} value={user.id}>
              {user.email}
            </MenuItem>
          ))}
        </Input>
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
